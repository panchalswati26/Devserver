import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-innerchild',
  templateUrl: './innerchild.component.html',
  styleUrls: ['./innerchild.component.css']
})
export class InnerchildComponent {

  @Input() dataFromParent:any;

  @Output() dataEvent = new EventEmitter<any>();
  
  public dataFromChild:any="This is the data from child to parent";
  constructor(){
    console.log(this.dataFromParent);
  }

  ngOnInit(){
    console.log(this.dataFromParent);
  }


  sendFromChildToParent(){
    console.log("Hello");




    
    this.dataEvent.emit(this.dataFromChild);
  }
}
