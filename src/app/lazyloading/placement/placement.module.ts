import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgplacementComponent } from './ugplacement/ugplacement.component';
import { PgplacementComponent } from './pgplacement/pgplacement.component';
import { RouterModule, Routes } from '@angular/router';
import { PlacementhomeComponent } from './placementhome/placementhome.component';

const routes : Routes =[
  {path:'', component: PlacementhomeComponent },
  {path:'ugp', component: UgplacementComponent},
  {path:'pgp', component: PgplacementComponent}
]

@NgModule({
  declarations: [
    UgplacementComponent,
    PgplacementComponent,
    PlacementhomeComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class PlacementsModule { }
