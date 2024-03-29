// --------Question 1----------
//1.Write a JavaScript program to list the properties of a JavaScript object. 

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollNo: 12,
};

// console.log(Object.keys(student));

// --------Question 2----------
// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. Sample objec
// Given student array is = { name : "David Rayy", sclass : "VI", rollno : 12 }

// console.log(student);
// delete student.rollNo;
// console.log(student);

// --------Question 3----------
// 3.Write a JavaScript program to get the length of a JavaScript object.

// let arr = Object.keys(student);
// console.log(arr.length);

// --------Question 4----------
// 4. Write a JavaScript program to display the reading status
//  (i.e. display book name, author name and reading status) of the following books. 
//  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
//  { author: 'Suzanne Collins', title: 'Mockingjay: 
// The Final Book of The Hunger Games', readingStatus: false }]

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// library.forEach((item) => {
//   Object.values(item).forEach((value) => {
//     console.log(value);
//   });
// });

// --------Question 5----------
// 5. Write a JavaScript program to get the volume of a Cylinder with four 
// decimal places using object classes. Volume of a cylinder : V = πr2h where r is the 
// radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 

class Cylinder {
  constructor(r, h) {
    this.radius = r;
    this.height = h;
  }

  volume() {
    return 3.14 * this.radius ** 2 * this.height;
  }
}

let c1 = new Cylinder(7, 7);
console.log(c1.volume());

// --------Question 6----------
// 6. Write a JavaScript program to sort an array of JavaScript objects.  
// Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', 
// libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', 
// libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", 
// libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins",
//  libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object]
//  { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library2 = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library2.sort((a, b) => b.libraryID - a.libraryID);
console.log(library2);