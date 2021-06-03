import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //@Input() cldtxt='';
  cldcount: number=0;
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.basketService.subjectcount.subscribe(parcnt =>this.cldcount = parcnt);
  }


}
