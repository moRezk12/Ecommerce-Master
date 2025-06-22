export class ItemCart {
  id:number;
  productImage:string;
  prductName:string;
  price:number;
  quantity:number;
  constructor(private i:number,private img:string,private name:string,private pri:number,private quaun:number){
    this.id= this.i;
    this.productImage = this.img;
    this.prductName = this.name;
    this.price = this.pri;
    this.quantity = this.quaun;
  }
}
