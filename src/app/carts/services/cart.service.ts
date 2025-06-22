import { Injectable } from '@angular/core';
import { ItemCart } from '../cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:ItemCart[]=[];
  constructor() { };

  get itemInCart():ItemCart[] {
    return this.cart;
  };

  addToCart(item:ItemCart) {
    const findIt = this.cart.filter((Product:ItemCart ,index)=> {
      return Product.id == item.id ? this.cart[index].quantity++:'';
    })
    if (findIt.length ==0) {
      this.cart.push(item);
    }
  };

  deleteFromCart(id:number) {
    this.cart.filter((element,index)=> {
      return element.id == id?this.cart.splice(index,1):'';
    });
  };

  calcTotalPrice(price:number,quantity:number):number {
    return price * quantity;
  };

  calcOrderPriceToSummary () {
    let total:number = 0;
    for (const item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  };

  increaseQuantity (id:number) {
    this.cart.filter((item,index) => {
      return item.id ==id ? this.itemInCart[index].quantity++:'';
    })
  };

  decreaseQuantity (id:number) {
    this.cart.filter((item,index) => {
      return item.id ==id ? this.itemInCart[index].quantity--:'';
    })
  };
}
