import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<h1>Hola desde nueva transferencia</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transferencias:any = [] = []

  transferir($event:any){
    console.log("Este mensaje es de app component",$event);
    this.transferencias.push($event)

  }
}
