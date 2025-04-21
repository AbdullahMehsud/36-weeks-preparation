const greet = (name, age) => {
    console.log(`hello, i'm ${name} and my age is ${age}`);
    
}

greet("abdullah", 25)

const nums = [1,2,3,4,5]

const double = nums.map((num) => num * 2)

console.log(double);

// filterning func

const fruits = [2, 4, 5, 9, 10]

const fruit = fruits.filter(f => f % 2 === 0)

console.log(fruit);


// start with func

const string  = 'javascript'

 console.log(string.startsWith('j'))

// console.log(start);


const fru = ["apple", "banana", 'mango']

const af = fru.filter(f => f.startsWith('m'))

console.log(af);


/// convert this regular function to arrow function
// function multiply(x, y) {
//     return x * y;
//   }

const multiply = (x, y) => {
    return x + y

}

console.log(multiply(3,3));


const isEven = (num) => {
    if (num % 2 === 0 ){
        return true
    } else {
        false
    }
}

console.log("isEven", isEven(2));


const numbers = [1, 2, 3, 4];

const sq = numbers.map((num) => num ** 2)

console.log(sq);

const names = ['alice', 'adnan', 'ismail']

const upperNames = names.map(n => n.toLocaleUpperCase())
console.log(upperNames);


const allNums = [1,2,4,5,6,8,11,12,33,44,55]

const lessThenTen = allNums.filter(l => l < 10)
console.log(lessThenTen);


const words = ['adnan', 'ismail', 'wahab', 'irfan', 'abdullah']

const largestWord = words.filter(w => w.length > 5)

console.log(largestWord);


const food = ["banana", "apple", "blueberry", "mango"];
const bFood = food.filter(f => f.startsWith('b'))
console.log(bFood);

// Output: ["banana", "blueberry"]

const emails = ["admin1@example.com", "user2@example.com", "admin2@example.com"];
// Output: ["admin1@example.com", "admin2@example.com"]
const admin = emails.filter(a => a.startsWith("admin"))
console.log(admin);


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
  ];

  const above18 = people.filter(n => n.age >= 18).map(p => p.name.toUpperCase())
  console.log(above18);
  