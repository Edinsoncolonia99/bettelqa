import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

  constructor() { }
  public phone = '{ 573117976636 }';
  public title = '¡Ahora el pan se llama BETTEL!';

  ngOnInit(): void {
  }

}
