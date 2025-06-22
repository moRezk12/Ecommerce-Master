import { Component, DoCheck, OnInit } from '@angular/core';
import { IconDefinition, faX } from '@fortawesome/free-solid-svg-icons';
import { ItemCart } from 'src/app/carts/cart.model';
import { CartService } from 'src/app/carts/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit , DoCheck {
  faX:IconDefinition=faX;
  items!:ItemCart[];
  noItem:boolean=false;
  constructor(private CartService:CartService){}

  ngOnInit(): void {
    this.items = this.CartService.itemInCart
  }

  ngDoCheck(): void {
    if (this.CartService.itemInCart.length === 0) {
      this.noItem = true;
    }
  }

  inc(item:ItemCart) {
    this.CartService.increaseQuantity(item.id);
    if (item.quantity == 0 ) {
        this.delete(item.id)
      }
      let audio = new Audio();
      audio.src='../../../../../assets/sound/Add.mp3';
      audio.play();
  };

  des(item:ItemCart) {
    this.CartService.decreaseQuantity(item.id);
    if (item.quantity == 0 ) {
      this.delete(item.id)
    }
    let audio = new Audio();
    audio.src='../../../../../assets/sound/delete.mp3';
    audio.play();
  };

  total(price:number,quantity:number) {
    return this.CartService.calcTotalPrice(price,quantity);
  }

  delete(id:number) {
    console.log("work!");
    this.CartService.deleteFromCart(id);
    let audio = new Audio();
    audio.src='../../../../../assets/sound/delete.mp3';
    audio.play();
  }
}
