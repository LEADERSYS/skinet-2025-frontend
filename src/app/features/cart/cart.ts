import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItem } from "./cart-item/cart-item";
import { OrderSumary } from "../../shared/components/order-sumary/order-sumary";
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSumary, EmptyState],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private router = inject(Router)
  cartService = inject(CartService);

  onAction() {
    this.router.navigateByUrl('/shop');
  }
}
