import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationalexcecutiveRoutingModule } from './relationalexcecutive-routing.module';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { CibilcheckComponent } from './cibilcheck/cibilcheck.component';
import { LoanfillupformComponent } from './loanfillupform/loanfillupform.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    EnquiryformComponent,
    CibilcheckComponent,
    LoanfillupformComponent
  ],
  imports: [
    CommonModule,
    RelationalexcecutiveRoutingModule,
    MatFormFieldModule,ReactiveFormsModule,
    MatButtonModule,MatIconModule
  ]
})
export class RelationalexcecutiveModule { }
