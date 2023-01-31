import { TransferenciasService } from './services/transferencias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<h1>Hola desde nueva transferencia</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: TransferenciasService){

  }
  transferir($event:any){
    this.service.agregar($event)
  }
}
