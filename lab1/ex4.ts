//Use of five different primitive types

//Boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//Number
let myNumber:number=5;
console.log("The value of myNumber is: "+myNumber);

//String
let myString: string="Hello";
console.log("The value of myString is: "+myString);

//Array
let myArray:number[]=[1,2,3];
for(let i=0; i<myArray.length; i++){
    console.log("The value of position "+(i+1)+" is: "+myArray[i]);
}

let myArray2:Array<number> = [1,2,3];
myArray2.forEach((item)=>{
    console.log("The value of myArray2 is: "+item)
})

//Any
let myUnknown:any="Unknown";
console.log("The value of myUnknown is: "+myUnknown);
