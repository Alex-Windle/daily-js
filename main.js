///-------------CLOSURES-------------///

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

///-------------------------------------///
///-------------------------------------///
///-------------------------------------///
///-------------------------------------///
///-------------------------------------///
///-------------------------------------///