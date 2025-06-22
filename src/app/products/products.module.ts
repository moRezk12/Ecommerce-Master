import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ShortPipeTsPipe } from './pipes/short.pipe.ts.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ShortPipeTsPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule { }
