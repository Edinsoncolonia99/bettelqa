import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../models/product.model'
import { StoreService } from './../../services/store.service'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  productId: string | null = null;
  
    constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.storeService.getProduct(id)!;
    });  
  }
}
