import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  constructor() {}


  ngOnInit(){

    let numero = 0;
    console.log('Hola Mundo');
    
    numero = 5;
    numero = 10;
    numero = numero * 2;

    console.log('Este es mi proyecto de Ionic');
    console.log('Aprendiste');
    console.log('Hola Mundo');
    console.log('Hola Mundo');
  }

}