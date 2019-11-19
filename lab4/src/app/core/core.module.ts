import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { OrdersService } from './api/orders.service';
import { UsersService } from './api/users.service';
import { AuthService } from './api/auth.service';
import { TokenInterceptor } from './api/token.interceptor';

function getToken() {
  return localStorage.getItem('accessToken');
}

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: [ 'pnit-lessons.azurewebsites.net' ],
        blacklistedRoutes: [ '/Token' ]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    OrdersService,
    UsersService,
    AuthService
  ]
})
export class CoreModule { }
