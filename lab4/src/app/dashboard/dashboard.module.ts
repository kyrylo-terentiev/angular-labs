import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddAutosComponent } from './add-autos/add-autos.component';
import { AutosComponent } from './autos/autos.component';
import { DatatableComponent } from './datatable/datatable.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OrdersComponent,
    AddOrderComponent,
    AddAutosComponent,
    AutosComponent,
    DatatableComponent,
    WeatherComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DashboardModule { }
