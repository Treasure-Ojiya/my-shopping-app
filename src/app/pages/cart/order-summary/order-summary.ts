import { Component, computed, inject } from '@angular/core';
import { Cart } from '../../../services/cart';
import { PrimaryButton } from '../../../components/primary-button/primary-button';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButton],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {
  cartService = inject(Cart);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  });
}
