import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CheckoutService } from '../cart/services/checkout.service';
import { Order, OrderItem, OrdersRes } from './interfaces/orders-res/orders-res';

export type OrderStatus = 'inProgress' | 'canceled' | 'done';
export type DeliveryStatus = 'pending' | 'canceled' | 'delivered';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  private readonly checkoutService = inject(CheckoutService);
  private readonly previewItemCount = 2;

  orders$!: Observable<Order[]>;
  expandedOrders = signal<Set<string>>(new Set());

  ngOnInit(): void {
    this.orders$ = this.checkoutService.getAllOrders().pipe(
      map((res: OrdersRes) => res.orders)
    );
  }

  visibleItems(order: Order): OrderItem[] {
    if (this.expandedOrders().has(order._id)) {
      return order.orderItems;
    }
    return order.orderItems.slice(0, this.previewItemCount);
  }

  canToggleItems(order: Order): boolean {
    return order.orderItems.length > this.previewItemCount;
  }

  isExpanded(orderId: string): boolean {
    return this.expandedOrders().has(orderId);
  }

  toggleShowAll(orderId: string): void {
    this.expandedOrders.update((current) => {
      const next = new Set(current);
      if (next.has(orderId)) {
        next.delete(orderId);
      } else {
        next.add(orderId);
      }
      return next;
    });
  }

  orderStatus(order: Order): OrderStatus {
    const state = (order.state || '').toLowerCase();
    if (state.includes('cancel')) return 'canceled';
    if (state.includes('done') || state.includes('complet') || order.isDelivered) {
      return 'done';
    }
    return 'inProgress';
  }

  orderStatusLabel(order: Order): string {
    const status = this.orderStatus(order);
    if (status === 'canceled') return 'Canceled';
    if (status === 'done') return 'Done';
    return 'In Progress';
  }

  deliveryStatus(order: Order): DeliveryStatus {
    if (this.orderStatus(order) === 'canceled') return 'canceled';
    if (order.isDelivered) return 'delivered';
    return 'pending';
  }

  deliveryLabel(order: Order): string {
    const status = this.deliveryStatus(order);
    if (status === 'canceled') return 'Canceled';
    if (status === 'delivered') return 'Delivered';
    return 'Pending';
  }

  isCredit(order: Order): boolean {
    return (order.paymentType || '').toLowerCase().includes('credit');
  }

  paymentMethodLabel(order: Order): string {
    return this.isCredit(order) ? 'Credit Card' : 'Cash';
  }
}
