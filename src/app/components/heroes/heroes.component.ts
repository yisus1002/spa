import { Component, NgModule, OnInit } from '@angular/core';
import { HeroesService , Heroe} from '../../services/heroes.service';

//Importamos la ruta
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  //Propiedades
  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
    private router:Router
    ) { 


    console.log('Constructor <- ' );
    // console.log(this.heroes);

  }
  
  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroers();
    console.log(this.heroes);

    // fail(f:String){

    // }
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
    console.log(idx);
  }
  // MostrarC(dato:string){
  //   let d=[];
  //   let a=[];
  //   a=dato.split('');
  //   for (let index = 0; index < 120; index++) {
  //    d.push(a[index]);
  //   }
  //   return (d.join('')+  ` ...` );
  // }

}
