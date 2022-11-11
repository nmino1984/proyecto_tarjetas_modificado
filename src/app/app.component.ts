import { Component, OnInit } from '@angular/core';
import ListaPersonas from "../assets/JSON/personas.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-Tarjetas';
  usuario: any;
  personas: any = ListaPersonas;

  constructor() { }

  ngOnInit() {
    this.CargarDatos();
  }

  CargarDatos(){
    
    setTimeout(() => {

      this.usuario = this.personas[0];
      
    }, 1000);

  }

  /*Taked from:
  https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=69&codigo=69&inicio=60
  
  /*Esto es usando el SERVICIO como en el Ejemplo de la WEB
  ngOnInit() {
    this.recuperarPersona();
  }

  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe(result => this.usuario = result);
  }

  presion() {
    this.recuperarPersona();
  }
  */

}
