# Bamazon Node App
Node.js and mySQL based storefront
#### To run this app first clone the repo and then install the dependencies.
#### To use bamazon as a customer navigate to the Bamazon directory and then type ```node bamazonCustomer.js``` in your command line.
##### When you run bamazonCustomer.js first it will display a table of the current stock. You are then prompted to enter an item id to buy. After entering an item ID you must then enter the quantity you wish to purchase of the item. See below screenshots:
![alt text](customer1.png "First prompt of bamazonCustomer")
![alt text](customer2.png "After selecting an item in bamazonCustomer")

#### To use bamazon as a manager navigate to the bamazon directory and then type ```node bamazonManager.js``` in your command line.
##### When you run bamazonManager.js you are first prompted to view products, view low inventory, add to inventory, or add new product.
![alt text](manager1.png "Original prompt in bamazonManager")
##### If the manager selects view products they are shown a table of the entire inventory.
![alt text](manager2.png "View products in bamazonManager")
##### If the manager selects view low inventory then they are shown a table of just the inventory that currently has less than 5 in stock.
![alt text](ManagerViewLow.png "Original prompt in bamazonManager")
##### If the manager selects add to inventory then first they are prompted to pick the id of the item they wish to restock
![alt text](managerRestock1.png "ask user id of item they want to restock")
##### The manager is then prompted how many they want to add of the selected item.
![alt text](managerRestock2.png "ask the manager how many they want to add")
##### The manager is then shown the inventory of products with the updated quantity.
![alt text](managerRestockFinal.png "show the manager the updated inventory table")
##### If the manager selects to add an item they are asked to enter the name of the item, the department of the item, the price of the item, and how many of the  item is being added.
![alt text](managerAddItem.png "adding an item")
