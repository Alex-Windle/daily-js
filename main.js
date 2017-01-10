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

console.log('5. Why does this give a ReferenceError?');
console.log(kevinGillespie);   

///-------------------------------------///
///-------------------------------------///
///-------------------------------------///