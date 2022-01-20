import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen: Product= {
    id: '',
    name: '',
    price: 0,
    image: '',
    title: '',
  };
  products: Product[] = [
    {
      id: '1',
      name: 'Pan con aceitunas del Valle frescas y jugosas',
      price: 2500,
      image: './assets/images/plate1.png',
      title: 'Pan Bettel con Aceitunas'
    },
    {
      id: '2',
      name: 'Arandanos tiernos con la mezcla perfecta del pan Bettel',
      price: 3500,
      image: './assets/images/plate2.png',
      title: 'Pan Bettel Arandanos'
    },
    {
      id: '3',
      name: 'La combinacion del Cacao del Pacifico y un Pan fresco y crujiente',
      price: 2200,
      image: './assets/images/plate3.png',
      title: 'Pan Bettel Cacao'
    },
    {
      id: '4',
      name: 'Pan relleno hasta las puntas de queso fresco y suave al comer',
      price: 9900,
      image: './assets/images/plate4.png',
      title: 'Pan Bettel Queso'
    },
  ];

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail 
  }

  onShowDetail(product: Product) {
    
    this.storeService.Prueba(product);
    this.total = this.storeService.getTotal();
    
  }
}