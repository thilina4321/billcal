import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private billService:BillService){}


  onSubmit(form:NgForm){
    this.billService.addData(form.value.custId,form.value.last,form.value.new)
  }

}
