import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billingForm!: FormGroup;
  billingFormValue: any;
  constructor(
    private router: Router,
    private shopCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.billingForm= new FormGroup({
      firstName: new FormControl('', [ Validators.required ]),
      lastName: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      mobile: new FormControl('', [ Validators.required ]),
      address1: new FormControl('', [ Validators.required ]),
      address2: new FormControl('', [ Validators.required ]),
      city: new FormControl('', [ Validators.required ]),
      state: new FormControl('', [ Validators.required ]),
      zipCode: new FormControl('', [ Validators.required ]),
      payment: new FormControl('', [ Validators.required ]),
    });
  }

  shopping(){
    this.router.navigate(['/products']);
  }

  saveInformation(){
    this.billingFormValue= this.billingForm.value;
    this.shopCartService.addAddress(this.billingFormValue);
    console.log("Information is saved successfully");
    this.router.navigate(['/checkout']);
  }


}
