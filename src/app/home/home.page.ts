import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router, private menuCtrl: MenuController) {}

  // Método para navegar entre las páginas
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
    this.menuCtrl.close();  // Cierra el menú después de navegar
  }

}
