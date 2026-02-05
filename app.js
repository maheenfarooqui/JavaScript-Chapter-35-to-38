// Q1. Write a function that displays current date & time in your browser.

function todaytime() {
  var time = new Date();
  console.log(time);
}
todaytime();

// Q2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greetUser(){
//     document.write(`welcome to the website ${firstName} ${lastName}`);

// }
// var firstName =prompt("enter your first name");
// var lastName =prompt("enter your last name");
// greetUser();

// Q3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(){
//     console.log(a+b);

// }
// var a =Number(prompt("enter number"));
// var b =Number(prompt("enter number"));

// sum();

// Q4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function calculator(num1, num2, oper) {
  var result;
  if (oper === "*") {
    result = num1 * num2;
  } else if (oper === "/") {
    result = num1 / num2;
  } else if (oper === "+") {
    result = num1 + num2;
  } else if (oper === "-") {
    result = num1 - num2;
  } else if (oper === "%") {
    result = num1 % num2;
  } else {
    result = "select correct symbol";
  }
  console.log(result);
}
calculator(2, 2, "%");

// Q5. Write a function that squares its argument.
function square(a) {
  console.log(a * a);
}
square(5);

// Q6. Write a function that computes factorial of a number.
// function factorial(num){
//     result = 1;
//     for(var i =1 ;i <= num ; i++){
//         result = result * i
//     }
//     console.log(result);
// }
// factorial(5)

// // Q7. Write a function that take start and end number as inputs
// // & display counting in your browser.
// function counting(startNum,endNum){
//     for(var i = startNum ;i <= endNum ; i++){
//         console.log(i);

//     }
// }
// counting(4,12)

// Q8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// function hypothe(base,per){
// function square(num){
//     return num**2
// }
// var hypothes = square(base) + square(per);
// return hypothes;

// }

// console.log(hypothe(2,3));

// Q9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// function area(width,height){
//    var a = width * height;
//     console.log(a);

// }
// area(6,7)
// function areavAr(){
//     var height = 20;
//     var width = 10
//     var a = height*width
//     console.log(a);

// }
// areavAr()

// Q10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function palindrome(word) {
//   var myWord = "";
//   for (var i = word.length - 1; i >= 0; i--) {
//     myWord += word[i];
//   }
//   if (myWord === word) {
//     console.log("its plaindrome");
//   } else {
//     console.log("its not");
//   }
// }
// palindrome("hareem");

// Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function capital(str) {
  var mystr = str.split(" ");
  console.log(mystr);
  //     var word = "";
  //     for(var i = 0 ; i < mystr.length; i++){
  //          word += ` ${mystr[i][0].toUpperCase()}${mystr[i].slice(1)}`;

  //     }
  // return word;
  //     console.log(word);

  var cap = mystr[0][0].toUpperCase();
  var cap2 = mystr[1][0].toUpperCase();
  var cap3 = mystr[2][0].toUpperCase();
  var cap4 = mystr[3][0].toUpperCase();
  console.log(cap, cap2, cap3, cap4);
  var word1 = cap + mystr[0].slice(1);
  var word2 = cap2 + mystr[1].slice(1);
  var word3 = cap3 + mystr[2].slice(1);
  var word4 = cap4 + mystr[3].slice(1);
  var sentece = word1 + " " + word2 + " " + word3 + " " + word4;
  console.log(sentece);
}
// console.log(capital("my name is maheen zuhra and i am th estudent in smit how are you all"));

capital("the quick brown fox");

// Q12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestWord(mystr) {
//   var mystr1 = mystr.split(" ");
//   console.log(mystr1);

//   var logW = "";
//   for (var i = 0; i < mystr1.length; i++) {
//     console.log(mystr1[i]);

//     if (mystr1[i].length > logW.length) {
//       logW = mystr1[i];
//     }
//   }
//   console.log(logW);
// }
// longestWord("Web Development Tutorial");

// Q13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of function
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
function occurrences(str,letter){
    var occur = str.indexOf(letter)
    console.log(occur);
    
}
occurrences("JSResourceS.com","o")


// Q14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(r){
var circum = 2*(3.15)* r
return circum

}
console.log(calcCircumference(5));


function calcArea(rad){
    var circle = (3.15)* (rad**2) ;
    return circle;
}
console.log(calcArea(12));
