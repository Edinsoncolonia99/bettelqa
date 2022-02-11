import { Component, OnInit } from '@angular/core';
import { Product } from './../../../models/product.model';
import { StoreService } from './../../../services/store.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, CommonModule{
  products$: Observable<Product[]>;

  constructor(
  private storeService: StoreService
  ) { 
    this.products$ = this.storeService.myCart$;
  }

  ngOnInit(): void {
  }

}
