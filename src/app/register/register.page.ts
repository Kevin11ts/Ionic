import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  telefono: string = '';
  correo: string = '';
  contrasenia: string = '';
  confirmarContrasenia: string = '';
  edad: string = ''
  ;

  //Todas las dependencias se ingresan dentro de los () del constructor
  constructor(
    private toastController: ToastController,
    private navController: NavController,
  ) {}

  ngOnInit() {}

  register(form: NgForm){
  //console.log('form ', form);

  /* console.log(form.value);
   console.log(form.valid); //Valida que el usuario haya llenado todos los campos(required)
   console.log(form.invalid);
   */
   if(form.valid) {
    this.navController.navigateBack('/login');
   }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'warning',
      position: 'bottom',
    });
    toast.present();
  }

  async registrarse() {
    if (!this.nombre || !this.apellidos || !this.telefono || !this.correo || !this.contrasenia || !this.confirmarContrasenia || !this.edad) {
      this.presentToast('Por favor, completa todos los campos.');
      return;
    }

    if (this.contrasenia !== this.confirmarContrasenia) {
      this.presentToast('Las contraseñas no coinciden.');
      return;
    }

    // Aquí puedes proceder con el registro, como enviar datos a un servidor.
    this.presentToast('Registro exitoso.');
    this.navController.navigateRoot('/inicio');
  }
}
