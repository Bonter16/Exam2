/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary exam2  || created: 12.12.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

class Customer{
    constructor() {
        this.lastName();
        this.firstName();
        this.birthYear();
    }

    lastName() {
        this.lastName = PROMPT.question(`\nPlease enter your last name:`);
    }

    firstName() {
        this.firstName = PROMPT.question(`\nPlease enter your first name:`);
    }

    birthYear() {
        this.birthYear = Number(PROMPT.question(`\nPlease enter birth year:`));
    }
}

module.exports = Customer;