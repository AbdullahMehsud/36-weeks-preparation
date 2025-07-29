const score: Array<string> = []
const string: Array<number> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T {
    return val
}

interface bootle{
    brand: string,
    type: number
}

// identityFour<bootle>({})

function getProducts<T>(product: T[]): T {
    const index = 3
    return product[index]
}

const getMoreProducts = <T>(product: T[]): T => {
     const index = 3
    return product[index]
}

interface Database {
    connection: string,
    username: string,
    password: string
}
function anotherFunction<T, U extends Database>(tval: T, uval: U): object {
    return {
        tval,
        uval
    }
}

// anotherFunction({},{})


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sallable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}