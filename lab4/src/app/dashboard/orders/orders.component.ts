import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrdersService } from 'src/app/core/api/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  isLoading = false;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.isLoading = true;
    this.ordersService.getOrders()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
        this.isLoading = false;
      });
  }

}
