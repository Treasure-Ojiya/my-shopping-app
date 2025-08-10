import { Component, inject, input } from '@angular/core';
import { Product } from '../../../modules/products-module';
import { Button } from '../../../components/button/button';
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [Button],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  cartService = inject(Cart);

  item = input.required<Product>();
}
