import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-billing-cart',
  templateUrl: './billing-cart.component.html',
  styleUrls: ['./billing-cart.component.css']
})
export class BillingCartComponent implements OnInit {

 
  product: any= [];
  totalCartItem: number= 0;
  grandTotal!: number;
  
  constructor(
    private shopCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.shopCartService.getCartLaptops().subscribe( response => {
      this.totalCartItem = response.length;
      console.log("item is :" +this.totalCartItem);

      this.product= response;
      this.grandTotal= this.shopCartService.getTotalAmount();
  })
  }
  

}
