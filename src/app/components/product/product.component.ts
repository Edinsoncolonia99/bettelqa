import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product} from './../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  @Input() product: Product = { 
    id: '',
    price: 0,
    image: '',
    name: '',
    title: '',
  }
  @Output() addedProduct = new EventEmitter<Product>();
  //@Output() showProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

   onAddToCart() {
     this.addedProduct.emit(this.product);
     console.log(this.product)
   }



  //onShowDetail() {
  //  this.showProduct.emit(this.product.id);
 // }
}
