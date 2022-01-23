import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  imagen:Img[]=[
    { img:'https://www.xtrafondos.com/descargar.php?id=3428&resolucion=2560x1440'},
    { img:'https://w0.peakpx.com/wallpaper/591/209/HD-wallpaper-dc-logo-dc-comics-logo-digital-art.jpg'},
    { img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UMcLT7q3XU0qRHe4SuHaPEHseF_wC7udcQ&usqp=CAU'},
    { img:'https://i2.wp.com/socialgeek.co/wp-content/uploads/2016/08/Justice-League-logo.jpg?fit=800%2C667&ssl=1'},
    { img:'https://www.nacionrex.com/__export/1511820060358/sites/debate/img/2017/11/27/liga-justicia-logos-protagonistas.jpg_242310155.jpg'},
    { img:'http://pm1.narvii.com/6530/ff1b90a300dc3a9cf8e088973809f7d2f184a8ab_00.jpg'},
    { img:'https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=ZCUTXwiZ0s8Ae9F8$WrxG8$daE2N3K4ZzOUsqbU5sYvq_8c5jsxmSstchdOVo2Gv6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg'},
    { img:'https://larepublica.pe/resizer/QH3_ZFa7BAb5ZkswPgsxNEMeBVg=/1200x660/top/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/R5N7XOWD35FDRM4U32IFZII3S4.JPG'},
    { img:'https://phantom-marca.unidadeditorial.es/19f77210ef596d52f2bfc0c392595ec3/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/21/16374603261209.jpg'},
    { img:'https://www.cinemascomics.com/wp-content/uploads/2016/11/X-Men-cine-reboot.jpg'},
    { img:'https://phantom-marca.unidadeditorial.es/cb813b9e40f8f277f712a1e5ee12056c/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/18/16398555270572.jpg'},
    { img:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C7322DB3F2C62EC9D28AE0FF32508B51C229D8A8664C0CE9E6F85953039C3A52/scale?width=2880&aspectRatio=1.78&format=jpeg'}
  ];

  constructor() { }

  ngOnInit(): void {
   console.log( this.imagen);
  }

}

export interface Img{
  img:string; 
}