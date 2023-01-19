import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-verifydetails',
  templateUrl: './verifydetails.component.html',
  styleUrls: ['./verifydetails.component.scss']
})
export class VerifydetailsComponent {
  
  

  constructor(private _formBuilder: FormBuilder, private cs:CommonserviceService,private route:Router) {}
     
    customerdata: CustomerDetails[];

    ngOnInit():void
    {
      this.cs.getcustomerdata().subscribe((data:CustomerDetails[])=>{
        this.customerdata=data
        
      })
    }

    
   

    singlecustomeralldata(info:CustomerDetails){

      this.route.navigate(['./dashboard/creditmanager/rateofinterest'], 
      {queryParams:{data:JSON.stringify(info)}});

    }
  
   
}
