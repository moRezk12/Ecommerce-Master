import { Component, DoCheck } from '@angular/core';
import { IconDefinition, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/carts/services/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent  implements DoCheck{
  faArrowRight:IconDefinition=faArrowRight;
  numberItems:number=0;
  total!:number;


  constructor(private CartService:CartService) {}

  ngDoCheck(): void {
    this.numberItems = this.CartService.itemInCart.length;
    this.total = this.CartService.calcOrderPriceToSummary();
  }
}
