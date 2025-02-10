import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemJuegosComponent } from './item-juegos/item-juegos.component';



@NgModule({
  declarations: [
    ItemJuegosComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    ItemJuegosComponent
  ]
})
export class ComponenteModule { }
