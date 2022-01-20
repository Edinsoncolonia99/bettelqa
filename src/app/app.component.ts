import { Component } from '@angular/core';
import { Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  


  /* evento para renderizar en el componente P*/
  onLoaded(img: string){
    console.log('componente P', img)
  }
  toogleImg(){
    this.showImg = !this.showImg;
  }
}
