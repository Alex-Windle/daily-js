///----------TRUTHY / FALSY------------///
console.log('What are some examples of falsy values?'); 
console.log('------> " ", 0, -0, null, undefined and false'); 
///-------------------------------------///
///-------------CLOSURES-------------///
console.log('CLOSURES'); 

function a(){
  function b(){
     console.log('1. Example of basic closure');
  }
  b(); //creates closure
}

a(); 

///-------------------------------------///

console.log('2. Try calling c(); multiple times in the console. What happens?'); 

function counter(){
    var i = 0;
    
    return function(){
       console.log(i++);
    }
}

var c = counter(); 

c(); 

///--------------HOISTING---------------///
console.log('HOISTING - - - Only the declaration of a variable is hoisted. The value assigned remains at its place. Function declaration is also hoisted. If you have a function expression only the variable part of the function expression will be hoisted.'); 


///-------------SCOPE-------------------///
console.log('SCOPE - - - Two types are (1) global scope (2) local scope'); 

var anthonyBourdain = "Anthony Bourdain is an international superstar!"; 

function doSomething(){
	console.log('3. Global scope: ', anthonyBourdain); 
}

doSomething(); 

///-------------------------------------///

function showSomething(){

	var kevinGillespie = "Kevin Gillespie is mostly known in Georgia!"; 

	console.log('4. Local scope: ', kevinGillespie); 
}

showSomething();

///-------------------HOISTING------------------------///
///--FUNCTION DECLARATIONS VS. FUNCTION EXPRESSIONS---///

function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log('5. Hoisting function declarations: ', foo());

///--------------THIS----------------///
console.log("THIS KEYWORD:");
console.log("It turns out we can make a method work for many objects using a new keyword, this. The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.");

var changeColor = function(newColor){
	this.color = newColor;
}; 

var chameleon = new Object(); 
chameleon.age=2; 
chameleon.name="Buster"; 
chameleon.color="green"; 
chameleon.changeColor=changeColor; 

console.log('6. Chameleon color: ', chameleon.color); 
console.log('7. Chameleon changeColor method: ', chameleon.changeColor); 

chameleon.changeColor("yellow"); 
console.log('8. New chameleon color: ', chameleon.color); 

///-------OBJECT CONSTRUCTOR--------///

var cherry = new Object(); 
cherry.type="cherry"; 
cherry.color="red"; 
cherry.seed_type="pit";
cherry.recipe_suggestion="eat out of hand, cherry pie";

console.log('8. Create a fruit using new Object(): ', cherry); 

///---CUSTOM OBJECT CONSTRUCTOR-----///

function Fruit(type, color, seed_type, recipe_suggestion){
	this.type = type;
	this.color= color;
	this.seed_type= seed_type; 
	this.recipe_suggestion= recipe_suggestion;
};

var peach = new Fruit("peach", "orange", "pit", "peach cobbler"); 

console.log('9. Create a fruit using a custom constructor: ', peach); 
///-------------------------------------///

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself(); 

///-----------ARRAYS OF OBJECTS-------///

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old

///-----------Array to Object-----------///

var employeeData = 
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],

    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

function transformEmployeeData(array) {
	var finalArray = []; 

  for(var employee = 0; employee < array.length; employee++){
  	var person = array[employee];
  	var personObject = {};

  	for(var item = 0; item < person.length; item++){
  		var dataLine = person[item]; 
  
  		var property = dataLine[0]; 
  		var value = dataLine[1]; 
  		
  		personObject[property] = value;
  	}
  	finalArray.push(personObject); 
  }
  console.log('HackReactor-Module0.1: Array to Object ----> Final answer: ', finalArray);
}

transformEmployeeData(employeeData); 
///-------------------------------------///