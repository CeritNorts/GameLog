import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-juegos',
  templateUrl: './item-juegos.component.html',
  styleUrls: ['./item-juegos.component.scss'],
  standalone: false,
})
export class ItemJuegosComponent  implements OnInit {

  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';

  constructor() { }

  ngOnInit() {}

}
