import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BillingInformation } from '../billing.module';
import { Productclass } from '../product.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public laptopUrl= "http://localhost:3000/laptops/";
  cartItemList: Productclass[] = [];
  laptopList= new BehaviorSubject<any>([]);

  search= new BehaviorSubject<string>("");
  sort= new BehaviorSubject<string>("");

  billingInfoArr: BillingInformation[]=[];
  updatedList: any;
  grandTotal!: number;

  array!: any;
  
  constructor(
    private http: HttpClient
  ) { }

  getLaptops(): Observable<any>{
    return this.http.get(this.laptopUrl)
    .pipe(map((response : any) =>{
      return response;
    }));
  }

  getCartLaptops(){
    return this.laptopList.asObservable();
  }

  setCartLaptop(laptop: any){
    this.cartItemList.push(laptop); 
    this.laptopList.next(laptop);
  }
  

  addToCart(laptop: any){
    let productExists= false;

    if( this.cartItemList.length == 0 ) {
      this.cartItemList.push(laptop);
      this.laptopList.next(this.cartItemList);
      this.getTotalAmount();

    } else {
      
    for(let index in this.cartItemList){
      if(this.cartItemList[index].id === laptop.id){
        this.cartItemList[index].quantity++;
        this.laptopList.next(this.cartItemList);

        this.cartItemList[index].total= this.cartItemList[index].quantity * this.cartItemList[index].price;
        productExists= true;

      }
    }
      if(!productExists){
        this.cartItemList.push(laptop);
        this.laptopList.next(this.cartItemList);
      }
    }
  
  }

  getTotalAmount(): number{
    let total= 0;
    this.cartItemList.map((item: any) =>{
      total = total + item.total;
    });
    return total;
  }

  emptyCart(){
    this.cartItemList = [];
    this.laptopList.next(this.cartItemList);
  }

  addAddress(info: BillingInformation){
    let resultStr= '';
    let userLength= this.billingInfoArr.length;
    let newLength= this.billingInfoArr.push(info);
    this.array= this.billingInfoArr.push(info);
    console.log("array is " +this.array);
    if(newLength > userLength){
      resultStr= "Success";
    }
    else{
      resultStr=  "Fail";
    }
    return resultStr;
  }

  getBillingInfo(){
    console.log("billing info is " + this.billingInfoArr);
   return this.billingInfoArr;
  
  }
}
