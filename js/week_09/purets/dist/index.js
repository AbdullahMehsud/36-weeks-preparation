"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = 'tank'
//     constructor(email: string, name: string){
//         this.email = email,
//         this.name = name
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = 'Tank';
    }
    deleteToken() {
        console.log("token deleted");
    }
    get appleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count can't less then 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFaimly = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const abdullah = new User("abdullah@gmail.com", 'abdullah', '12nk23');
