// #!/usr/bin/env node


// 25 to 45 Questions Answers


// Q : 🚀 25 :: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


// let alien_color : string = "Green";
// if(alien_color === "Green"){
//     console.log(`Congratulations, You Just Earned 5 Points.`);
// }

// if(alien_color !== "Green"){

// }




// Q : 🚀 26 :: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.



// // This one runs if Statement
// let alien_color : string = "Green";
// if(alien_color === "Green"){
//     console.log(`Congratulations, You Just Earned 5 Points for shooting the alien.`);
// } else {
//     console.log(`Alien color is not Green, You Earned 10 Points.`);
// };

// // This one runs else Statement
// let alien_color : string = "Red";
// if(alien_color === "Green"){
//     console.log(`Congratulations, You Just Earned 5 Points for shooting the alien.`);
// } else {
//     console.log(`Alien color is not Green, You Earned 10 Points.`);
// };






// Q : 🚀 27 :: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// let alien_color : string = "Green";

// First Version 

// if(alien_color === "Green"){
//     console.log(`(Version 1) Alien color is Green, player earned 5 points.`);
// } else if(alien_color === "Yello"){
//     console.log(`(Version 1) Alien color is Yello, player earned 10 points.`);
// } else if(alien_color === "Red"){
//     console.log(`(Version 1) Alien color is Red, player earned 15 points.`);
// }


// Second Version


// let alien_color : string = "Red";

// if(alien_color === "Green"){
//     console.log(`(Version 2) Alien color is Green, player earned 5 points.`);
// } else if(alien_color === "Yello"){
//     console.log(`(Version 2) Alien color is Yello, player earned 10 points.`);
// } else if(alien_color === "Red"){
//     console.log(`(Version 2) Alien color is Red, player earned 15 points.`);
// }


// Third Version


// let alien_color : string = "Yello";

// if(alien_color === "Green"){
//     console.log(`(Version 3) Alien color is Green, player earned 5 points.`);
// } else if(alien_color === "Yello"){
//     console.log(`(Version 3) Alien color is Yello, player earned 10 points.`);
// } else if(alien_color === "Red"){
//     console.log(`(Version 3) Alien color is Red, player earned 15 points.`);
// }




// Q : 🚀 28 :: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.


// let age : number = 64;
// console.log(age);
// if(age < 2){
//     console.log(`person is a baby.`);
// } else if(age >= 2 && age < 4){
//     console.log(`person is a toddler.`);
// } else if(age >= 4 && age < 13){
//     console.log(`person is a kid.`);
// } else if(age >= 13 && age < 20){
//     console.log(`person is a teenager.`)
// } else if(age >= 20 && age < 65){
//     console.log(`person is an adult.`)
// } else if(age >= 65){
//     console.log(`person is an elder.`);
// }




// Q : 🚀 29 :: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


// let favoriteFruits : string[] = ["Banana", "Mango", "Strawberry"]
// if(favoriteFruits.includes("Apple")){
//     console.log(`I really like apple`)
// }
// if(favoriteFruits.includes("Banana")){
//     console.log(`I really like Bananas`)
// }
// if(favoriteFruits.includes("Mango")){
//     console.log(`I really like Mangos`)
// }
// if(favoriteFruits.includes("Strawberry")){
//     console.log(`I really like Strawberrys`)
// }
// if(favoriteFruits.includes("Orange")){
//     console.log(`I really like Orange`)
// }






// Q : 🚀 30 :: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.



// let userNames : string[] = [`Admin`, "Taha", "Saba", "Sami", "Abdullah"];

// userNames.forEach(oneUser => {
//     if(oneUser == "Admin"){
//         console.log(`Hello ${oneUser}, would you like to see a status report?`);
//     }else {
//         console.log(`Hello ${oneUser}, thank you for logging in again.`);
//     }
// });





// Q : 🚀 31 :: No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


// let userNames : string[] = [];

// if(userNames.length == 0){
//     console.log(`We need to find some users!`);
// } else {
//     userNames.forEach(oneUser => {
//             if(oneUser == "Admin"){
//                 console.log(`Hello ${oneUser}, would you like to see a status report?`);
//             }else {
//                 console.log(`Hello ${oneUser}, thank you for logging in again.`);
//             }
//         });
// }




// Q : 🚀 32 :: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



// let current_users : string[] = ["Ali", "Sami", "Abdullah", "Ameen", "Hamzah"];

// let new_users : string[] = ["Zia", "Shahzaib",  "Sami", "Mosa", "Ali"];


// new_users.forEach(new_one_user => {
//     let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
//     if(our_condition){
//         console.log(`Sorry ${new_one_user}, is already taken!`)
//     } else{
//         console.log(`This UserName ${new_one_user}, is available`)
//     }
// })







// Q : 🚀 33 :: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.



// let numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9]
// for(let oneNumber of numbers){
//     let ordinalEnding : string;
//     if(oneNumber === 1){
//         ordinalEnding = "st";
//     }else if(oneNumber === 2){
//         ordinalEnding = "nd";
//     }else if(oneNumber === 3){
//         ordinalEnding = "rd";
//     }else{
//         ordinalEnding = "th";
//     }
//     console.log(`${oneNumber}${ordinalEnding}`);
// }




// Q : 🚀 34 :: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!



// let favorite_pizza : string[] = ["Tikka", "BBQ", "Fajita"]
// for(let onePizza of favorite_pizza){
//     console.log(`I Like ${onePizza}`);
// }
// console.log(`I really love pizza!`);




// Q : 🚀 35 :: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!



// let animal :string[] = ["Cat", "Dog", "Rabbit"]
// for(let oneAnimal of animal){
//     console.log(`${oneAnimal} would make a great pet.`);
// }
// console.log(`Any of these animals would make a great pet!`);



// Q : 🚀 36 :: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function make_shirt(size : string, message : string) {
//     console.log(`You Selected ${size} size shirt with ${message} print on shirt`);
// }
// make_shirt("Medium","Keep Grinding")



// Q : 🚀 37 :: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// function make_shirt(size : string = "Large", message : string = "I Love TypeScript") {
//     console.log(`Creating a ${size} size shirt with ${message} prints on shirt`);
// }
// make_shirt()
// make_shirt("Medium")
// make_shirt("Small", "I Love javaScript");



// Q : 🚀 38 :: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


// function describe_city( city : string , country : string = "Pakistan") {
//     console.log(`${city} is in ${country}`)
// }
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("Tokyo", "Japan")



// Q : 🚀 39 :: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.



// function city_country(city : string, country : string): string {
//     return `${city}, ${country}`;
// };
// console.log(city_country("Karachi" ,"Pakistan"));
// console.log(city_country("Tokyo","Japan"));
// console.log(city_country("Dubai","United Arab Emirates"))



// Q : 🚀 40 :: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


// function make_album(artistName : string, albumTitle : string, tracks? : number) {
//     let album : { artist : string,title : string, tracks? : number} = {
//         artist : artistName,
//         title : albumTitle,
//     };
//     if(tracks !== undefined){
//         album.tracks = tracks
//     }
//     return album
// }

// let album1 = make_album("Ed Sheeran", "Album Title 1")
// let album2 = make_album("Tayor Swift", "Album Title 4")
// let album3 = make_album("Atif Aslam", "Album Title 10", 7)
// console.log(album1);
// console.log(album2);
// console.log(album3);





// Q : 🚀 41 :: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// function show_magicians(magicians: string[]) {
//     magicians.forEach(name => {
//         console.log(name);
//     });
// }
// let magicians_names : string[] = ["David Copperfield", "David Blaine", "Dynamo", "Derren Brown"]
// let printMagician = show_magicians(magicians_names)




// Q : 🚀 42 :: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// function show_magicians(magicians: string[]) {
//     magicians.forEach(name => {
//         console.log(name);
//     });
// }

// function make_great(magicians : string[]){
//     return magicians.map(name => `The Great ${name}`)
// }

// let magicians_names : string[] = ["David Copperfield", "David Blaine", "Dynamo", "Derren Brown"]
// let greatMagician = make_great(magicians_names)
// show_magicians(greatMagician)




// Q : 🚀 43 :: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



// function show_magicians(magicians: string[]) {
//     magicians.forEach(name => {
//         console.log(name);
//     });
// }

// function make_great(magicians : string[]){
//     return magicians.map(name => `The Great ${name}`)
// }

// let magicians_names : string[] = ["David Copperfield", "David Blaine", "Dynamo", "Derren Brown"]

// let copy_magicians_names = magicians_names.slice()
// let copy_great_magicians = make_great(copy_magicians_names)

// console.log(`Original Array\n`);
// show_magicians(magicians_names)
// console.log(`\nCopied Array\n`);
// show_magicians(copy_great_magicians)





// Q : 🚀 44 :: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


// function makeSandwich(...items : string[]) {
//     console.log(`\nMaking a Sandwich With the following items : \n`);
//     items.forEach(singleItem => console.log(singleItem))
//     console.log(`\nEnjoy Your Sandwich`)
// }
// makeSandwich("bread","butter")
// makeSandwich("Chicken", "Cheese", "Egg")
// makeSandwich("bread","butter", "Chicken", "Tomato", "Mayo", "Cheese", "Egg")




// Q : 🚀 45 :: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


// type car = {
//     manufacturer : string,
//     model : string,
//     [key : string] : any
// }
// function create_car(manufacturer :string, model : string, optional : Record<string, any>): car {
//     return{
//         manufacturer,
//         model,
//         ...optional
//     }
// }
// const myCar : car = create_car("Toyota", "Corolla", {color : "White", year : "2024"})
// console.log(myCar);





























































