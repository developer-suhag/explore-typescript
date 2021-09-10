"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 1000;
    }
    acctualMillage() {
        const mile = this._millage + 50000;
        return mile;
    }
    getTotalPrice(tax) {
        const totalTax = (this.price * tax) / 100;
        const total = this.price + totalTax;
        return total;
    }
}
const toyota = new Car("Toyota", 23000);
const totalPrice = toyota.getTotalPrice(25);
