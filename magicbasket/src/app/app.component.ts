import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magicbasket';
  name: string = "Enter Item to basket..";
  in: boolean = true;
  // basketitems: string[]=['mangoes','apples','bananas','grapes'];
  fruits: string[]=['mango','apple','grapes','banana','orange'];
  vegetables: string[]=['tomato','carrot','beetroot','onion','cucumber'];
  newbasketitems: string[]=[];
  delitem: string = "";

  myFunc(){
    if(this.newbasketitems.indexOf(this.name)===-1){
      this.newbasketitems.push(this.name);
    }
  }

  remove(msg: string){
    const index: number = this.newbasketitems.indexOf(msg);
    if (index !== -1) {
        this.newbasketitems.splice(index, 1);
    }  
  }
}
