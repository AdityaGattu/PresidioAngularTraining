import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  //partxt='aditya';
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
  }
  name: string = "Enter Item to basket..";
  curr_count: number = 0;
  in: boolean = true;
  // basketitems: string[]=['mangoes','apples','bananas','grapes'];
  fruits: string[]=['mango','apple','grapes','banana','orange'];
  vegetables: string[]=['tomato','carrot','beetroot','onion','cucumber'];
  newbasketitems: string[]=[];
  delitem: string = "";

  myFunc(){
    if(this.newbasketitems.indexOf(this.name)===-1){
      if(this.fruits.indexOf(this.name)!==-1 || this.vegetables.indexOf(this.name)!==-1)
      {
        this.newbasketitems.push(this.name);
        this.curr_count+=1;
        this.basketService.changeSubjectCount(this.curr_count);
      }
    }
  }

  remove(msg: string){
    const index: number = this.newbasketitems.indexOf(msg);
    if (index !== -1) {
        this.newbasketitems.splice(index, 1);
        this.curr_count-=1;
        this.basketService.changeSubjectCount(this.curr_count);
    }  
  }

}
