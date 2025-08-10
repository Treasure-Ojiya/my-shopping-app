import { Injectable, signal } from '@angular/core';
import { Product } from '../modules/products-module';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 109.95,
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      price: 22.3,
      stock: 0,
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      price: 55.99,
      stock: 5,
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
    console.log(this.cart());
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() {}
}
