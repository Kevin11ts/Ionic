import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password : string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'kevinsandoval@gmail.com' && this.password === '12345') {
      this.navController.navigateRoot('/inicio');
    } else {
      this.presentToast();
    }
  }

  
  
    async presentToast() {
      const toast = await this.toastController.create({
        color: 'warning',
        message: 'Las credenciales de acceso con incorrectas',
        duration: 3000, //milisegundos
        position: 'bottom',
      });
  
      await toast.present();
    }

}