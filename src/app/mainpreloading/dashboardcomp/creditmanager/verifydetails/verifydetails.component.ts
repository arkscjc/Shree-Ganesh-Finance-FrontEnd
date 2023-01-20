import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';







@Component({
  selector: 'app-verifydetails',
  templateUrl: './verifydetails.component.html',
  styleUrls: ['./verifydetails.component.scss']
})
export class VerifydetailsComponent  {
  customerdata: CustomerDetails[];
  
  
   
  
   

  constructor(private _formBuilder: FormBuilder, private cs:CommonserviceService,private route:Router) {

    
  }
  
     
    

    ngOnInit():void
    {
      this.cs.getCustomerDocumentsVerifiedData().subscribe((data:CustomerDetails[])=>{
        this.customerdata=data
        
      })
    }

    
   

    singlecustomeralldata(info:CustomerDetails){

      this.route.navigate(['./dashboard/creditmanager/rateofinterest'], 
      {queryParams:{data:JSON.stringify(info)}});

    }
  
    
}
