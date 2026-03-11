//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var freeShippingCost = 35;
var cartItems= [];
var total =0; 


//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < freeShippingCost) {
	var itemCost = prompt("Enter the cost of an item ");
	//CONVERT USER INPUT TO A NUMBER
	var cost = parseInt(itemCost);
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total += cost;
	//PUSH ITEM COST TO CART ARRAY
	cartItems.push(cost);

}

//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + cartItems.join(" | "));
	
	
	
	
	
	
	
	
	


//SEND POPUP MESSAGE TO USER


//SEND OUTPUT TO CONSOLE

