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

  }
  
  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroers();
    console.log(this.heroes);

  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
    console.log(idx);
  }

}
