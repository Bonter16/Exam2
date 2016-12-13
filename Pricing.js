/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary exam2  || created: 12.12.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const Customer = require('./Customer');

let totalPrice

function main() {
    setTotalPrice();
}

main();

function setTotalPrice() {
    const MAX_AGE = 50
    const MIN_AGE = 1
    if (Customer.age > MIN_AGE || Customer.age < MAX_AGE) {
        totalPrice = console.log(`\nYour price is 10`);
    }
}