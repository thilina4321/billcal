import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private router:Router) { }

  bill:{custid:string, last:string, newData:string}[] = []

  addData(custId:string, last:string,newData:string){
    this.bill.push({custid:custId, last:last, newData:newData})
    console.log(this.bill);
    this.router.navigateByUrl('/bill')

  }

  getData(){
    return this.bill
  }
}
