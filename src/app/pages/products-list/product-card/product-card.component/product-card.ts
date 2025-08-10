import { Component, inject, input } from '@angular/core';
import { ProductsList } from '../../products-list';
import { Product } from '../../../../modules/products-module';
import { PrimaryButton } from '../../../../components/primary-button/primary-button';
import { Cart } from '../../../../services/cart';
// import { Cart } from '../../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  cartService = inject(Cart);

  get stockStatus() {
    const stock = this.product().stock;
    return {
      text: stock && stock > 0 ? `${stock} left ` : 'Out of Stock',
      class: stock && stock > 0 ? 'in-stock' : 'out-of-stock',
    };
  }

  addToCartBtn() {
    console.log('add to cart');
  }
}
