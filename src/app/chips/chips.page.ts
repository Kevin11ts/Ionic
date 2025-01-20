import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.page.html',
  styleUrls: ['./chips.page.scss'],
  standalone: false,
})
export class ChipsPage implements OnInit {
  profilePictureUrl: string;
  userName: string;
  backgroundColor: string = '#ffffff'; // Fondo inicial (blanco)

  constructor() {
    this.profilePictureUrl = 'https://i.ytimg.com/vi/JQn4IsNXRec/maxresdefault.jpg'; // URL de ejemplo
    this.userName = 'Kevin'; // Nombre de usuario

  }

  ngOnInit() {}

  changeBackground(color: string): void {
    switch (color) {
      case 'primary':
        this.backgroundColor = '#2196f3'; // Azul
        break;
      case 'danger':
        this.backgroundColor = '#f44336'; // Rojo
        break;
      case 'success':
        this.backgroundColor = '#4caf50'; // Verde
        break;
      default:
        this.backgroundColor = '#ffffff'; // Blanco por defecto
    }
  }
  
}
