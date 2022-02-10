import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  register = {
    nombre: '',
    apellido: '',
    contacto: '',
    email: '',
    direccion: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

  onRegister(){
    console.log(this.register);
  }
}
