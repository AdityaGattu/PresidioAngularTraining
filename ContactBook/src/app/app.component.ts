import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactService } from './contact.service';

export interface contact{
  name:string;
  phno:number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ContactBook';

  contact_list:contact[]=[];

  constructor(
    private contactSercice: ContactService,
    private fb:FormBuilder
  ){}

  userform: FormGroup;

  ngOnInit():void{
    this.createform();
  }
  createform(){
    this.userform =new FormGroup({
      name: new FormControl(),
      phno: new FormControl()
    })
  }

  addform():FormGroup{
    return this.userform = new FormGroup ({
      name: new FormControl(),
      phno: new FormControl(),
    })

  }
  submit_details(){
    console.log(this.userform.value);
    this.contact_list.push(this.userform.value);
  }

  addContact(){
    // this.contactlist.push();
  }

  delContact(curr_contact:contact){
    this.contact_list.splice(this.contact_list.indexOf(curr_contact),1);
 }
}
