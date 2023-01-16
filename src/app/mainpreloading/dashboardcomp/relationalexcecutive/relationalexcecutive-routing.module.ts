import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CibilcheckComponent } from './cibilcheck/cibilcheck.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { LoanfillupformComponent } from './loanfillupform/loanfillupform.component';



import {MatStepperModule} from '@angular/material/stepper';

const routes: Routes = [
  {path:"enquiryform",component:EnquiryformComponent},
  {path:"cibilcheck",component:CibilcheckComponent},
  {path:"loanfillupform",component:LoanfillupformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationalexcecutiveRoutingModule { }
