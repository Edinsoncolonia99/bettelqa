import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { StoreService } from './../../services/store.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  total = 0;    
  counter = 0;
  @Output() addedProduct = new EventEmitter<Product>();
  @Input() product!: Product;

  productId: string | null = null;
  
    constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.storeService.getProduct(id)!;
    });  

    this.storeService.myCart$.subscribe(products => {
    this.counter = products.length;
    });

  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
  
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }


  back() {
    this.location.back();
  }
}
