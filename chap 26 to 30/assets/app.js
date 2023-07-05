
// 1. Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

// var userInput = +prompt("Enter A Positive integer number");
// var roundNum = Math.round(userInput);
// var floorNum = Math.floor(userInput);
// var ceilNum = Math.ceil(userInput);
// document.write("Number: " + userInput + "<br>" + "Round off value: " + roundNum + "<br>" + "Floor value: " + floorNum + "<br>" + "Ceil value: " + ceilNum); 




// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the numbe
// var number1 = +prompt("Enter a negative Integer Number");
// var roundNum = Math.round(number1);
// var floorNum = Math.floor(number1);
// var ceilNum = Math.ceil(number1);
// document.write("Number: " + number1 + "<br>" + "Round off value: " + roundNum + "<br>" + "Floor value: " + floorNum + "<br>" + "Ceil value: " + ceilNum);


// 3. Write a program that displays the absolute value of a  number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// var num1 = +prompt("Enter a Number");
// var absolute = Math.abs(num1);
// document.write("The absolute value of " + num1 + " is " + absolute);



// 4. Write a program that simulates a dice using random()  method of JS Math class. Display the value of dice in your  browser.:

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfdice = Math.floor(improvedNum);
// document.write("random dice value :" + numberOfdice)



// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 

// var valueOfCoin = Math.random() * 3;
//  var diceNo = Math.floor(valueOfCoin);
// if (diceNo < 2){
//     document.write(diceNo + "<br>" + " random coin value: " + "Tails" )
// }
// else{
//     document.write(diceNo + "<br>" + " random coin value: " + "Heads")
// }

// 6. Write a program that shows a random number between 1  and 100 in your browser.
// var randomNum = Math.random() * 100 + 1 ;
// var num1 = Math.floor(randomNum);
// document.write("random number between 1 and 100: " + num1 );

// 7. Write a program that asks the user about his weight. Parse  the user input and display his weight in your browser.  Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 
// var userWeight = prompt("enter your weight in kilograms");
//  var parse = parseFloat(userWeight);
//   document.write("The weight of user is " + parse.toFixed(1) + " kilograms");

// 8. Write a program that stores a random secret number from  1 to 10 in a variable. Ask the user to input a number  between 1 and 10. If the user input equals the secret  number, congratulate the user.
var randomNo =Math.ceil( (Math.random() * 10)) ;
document.write(randomNo);
var askUser = +prompt("Input a number between 1 to 10");
if(askUser === randomNo){
    alert("Congratulations!");}
else{
    alert("Try again!");
}
