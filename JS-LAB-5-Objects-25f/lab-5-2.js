//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//Create a JavaScript object to represent a bank customer.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!

// Use this new method to add interest to the bank customer account, after
// your deposit and withdrawal calls.

// Create a bank customer object
const customer = {
  lastName: "Voran",
  branchNumber: "123456789",
  accountBalance: 500.25,
  interestRate: 1.03,
  multipleAccounts: true,

  makeDeposit: function (amount) {
    customer.accountBalance += amount;
    return "Thank you, your current balance is now $" + customer.accountBalance.toFixed(2);
  },

  makeWithdrawal: function (amount) {
    customer.accountBalance -= amount;
    return "Thank you, your current balance is now $" + customer.accountBalance.toFixed(2);
  },

  addInterest: function () {
    var tempRate = customer.interestRate;
    if (customer.multipleAccounts === true) {
      tempRate += 0.005;
    }

    customer.accountBalance *= tempRate;
    return "Thank you, your current balance is now $" + customer.accountBalance.toFixed(2);
  }
};

console.log("Starting Balance: $" + customer.accountBalance.toFixed(2));

// Deposit $200
console.log(customer.makeDeposit(200));


//Withdraw $75
console.log(customer.makeWithdrawal(75));


//Add interest
console.log(customer.addInterest());

//Output final balance
console.log("Final Balance After Interest: $" + customer.accountBalance.toFixed(2));

console.log(customer)