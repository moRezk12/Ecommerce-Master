import { Component, DoCheck, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/carts/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{
  faCartShopping:IconDefinition = faCartShopping;
  numberOfItem!:number;

  constructor(private CartService:CartService) {}

  ngDoCheck(): void {
    this.numberOfItem = this.CartService.itemInCart.length;
  }
}
