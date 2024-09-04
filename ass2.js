"students.js"

// Create an array of objects representing students
const students = [
  { name: "Bisi Doe", age: 20, grade: "A" },
  { name: "Jane Alison", age: 22, grade: "B" },
  { name: "Bob Maley", age: 21, grade: "A" },
  { name: "Alice Stone", age: 20, grade: "C" },
  { name: "Mike Jaskson", age: 23, grade: "B" }
];

// Function to filter students by grade
function filterByGrade(students, grade) {
  return students.filter(student => student.grade === grade);
}

// Function to calculate average age
function averageAge(students) {
  const sumOfAges = students.reduce((acc, student) => acc + student.age, 0);
  return sumOfAges / students.length;
}

// Test the functions
console.log("Students with grade A:");
console.log(filterByGrade(students, "A"));

console.log("Average age of all students:");
console.log(averageAge(students));

console.log("Students with grade B:");
console.log(filterByGrade(students, "B"));

console.log("Average age of students with grade A:");
console.log(averageAge(filterByGrade(students, "A")));

