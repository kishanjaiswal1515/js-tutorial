const myArr = [10,15,124,25,23,14]
const myHeors = ["shaktiman", "naagraj"]

myArr.length = 7;
myHeors.length = 1;

console.log("increasing " , myArr);
console.log("decreasing ", myHeors);

// accessing first element of array

console.log("fist element : ", myArr[0]);


// accessing last element of array

console.log("last element : ", myArr[myArr.length - 2]);


// modifying the element of array

myArr[1] = 100;
console.log(myArr);


// Adding Elements to the Array at last
myHeors.push("HELLO");
console.log(myHeors);

//in beginning
myHeors.unshift("MUMBAI");
console.log(myHeors);

// Removing elements from array
//from last
myHeors.pop();
console.log(myHeors);
//from first
myArr.shift();
console.log(myArr);
//in between
myArr.splice(1,3);
console.log(myArr);
