import { TransferenciaServiceService } from './services/transferencia-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-curso-alura';

  constructor(private service: TransferenciaServiceService){}

  transferir(_$event: any){
    this.service.adicionar(_$event);
  }
}
