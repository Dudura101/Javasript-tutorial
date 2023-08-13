// Comments is a lines of code that javasrip ignores

//This is an in-line comment
// A multi-line comment is demonstrated below

/* var  number = 5;
var name = "Smith"; */

/* The Data types include 
Undefined: It is in data that it is not defined
Null:  Means nothing
Boolean: Either true or false
String: Where text is stored
Symbol: Unique value
Number: Simply a number
Object: Store key values

*/

// Declaring a variable
var myName = "Namboh"

// Changing decleared variable
myName = "Indira"

// Let can be used within a scope
let hisName = "Micheal"

// const is a value that cannot be changed
const herName = "Queenet"

// Assigning a variabele is different from declearing it

// Assigning a variable
var myCar;

// Declaring and assignig the variable in one line
var theCar = "Limo"

// Assigning the content of myCar to theCar
theCar = myCar

// CONSOLE
// console.log() is used to enter suff into the console

// 'Hello' will be entered into the console with it input below
console.log("Hello")


// Declearing and initializing the variable 

// 'var myNum' is declearing the variable and '= 12' is initialising it
var myNum = 12


var a = 5
var b = 10
var c = 15
var d = 20
var e = "I am"
  
  //ADDITION
a = a + 5  // Will equal 10 (Number)
   //OR
a += 5 // Will still equal 10

    //SUBTRACTION
b = b - 5 // Equals 5
//OR
b -= 5 // Equals 5 

    //MULTIPLICATION
c = c * 5 // Equals 75
// OR
c *= 5 // Equals 75

   //DIVITION
d = d / 5 // Equals 4
// OR
d /= 5 // Equals 4

e = e + " a girl" // Gives 'I am a girl' (STRING)
   // OR
e += " a girl" // 'I am a girl'

/*
It is impotant to take note of the casing
       Example
var MyName (wrong)
var MYNAME (wrong)
var myname (correct)
var myName (very correct)
*/ 

// Addition of numbers
var total = 5 + 5;
console.log(total) // 10

// Subtraction of numbers
var diff = 10 - 5
console.log(diff) // 5

// Multipication of numbers
var product = 15 * 5 
console.log(product) // 75

// Division of numbers
var share = 20 / 4
console.log(share) // 4

// Incrementation of numbers
var myNum = 10

myNum + 1
  // Is same as:
myNum++

//Decrementation of numbers
var myWeight = 40

myWeight - 1
  // Is same as:
myWeight--

// Decimal
var myScore = 19.5
var myNumb = 0.00052 

//Addition, Subtracttion, Multiplication and Division of decimal numbers is same as inn intergers

// Finding the remainder
var number
number = 16 % 5 // remainder is 1

// Declareing string variables
var myFish = "Tilapia"

// Quote problems
/* 
var bestFood = "My best food is "rice"" (wrong)
var bestFood = "My best food is 'rice'" (correct)
var bestFood = 'My best food is "rice"' (correct)
var bestFood = "My best food is \"rice\"" (correct) [The back slashes will not be shown]
 */

    // Stings And Variables
var colour = "blue"
var size = "fat"
var gender = "man"
var action = "dancing"
   // Combining the string and variable
var myDes = "The " + size + " " + gender + " with the " + colour + " hat " + "was " + action + "."
// The ouput from the above is 'The fat man with the blue hat was dancing.'

// Assigning a variable to a variable
var favFood = "My favourite food is rice"
var inAdd = " and beans."
favFood += inAdd // 'My favourite food is rice and beans'

// Finding the length of string
var  favFriutLength
var favFruit = "Apple"

favFriutLength = favFruit.length 
console.log(favFriutLength) // 5

// Getting a specific character in a string 
var thirdLetter = ""
var firstLetter = ""
var bestFruit = "Orange"

thirdLetter = bestFruit[2] // It will be refering to third letter in the string 'a'
firstLetter = bestFruit[0] // Refers to the first letter of the string 'O'

/*
Individual Characters of a strinng  cannot be changed 
var statMent = "Delcome home"

stateMent[0] = "W" (wrong)
stateMent = "Welcome home" (correct) 
 */

var favGame = "Puzzle"
var lastLetter = favGame[favGame.length - 1] // Gives the last letter 'e'

var worstGame = "Cards"
var secondToTheLast = worstGame[worstGame.length - 2] // Gives 'd'

// Creating a Word Blank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myAdverb + " to the store " + myAdverb

    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

// ARRAYS
var theArray = ["Cindy", "15"] // Arrays are used to store different types of data

   // Nested Array
//Nested array is when the element in an array is another arry
var myArray = [["Girls", 19], ["Boys", 22]]

// Accessing data in arrays
var mainArray = [1,2,3,4,5,6,7,8,9,10]
var firstNum = [0] // Gives 1 
var secondNum = [1] // Gives 2
var tenthNum = [9] // Gives 10

// Modify data within an array
var hisNum = [1,2,3,4,5]
hisNum[3] = 6  // Now hisNum is [1,2,3,6,5]

// Getting data in an array of arrays
var bigArray = [[2,4,6,8], [1,3,5,], [1,4,9]]  
var  oneArray = bigArray[0][2] // Equals 6
var twoArray = bigArray[3][1]  // Equals 4

// Using push() In Arrays
// push() is to add items to the end of the array
var theList = ["Apple", "Orange", "Pineapple"]
var mareFruits = ["Pawpaw", "Mango"] // ["Apple,"Orange", "Pinapple", ["Pawpaw", "Mango"]]

// Using pop() In Arrays
// pop() removes the last item on an array
var herNum = [1,4,5,67,8]
var reMove = herNum = herNum.pop() // reMove is 8
   // herNum is [1,4,67]

// Using shift() In Arrays
// Remaevs the first element in the array
var subJects = ["Maths", "English", "French"]
var removeSub = subJects.shift()  // removeSub is "Maths"
  // subJects is ["English", "French"]

// Using unshift() In Arrays
// Adds items to the begining of the array
var oursub = ["Maths", "English", "French"]
oursub.shift()  // ourSub is ["English", "French"]
oursub.unshift("Physics")
   // Now ourSub is ["Physics", "English", "French"]

  // FUNCTIONS
  //Functions allows code to be reused
  // Anythig in the function is run anytime the function is called
function myData() {
   console.log("Hello")
  }
  myData(); //When ever the function i runthe console will rply 'Hello'

  // Functions with data in the parenthases
  function ourData(a, b) {
   console.log(a+b)
  }
ourData(12-7); // 12 is 'a' while 'b' is 7. So the asswer is 5

// SCOPE
// Scope is the visibility of variables
// Globalscope means they can be seen everywhere in your java script code e.g
var myGlobal = 10 // Global variable (Not within a function)
function fun1() {
   noGlobal = 7 ; //Global variable because it lacks the 'keyword'
}
function fun2() {
   var ouput = "";
   if (typeof myGlobal != "undefined") {
      ouput += "myGlobal: " + myGlobal;
   }
   if (typeof noGlobal != "undefined") {
      ouput += " not global" + noGlobal;
   }
   console.log(ouput)
}
fun1()
fun1()

// Local Scope
// Local scope is when variables are declaersd within a function
function myLocal() {
   var myScope = 5
   console.log(myScope)
}
myLocal(); // It is goning to give 5
console.log(myScope) // This will result to an error

// Having a local and global variable is possible
// The local scope will show
var outreWear = "T-Shirt";
function myOutfit() {
   var outreWear = "sweater"
   return outreWear
}
console.log(myOutfit()) // It is going to say 'sweater'
console.log(outreWear) // It's 'T-Shirt'

// Using Of Return
// We can return a value with the return statement
function addDition(a) {
   return a + 2
}
console.log(addDition(5)) //Answer is 7
// If the ruturn value is not specified it is undefined.
var myNum = 16
function theNum() {
   myNum = myNum =_6
} // It is going to be undefined

// Assigning a return value to a variable
var changed = 0
function change(c) {
   return (c + 2) * 3  // Answer is 21
}
changed = change(5); // Value retured will be stored in 'changed'

// Remeving and adding items
function firstList(arr, item) {
   arr.push(item)
   return arguments.shift();
}
var testArr = [1,2,3,4,5]
console.log(JSON.stringify(testArr)) // It will be [1,2,3,4,5]
console.log(firstList(testArr, 6)) // It's 1
console.log(JSON.stringify(testArr)) // It's [2,3,4,5,6]

// BOOLEANS
// Booleans can be used in javascript returns
function booLean() {
   return true
}

// If statments
function statMent(sky) {
   if (sky) {
      return "It is true"
   }
   return "It is false"
}
console.log(sky(false)) // 'It is false'

  // Equulity operator
function testEqual(val) {
   if (val = 12) {    // '=' is the assignment operater not eqality
      return "Equal"
   }
   return 'Not equal'
}
console.log(testEqual(12)) // 'Equal'

// Strict Equality
/*
5 === 5 (This is correct)
5 === '5' (It is wrong because it will not seen the 5 as a number)
5 == 5 (correct)
5 == '5' (correct)
 */
function testEqual(val) {
   if (val = 5) {  
      return "Equal"
   }
   return 'Not equal'
}
console.log(testEqual('5')) // Not equal

// Inequality Operator
function eQual(val) {
   if (val != 4) {
      return "Not Equal"
   }
   return "Equal"
}
console.log(eQual(5)) // Equal

// Strict Inequality
function notEqual(val) {
   if (val !== 17) {
      return "Not equal"
   }
   return "Equal"
}
console.log(notEqual('17')) // Not equal

// Greaterthan operator
function testGreaterThan(val) {
   if (val > 100) {
      return "Over 100"
   }
   if (val > 10) {
      return "Over 10"
   }
   return "10 or under"
}
console.log (testGreaterThan(15)) // 'Over 10'
   // Lessthan is the opposite

   // Greeaterthan or equal to
function  equalTo (val) {
   if (val >= 20) {
      return "20 or over"
   }
   if (val) {
      return "10 or Over"
   }
return "Less than 10"   
}
console.log(equalTo(25)) // '20 or over'
// It is the opposite of lessthan or equal to

// Checking two conditions
// And operator
function thierAge(age) {
   if (age > 20 && age < 30) {
      return "Perfect age"
   }
   return "bad age"
}
console.log(thierAge(19)) // 'Bad age'

//Or operator
function temParature(deg) {
   if (deg < 22 || deg > 28) {
      return "Normal temparature"
   }
   return "Abnormal tempparature"
}
console.logt(temParature(23)) // 'Normal temparatue'

// ELse statments
function elSe(val) {
   if (val > 5) {
      return "Bigger the 5"
   } else {
      return "5 or smaller"
   }
}
console.log(elSe(7)) // 'Bigger than 5'

// Else if statments
// When using else if statmentes the order in which the are arranged is very inportant the is why I begun with '5' be for '10'
function elseIf(val) {
   if (val > 5) {
      return "More than 5"
   } else if (val < 10) {
      return "Less than 10"
   } else {
      return  "Between 5 and 10"
   }
}
console.log(elseIf(7)) //'Less than 10'

// SWITCH STATEMENTS
function caseSwitch(val) {
   var answer = ""
   switch(val) {
      case 1: 
         answer = "alpha";
         break;
      case 2:
         answer = "beta"
         break;
      case 3: 
         answer = "gama";
         break;
      case 4:
         answer = "delta"
         break;
   }
   return answer
}
console.log(caseSwitch(1)) // 'alpha'
console.log(caseSwitch(2)) // 'beta'
console.log(caseSwitch(3)) // 'gama'
console.log(caseSwitch(4)) // 'delta'

// Default 
// Default is ys used as an if else statement 
function deFault() {
   var answer = ""
   switch(val) {
      case 1: 
         answer = "dance";
         break;
      case 2:
         answer = "sing"
         break;
      default:
         answer = "others"
         break;   
   }
}
console.log(deFault(20)) // 'others'

// Identical optins in switch statment
function opTion(val) {
   var answer = "";
   switch(val) {
      case 1:
      case 2:
      case 3:
         answer = "Low"
      break;
      case 4:
      case 5:
      case 6:
         answer = "Medium"
      break;
      default:
         answer = "High"
         break;
   }
}
console.log(opTion(5)) // 'Medium'
