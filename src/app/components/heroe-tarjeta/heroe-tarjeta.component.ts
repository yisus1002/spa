import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Input propiedad recivida desde afuera
//Input propiedad emitir una salida
//EventeEmiter Propiedad va de la mano con Ouput

//Importamos la ruta
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() heroe:any={};
 @Input() index:number=0;

 @Output() heroeSeleccionado:EventEmitter<number>;


  constructor(private router:Router) {
    this.heroeSeleccionado=new EventEmitter();
   }

  ngOnInit(): void {
  }
  verHeroe(){
    this.router.navigate(['/heroe',this.index])
    // this.heroeSeleccionado.emit(this.index);
  }
  

}
