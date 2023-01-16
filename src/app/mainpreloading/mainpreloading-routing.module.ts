import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompComponent } from './aboutcomp/aboutcomp.component';
import { AccountheadModule } from './dashboardcomp/accounthead/accounthead.module';
import { CreditmanagerModule } from './dashboardcomp/creditmanager/creditmanager.module';
import { DashboardcompComponent } from './dashboardcomp/dashboardcomp.component';
import { OperationalexcecutiveModule } from './dashboardcomp/operationalexcecutive/operationalexcecutive.module';
import { RelationalexcecutiveModule } from './dashboardcomp/relationalexcecutive/relationalexcecutive.module';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import { EMIcalculatorComponent } from './emicalculator/emicalculator.component';
import { FooterComponent } from './footer/footer.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { LoginComponent } from './login/login.component';
import { RegistercompComponent } from './registercomp/registercomp.component';

const routes: Routes =
[
  {path:"",component:DefaultcompComponent,
          
          children:[
                    {path:"login", component:LoginComponent},
                    {path:"home", component:HomecompComponent},
                    {path:"register",component:RegistercompComponent},
                    {path:"footer",component:FooterComponent},
                    {path:"about",component:AboutcompComponent},
                    {path:"emical",component:EMIcalculatorComponent},
                    {path:"loanapplication",component:LoanapplicationComponent}

                    ]
  },
  {
    path:"dashboard",component:DashboardcompComponent,

          children:[
        {path:"operationalexcecutive", loadChildren:()=>OperationalexcecutiveModule},
        {path:"relationalexcecutive", loadChildren:()=>RelationalexcecutiveModule},
        {path:"accounthead",loadChildren:()=>AccountheadModule},
        {path:"creditmanager", loadChildren:()=>CreditmanagerModule}
]
  }

      


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpreloadingRoutingModule { }
