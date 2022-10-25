//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.unshift(17);
console.log(ages[ages.length - 1] - ages[0]);



//1c.	Use a loop to iterate through the array and calculate the average age. 
let count = 0;
let total = 0;

for (index = 0; index < ages.length; index++) {
    count++;
    total += ages[index];
}

let average = total / count;
console.log(average);



//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let nameTotal = 0;

for (index = 0; index < names.length; index++) {
    nameTotal += names[index].length;
}

let namesAverage = (nameTotal / names.length);
console.log(namesAverage);



//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let joinedNames = "";

for (index = 0; index < names.length; index++) {
    joinedNames += (names[index] + " ");
}
console.log(joinedNames);



//3.	How do you access the last element of any array?
let lastElement = names.slice(-1); //the negative index value calculates index from the end of the array
console.log(lastElement);




//4.	How do you access the first element of any array?
let firstElement = names.slice(0, 1); //index is specific for the exact location of the firt array element. 
console.log(firstElement);




//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let namesLengths = [];

for (index = 0; index < names.length; index++) {
    namesLengths.push(names[index].length);
}
console.log(namesLengths);




//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let namesSum = 0;

for (index = 0; index < namesLengths.length; index++) {
    namesSum += namesLengths[index];
}
console.log(namesSum);



//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatFunction(word, n) {
    let joinedWords = "";
    for (index = 0; index < n; index++) {
        joinedWords += word;
    }
    console.log(joinedWords);
}
concatFunction("Greetings", 5);



//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
function createFullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}

createFullName("Kristina", "Rembacz");


//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function checksForMinimum100Sum(array) {
    let arraySum = 0;
    for (index = 0; index < array.length; index++) {
        arraySum += array[index];
    } if (arraySum >= 100) {
        console.log("true");
    } else {
        console.log("false")
    }
}
checksForMinimum100Sum(ages);
lowerThan100Numbers = [1, 2, 3, 4, 5]; //extra test to ensure an array sum less than 100 will evaluate to false. 
checksForMinimum100Sum(lowerThan100Numbers);



//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function returnArrayAverage(array) {
    let arrayTotal = 0;

    for (index = 0; index < array.length; index++) {
        arrayTotal += array[index]
    }
    console.log(arrayTotal / array.length);
}

returnArrayAverage(ages);



//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareArrayAverages(array1, array2) {
    let array1Total = 0;
    let array2Total = 0;
    let array1Average = 0;
    let array2Average = 0;

    for (index = 0; index < array1.length; index++) {
        array1Total += array1[index]
        array2Total += array2[index]

        array1Average = (array1Total / array1.length)
        array2Average = (array2Total / array2.length)

    } if (array1Average > array2Average) {
        console.log("true");
    } else {
        console.log("false");
    }
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 3, 4, 5, 6];

compareArrayAverages(array1, array2);



//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside === true) && (moneyInPocket > 10.50)) {
        console.log("true");
    }
}

willBuyDrink(true, 11.20);



//13.	Create a function of your own that solves a problem. 

let yorkshireTerrier = {
    weight: 7,
    shedding: "light",
}

let stBernard = {
    weight: 144,
    shedding: "heavy",
}


willFamilyAdopt(yorkshireTerrier);
willFamilyAdopt(stBernard);

function willFamilyAdopt(dogForAdoption) {
    if ((dogForAdoption.weight < 60) && (dogForAdoption.shedding === "light")) {
        console.log("This dog is the perfect fit for our family!");
    } else {
        console.log("Unfortuantely, this dog is not the perfect fit for our family")
    }
}
