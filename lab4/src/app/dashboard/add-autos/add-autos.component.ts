import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { brands as BRANDS } from '../../shared/constants';

@Component({
  selector: 'app-add-autos',
  templateUrl: './add-autos.component.html',
  styleUrls: ['./add-autos.component.scss']
})
export class AddAutosComponent implements OnInit {
  autoForm: FormGroup;
  submitted = false;
  readonly pricePlaceholder = 'Price';
  modalRef: BsModalRef;
  brands = BRANDS;
  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) { }

  ngOnInit() {
    this.autoForm = this.formBuilder.group({
      numOfAutos: ['', Validators.required],
      autos: new FormArray([])
    });
  }

  onSubmit(template: TemplateRef<any>) {
    this.submitted = true;
    if (this.autoForm.invalid) {
      return;
    }

    this.modalRef = this.modalService.show(template);

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.autoForm.value));
  }

  hideModal() {
    this.modalRef.hide();
    debugger;
  }

  get f() { return this.autoForm.controls; }
  get a() { return this.f.autos as FormArray; }

  onChangeAutos(e) {
    const numOfAutos = e.target.value || 0;
    if (this.a.length < numOfAutos) {
      for (let i = this.a.length; i < numOfAutos; i++) {
        this.a.push(this.formBuilder.group({
          brand: [ '', Validators.required ],
          model: [ '', Validators.required ],
          price: [ null, Validators.required ]
        }));
      }
    } else {
      for (let i = this.a.length; i >= numOfAutos; i--) {
        this.a.removeAt(i);
      }
    }
  }

  onReset() {
    this.submitted = false;
    this.autoForm.reset();
    this.a.clear();
  }

  onClear() {
    this.submitted = false;
    this.a.reset();
  }

}
