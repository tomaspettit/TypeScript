//Use of five different primitive types
//Boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//Number
var myNumber = 5;
console.log("The value of myNumber is: " + myNumber);
//String
var myString = "Hello";
console.log("The value of myString is: " + myString);
//Array
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value of position " + (i + 1) + " is: " + myArray[i]);
}
var myArray2 = [1, 2, 3];
myArray2.forEach(function (item) {
    console.log("The value of myArray2 is: " + item);
});
//Any
var myUnknown = "Unknown";
console.log("The value of myUnknown is: " + myUnknown);
