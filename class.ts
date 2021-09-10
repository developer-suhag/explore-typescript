class Car {
  model: string;
  price: number;
  private _millage: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
    this._millage = 1000;
  }
  acctualMillage(): number {
    const mile = this._millage + 50000;
    return mile;
  }
  getTotalPrice(tax: number): number {
    const totalTax = (this.price * tax) / 100;
    const total = this.price + totalTax;
    return total;
  }
}

const toyota = new Car("Toyota", 23000);
const totalPrice: number = toyota.getTotalPrice(25);
