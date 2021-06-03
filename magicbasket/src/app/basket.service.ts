import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  private count=new Subject<number>();
  subjectcount = this.count.asObservable();

  changeSubjectCount(parentcnt: number){
    this.count.next(parentcnt);
  }

}
