var person = {
  name: "tandavala",
  age: 28,
  address: {
    street: "5 main st",
    city: "Lobito"
  },
  frameworks: ["adonis js", "react js"]
};

var people = [
  {
    name: "tandavala",
    age: 40
  },
  {
    name: "John",
    age: 20
  },
  {
    name: "valeta",
    age: 21
  }
];
//person = JSON.stringify(person);
//person = JSON.parse(person);
//console.log(person.address);
//console.log(people[1].age);

var output = "";

for (var i = 0; i < people.length; i++) {
  //console.log(people[i].name);
  output += "<li>" + people[i].name + "</li>";
  document.getElementById("fill").innerHTML = output;
}
