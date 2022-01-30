import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import {  CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: ProductsComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'ubicaciones',
    component: UbicacionesComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
