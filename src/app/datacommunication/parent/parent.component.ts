import { Component, ViewChild } from '@angular/core';
import { OuterchildComponent } from '../outerchild/outerchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public parentData:any;

  public parentData2:any="data from parent to outer child";

  public childData:any;

  @ViewChild(OuterchildComponent) childCmp:any;

  constructor(){
    this.parentData = "Data from parent component to inner child";

    console.log(this.childCmp);
  }

  ngOnInit(){
    console.log(this.childCmp);
  }

  ngAfterViewInit(){
    console.log(this.childCmp);
    console.log(this.childCmp.outerChildData);
    console.log(this.childCmp.getAllMarksDetails());
  }

  fetchDataFromChild(evt:any){
    console.log(evt);
    this.childData = evt;
  }

}

