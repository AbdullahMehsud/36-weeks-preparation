// js foundation

/* 01. why languages?
     programming languages let human ineraction to machines
     each language has its own use case, strength and community */

/** 02. iterpreted vs compile languages
 *      Compiled: Translated to machine code before execution (e.g., C++, Rust).
 *      Interpreted: Executed line-by-line at runtime (e.g., JavaScript, Python).
 *      JS is interpreted (though modern engines like V8 use Just-In-Time (JIT) compilation for optimization).
 */

/** 03. Why JavaScript > Other Languages?
 *      runs every where (browser, server via node even IOT) eg: console.log("hello world") -> in browser
 *      massive ecosystem NPM, framework like react, vue etc 
 *      beginner friendly easy to get started with not need for compiler or setup
 *      used every where frontend, backend, mobile, desktop
 * */ 

/** 04. Strict vs Dynamic Languages
 *      strict(static) data types define upfront (eg: c++, java)
 *      js is dynamic language  types are resolved at run time but it can lead to bugs (typscript resolved this issue by adding static typing)
 *      eg: js ( let name  = "abc" -> string
 *              name = 22 -> now number
 *              )
 *      eg: ts ( let name: String = "abc" 
 *              name = 33 -> error: type number not  assignable  to type string
 *              )
 * */ 

/** 05. Single-Threaded Nature of JS
 *      js is single threaded meaning one operation at a time
 *      uses an event look for callback queue for async operation
 *      helps manage I/O efficiently, even with just one thread
 *      eg: console.log("Start"); -> print first

        setTimeout(() => {
        console.log("This runs later (async)"); -> print third
        }, 1000);

        console.log("End"); -> print second

        1. start
        2. end
        3. this runs later (async)
 * */ 

/** 06. simple primitives in js
 *  variables -> let, const, vat
 *  data types -> Number, String, boolean, null, undefined
 *  loops -> for, while, do...while, for..of, for...in
 * */ 

/** 07. complex primitives in js
 *  array orderd collection [1,2,3]
 *  object key-value pair {name: "abc", age: 23}
 *  these structure can hold nested data funtions and can be manipulated dynamically
 * 
 *  eg: const fruit = ["apple", orange, 'banana']
 *  
 *  eg: const object = {
 *          name: 'abc',
 *          age: 23
 *          greet: function() {
 *          console.log("hello")             
 * }
 *          }
 * 
 *      object.greet()
 * */ 

/** 09. functions
 *      function declaration const function greeting() { function block}
 *      function expression const greeting = function() {function block}
 *      arrow funtion const greeting = () => { function block}
 * */ 


/** 10. callback funtion
 *      function passed as argument to the other funtion 
 *      used for async operation, event handling
 *      eg: function doSometing(callback) {
 *          console.log("do something")
 *          callback()
 *           }
 *      doSometing( () => {
 *          console.log("callback executed")
 *          })
 * */ 
/**
 * */ 