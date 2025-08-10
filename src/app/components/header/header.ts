import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButton, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('Clothing');
  cartService = inject(Cart);

  showButtonClicked() {
    console.log('button clicked');
  }
}
