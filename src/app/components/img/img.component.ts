import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = ''
  @Output() loaded = new EventEmitter<string>();  
  imgDefault = "./assets/images/default.png"
  // counter= 0;
  // counterFn: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // this.counterFn= window.setInterval(() =>{
    // this.counter += 1;
    // console.log('cuenta');
    // },1000);
  }

  ngOnDestroy(){
    // window.clearInterval(this.counterFn);
  }


  imgError(){
    this.img = this.imgDefault;
  }

  imgLoaded(){
    console.log('componente H')
    this.loaded.emit(this.img);
  }

}
