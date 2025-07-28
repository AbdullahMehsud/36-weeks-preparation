let score: number | string = 33
score = '55'

type User = {
    name: string,
    isActive: boolean
}

type Admin = {
    userName: string,
    isActive: boolean
}

let abdullah: User | Admin = {name: "abdulalh", isActive: true}

abdullah = {userName: "khan", isActive: false}

// function getDBId(_id: number | string){
//     console.log(`db id ${_id}` );
    
// }

getDBId(33)
getDBId('33')


function getDBId(_id: number | string){
    if(typeof _id === 'string') {
        _id.toUpperCase()
    }
    _id
}


// arrays

const data: number[] = [1, 2, 3, 4, 5]
const data2: string[] = ['1', '2', '3']
const data3: (string | number | boolean)[] = [1, "abc", 2, 'abc', true]


let seatAllotment: "aisle" | "middle" | 'window'

seatAllotment = "middle"
// seatAllotment = 'window'

export {}