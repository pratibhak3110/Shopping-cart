export interface Product {
  id: number,
    name: string;
    img: string;
    price: string;
  }

  
export class Productclass{
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  constructor(){
    this.id= 0;
    this.img= '';
    this.name= '';
    this.price= 0;
    this.quantity= 0;
    this.total=0;
  }
}
