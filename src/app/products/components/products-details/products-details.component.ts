import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { IconDefinition, faCheckCircle , faCircleExclamation , faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/carts/services/cart.service';
import { ItemCart } from 'src/app/carts/cart.model';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit{
  @ViewChild('quantity') quantity!:ElementRef;
  isfetch:boolean = false;
  product!:Product;
  faCheckCircle:IconDefinition=faCheckCircle;
  faCircleExclamation:IconDefinition=faCircleExclamation;
  faCartShopping:IconDefinition=faCartShopping;
  constructor(private ProductsService:ProductsService , private route:ActivatedRoute , private CartService:CartService) {}

  ngOnInit(): void {
    this.isfetch = true;
    this.route.params.subscribe(
      (data:Params)=> {
        this.ProductsService.getProductByid(+data['id']).subscribe(
          (data:any) => {
            this.isfetch = false;
            this.product = data;
          }
        );
      }
    )
  }

  addCart() {
    this.CartService.addToCart(
      new ItemCart (
        this.product.id,
        this.product.image,
        this.product.title,
        this.product.price,
        this.quantity.nativeElement.value
        ));
    let audio = new Audio();
    audio.src='../../../../assets/sound/Add.mp3';
    audio.play();
  }
}
