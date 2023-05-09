import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {

  public dataFromA ="This is the data from A component";
  public dataFromB :any;
  constructor(private dataSer: DataService){
    // this.dataSer.currentMessage.subscribe(
    //   ((res:any)=>{
    //     console.log(res);
    //   })
    // )

    this.dataSer.getData().subscribe(
      ((res:any)=>{
        console.log(res);
        this.dataFromB = res;
      })
    )
  }

  setMessageFromA(){
    this.dataSer.setData(this.dataFromA);
  }



}
