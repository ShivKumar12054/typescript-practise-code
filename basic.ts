// variable
// let firstName: string = "shva kumar";
// console.log(firstName);

// firstName = "sam";

// console.log(firstName);

//declaring boolean

// let areYouMale: boolean = true;
// areYouMale = false;

// typescript inference : means declaring i.e let name: string = 'shiva';   string is not necessary bcz as soon as you assign something it just assume that is type of that assigned variable
// example

// let nameHel = "hello";

// any: if a variable is set any then it can anything kind of defeats the purpose of typescript

// type safe the funcitons
// exmaple
/**          here the parameter must be number we are making sure that when ever this fun is
called always number has to be put but this can be also made to accept two types[check below code]      */

// function square(num: number) {
//   return num * num;
// }

// const res = square(9);

//exmaple 2

// function personDetails(name: string, age: number, isFucker: boolean) {
//   console.log(name, age, isFucker);
// }

// personDetails("sam", 99, true);

//default values for the functions
// function person(name: string = "stranger") {
//   console.log(`Hello there ${name}`);
// }

/** function return type
 * - we can specify the type returned by a function.
 * - explicitl we are asking the funciton to return some type
 */

// function sum(num: number): number {
//   return num + num;
// }

/** If a funtion return a nothing then typescript makes it void return type by default
 * if we do not explicitly mention the return type then it can return any type unless we type safe
 *
 */

/** never - it indicates that a function does not return any value
 * usally used on a funtion that alway throws the exception or function in loops forever and never return
 */
// example

// function makeError(msg: string): never {
//   throw new Error(msg);
// }

// function gameLoop(): never {
//   while (true) {
//     console.log("Game loop running@");
//   }
// }

// Exercise 01

// function twoFer(name: string = "you"): string {
//   return `one for ${name}, one for me`;
// }

// console.log(twoFer());;

/******************************************** OBJECTS: objects can be typed by declaring what the object should look like in the annotation */
// function printSomething(something: {first: string, second: number, last: string}) {
// console.log(something.first, something.second, something.last)
// }

// printSomething({first: "hola", second: 34, last: "Sssss"})

//variables : we can accept he object which should put numbers,  inside the x and y as numbers only [while handling the objects we need mentions the property name as it is]

// let coordinate : {x: number, y: number} = {x: 33, y: 33}

// function randomCoordinate(): {x: number, y: number} {
//     return {x: Math.random(), y: Math.random()}
// }

/** TYPE ALIAS
 * - instead of writing out object types in an annotation, we can decalre them separatly in a type alias, which
 *      is simply the desired shape of the obejct
 * example:
 *              type Person = { .  // using type aliasing here
 *                          name: string;
 *                          age: number
 *                      }
 *
 * const someFun = (person: Person) => {}
 */

// type Animal = {
//     name: string,
//     age: number
// }

// const sayHappyAnimalDay = (person: Animal) => {
//     return `hey my name is ${person.name} and i'am ${person.age} years old, and it is my Bday today!!`
// }

// console.log(sayHappyAnimalDay({ name: "shiv", age: 897 }));

/** Nested objects
 * we can also make a function accept a nested objects format simply by using type
 */

// const song = {
//   songName: "abcdef",
//   artists: "nana mikoski",
//   credits: {
//     producer: "alen skyan",
//     writer: "miyo karima",
//   },
// };

// if a function accepts a certain object with type we can do as

// function mySongs(mySongs: {
//   songName: string;
//   artists: string;
//   credits: {
//     producer: string;
//     writer: string;
//   };
// }) {
//   console.log(`this song sang by ${mySongs.songName} and artists worked on were ${mySongs.artists}
//     and also credits goes to ${mySongs.credits.producer} and ${mySongs.credits.writer}`);
// }

// mySongs({
//   songName: "kon mino kasio",
//   artists: "nana mikoski",
//   credits: {
//     producer: "alen skyan",
//     writer: "miyo karima",
//   },
// });

// so the above code can optimize or can be make easy by using type'ing the object and making use of iti.e

// type SongDetail = {
//   songName: string;
//   artists: string;
//   credits: {
//     producer: string;
//     writer: string;
//     noOfArtistWorked: number;
//   };
// };

// function sonuSongs(mySongs: SongDetail) {
//     console.log(`hello, song is ${mySongs.songName} and artists are ${mySongs.artists}
//     ARE CREDITS GO TO ${mySongs.credits.producer} anddddd ${mySongs.credits.writer}
//     andddd ${mySongs.credits.noOfArtistWorked}!!!!!!`);
// }

// sonuSongs({
//   songName: "lufy",
//   artists: "zorochin",
//   credits: {
//     producer: "sambit",
//     writer: "Gj",
//     noOfArtistWorked: 77
//   }
// })


// making an property attr optional while type safing it - append with ?

// let's say i have a object with X and Y and z value optional(i.e it can either have some values or not)

// type Dimention = {
//     x: number,
//     y: number,
//     z?: number
// }

// function calDimention(dataForCalculation: Dimention): number {
//     return dataForCalculation.x * dataForCalculation.y
// }

// console.log(calDimention({x: 2, y:2}));













/**
 * ARRAYS - arrays can be types using type annotation followed by []
 *
 *
 */

// let arr: string[] = ["shiva", "kumart", "jjkk"];
// let numArr: number[] = [4,44 ,5 ,67 ,7, 88]

// //alternative way of typeing a array

// let arr1: Array<string> = ['hola', 'amigos', 'thres']

// //multi dimentional array

// let mulArr: string[][] = [
//     ["shiv", "sai", "kumar"],
//     ["cse", "me", "ec"],
//     ["BEN", "Mys", "Kar"]
// ]





/** UNION TYPES
 * - making a varibale or funtion to accept more then one type is called UNION typeing
 *
 */

// here age can only accept either number of string
let ageOfMe: string | number = "26"
ageOfMe = 27

// union types in arrays

// to have either array of string or number we use this
let numStrArr123: string[] | number[] = []

//to make array accepts string and number inside it we can use
let numStrArr: (string | number)[] = []
numStrArr = ["shiva", 33, "sam", 1234]



//union types in function







//Interfaces

// interface is same as type alising
/**
 * example - interface Name {
 *  id: number,
 *  first: string,
 *  last: string,
 *  sayHi: () => string
 * }
 */

interface Animal {
  name: string,
  species: string,
  diet: string,
  eats: () => string
}

const lion: Animal = {
  name: "Lion",
  species: "mammals",
  diet: "carnivoros",
  eats: () => {
              return "eats deer and other animal"
            }}

// console.log(lion.eats);



// reopening the interface - so both inteface's are combined as one at compiling, they are not two diff interfeace this is called reopeening interface

interface Dog {
  name: string,
  breed: string
}

interface Dog {
  bloodLine: string,
  bark(): string
}

// now the object mano will have all four properties in it

const mano: Dog = {
  name: "Mano jujustki",
  breed: "jerman sherpherd",
  bloodLine: "royal",
  bark: () => {return 'hola doggy!!!!!'},
};

/**   Interface                       vs                        type
 *  Syntax:
 *      interface Name {                                      type Name = {
 *                                                                              }
 *                }
 * 1. they can only describe                              1.can be for variables and objects and string literals - it can describe any type
 *     the shapes of an objects.
 *      eg: type colour =  "red" | "blue"
 *           not possible in interface
 *
 * 2. reopen is possible                                    2. Not possible
 *
 *    interface Animal {
 *          name: string,
 *          species: string
 *         }
 *
 *    interface Animal {
 *          lifeSpan: number,
 *          diet: string
 *        }
 *
 *    -> it is possible
 *
 * 3. a class can inherit mulitple interface's              3. not possible
*/




/** Tuples and Enums
 * - tuples area special type exclusive to Typescript
 * - Tuples are array of fixes lengths and ordered with specific types - like super rigid array
 * - tuples are fixed and types are specified also the order how it is declared
 * - main disadvantage is when we use myTuple.push(anyvalue) it will get inserted regardless of the type typle type safe
*/

let myTuple: [number, string, boolean] = [11, "sjbf", true];


console.log(myTuple);

myTuple.push(232323)
console.log(myTuple);


/** Enum -
 * - enums allow us to define a set of names constants. we can give these constants numeric or string values
 * -
 * Yet to learn -
 */













/** CLASSES */

// class Car {
//   name: string
//   branch: string
//   constructor(name: string, branch: string) {
//     this.name = name;
//     this.branch = branch;
//   }
// }

//instead of th eabove code we can also use shorthand property as - here we can remove the extra code that is as above this is called Parameter Properties Shorthand

// class Bike {
//   constructor(public name: string, public brand: string) {
//     this.name = name;
//     this.brand = brand;
//   }
// }





/** GENERICS -
 *
 */
