import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

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

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

 
  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
 
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart); //trasmi el estado de la lista
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  // total $$ de carro de compras
  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  Prueba(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }
}