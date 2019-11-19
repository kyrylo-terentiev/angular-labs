import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAutosComponent } from './dashboard/add-autos/add-autos.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DatatableComponent } from './dashboard/datatable/datatable.component';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AddOrderComponent } from './dashboard/add-order/add-order.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './homepage/profile/profile.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [NoAuthGuard] },
  { path: 'admin',
    component: OrdersComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'add-order', component: AddOrderComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },

  {
    path: 'user',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 'user'},
    children: [
      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: '**', component: LoginComponent, canActivate: [NoAuthGuard]},
  { path: 'add-autos', component: AddAutosComponent, canActivate: [NoAuthGuard] },
  { path: 'datatable', component: DatatableComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
