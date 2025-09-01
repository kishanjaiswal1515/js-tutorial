// JavaScript Arrays Method


//delete 

let emp = {
    FirstName : "Kishan",
    LastName : "Jaiswal",
    Salary: 100000
}
console.log(delete emp.Salary);
console.log(emp);


//join 

let a = ["HTML ","CSS ","JS ","React"];
console.log(a.join('|'));

//The concat() method is used to concatenate two or more arrays and it gives the merged array

let a1 = [12,13,14];
let a2 = [15,16,17];
console.log(a1.concat(a2));

//The push() method is used to add an element at the end of an Array

let a3 = [10, 20, 30, 40, 50];
a3.push(60);
console.log(a3);


//The unshift() method is used to add elements to the front of an Array.
let a4 = [20, 30, 40];
a4.unshift(10,15);
console.log(a4);

//The pop() method is used to remove elements from the end of an array. 
let a5 = [20, 30, 40, 50];
a5.pop();
console.log(a5);

//The shift() method is used to remove elements from the beginning of an array 
let a6 = [20, 30, 40, 50];
a6.shift();
console.log(a6);


//The splice() method is used to Insert and Remove elements in between the Array.
//array.splice(start, deleteCount, item1, item2, ...);
//start → index jaha se operation shuru karna hai.

// start → index jaha se operation shuru karna hai.
// deleteCount → kitne elements delete karne hain. (agar 0 doge to delete nhi hoga).
// item1, item2, ... → (optional) naye elements jo insert karne ho.

let a7 = [10,15,20,30,45];
a7.splice(1,3);
console.log(a7);
a7.splice(1,0,11,12,13);
console.log(a7);


//The slice() method returns a new array containing a portion of the original array
const a8 = [11,12,32,21,42];
console.log(a8.slice(1,3));
console.log(a8);

//The reverse() method is used to reverse the order of elements in an array.
let a9 = [1, 2, 3, 4, 5];
a9.reverse();
console.log(a9);