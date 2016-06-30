"use strict";

/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
	// this.tires = [];
	this.manufactured_date = Date();
}

/*
  Create a constructor function named Make with one 
  argument that will hold the manufacturer of the Make (see below). 

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the 
  manufacturer property to the argument value.
 */
function Make (maker) {
  this.manufacturer = maker;
}
Make.prototype = new Car();

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the general Make function.
  3. It must have one argument that will to hold the model name.
  4. The constructor must define a property to hold the model name.
 */
function Kia (name) {
  this.modelName = name;
}
Kia.prototype = new Make("Kia");

function LicensePlate(num) {
	this.number = num;
	this.state = "TN";
}

function Sorento (num) {
	this.plate = new LicensePlate(num);
}
Sorento.prototype = new Kia('Sorento');
/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/

var sorento1 = new Sorento("454-OKY");
console.log("sorento1", sorento1);

var sorento2 = new Sorento("456-PLM");
console.log("sorento2", sorento2);

var sorento3 = new Sorento("W8N4ME");
console.log("sorento3", sorento3);





// ++++++++++++++++++++++++++++++++++
// Tires prototype chain

// function Tire() {
// 	this.shape = "round";
// }

// function Manufacturer () {
// 	this.name = null;
// }
// Manufacturer.prototype = new Tire();

// function tireType (type) {
// 	this.type = type;
// 	this.PSI = 0;
// 	this.radius = 0;
// }
// tireType.prototype = new Manufacturer();
// tireType.prototype.setPSI = function (number) {
// 	this.PSI = num;
// }

// var racing1 = new tireType('racing');
// var racing2 = new tireType('racing');
// var snowTire1 = new tireType('snow');
// var snowTire2 = new tireType('snow');

// mySuv.tires.push(racing1);








