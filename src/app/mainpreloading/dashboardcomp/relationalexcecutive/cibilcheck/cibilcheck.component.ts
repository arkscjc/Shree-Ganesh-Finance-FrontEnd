import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { Enquiry } from 'src/app/models/enquiry';

@Component({
  selector: 'app-cibilcheck',
  templateUrl: './cibilcheck.component.html',
  styleUrls: ['./cibilcheck.component.scss']
})
export class CibilcheckComponent {

  constructor(private cs:CommonserviceService){}

sdata:Enquiry[]

ngOnInit():void
{
  this.cs.getdata().subscribe((data:Enquiry[])=>{
    this.sdata=data
  })
}


}
