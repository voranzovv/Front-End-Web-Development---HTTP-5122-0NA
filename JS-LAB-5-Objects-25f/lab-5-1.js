//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
  name: "Voranzov",
  country: "Sri Lanka",
  job: "forklift operator",
  hobbies: ["coding", "music", "camping"],
  intro: function () {
    alert("My name is " + meObject.name + ". I'm from " + meObject.country);
  }
};

console.log(meObject.name);

// alert("My name is " + meObject.name + ". I'm from " + meObject.country);
meObject.intro();