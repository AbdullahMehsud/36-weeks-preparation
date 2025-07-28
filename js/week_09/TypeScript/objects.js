"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Abdullah",
    email: 'abdullah@gmail.com',
    isActive: true
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
var newUser = { name: "abdullah", isPaid: true, email: 'apple@gmail.com' };
createUser(newUser);
function createCourse() {
    return { name: 'ReactJs', price: 399 };
}
var myUser = {
    _id: "1234",
    name: "a",
    email: "a@a.com",
    isActive: true
};
myUser.email = 'a@gmail.com';
