import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Order } from 'src/app/model/order.model';
import { UsersService } from 'src/app/core/api/users.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  categories = [ 'Category 1', 'Category 2', 'Category 3' ];
  orderForm: FormGroup;
  isSubmited = false;

  readonly pricePlaceholder = 'Price';

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.buildForm();

    this.usersService.currentUser
      .subscribe((user: User) => console.log('currentUser from Add order', user));
  }

  onSubmit() {
    this.isSubmited = true;

    if (this.orderForm.invalid) {
      return;
    }

    const order = this.orderForm.value as Order;
    console.log(order);
  }

  private buildForm() {
    this.orderForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      category: [ '', Validators.required ],
      price: [ null, Validators.compose([Validators.required, Validators.min(0)]) ]
    });
  }
}
