// 1. Write a program that displays current date and time in  your browser. 

// var rightNow = new Date();
// document.write(rightNow);

// 2. Write a program that alerts the current month in words.  For example December. 
// var currentDate = new Date();

// var currentMonth = currentDate.getMonth();
// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   var currentMonthName = monthNames[currentMonth];
// alert("The current month is: " + currentMonthName);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show  Sun. ;

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("The current day is: " + nameOfToday);

// 4. Write a program that displays a message “It’s Fun day” if  its Saturday or Sunday today.

// var currentDate = new Date();

// var currentDay = currentDate.getDay();

// // Check if it's Saturday (6) or Sunday (0)
// if (currentDay === 6 || currentDay === 0) {
//   document.write("It's Fun day");
// } else {
  
//   document.write("It's not Fun day");
// }

// 5. Write a program that shows the message “First fifteen  days of the month” if the date is less than 16th of the month  else shows “Last days of the month”. 
// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if (currentDay < 16) {
//   document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }

// 6. Write a program that determines the minutes since  midnight, Jan. 1, 1970 and assigns it to a variable that  hasn't been declared beforehand. Use any variable you like  to represent the Date object.

// var currentDate = new Date();
// var minutesSince1970 = Math.floor(currentDate.getTime() / (1000 * 60));
// document.write("Minutes since Jan. 1, 1970: " + minutesSince1970);


// 7. Write a program that tests whether it's before noon and  alert “Its AM” else “its PM”.
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// };

// 8. Write a program that creates a Date object for the last day  of the last month of 2020 and assigns it to variable named  laterDate.
// var laterDate = new Date(2020, 11 + 1, 0);
// document.write("Later Date: " + laterDate);


// 9. Create a date object of the starting date of this Ramadan  and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 

// var startingDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - startingDate.getTime();
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days passed since 1st Ramadan: " + daysPassed);


// 10. Write a program that displays in your browser the  seconds that elapsed between the reference date and the  beginning of 2015.
// var currentDate = new Date();
// var referenceDate = new Date(2015, 0, 1); 
// var timeDifference = Math.floor((currentDate.getTime() - referenceDate.getTime()) / 1000);
// document.write("Seconds elapsed since the beginning of 2015: " + timeDifference);


// 11. Create a Date object for the current date and time.  Extract the hours, reset the date object an hour ahead and  finally display the date object in your browser. 

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated Date: " + currentDate);


// 12. Write a program that creates a date object and show the  date in an alert box that is reset to 100 years back? 

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);



// 13. Write a program to ask the user about his age. Calculate  and show his birth year in your browser.
// var age = prompt("Please enter your age:");

// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2  decimal places. Display the following fields: 


// a. Customer Name 
// b. Current Month
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
document.write("<h1>K-Electric Bill</h1>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>");
document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable + "</p>");

