"use strict";
const score = [];
const string = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<bootle>({})
function getProducts(product) {
    const index = 3;
    return product[index];
}
const getMoreProducts = (product) => {
    const index = 3;
    return product[index];
};
function anotherFunction(tval, uval) {
    return {
        tval,
        uval
    };
}
class Sallable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
