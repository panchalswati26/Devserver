import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './collage/home/home.component';
import { DeptComponent } from './collage/dept/dept.component';
import { AdmsnComponent } from './collage/admsn/admsn.component';
import { StudComponent } from './collage/stud/stud.component';
import { StaffComponent } from './collage/staff/staff.component';
import { LoginComponent } from './collage/login/login.component';
import { ErrorComponent } from './collage/error/error.component';
import { HttpClientModule} from '@angular/common/http';
import { OuterchildComponent } from './datacommunication/outerchild/outerchild.component';
import { ParentComponent } from './datacommunication/parent/parent.component';
import { InnerchildComponent } from './datacommunication/parent/innerchild/innerchild.component';
import { CompAComponent } from './datacommunication/comp-a/comp-a.component';
import { CompBComponent } from './datacommunication/comp-b/comp-b.component';
import { PrimeNGComponent } from './thirdPartyLibries/prime-ng/prime-ng.component';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeptComponent,
    AdmsnComponent,
    StudComponent,
    StaffComponent,
    LoginComponent,
    ErrorComponent,
    OuterchildComponent,
    ParentComponent,
    InnerchildComponent,
    CompAComponent,
    CompBComponent,
    PrimeNGComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ImageModule,
    ChartModule ,
    InputTextModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
