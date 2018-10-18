export class Keg {
  id: number;
  name: string;
  price: number;
  brewery: string;
  abv: number;
  style: string;
  pintsLeft: number;
  img: string;

  constructor(id, name, price, brewery, abv, style, pints, img) {
    this.id = id;
    this.name = name;
    this.price = price.toFixed(2);
    this.brewery = brewery;
    this.abv = abv.toFixed(4);
    this.style = style;
    this.pintsLeft = pints;
    this.img = img;
  }
}
