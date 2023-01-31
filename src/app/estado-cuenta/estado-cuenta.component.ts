import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss']
})
export class EstadoCuentaComponent implements OnInit {
  @Input() transferencias: any[] = []
  constructor() {

   }

  ngOnInit(): void {

  }

}
