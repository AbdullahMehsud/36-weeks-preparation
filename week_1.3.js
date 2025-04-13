// week 1.3 Loops, function, callback function

// 01. loops for while do...while for...of for...in
// for loop

    /*for (let i = 1; i <=5; i++){
        console.log(`number:  ${i}`);
    } */

 // while loop

        /*let i =1
        while (i <= 5){
                console.log("number: ", i);
                i++
                
        }*/


// for...of used with arrays

/*const colors =  ['red', "green", "blue", 'yellow']

 for(const color of colors){
        console.log(color);
        
 }*/

 // for...in used with objects

 /*const cars = {brand: "toyota", model: "corola", year: 2025}

 for( const car in cars){
    console.log(`${car}: ${cars[car]}`);
    
 }*/


// 02. Function
//     Function are reuseable blocks of code 

    /* function declaration
    function greet(name){
        console.log(`hello ${name}`);
        
    }

    greet("abdullah")*/

    /* function expression
    const add = function(a, b) {
        sum = a + b
        return sum
    }

    console.log(add(10, 20));

    */ 

    /**
     * arrow function
     * const multiply = (a, b) =>  a * b;
     * console.log(multiply(2,3));
     * */ 


    // callback function
    // callback function is passed in another function to be executed

    /*function doHomeWork(subject, callback){
        console.log(`Starting my  ${subject} homework..`);
        callback()
    }

    function finished(){
        console.log("home work finished");
        
    }

    doHomeWork("math", finished) */


  /* function sayHello(name, callback){
    console.log(`hello, ${name}`);
    callback()
    
  }

  function sayHowAreYou(){
    console.log("how are you");
    bye()
  }
  function bye(){
    console.log("bye");
    
  }
  sayHello("abdullah", sayHowAreYou)
  */

