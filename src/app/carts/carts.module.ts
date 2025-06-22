import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import { OrderSummaryComponent } from './components/cart/order-summary/order-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortesPipe } from './components/cart/pipes/shortes.pipe';


@NgModule({
  declarations: [
    CartComponent,
    CartProductComponent,
    OrderSummaryComponent,
    ShortesPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class CartsModule { }
