"use strict";

let firstname = "Kirsten";
let lastname = "Anders";

let fullname = firstname + " " + lastname;
console.log(fullname);

const person = {
  firstName: "Kirsten",
  lastName: "Anders",
  firma: "Business-Partner-Akademie UG",
  city: "Dortmund",
  zip: "44388",
  address: "Klarastraße 11",
};

console.log(person);
console.log(person.firstName + " " + person.lastName);
console.log(
  person.firma + "\n" + person.address + "\n" + person.zip + " " + person.city
);
