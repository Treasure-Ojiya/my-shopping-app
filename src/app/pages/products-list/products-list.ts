import { Component, signal } from '@angular/core';
import { Product } from '../../modules/products-module';
import { CommonModule } from '@angular/common';
import { ProductCard } from './product-card/product-card.component/product-card';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  async ngOnInit() {
    const categories = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ];
    const allProducts = [];

    for (const category of categories) {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      allProducts.push(...data);
    }

    this.products.set(allProducts);
  }

  products = signal<Product[]>([
    // {
    //   id: 1,
    //   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    //   price: 109.95,
    //   stock: 10,
    // },
    // {
    //   id: 2,
    //   title: 'Mens Casual Premium Slim Fit T-Shirts ',
    //   image:
    //     'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    //   price: 22.3,
    //   stock: 0,
    // },
    // {
    //   id: 3,
    //   title: 'Mens Cotton Jacket',
    //   image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    //   price: 55.99,
    //   stock: 5,
    // },
    // {
    //   id: 4,
    //   title: 'Mens Casual Slim Fit',
    //   image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    //   price: 15.99,
    // },
    // {
    //   id: 6,
    //   title: 'Solid Gold Petite Micropave ',
    //   image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //   price: 168,
    //   stock: 10,
    // },
    // {
    //   id: 7,
    //   title: 'White Gold Plated Princess',
    //   image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    //   price: 9.99,
    //   stock: 10,
    // },
    // {
    //   id: 8,
    //   title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    //   image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    //   price: 10.99,
    //   stock: 10,
    // },
    // {
    //   id: 9,
    //   title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    //   image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    //   price: 64,
    //   stock: 10,
    // },
    // {
    //   id: 10,
    //   title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    //   image: 'https://fakestoreapi.com/img/61U7T1koRqL._AC_SX679_.jpg',
    //   price: 109,
    //   stock: 10,
    // },
    // {
    //   id: 11,
    //   title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost',
    //   image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    //   price: 109,
    //   stock: 10,
    // },
    // {
    //   id: 12,
    //   title:
    //     'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    //   image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    //   price: 114,
    //   stock: 10,
    // },
    // {
    //   id: 13,
    //   title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    //   image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    //   price: 599,
    //   stock: 10,
    // },
    // {
    //   id: 14,
    //   title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    //   image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    //   price: 56.99,
    //   stock: 10,
    // },
    // {
    //   id: 15,
    //   title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    //   image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    //   price: 39.99,
    //   stock: 10,
    // },
  ]);
}
