//LAB 3 - ARRAYS & LOOPS - PART 2

//TEAM MEMBER ARRAY
var ourTeam = ["voran", "ravi", "Michael", "Jessica", "Daniel"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REMOVE LAST MEMBER
ourTeam.pop();
console.log(ourTeam);

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");
//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();
console.log(ourTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("we have" + " " + ourTeam.length + " " + "members in our team");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i < ourTeam.length; i++) {
  console.log("Team member" + (i + 1) + ":" + ourTeam[i]);
}
