var mysql = require('mysql');
//var prompt = require('prompt');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Zamperini77',
  database: 'Bamazon'
});

function viewProducts() {
  connection.query('SELECT * FROM products',
     function(err, res) {
       if(err) throw err;
       for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price + "|" + res[i].stockQuantity);
      }
     });
}

function viewLow() {
  connection.query('SELECT * FROM products WHERE stockQuantity < 6',
     function(err, res) {
       if(err) throw err;
       for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price + "|" + res[i].stockQuantity);
      }
     });
}

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
    console.log('id to be added to: '+ id);
    console.log("number to add:"+user.numAdded);
    connection.query('SELECT stockQuantity FROM products WHERE id = ' + user.idSelected, function(err, res) {
    if (err) throw err;
    currentQuantity = res[0].stockQuantity;
    console.log("current q:"+ currentQuantity);
  }).then(function(){
    connection.query("UPDATE products SET ? WHERE ?", [{
      stockQuantity: (currentQuantity + user.numAdded)
    }, {
          id: id
      }], function(err, res) {});
    });
  });
}

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
    
    });
  });
}

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
