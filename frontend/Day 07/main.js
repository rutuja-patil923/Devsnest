// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// Sample Output: name, sclass, rollno
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
const get_props = (obj) => {
      for (let prop in obj) {
            console.log(prop);
      }
}
get_props(student);


// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
const func = (obj) => {
      delete obj.rollno;
      for (let prop in obj) {
            console.log(`${prop}: ${obj[prop]}`);
      }
}
func(student);


// Write a JavaScript program to get the length of a JavaScript object
const size = (obj) => {
      let length = 0;
      for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) length++;
      }
      return length;
}
console.log(size(student));


// Write a JavaScript program to display the reading status
//       (i.e.display book name, author name and reading status) of the following books.
const library = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
      { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
      {author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
      }];
const status = (library) => {
      for (let book of library) {
            for (let prop in book) {
                  console.log(`${prop}: ${book[prop]}`);
            }
            console.log('\n');
      }
}
status(library);


//  Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
function getVolume(){
      return (2 * Math.PI * this.radius * this.radius * this.height).toFixed(4)
}
const Cylinder = function(radius, height)  {
      this.radius = radius;
      this.height = height;
      this.getVolume = getVolume;
}
const cylinder1 = new Cylinder(5, 8);
console.log(cylinder1.getVolume());


// Write a JavaScript program to sort an array of JavaScript objects.
const library1 = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library1.sort((a, b) => b.libraryID - a.libraryID);
console.log(library1);