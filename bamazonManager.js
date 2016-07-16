var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Zamperini77',
  database: 'Bamazon'
});

//function to be called when the user wants to view the full inventory
function viewProducts() {
  connection.query('SELECT * FROM products',
     function(err, res) {
       if(err) throw err;
       console.log('\n');
       console.log('ID | Product Name | Department | Price | quantity in stock');
       for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price + " | " + res[i].stockQuantity);
      }
      startPrompt();
     });
}
//function to be called to view the low inventory
function viewLow() {
  connection.query('SELECT * FROM products WHERE stockQuantity < 6',
     function(err, res) {
       if(err) throw err;
       console.log("\n");
       for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price + " | " + res[i].stockQuantity);
      }
      startPrompt();
     });
}
//function to replinish stock of a selected item
function addMore() {
  inquirer.prompt([
    {
      type: 'input',
      message: "Enter the id of the item you want to add more of: ",
      name: "idSelected"
    },
    {
      type: 'input',
      message: "How many do you want to add?",
      name: 'numAdded'
    }
  ]).then(function(user){
    var id = user.idSelected;
    var currentQuantity;
    var quantAdded;
    connection.query('SELECT stockQuantity FROM products WHERE id = ' + user.idSelected, function(err, res) {
    if (err) throw err;
    currentQuantity = res[0].stockQuantity;
    quantAdded = parseInt(currentQuantity)+ parseInt(user.numAdded);
    connection.query("UPDATE products SET ? WHERE ?", [{
      stockQuantity: quantAdded,
    },{
          id: id
      }
    ], function(err, res) {
        if(err) throw err;
        console.log("quantity added");
        viewProducts();
      });
    });

  });
}
//function to add another item to the table
function addItem() {
  inquirer.prompt([
    {
      type: 'input',
      message: "name of item to add?: ",
      name: 'name',
    },
    {
      type: 'input',
      message: 'department of the item to add?: ',
      name: 'department'
    },
    {
      type: 'input',
      message: 'price of the item to add?: ',
      name: 'price'
    },
    {
      type: 'input',
      message: 'how many of this item is being added?: ',
      name: 'amount',
    }
  ]).then(function(user){
    connection.query("INSERT INTO products SET ?", {
    productName: user.name,
    departmentName: user.department,
    price: user.price,
    stockQuantity: user.amount,
    }, function(err, res) {
      viewProducts();
    });
  });
}
//Starting function to ask the user which option they want to go with
function startPrompt(){
  inquirer.prompt([{
    type: 'list',
    message: 'what do you want to do?',
    choices: ["view products for sale", "view low inventory", "add to inventory", "add new product"],
    name: "option"
  }]).then(function(user){
    if (user.option == "view products for sale"){
      viewProducts();
    }
    else if (user.option == "view low inventory"){
      viewLow();
    }
    else if (user.option == "add to inventory"){
      addMore();
    }
    else if (user.option == "add new product"){
      addItem();
    }
  });
}
startPrompt();
