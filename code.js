// variable- store data values.
// identifiers- declared name of the variable/function/class
// literal - value assigned to the variable
// ;- statement ended
// casesensitive - age and Age are the different variables.
// null- empty variable/ absence of value
// undefined - variable declared but not assigned any value
// reserved keywords - cannot be used as variables names
// let - block scope variable, cannot be redeclared, value can be updated, initialized with undefined
// const - block scoped variable, cannot be redeclared, value cannot be changed
// var - function scoped variable, can be redeclared and updated 
// comments- single line comment - //, multi line comment - /* */
// data types - Its a type of literal assigned to variable. 
// primitive data types - string, number, boolean, null, undefined, symbol
// non-primitive data types- object, array, function
// typeof()- operator used to check the data type of the variable
// datatype conversion - implicit and explicit conversion
// implicit conversion -  automatic conversion by js
// explicit conversion - manually converting data type using functions like String(), Number(), Boolean(), 
// .toString() - convert number to string
// operators - arithmetic, assignment, comparison, logical, bitwise, ternary
// arithmetic operators - +, -, *, /, %, ++, --
// assignment operators - =, +=, -=, *=, /=, %=
// comparison operators - ==, ===, !=, !==, >, <, >=, <=
// logical operators - &&, ||, !
// bitwise operators - &, |, ^, ~, <<, >>, >>>
// post increment - variable is used first then incremented
// pre increment - variable is incremented first then used
// post decrement - variable is used first then decremented
// pre decrement - variable is decremented first then used
// conditional statements - if, else if, else, switch, ternary operator
// if statement- used to execute the block of code if the specified condition is true
// else if statement - used to execute the block of code if the specified condition is true, if the previous 
// condition is false
// else statement - used to execute the block of code if the specified condition is false
// switch statement - used to evaluate single expression with multiple cases
// ternary operator - used to assign a value to a variable based on a condition. It's a short hand for if else statement.
// break - keyword used to exit the loop or switch statement
// continue -  keyword used to skip the current iteration of the loop and continue with the next iteration
// string.length - property used to get the length of the string
// string.toUpperCase() -  method used to convert the string to uppercase
// string.toLowerCase() - method used to convert the string to Lowercase
// string.slice() - method used to extract the part of the string and return the extracted part in a new string
// string.includes() - used to check if the string contains a specified value and returns true or false
// string literals - single quotes, double quotes, back ticks allows for multiple lines and string interpolation ${}
// string.replace() - method used to replace a specified value with another value in a string
// string.concat() -  method used to add two or more strings together and returns new string
// string.trim() - method used to remove the whitespace from both ends of the string
// string.split() -  method used to split a string into an array of substrings based on a specified separator
// String -  set of characters used to represent text.
// array -  used to store multiple values in single variable
// array.length - property used to get the number of elements in the array
// array.push() - method used to add one or more element to the end of the array and returns new length of the array
// array.pop() - method used to remove the last element from the array and returns that element
// array.shift() - method used to remove first element from the array
// array.unshift() -  method used to add one or more elements at the beginning of the array
// array iteration/traversal -  for loop, for in loop, for of loop, forEach() method 
// Searching in array - indexOf(), includes(), find()
// array.indexOf() -  method used to search for a specified element in the array and returns its index or -1 if not found
// array.includes() -  method used to check if the array contains a specified value and returns truw or false
// array.find() -  method used to search for a specified element in the array and returns the value if not returns undefined
// array.sort() -  method used to sort the elements of the array from low to high
// array.sort((a,b) => (b-a)) - method used to sort the elements in the array from high to low
// array.reverse() - method used to reverse the order of the elements in the array
// array.slice() -  method used to extract a section of the array starting from the specified start index and returns new array
// array.splice() -  method used to add/remove elements from the array
// array.concat() -  method used to merge two or more arrays
// array.join() -  method used to join all the elements of the array into a string
// array.toString() -  method used to convert array to a string
// array.isArray() -  method used to check if the variable is an array and returns true or false
// A function is a standalone block of code, while a method is a function associated with an object or class.
//function - block of code designed to perform specific task. It takes input, processes it and returns output.
//arrow function - a shorter sytax for writing a function. 
// higher order function - a function that takes another function as argument or returns a fucntion as output
// map - method used to create new function by applying function to each element of the array
// reduce - method used to apply a function to accumulator  and each element of the array to reduce it to a single value
// filter - method used to create new array by fitering the element based on the specified condition
// OOP -  programming paradigm aims to organize the code using objects and classes. 
// class - blueprint for creating objects. It defines properties and methods that the object created from the class will have.
// object -  instance of a class. It contains properties and methods defined in the class.
// constructor - special method to initialize the object created from the class. It acts as a connector between the class and the object. It is called automatically when an object is created from the class.
// this keyword - It is used to access the properties and methods of the current object. It is used within the constructor to refer the current onject being created. 
// prototype - Using prototype ensures method sharing across instances, reducing memory usage and improving performance.
// inheritance - mechanism by which one class can inherit properties and methods from another class using extends keyword.
// overriding - mechanism by which a child class can provide specific implementation of a method that is already defined in its parent class/same method new behaviour.
// super keyword - used to call constructor of the parent class and access its properties and methods from the child class.
// Difference between constructor methods and prototype methods? - Constructor methods create separate copies per instance, while prototype methods are shared across all instances, making them memory efficient.
// encapsulation - mechanism of bundling the data (properties/attributes) and methods that operate on the data into a single unit.
// Purpose of encapsulation - 1) data hiding - restrict access to certain properties and methods, 2) Data Access control -  controlling access to the data through getter and setter, 3) Code Organization - helps to organize the code by grouping related properties and methods together, 4) Modularity - helps to break down complex code into smaller, manageable pieces, 5) Reusability - allows to reuse the code by creating objects from the class.
// Data hiding - restricting access to certain properties and methods of an object to prevent unauthorized modification and data integrity.
// Getter and setter -  methods used to access na dmodify the private properties of an object. Getter method is used to get the private property value, while setter method is used to set the private property value. 
// Private keyword - used to declare private properties and methods in a class. It is denoted by # symbol before the property/method name. 
// Polymorphism -  ability of an object to take on many forms. It can be achieved through method overriding and method overloading. Method overriding is when a child class provides specific implementation of a method that is already defined in its parent class. Method overloading is when a class has multiple methods with the same name but different parameters.
// DOM -  Document object Model is a programming interface for web documents. It represents the page so that program can change the document structure, content and style. It provides a structured representation of the document as a tree of objects and defines methods to access and manipulate these objects.
// Event Handling - mechanism to handle events triggered by user interaction or browser actions. It allows to execute specific code in response to events such as clicks, form submissions, mouse movements etc. 
// Synchronous programming - code is executed sequentially, one line at a time. Each line of code waits for the previous code to execute.
// Asynchronous programming - codes are executed all at once while waiting for longer operations to complete.
// SetTimeOut() - allows a functions to be executed after a specfied delay without blocking the main thread.
// Callback function - a function passed as argument to another function and is executed after some operation is completed. It is used to handle asynchronous operations and ensure that certain code is executed only after a specific task is finished.
// callback hell - situation where multiple nested callback functions are used, making the code difficult to read and maintain. It can be avoided by using promises or async/await syntax.
// Promises - an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows to handle asynchronous operations in a more manageable way and avoid callback hell.
// Async/await - syntactic sugar built on top of promises that allows to write asynchronous code in a more synchronous manner. It makes the code easier to read and understand by using async keyword to declare a function as asynchronous and await keyword to wait for the promise to resolve before moving to the next line of code.



/* Write a JavaScript program that declares three variables: firstName (string), age (number), 
and isStudent (boolean). Assign appropriate values to these variables. Then, use console.log() 
to print a message to the console that includes the values of all three variables. 
For example: "My name is [firstName], I am [age] years old, and it is [isStudent] that I am a student." */ 

let firstName = 'Sapna';
let age = 28;
let isStudent = false;

console.log("My name is " + firstName + "," + " am " + age + ", and it is " + isStudent + " that I am a Student.")

/* Create an HTML file (index.html) and a JavaScript file (script.js). In script.js, write 
code that uses console.log() to print the results of the following arithmetic 
operations: 10 + 5, 20 - 8, 7 * 3, and 100 / 10. Link the JavaScript file to the HTML file 
and open the HTML file in a browser to view the output in the console. */

console.log(10 + 5, 20 - 8, 7 * 3, 100/10);

/* Explain the difference between null and undefined in JavaScript. Provide code examples to 
illustrate scenarios where each would typically occur. Also, explain the practical implications 
of using var, let, and const when declaring variables, focusing on scope and mutability. */

let nullValue = null; //absence of value
let undefineValue; // variable declared but not assigned any value
console.log(nullValue, undefineValue);

const PI=3.14;
console.log(PI);

/* Write a JavaScript function that takes two numbers as input and returns their sum. However, before 
performing the addition, explicitly convert both inputs to numbers using the Number() function. Demonstrate 
how this function handles different input types, such as strings and booleans. Explain why explicit type 
conversion is important in this scenario. */

let val1 = "10";
let val2 = true;

function sumOfNumbers (val1, val2){
    return Number(val1) + Number(val2);
}

console.log(sumOfNumbers(val1, val2));

/* Create a JavaScript object named person with the following properties: name (string), age (number), and 
address (another object with properties street and city). Access and print the values of all these 
properties to the console using both dot notation and bracket notation. Then, add a new property called 
email to the person object and assign it a value. */

let person = {
    name: 'Sapna',
    age: 28,
    address: {
        street: "#nandus pg 560043",
        city: "Bangalore",
    }
}

console.log(person.name);
console.log(person.age)
console.log(person["address"]);
console.log(person.address.street)
console.log(person["address"]["city"]);
person.email = "sapnapandey.sash@gmail.com";
console.log(person.email, person);

/* Write a JavaScript program that declares an array containing five different data 
types (e.g., number, string, boolean, null, object). Iterate through the array using 
a for loop and print the data type of each element to the console using the typeof operator. 
Explain how JavaScript handles mixed data types within an array. */

let array = [37, "learn js", true, null, {subject: "js"}];

for(let i=0; i<array.length; i++){
    // console.log(array[i]);
    
    console.log(typeof(array[i]));
}

/* Write a Node.js function that takes a student's score as input and returns their corresponding 
grade based on the following scale: 90-100: A, 80-89: B, 70-79: C, 60-69: D, Below 60: F. Use if-else 
    if-else statements to implement the grading logic. Provide thorough test cases to demonstrate the 
function works correctly for all grade ranges. */

function grade(score){
    if(score >=90 && score <=100){
        return "A";
    }
    else if (score >=80 && score <=89){
        return "B";
    }
    else if (score >=70 && score <=79){
        return "C";
    }
    else if (score >=60 && score <=69){
        return "D";
    }
    else if (score <=60){
        return "F"
    }
}

console.log(grade(78));
console.log(grade(85));
console.log(grade(92));
console.log(grade(65));
console.log(grade(55));

/* Create a function that iterates through an array of numbers. The function should print each number, 
but skip printing numbers that are divisible by 3. If the number 7 is encountered, the loop should 
terminate immediately. Demonstrate the use of both continue and break keywords within the loop. Provide 
the array as input and show the output of the function. */

let numbers=[1,2,3,4,5,6,7,8,9,10];

function iterateNumber(numbers){
    for( let i of numbers){
        if(i%3 === 0){
            continue;
        }
        if(i === 7){
            break;
        }
        console.log(i);
    }
}

iterateNumber(numbers);

/* Write a JavaScript function that takes a sentence as input and performs the following operations: 
1) Converts the entire sentence to uppercase. 
2) Extracts the first 5 characters. 
3) Checks if the sentence includes the word 'JavaScript'. 
4) Replaces the word 'JavaScript' with 'ECMAScript'. 
5) Splits the sentence into an array of words using space as a delimiter. Return the modified sentence 
and the array of words. Use template literals to construct the final output string. */

let sentence =  "I am learning JavaScript and it's really interesting";
function modifySentence(sentence){
    let upperCaseSentence = sentence.toUpperCase();
    let firstFiveCharacters = sentence.slice(0,5);
    let includesJavascript = sentence.includes("JavaScript");
    let replaceSentence = sentence.replace("JavaScript", "ECMAScript");
    let splitSentence = replaceSentence.split(" ");
    return `Modified Sentence: ${replaceSentence}\nArray of Words: ${splitSentence}`;

}

const result=modifySentence(sentence);
console.log(result);

/* Implement a JavaScript function that takes an array of numbers as input. The function should perform 
the following tasks: 1) Remove the first and last elements of the array. 2) Add the numbers 10 and 20 to 
the beginning of the array. 3) Sort the array in ascending order. 4) Find the index of the number 20 in 
the sorted array. 5) Return the modified array and the index of the number 20. Demonstrate the use of 
array methods such as shift(), pop(), unshift(), sort(), and indexOf() */

let arr = [5, 3, 8, 1, 4];
function modifyArray(arr){
    arr.shift();
    arr.pop();
    arr.unshift(10,20);
    arr.sort((a,b)=>(a-b));
    let index= arr.indexOf(20);
    return `Modified Array: ${arr} \n Index of 20: ${index}`

}

const modifiedArrayResult = modifyArray(arr);
console.log(modifiedArrayResult);

/* Create a function that takes a 2D array (matrix) of numbers as input. The function should calculate 
the sum of each row and store the sums in a new 1D array. Additionally, calculate the average of all the 
elements in the matrix. Return both the array of row sums and the overall average. Provide a sample 
matrix and show the output of the function. */

let matrix = [
    [1,2],
    [5,6],
];

let rowSums=[];
let totalSum=0;
let count=0;

function calculateMatrix(matrix){
    for(let i=0; i< matrix.length; i++){
        let rowSum=0;
        for(j=0; j<matrix[i].length; j++){
            rowSum += matrix[i][j];
            totalSum += matrix[i][j];
            count++;
        }
        // console.log(`Row Sum: ${rowSum}, Total Sum: ${totalSum}, Count: ${count}`);
        rowSums.push(rowSum);
    }
    let average =  totalSum/count;
    return{
        rowSums: rowSums,
        average: average
    }

}

const matrixCal=calculateMatrix(matrix);
console.log(matrixCal.rowSums);
console.log(matrixCal.average);



/* Design and implement a JavaScript function called calculateArea that can calculate the area of either 
a rectangle or a circle. The function should accept a shape type ('rectangle' or 'circle') as the first 
argument. If the shape is a rectangle, it should accept two additional arguments: length and width. If 
the shape is a circle, it should accept one additional argument: radius. Use conditional statements to 
determine which calculation to perform and return the calculated area. Include error handling for invalid 
shape types or missing arguments. */


function calculateArea(shape, ...args){
    if(shape === 'rectangle'){
        if(args.length <2){
            return "Error: Missing arguments for rectangle. Please provide length and width.";
        }

        let length = args[0];
        let width = args[1];
        return length * width;
    }
    if(shape==='circle'){
        if(args<1){
            return "Error: Missing argument for circle. Please provide radius.";
        }
        let radius=args[0];
        return Math.PI * radius * radius;
    }
    return "Error: Invalid shape type. Please provide 'rectangle' or 'circle'."
}

console.log(calculateArea('circle'));

/* Write a JavaScript function called operateOnArray that takes an array of numbers and two 
functions as arguments: operation and filterCriteria. The operation function should take a 
single number as input and return a modified number. The filterCriteria function should 
take a single number as input and return a boolean value. Your operateOnArray function 
should first filter the input array using the filterCriteria function, then apply the 
operation function to each of the filtered numbers, and finally return a new array 
containing the results. Provide example usage with an array of numbers, a function to 
double the number, and a function to filter for even numbers. */

function operateOnArray(arr, operation, filterCriteria){
    let filteredArray = arr.filter(filterCriteria);
    let modifiedArray = filteredArray.map(operation);
    return modifiedArray;
}

function operation(num){
    return num * 2;
}

function filterCriteria(num){
    return num %2 === 0;
}

let numbersArray = [1, 2,3, 4, 5, 6, 7];
let arrayResult = operateOnArray(numbersArray, operation, filterCriteria);
console.log(arrayResult);

/*  Implement a function called calculateAverage that takes an array of numbers as 
input and uses the reduce higher-order function to calculate the average of those 
numbers. Your function should handle the case where the input array is empty, 
returning 0 in that case. Provide a clear and concise implementation, demonstrating 
your understanding of the reduce function. */

function calculateAverage(arr1){
    if(arr1.length === 0){
        return 0;
    }else{
    let totalSUmofArray = arr1.reduce((acc,num) => acc + num,0);
    return average=totalSUmofArray/arr1.length;
    }
}

let arr1=[];
const calAvg=calculateAverage(arr1);
console.log(calAvg);

/* Design a Book class with properties for title, author, and publicationYear. 
Include a method called displayInfo that prints a formatted string containing 
the book's information. Then, create an Library class that has a property to 
store an array of Book objects. Implement methods in the Library class to addBook, 
removeBook (by title), and displayAllBooks. Demonstrate the usage of these classes 
by creating several Book objects, adding them to a Library object, and then 
displaying all books in the library. */

class Book {
    constructor(title, author, publicationYear){
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayInfo(){
        return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`;
    }
}

class Library {
    constructor(){
        this.book = [];
    }

    addBook(book){
        this.book.push(book);
    }

    removeBook(title){
        this.book = this.book.filter(book => book.title !== title);;
    }

    displayAllBooks(){
        this.book.forEach(book => book.displayInfo());
    }
}

let book1 = new Book ("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book2 = new Book ("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book ("1984", "George Orwell", 1949);

let myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.displayAllBooks();

myLibrary.removeBook("1984");
console.log(myLibrary);

/* Create a BankAccount class with properties for accountNumber and balance. The 
constructor should initialize these properties. Implement methods for deposit and 
withdraw. Ensure that the withdraw method prevents overdrafts (i.e., the balance 
cannot go below zero). Use the this keyword appropriately to access and modify the 
object's properties. Demonstrate the usage of the class by creating a BankAccount 
object, performing several deposits and withdrawals, and printing the final balance. */

class BankAccount{
    constructor(accountName, Balance){
        this.accountName = accountName;
        this.Balance = Balance;
    }

    deposit(amount){
        this.Balance += amount;
    }

    withdraw(amount){
        if(amount > this.Balance){
            return "Error: Insufficient funds. Withdrawal amount exceeds current balance.";
        }
        this.Balance -= amount;
    }
    
}

let account1=new BankAccount("John Doe", 1000);
    account1.deposit(500);
    account1.withdraw(200);
    console.log(`Final Balance: ${account1.Balance}`);

/* Create a JavaScript object representing a basic calculator with methods for add, 
subtract, multiply, and divide. Then, extend this object's prototype with a new method 
called squareRoot that calculates the square root of the current result. Demonstrate 
how to use the squareRoot method on the calculator object. Explain how the prototype 
extension allows you to add functionality to existing objects without modifying their 
original definitions. */

function Calculator(){
    this.result = 0;

    this.add = function(num){
        this.result += num;
    }

    this.subtract = function(num){
        this.result -= num;
    }

    this.multiply = function(num){
        this.result *=num;
    }

    this.divide = function(num){
        this.result /= num;
    }

    this.squareRoot = function(){
        this.result = Math.sqrt(this.result);
    }
}

let cal = new Calculator();
cal.add(25);
cal.squareRoot();
console.log(cal.result);

/* Design a class hierarchy for different types of vehicles. Start with a base class 
called Vehicle with properties for make, model, and year and a method called startEngine 
that prints a generic message. Create subclasses for Car and Motorcycle. In the Car 
class, add a property for numberOfDoors and override the startEngine method to print a 
car-specific message. In the Motorcycle class, add a property for hasSidecar and 
override the startEngine method to print a motorcycle-specific message. Use the super 
keyword in the constructors of the subclasses to call the constructor of the Vehicle 
class. Demonstrate the creation of objects from each class and call their startEngine 
methods to show the overridden behavior. */

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(){
        return "Engine started.";
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numberOfDoors){
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
    }


    startEngine(){
        return "Car engine started.";
    }
}
class Motorcycle extends Vehicle{
    constructor(make, model, year,hasSideCar){
        super(make, model, year);
        this.hasSideCar = hasSideCar;
    }

    startEngine(){
        return "Motorcycle engine started.";
    }
}

let car1 = new Car("Toyota", "Camry", 2020, 4);
let motorcycle1 = new Motorcycle("Harley-Davidson", "Street 750", 2019, false);

console.log(car1.startEngine());
console.log(motorcycle1.startEngine());

/* Design and implement a Student class in your preferred language. The class should have private 
attributes for name, studentID, and GPA. Provide public getter and setter methods for each attribute, 
including validation in the setter methods to ensure that studentID is a positive integer and GPA is 
between 0.0 and 4.0. Demonstrate how to create Student objects, set their attributes using the setter 
methods, and retrieve their values using the getter methods.*/

class Student {
    #name;
    #studentID;
    #gpa;
    constructor(name, studentID, gpa){
        this.setName(name);
        this.setStudentID(studentID);
        this.setGPA(gpa);

    }
    getName(){
        return this.#name;
    }

    setName(name){
        this.#name=name;
    }
   
    getStudentID(){
        return this.#studentID;
    }
    setStudentID(studentID){
        if(studentID<=0 || !Number.isInteger(studentID)){
                return "Error: Invalid ID. Please provide positive integer.";
            }
            this.#studentID=studentID;
    }
    getGPA(){
        return this.#gpa;
    }
    setGPA(gpa){
        if(gpa < 0.0 || gpa > 4.0){
            return "Error: Invalid GPA. Please provide a value between 0.0 and 4.0.";
        }
        this.#gpa = gpa;
    }
}

const student1=new Student("Sapna", 12345, 3.8);
console.log(student1.getName());
console.log(student1.getStudentID());
console.log(student1.getGPA());
student1.setStudentID(-123);
console.log(student1.setGPA(4.5));;
console.log(student1.getStudentID());
console.log(student1.getGPA());

/* Create an abstract class called Shape with an abstract method calculateArea(). Implement three 
subclasses: Circle, Rectangle, and Triangle. Each subclass should override the calculateArea() method 
to compute the area of its respective shape. Write a program that creates instances of each shape and 
demonstrates how the calculateArea() method behaves polymorphically. Include appropriate constructors 
and data members for each shape. */

class Shape{
    calculateArea(){
        return "Area cannot be calculate for general shape.";
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius =radius;
    }

    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    constructor(length, width){
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea(){
        return this.length * this.width;
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea(){
        return 0.5 * this.base * this.height;
    }
}

let circle=new Circle(5);
let rectangle = new Rectangle(4, 6);
let triangle = new Triangle(4, 8);

console.log(`Area of circle : ${circle.calculateArea()}`);
console.log(`Area of rectangle : ${rectangle.calculateArea()}`);
console.log(`Area of triangle : ${triangle.calculateArea()}`);


/* DOM Manipulation Task: Create an HTML page with a button and an empty paragraph element. Write 
JavaScript code that uses the DOM to: 1) Change the text of the paragraph element when the button is 
clicked. 2) Dynamically add a new list item to an unordered list on the page. 3) Change the background 
color of the page to a random color each time the button is clicked. Ensure your code is well-structured 
and handles events properly. */

function changeFunction(){
    document.getElementById("paragraph").textContent = "Text has been changed!";
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = "New List Item";
    ul.appendChild(li);
    console.log(li);
    
    document.body.style.backgroundColor = getrandomColor();

    
}

function getrandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* Consider a scenario where you need to fetch data from three different APIs, where the second API 
call depends on the result of the first, and the third depends on the result of the second. Write a 
code snippet using callbacks to implement this. Then, analyze the resulting code for readability and 
maintainability. What are the potential issues with this approach, and how does it illustrate the 
problem of 'callback hell'? */

function fetchUser(callback){
    setTimeout(()=>{
        console.log("User Fetched");
        callback({ userId:1});
        
    },1000);
}

function fetchOrders(userId, callback){
    setTimeout(()=>{
        console.log("Orders fetched");
        callback({orderId: 101});
    },1000);

}

function fetchOrderDetails(orderId, callback){
    setTimeout(()=>{
        console.log("Order details fetched");
        callback({details: "Order detail data"})
        
    }, 1000)
}

fetchUser((user)=>{
    fetchOrders(user.userId, (order) => {
        fetchOrderDetails(order.orderId, (details)=>{
            console.log("Final data", details);
        })
    })
})

/* Refactor the callback-based code from the previous question to use Promises and async/await. 
Implement the same data fetching scenario using these techniques. Compare the resulting code to 
the callback-based version in terms of readability, error handling, and overall complexity. Explain 
how Promises and async/await address the issues associated with callback hell. */

function fetchusers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const success = true;
            console.log("User fetched");
            

        if(!success){
            return reject("Error fetching user");
        }

        return resolve({userid:2});
        },1000);
        
    });
}

function fetchorders(userid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true;
            console.log("Orders fetched");
            

            if(!success){
            return reject("Error fetching orders");
            }

            return resolve({orderid:104});

        })
    })
}

function fetchorderdetails(orderid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true;
            console.log("Order Details Fetched");
            

            if(!success){
                return reject("Error fetching order details");
            }
            return resolve({Details: "Order detail data"})
        })
    })

}

fetchusers()
    .then(user =>fetchorders(user.userid))
    .then(order => fetchorderdetails(order.orderid))
    .then(Details => console.log("Final data:", Details))
    .catch(err => console.error("Error:",err));

 /* Design a function that fetches data from multiple independent APIs concurrently using 
 Promise.all(). The function should take an array of API endpoints as input and return an array 
 of the corresponding responses. Implement error handling to catch any rejections from the API calls. 
 Demonstrate how to use this function to fetch data from at least three different APIs and log the results. */

const apiEndpoints = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments"
];

async function fetchMultipleAPIs(endpoints){
    try{
        const response = await Promise.all(
            endpoints.map(url=> fetch(url).then(res => {
                if(!res.ok){
                    throw new Error(`Failed to fetch : ${url}`);
                }
                return res.json();

            })
        )
    );

    return response;

    }catch(error){
        console.log(`Error fetching API: ${error}`);
    }

}

fetchMultipleAPIs(apiEndpoints)
    .then(data => {
        console.log("Users:", data[0]);
        console.log("Posts:", data[1]);
        console.log("Comments:", data[2]);
    })
    .catch(err => {
        console.error("Something failed:", err);
    });

