import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-disbursmentcomp',
  templateUrl: './disbursmentcomp.component.html',
  styleUrls: ['./disbursmentcomp.component.scss']
})
export class DisbursmentcompComponent {
constructor(private fb:FormBuilder,private cs:CommonserviceService){}
customerdata: CustomerDetails[];
ngOnInit()
{
 this.cs.getAllSanctionLetterSignByCustomer().subscribe((data:CustomerDetails[])=>{
   this.customerdata=data
})
}

DisburseLoan()
{
  
}
}
