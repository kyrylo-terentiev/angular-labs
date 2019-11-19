import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from 'src/app/model/order.model';
import { filter, map, tap } from 'rxjs/operators';
import { ɵangular_packages_forms_forms_k } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  loggingSubject = new Subject();

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    this.loggingSubject.subscribe(data => console.log(data));
    let response1 = this.httpClient.get(`${environment.apiUrl}/GetOrders`).pipe(
      map((orders: any[]) => orders.map((order: any) =>
        new Order(order.name, order.category, order.price))),
        filter((orders: Order[]) => !!orders),
        tap((orders: Order[]) => {
          this.loggingSubject.next('Received orders:');
          this.loggingSubject.next(orders); }));
    let response2 = null;
    return forkJoin([response1, response2]);
  }
}
