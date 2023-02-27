// Ways to define an object

// let user = {}; // this is the most common way

// let member = new Object();

//Adding new properety to the object
// user.name = "Amaan";

// console.log(user);

// console.log(member);

let user = {
  name: "Amaan",
  age: 25,
  iseDeveloper: true,

  //function inside object
  getData: function () {
    return "data is here";
  },
};

delete user.getData;

console.log(user);
