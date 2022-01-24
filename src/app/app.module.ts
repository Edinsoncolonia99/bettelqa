import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    FooterComponent,
    ProductDetailComponent,
    ContactanosComponent,
    UbicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWhastappButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
