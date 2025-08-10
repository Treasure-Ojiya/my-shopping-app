import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { CartItem } from './cart-item/cart-item';
import { OrderSummary } from '../cart/order-summary/order-summary';

@Component({
  selector: 'app-cart-page',
  imports: [CartItem, OrderSummary],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  cartService = inject(Cart);
}
