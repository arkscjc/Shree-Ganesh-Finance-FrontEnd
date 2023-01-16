import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { RateofinterestComponent } from './rateofinterest/rateofinterest.component';
import { AmmountofloanComponent } from './ammountofloan/ammountofloan.component';
import { GeneratesanctionletterComponent } from './generatesanctionletter/generatesanctionletter.component';
import { NotificationsendtooeComponent } from './notificationsendtooe/notificationsendtooe.component';
import { VerifydetailsComponent } from './verifydetails/verifydetails.component';


@NgModule({
  declarations: [
    RateofinterestComponent,
    AmmountofloanComponent,
    GeneratesanctionletterComponent,
    NotificationsendtooeComponent,
    VerifydetailsComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule
  ]
})
export class CreditmanagerModule { }