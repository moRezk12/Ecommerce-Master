interface rating {
  rate:number;
  count:number;
}

export class Product {
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:rating;
  constructor(private i:number, private n:string,private p:number ,private d:string , private c:string ,private img:string ,private rat:{rate:number,count:number}) {
    this.id = this.i;
    this.title = this.n;
    this.price=this.p;
    this.description = this.d;
    this.category=this.c;
    this.image=this.img;
    this.rating=this.rat;
  }
}
