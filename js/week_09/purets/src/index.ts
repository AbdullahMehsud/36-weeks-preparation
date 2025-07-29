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
    protected _courseCount = 1
    readonly city: string = 'Tank'
    constructor(
        public email: string, 
        public name: string,
        private userId: string
        ){
    }
    private deleteToken(){
        console.log("token deleted");
    }
    get appleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("course count can't less then 1")
        }
        this._courseCount = courseNum
    }
}

class subUser extends User {
    isFaimly: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const abdullah = new User("abdullah@gmail.com", 'abdullah', '12nk23')
