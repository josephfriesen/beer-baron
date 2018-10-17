export class Keg {
  name: string;
  price: number;
  brewery: string;
  abv: number;
  style: string;
  pintsLeft: number;

  constructor(name, price, brewery, abv, style, pints = 124) {
    this.name = name;
    this.price = price;
    this.brewery = brewery;
    this.abv = abv;
    this.style = style;
  }
}
