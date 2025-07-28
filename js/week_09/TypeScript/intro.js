var greetings = "Abdullah Mehsud";
greetings.toLocaleLowerCase();
console.log(greetings);
// Numbers
var userId = 3223432423;
var hero;
function getHero() {
    return "true";
}
hero = getHero();
var isLoggedIn = false;
function getNum(num1) {
    return num1 + 2;
    // return 'hello'
}
getNum(5);
function getString(str1) {
    return str1;
}
getString('2323');
function getUserDetails(name, email, isPaid) {
    console.log("name: ", name.toUpperCase(), "email: ", email, "isPaid: ", isPaid);
}
getUserDetails("Abdullah Mehsud", "abdullah@google.com", true);
var isUserLoggedIn = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
isUserLoggedIn("abdullah", 'email.com');
// will do this later how to give two data types
//  function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
//  }
// const heros= [1, "hello", 3, 3.3]
var heros = ["thor", 'spiderman', 'superman'];
heros.map(function (h) {
    return "Hero is ".concat(h);
});
function consoleError(errMsg) {
    console.log("error: ", errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
