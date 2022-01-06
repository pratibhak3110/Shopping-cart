import { Component, OnInit } from '@angular/core';
import { BillingInformation } from '../billing.module';
import { ShoppingCartService } from '../service/shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  laptopList: any;
  searchkey: string= '';
  searchLaptop: string= '';
  product!: BillingInformation[];
  sortByCondition= '';
  sortDirection= 'asc';

  
  constructor(
    private shopCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.shopCartService.getLaptops().subscribe( respose =>{
      this.laptopList = respose;

      this.laptopList.forEach((item: any) => {
        Object.assign(item, { quantity: 1, total: item.price })
      });
    });

    this.shopCartService.search.subscribe( value => {
      this.searchkey= value;
    })
  }

  addToCart(item: any){
    this.shopCartService.addToCart(item);
  }

  search(event: any){
    this.searchLaptop= (event.target as HTMLInputElement).value;
    console.log(this.searchLaptop);
    this.shopCartService.search.next(this.searchLaptop);
  }

  sortOrder(){
    if(this.sortDirection === 'desc'){
      this.sortDirection= 'asc';
    } else{
      this.sortDirection= 'desc';
    }
  }


}
