// #!/usr/bin/env node

// Q : 🚀 2 :: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, 
//would you like to learn some Python today?”.

// let personName : string = "Muhammad Sami";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);


// Q : 🚀 3 :: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// const personName : string = "muhammad sami";
// console.log(`Hello , ${personName.toLowerCase()}`);
// console.log(`Hello , ${personName.toUpperCase()}`);
// console.log(`Hello , ${personName.replace(/\b\w/g, c=>c.toUpperCase())}`);



// Q : 🚀 4 :: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should
// look something like the following, including the quotation marks:

//  Albert Einstein once said, “A person who never made a mistake never tried anything new.”


// let famousPerson : string = "Albert Einstein";
// let quote : string = "“A person who never made a mistake never tried anything new.”";
// console.log(`${famousPerson} once said, ${quote} `);



// Q : 🚀 5 :: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.


// let famous_Person : string = "Albert Einstein";
// let message :string = `${famous_Person} once said, "“A person who never made a mistake never tried anything new.”"`;
// console.log(message);




// Q : 🚀 6 :: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// const personName : string = "\t\n Muhammad Sami \n\t";
// console.log("Orignal PersonName : " , personName);
// console.log("Stripped : " , personName.trim());



// Q : 🚀 7 and 🚀 8 ::Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.

// 🚀 8 :: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.


// console.log(5 + 3);
// console.log(11 - 3);
// console.log(4 * 2);
// console.log(16 / 2);




// Q : 🚀 9 :: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that
// reveals your favorite number. Print that message.


// let favNumber : number = 15;
// let message = `My favorite Number is ${favNumber}`;
// console.log(message);


// Q : 🚀 10 :: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific
 // to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one 
 // sentence describing what the program does.




// Q : 🚀 11 :: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each
// element in the list, one at a time.


// let friends: string[] = ["Musa", "Yahya", "Abdullah", "Azan"];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);



// Q : 🚀 12 :: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


// let friends : string[] = ["Musa", "Yahya", "Abdullah", "Azan"];
// let message : string = " would you like to learn some Python today?";

// console.log(`Hello ${friends[0] + message}`);
// console.log(`Hello ${friends[1] + message}`);
// console.log(`Hello ${friends[2] + message}`);
// console.log(`Hello ${friends[3] + message}`);



// Q : 🚀 13 :: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


// let favTransportation : string[] = ["Civic", "Honda Motorcycle", "Lamborghini", "Airplane"];
// favTransportation.map((items) => console.log(`I would Like to own a ${items}`));



// Q : 🚀 14 :: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.



// let guest_List : string[] = ["Nawab", "Uneeb", "Ramiz", "Zafar"];

// guest_List.map((items) => console.log(`Dear ${items}, You Are invited To The Dinner`));



// Q : 🚀 15 :: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.



// let guest_List : string[] = ["Nawab", "Uneeb", "Ramiz", "Zafar"];
// console.log(`${guest_List[2]}, Cant Make it to dinner`);
// guest_List.splice(2,1,"Rizwan")
// guest_List.map((items) => console.log(`Dear ${items}, You Are invited To The Dinner`));




// Q : 🚀 16 :: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



// let guest_List : string[] = ["Nawab", "Uneeb", "Rizwan", "Zafar"];
// console.log(`Great News! We Found A bigger Table`);
// guest_List.unshift("Abbas");
// guest_List.splice(Math.floor(guest_List.length/2),0,"Shaheen");
// guest_List.push("Usman Khan");
// guest_List.map((items) => console.log(`Dear ${items}, You Are invited To The Dinner`));




// Q : 🚀 17 :: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.





// let guest_List : string[] = ["Abbas", "Nawab","Shaheen" , "Uneeb", "Rizwan", "Zafar", "Uaman Khan"];
// console.log(`Unfortunately new dinner table won't arrive in time for the dinner, I can invite only two people for dinner.`);

// while(guest_List.length > 2) {
//     let deletedGuest : string | undefined = guest_List.pop();
//     if(deletedGuest !== undefined) {
//         console.log(`Sorry ${deletedGuest}, We Can't Invite You to dinner.`);   
//     }
// }
// guest_List.forEach(guest => {console.log(`Dear ${guest}, You Are Still Invited !!!`)});
// guest_List.splice(0,guest_List.length)
// console.log("Updated Guest List" , guest_List);







// Q : 🚀 18 :: Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




// // Think of at least five places in the world you’d like to visit.
// let placesToVisit : string[] = ["Paris" , "Switzerland", "Moscow", "Italy", "Japan"];

// // array is not in alphabetical order.
// console.log("Orignal Order ", placesToVisit);

// // • Print your array in alphabetical order without modifying the actual list.
// console.log("Alphabetical Order :", placesToVisit.slice().sort());

// // • Show that your array is still in its original order by printing it.
// console.log("Orignal Order ", placesToVisit);

// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Reverse Alphabetical Order :", placesToVisit.slice().sort().reverse());

// // • Show that your array is still in its original order by printing it again.
// console.log("Orignal Order after reverse sorting", placesToVisit);

// // • Reverse the order of your list. Print the array to show that its order has changed.
// placesToVisit.reverse()
// console.log("Reverse Order" , placesToVisit);

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// placesToVisit.reverse()
// console.log("Back To Order" , placesToVisit);

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log("Sorted in alphabetical order :", placesToVisit.slice().sort());

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("Sorted in Reverse Alphabetical Order :", placesToVisit.slice().sort().reverse());






// Q : 🚀 19 :: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



// let guest_List : string[] = ["Nawab", "Uneeb", "Ramiz", "Zafar"];

// guest_List.map((items) => console.log(`Dear ${items}, You Are invited To The Dinner`));

// let lengthGuests : number = guest_List.length;
// console.log(`We Are inviting Total ${lengthGuests}`);






// Q : 🚀 20 :: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


// let countries :string[] = ["USA", "Canada", "Japan", "France", "Germany"]

// // Print List of countries
// countries.forEach(country => {console.log(country);
// })




// Q : 🚀 21 :: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// interface itCourse {
//     name : string,
//     location : string,
//     onsiteStudents :number
// };

// let itCourse = {
//     name : "Typescript and Javascript",
//     location : "Governor House Sindh",
//     onsiteStudents : 50000,
// }
// console.log(itCourse);




// Q : 🚀 22 :: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


// let errorArray : string[] = ["A", "B", "C", "D"];
// // Producing error
// console.log(errorArray[5]);
// // Error Removed
// console.log(errorArray[3]);





// Q : 🚀 23 :: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// let five : number = 5;
// let ten : number = 10;
// // test 1
// console.log(five == 5);
// // test 2
// console.log(ten == 10);
// // test 3
// console.log(five !== 5);
// // test 4
// console.log(ten != 10);
// // test 5
// console.log(ten < five);
// // test 6
// console.log(10 >= 5);
// // test 7
// console.log(five == ten);
// // test 8
// console.log(5 >= 10);
// // test 9
// console.log(5 < 10);
// // test 10
// console.log(5 <= 10);




 


// Q : 🚀 24 :: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array




// • Tests for equality and inequality with strings

// let name : string = "sami";
// console.log(name == "sami");
// console.log(name != "sami");


// • Tests using the lower case function

// let upperCase : string = "APPLE";
// console.log(`APPLE is equal to apple after converting to lowerCase`);
// console.log(upperCase.toLowerCase() == "apple");
// console.log(`APPLE is not equal to apple after converting to lowerCase`);
// console.log(upperCase.toLowerCase() !== "apple");


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// let ten : number = 10;
// let two :number = 2;

// console.log(10 > 2);
// console.log(10 < 2);
// console.log(ten >= two);
// console.log(ten <= two);


// • Tests using "and" and "or" operators

// Using && Operator (and)

// console.log(ten == two && ten > two);
// console.log(ten !== two && ten > two);

// // Using || Operator (or)

// console.log(ten == two || ten < two);
// console.log(ten !== two || ten > two);
// console.log(ten == ten || ten >= ten);



// • Test whether an item is in a array

// let fruits = ["apple", "orange", "banana"]
// // orange is included in fruits array
// console.log(fruits.includes("orange"));

// // • Test whether an item is not in a array

// orange is not included in fruits array
// console.log(!fruits.includes("orange"));






















