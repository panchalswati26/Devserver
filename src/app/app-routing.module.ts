import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './collage/home/home.component';
import { AdmsnComponent } from './collage/admsn/admsn.component';
import { DeptComponent } from './collage/dept/dept.component';
import { StudComponent } from './collage/stud/stud.component';
import { StaffComponent } from './collage/staff/staff.component';
import { LoginComponent } from './collage/login/login.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './datacommunication/parent/parent.component';
import { CompAComponent } from './datacommunication/comp-a/comp-a.component';
import { CompBComponent } from './datacommunication/comp-b/comp-b.component';
import { PrimeNGComponent } from './thirdPartyLibries/prime-ng/prime-ng.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"admsn",component: AdmsnComponent,pathMatch:"prefix"},
  {path:"dept",component:DeptComponent},
  {path:"stud/:id/name", component:StudComponent,canActivate:[AuthGuard]},
  {path:"staff/:id/name",component:StaffComponent},
  {path:"login", component:LoginComponent},
  {path:"commu", component: ParentComponent},
  {path:"compA",component:CompAComponent},
  {path:"compB",component:CompBComponent},
  {path:"thirdParty",component:PrimeNGComponent},

  {path:"headDept",redirectTo:"dept"},
  {
    path:"exam", loadChildren:()=>import('./lazyloading/exam/exam.module').then(mod=> mod.ExamModule)
  },
  {
    path:"placement", loadChildren:()=>import('./lazyloading/placement/placement.module').then(mod=> mod.PlacementsModule)
  },


  //{path:"**",component:ErrorComponent}
  {path:"**",redirectTo:""}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
