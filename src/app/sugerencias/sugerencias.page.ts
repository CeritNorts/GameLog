import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
  standalone: false,
})
export class SugerenciasPage implements OnInit {
  logro = {
    nombre: '',
    descripcion: '',
    juego: '',
    imagen: ''
  };

  logrosSugeridos: any[] = [];

  agregarLogro() {
    if (this.logro.nombre && this.logro.descripcion && this.logro.juego) {
      this.logrosSugeridos.push({ ...this.logro });
      this.logro = { nombre: '', descripcion: '', juego: '', imagen: '' };
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  cargarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logro.imagen = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
