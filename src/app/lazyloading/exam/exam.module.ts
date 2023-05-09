import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgexamComponent } from './ugexam/ugexam.component';
import { PgexamComponent } from './pgexam/pgexam.component';
import { InstructionComponent, } from './instruction/instruction.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamhomeComponent } from './examhome/examhome.component';

const route : Routes =[
  {path:'', component:ExamhomeComponent},
  {path:'uge', component: UgexamComponent},
  {path:'pge', component: PgexamComponent},
  {path:'instructions', component: InstructionComponent}
]


@NgModule({
  declarations: [
    UgexamComponent,
    PgexamComponent,
    InstructionComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class ExamModule { }

