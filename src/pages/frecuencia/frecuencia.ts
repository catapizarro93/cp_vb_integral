import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import * as stat from "simple-statistics";
import * as math from "mathjs";

@Component({
  selector: 'page-frecuencia',
  templateUrl: 'frecuencia.html'
})
export class FrecuenciaPage {
  public prueba;
  public frecuencia;
  public num : number;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public visible: Boolean;
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      p: ['', Validators.compose([Validators.required])]
    });

    this.def_text="<p>Cuando los valores de la variable son muchos, conviene agrupar los datos en intervalos o clases para así realizar un mejor análisis e interpretación de ellos. </p>";
    this.par_text = "$n$: Representa la cantidad total de datos que se deben ingresar";
    this.par_text = "$r$: Representa el rango";
    this.par_text = "$l_s$: Representa el limite superior";
    this.par_text = "<p>$n$: Representa la cantidad total de datos que se deben ingresar</p> <p>$r$: Representa el rango</p> <p>$l_i$: Representa el limite inferior</p> <p>$l_s$: Representa el limite superior</p> <p>$a$: Representa la amplitud</p>";


  }  
  

  
    }
