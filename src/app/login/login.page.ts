import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form.valid) {
      if (this.email.trim() === 'kevin' && this.password.trim() === '12345') {
        this.navController.navigateRoot('/inicio');
      } else {
        this.presentToast('Las credenciales de acceso son incorrectas');
      }
    } else {
      this.presentToast('Por favor, completa todos los campos');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      color: 'warning',
      message: message,
      duration: 3000, // milisegundos
      position: 'bottom',
    });

    await toast.present();
  }
}
