import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent {
  public studId:any;
  public studName:any;
    constructor(private actRoute: ActivatedRoute){
      // i will fetch the data. there are two ways to read the data

      // 1. route param (direct value)
      // console.log(this.actRoute);
      console.log(this.actRoute.snapshot.params);
      this.studId = this.actRoute.snapshot.params['id'];
      this.studName = this.actRoute.snapshot.params['name'];

      console.log(this.studId);
      console.log(this.studName);

      // 2. param Map :
      console.log(this.actRoute.paramMap);
      this.actRoute.paramMap.subscribe(
        ((res:any)=>{
          console.log(res);
          this.studId = res.params.id;
          this.studName = res.params.name;
          console.log(this.studId);
          console.log(this.studName);
        })
      )
    }
}
