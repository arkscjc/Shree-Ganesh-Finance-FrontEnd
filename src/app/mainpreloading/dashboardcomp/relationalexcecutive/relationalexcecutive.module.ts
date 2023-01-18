import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationalexcecutiveRoutingModule } from './relationalexcecutive-routing.module';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { CibilcheckComponent } from './cibilcheck/cibilcheck.component';
import { LoanfillupformComponent } from './loanfillupform/loanfillupform.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


import { LoanapplicationComponent } from '../../loanapplication/loanapplication.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    EnquiryformComponent,
    CibilcheckComponent,
    LoanfillupformComponent,
    LoanapplicationComponent
  ],
  imports: [
    CommonModule,
    RelationalexcecutiveRoutingModule,
    MatFormFieldModule,ReactiveFormsModule,
    MatButtonModule,MatIconModule,MatStepperModule,MatInputModule
  ],
  exports:[
    LoanapplicationComponent
  ]
})
export class RelationalexcecutiveModule { }
