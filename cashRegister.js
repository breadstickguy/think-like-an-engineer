/*	The Cash Register Exercise!
*
*
*	Your mission is to build a command line JavaScript Cash Register from scratch. Here are the rules:
*	- Follow all the principles in thinking.js
*	- You may choose to build a UI, but it is not neccesary
* 	- Try to use as few outside libraries/NPM packages as possible. Try to accomplish this on your own
*	- This should take 2-3 hours to complete as a baseline. If you spend more than 5 on it, pause,
*	 ask for help during office hours and we can look at your plan/implementation together.
*
*
*	Requirements:
*	
*	Your Cash Register must be able to keep track of your inventory of items
*	Your Cash Register must allow users to sell items to customers
*		- You can have more than one item in a transaction
*		- You can buy multiples of the same item in a transaction
*	Your Cash Register must allow users to return items from customers
*		- You can return more than one item at a time
*		- You can return multiple types of items in a single transaction
*	Your Cash Register must allow users to print out all the current inventory/prices of your items
*
*
*
*	If you wish to extend the functionality of this application, here are some suggestions:
*		- Allow users to create new types of items
*		- Allow users to update prices/names of items
*		- Implement a MySQL database for your app
*		- Implement a GUI (graphical user interface) for your app
*
*	Good Luck! Below you will find your starting data!
*
*/


var data = [
	{ item: 'Sandwich', price: 8, inventory: 1 },
	{ item: 'Soda', price: 0.5, inventory: 2 },
	{ item: 'Big Sandwich', price:12 , inventory: 7 },
	{ item: 'Bacon', price: 2.5, inventory: 10 },
	{ item: 'Tacos', price: 3, inventory: 8 },
	{ item: 'Pancakes', price: 4, inventory: 6 },
	{ item: 'Waffles', price: 6, inventory: 5 },
];