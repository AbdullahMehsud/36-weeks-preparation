// week 1.2 Basic Apis for beginner
/* 01. introduction
        js come with built-in methods feature (apis) that make working with data easier
        some are map(), filter(), find(), sort
*/ 





/* 02. map, filter, find, sort
        map used to transform each element to an array
        const array = [1,2,3,4,5]
        const double = array.map(num => num * 2) 
        console.log(double); -> // [2,4,6,8,10]

        filter element on condition base
        const nums = [1,2,3,4,5]
        const even  = nums.filter(num => num % 2 === 0) 
        console.log(even) // -> [2,4]
        

        find the first element that matches

        const users = [
    {id: 1, name: "abdullah"},
    {id: 2, name: "adnan"}
            ]
        const user = users.find( u => u.name === "adnan") 
        console.log(user); // -> {id: 2, name: 'adnan'}

        sort sort an array

        const array = [1,5,6,3,2]
        array.sort((a,b) => a - b) 
         console.log(array); //-> [1,2,3,5,6]
        */ 

/* 03. classes
        javascript classes are template for creating objects 
        class Person {

            constructor(name, age) {
            this.name = name;
            this.age = age;
            };

            greet() {
            console.log(`Hi i'm ${this.name} and my age is ${this.age} `);
            };

        }

        const abd = new Person("abdullah", 25)
        abd.greet()
*/ 

/* 04. objects
    const car = {
    brand: "toyota",
    model: "Corolla",
    year: 2018,

    start: function() {
        console.log("engin start")   
    }
}

console.log(car.brand) -> toyota
car.start() -> engin start
*/ 





