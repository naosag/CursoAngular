import { Component} from '@angular/core';

@Component({
  selector: 'app-crase',
  templateUrl: './crase.component.html',
})
export class CraseComponent {

  alerta: string = "alert-danger";

  propiedades = {
    peligro: false
  };
  loading: boolean = false;


  constructor() {}


  ejecutar(){
    this.loading= true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
