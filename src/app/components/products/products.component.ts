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
  //showProductDetail = false;
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
      name: 'Pan con aceitunas del Valle frescas y jugosas  (pack * 4)',
      price: 12900,
      image: './assets/images/plate1.png',
      title: 'Pan Bettel Aceitunas'
    },
    {
      id: '2',
      name: 'Arandanos tiernos con la mezcla perfecta del pan Bettel (pack * 4)',
      price: 12900,
      image: './assets/images/plate2.png',
      title: 'Pan Bettel Arandanos'
    },
    {
      id: '3',
      name: 'La combinacion del Cacao del Pacifico y un Pan fresco y crujiente (pack * 4)',
      price: 12900,
      image: './assets/images/plate3.png',
      title: 'Pan Bettel Cacao'
    },
    {
      id: '4',
      name: 'Pan relleno hasta las puntas de queso fresco y suave (pack * 4)',
      price: 12900,
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

  // Forma antigua de enseñar el detalle del producto
  //toggleProductDetail(){
  //  this.showProductDetail = !this.showProductDetail 
  //}

  //onShowDetail(product: Product) {
    
  //  this.storeService.Prueba(product);
  //  this.total = this.storeService.getTotal();
    
  //}
}