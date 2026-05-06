import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order as OrderModel } from '../../shared/models/order';
import { RouterLink } from "@angular/router";
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [
    RouterLink,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {
  private orderService = inject(OrderService);
  // orders = signal<OrderModel[] | null>(null);
  orders = signal<OrderModel[]>([]);

  ngOnInit(): void {
    this.orderService.getOrdersForUser().subscribe({
      next: orders => this.orders.set(orders)
    })
  }
}
