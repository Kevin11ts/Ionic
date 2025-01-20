import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: false,
})
export class InfiniteScrollPage {
  perfiles: any[] = [];
  todosLosPerfiles: any[] = [];
  cantidadInicial = 10; // Cantidad inicial de perfiles mostrados

  constructor() {
    this.generarTodosLosPerfiles(); // Genera una lista de perfiles
    this.cargarPerfilesIniciales(); // Carga los primeros perfiles
  }

  // Genera una lista completa de perfiles (simula datos de una API)
  generarTodosLosPerfiles() {
    for (let i = 1; i <= 50; i++) {
      this.todosLosPerfiles.push({
        nombre: `Perfil ${i}`,
        descripcion: `Este es el perfil número ${i}`,
        imagen: `https://i.pravatar.cc/150?img=${i}` // Imagen aleatoria
      });
    }
  }

  // Carga los primeros 10 perfiles
  cargarPerfilesIniciales() {
    this.perfiles = this.todosLosPerfiles.slice(0, this.cantidadInicial);
  }

  // Carga más perfiles al hacer scroll
  cargarMasPerfiles(event: any) {
    setTimeout(() => {
      const nuevaCantidad = this.perfiles.length + 10;
      this.perfiles = this.todosLosPerfiles.slice(0, nuevaCantidad);
      event.target.complete();

      // Si se han cargado todos los perfiles, desactiva el infinite scroll
      if (this.perfiles.length >= this.todosLosPerfiles.length) {
        event.target.disabled = true;
      }
    }, 1000); // Simula un retraso en la carga
  }
}
