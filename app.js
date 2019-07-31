/*var person = {
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
} */

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //console.log(xhttp.responseText);
    let response = JSON.parse(xhttp.responseText);
    let output = "";
    let output2 = "";

    for (let i = 0; i < response.length; i++) {
      console.log(response[i].data.name);
      output += "<li>" + response[i].data.name + "</li>";
      document.getElementById("fill").innerHTML = output;
    }
  }
};

xhttp.open("GET", "tandavala.json", true);
xhttp.send();
