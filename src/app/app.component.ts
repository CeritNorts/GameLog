import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Bienvenido';  // Título predeterminado

  constructor(private router: Router, private menuCtrl: MenuController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.menuCtrl.enable(true); // Habilita el menú al iniciar

    // Escucha los cambios de la ruta
    this.router.events.subscribe(() => {
      this.updatePageTitle();
    });
  }

  updatePageTitle() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('lista-juegos')) {
      this.pageTitle = 'MIS JUEGOS';
    } else if (currentUrl.includes('logros')) {
      this.pageTitle = 'Logros Completados';
    } else if (currentUrl.includes('sugerencias')) {
      this.pageTitle = 'Sugerencias de Logros';
    } else if (currentUrl.includes('perfil')) {
      this.pageTitle = 'Perfil del Jugador';
    } else if (currentUrl.includes('configuracion')) {
      this.pageTitle = 'Configuración';
    } else if (currentUrl.includes('estadisticas')) {
      this.pageTitle = 'Estadísticas';
    } else {
      this.pageTitle = 'Bienvenido';  // Título predeterminado
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
    this.menuCtrl.close();
  }
}
