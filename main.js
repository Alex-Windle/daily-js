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
///-------------------------------------///