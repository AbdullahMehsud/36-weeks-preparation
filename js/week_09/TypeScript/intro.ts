let greetings: String = "Abdullah Mehsud"

greetings.toLocaleLowerCase();

console.log(greetings);

// Numbers

let userId = 3223432423

let hero;

function getHero(){
    return "true"
}

hero = getHero()

let isLoggedIn: boolean = false;

function getNum (num1: number): number{
        return num1 + 2 
        // return 'hello'
}


getNum(5)


function getString(str1: string){
    return str1 
}

getString('2323')

function getUserDetails(name: string, email: string, isPaid: boolean){
    console.log("name: ", name.toUpperCase(), "email: ", email, "isPaid: ", isPaid);
    
}

getUserDetails("Abdullah Mehsud", "abdullah@google.com", true)


 let isUserLoggedIn = (name: string, email: string, isPaid: boolean = false) => {}

 isUserLoggedIn("abdullah", 'email.com')


// will do this later how to give two data types

//  function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
//  }

// const heros= [1, "hello", 3, 3.3]
const heros = ["thor", 'spiderman', 'superman']

heros.map((h: string) => {
    return `Hero is ${h}`
})

function consoleError(errMsg: string): void{
    console.log("error: ", errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)   
}