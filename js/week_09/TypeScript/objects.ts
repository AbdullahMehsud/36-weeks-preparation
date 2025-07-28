const user = {
    name: "Abdullah",
    email: 'abdullah@gmail.com',
    isActive: true
}

function createUser ({name, isPaid}:{name: string, isPaid: boolean}){}
let newUser = {name: "abdullah", isPaid: true, email: 'apple@gmail.com'}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: 'ReactJs', price: 399}
}

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createDetailsUser(user: User): User{
//         return {name: '', email: '', isActive: true}
// }

// createDetailsUser({name: '', email: '', isActive: true})


type User = {
    readonly _id: string, // this is readonly i will not change
    name: string,
    email: string,
    isActive: boolean,
    creditCardNumber?: number // ? mark for optional
}

let myUser: User = {
    _id: "1234",
    name: "a",
    email: "a@a.com",
    isActive: true
}

myUser.email = 'a@gmail.com'
// myUser._id = 'q341'      // => cann't assign because its read only

// question: if id would be array, can we push values to array in case of readonly

/** 
 * ans: Yes, we can push inside the _id 
 * if it is an array because the array is concerned with 
 * its reference and not the values present inside it here 
 * even if you push some values inside it the reference will remain the same.
 * */

type cardNumber = {
    cardDetails: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}