import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexcecutiveRoutingModule } from './operationalexcecutive-routing.module';
import { VerifyformComponent } from './verifyform/verifyform.component';
import { VerifiedComponent } from './verified/verified.component';
import { PendingverificationComponent } from './pendingverification/pendingverification.component';
import { SendsanctionmailComponent } from './sendsanctionmail/sendsanctionmail.component';


@NgModule({
  declarations: [
    VerifyformComponent,
    VerifiedComponent,
    PendingverificationComponent,
    SendsanctionmailComponent
  ],
  imports: [
    CommonModule,
    OperationalexcecutiveRoutingModule
  ],
  exports:[
    VerifyformComponent,
    VerifiedComponent,
    PendingverificationComponent,
    SendsanctionmailComponent

  ]
})
export class OperationalexcecutiveModule { }
