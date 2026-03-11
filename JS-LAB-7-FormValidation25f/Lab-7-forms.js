/* LAB 7 - SHIPPING FORM */
window.onload = function () {
  //
  document.getElementById("shippingForm").onsubmit = function () {
    //getting the form values and storing them in the shipInfo object
    shipInfo.name = document.getElementById("in_Name").value;
    shipInfo.pc = document.getElementById("in_pc").value;
    shipInfo.speed = document.getElementById("in_Speed").value;

    const form = document.forms["form_ship"]["f_speed"];
    shipInfo.speed = form.options[form.selectedIndex].value;



    document.getElementById("thanksCustomer").innerHTML = shipInfo.name;
    document.getElementById("thanksPC").innerHTML = shipInfo.pc;
    document.getElementById("thanksSpeed").innerHTML = shipInfo.speed;



    //speed of delivery from the select input
    // switch (shipInfo.speed) {
    //   case "0":
    //     shipInfo.cost = 0;
    //     document.getElementById("thanksSpeed").innerHTML =
    //       "No delivery selected";
		//   document.getElementById("thanksCost").innerHTML = shipInfo.cost;
    //     break;
    //   case "8":
    //     shipInfo.cost = 8;
    //     document.getElementById("thanksSpeed").innerHTML = "Regular Delivery";
		//  document.getElementById("thanksCost").innerHTML = shipInfo.cost;
    //     break;
    //   case "20":
    //     shipInfo.cost = 20;
    //     document.getElementById("thanksSpeed").innerHTML = "Express Delivery";
		//  document.getElementById("thanksCost").innerHTML = shipInfo.cost;
    //     break;
    //   case "100":
    //     shipInfo.cost = 100;
    //     document.getElementById("thanksSpeed").innerHTML = "Next Day Delivery";
		//  document.getElementById("thanksCost").innerHTML = shipInfo.cost;
    //     break;
    // }

    //validating the form values
    if (shipInfo.name == "") {
      document.getElementById("in_Name").style.backgroundColor = "red";
      document.getElementById("in_Name").focus();
      return false;
    }
    if (shipInfo.pc == "") {
      document.getElementById("in_pc").style.backgroundColor = "red";
      document.getElementById("in_pc").focus();
      return false;
    }

    if (shipInfo.name == "") {
      //change backgroud color of the  input to red
      if (shipInfo.name == "") {
        document.getElementById("in_Name").style.backgroundColor = "red";
        //focus on the input
        document.getElementById("in_Name").focus();
      }
      if (shipInfo.pc == "") {
        document.getElementById("in_pc").style.backgroundColor = "red";
        //focus on the input
        document.getElementById("in_pc").focus();
      }

      return false;
    }

    //hide the form and show the thank you message
    document.getElementById("shippingForm").style.display = "none";
    document.getElementById("thanks_msg").style.display = "block";
    return false;
  };
};
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
  name: "",
  pc: "",
  speed: "",
  cost: 0,
};

//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST

//WAIT FOR THE PAGE TO LOAD
