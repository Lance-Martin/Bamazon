var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Zamperini77',
  database: 'Bamazon'
});

var id;
var quantity;


function showTable(){
  connection.query('SELECT * FROM products',
     function(err, res) {
       if(err) throw err;
       console.log("\n");
       console.log('ID    | Product Name | Department | Price | quantity in stock');
       for (var i = 0; i < res.length; i++) {
          console.log("ID: "+res[i].id + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price + " | " + res[i].stockQuantity);
      }
    });
 }
showTable();
inquirer.prompt([
  {
    type: "input",
    message: "What is the id of the item you would like to purchase?",
    name: "idSelected",
  },
  {
    type: "input",
    message: "How many of this product do you want to buy?",
    name: "quantity",
  }
]).then(function(user){
    id = user.idSelected;
    quantity = user.quantity;
    console.log(quantity);
    connection.query('SELECT stockQuantity, productName, price FROM products WHERE id = '+id,
      function(err, res) {
        if(err) throw err;
        if (res[0].stockQuantity < quantity) {
          console.log('Sorry you selected more than we have in stock');
        } else {
          connection.query("UPDATE products SET ? WHERE ?", [{
            stockQuantity: res[0].stockQuantity - quantity
          }, {
                id: id
            }], function(err, res) {});
          console.log("You owe: $" + (res[0].price*quantity) + " for " + quantity + " " + res[0].productName );
          (console.log('Products Updated'));
          showTable();
        }

    });
});
