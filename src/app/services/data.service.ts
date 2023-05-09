import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private message = new BehaviorSubject("This is default message from service");
  currentMessage = this.message.asObservable();
  constructor() {
    // console.log(this.message);
   }

   setData(dt:any){
    console.log(dt);
    this.message.next(dt);
   }

   getData(){
    return this.currentMessage;
   }
  // 0...1...2 ........3.......
}
