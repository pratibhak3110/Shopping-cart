import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillingInformation } from '../billing.module';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  billingInforArr!: BillingInformation[];
  totalCartItem: number= 0;
  product: any= [];
  grandTotal!: number;

  constructor(
    private shopCartService: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.billingInforArr= this.shopCartService.getBillingInfo();

    this.shopCartService.getCartLaptops().subscribe( response => {
      this.totalCartItem = response.length;

      this.product= response;
      this.grandTotal= this.shopCartService.getTotalAmount();
  })
  }

  navigateToHome(){
    this.router.navigate(['/products']);
  }


}
