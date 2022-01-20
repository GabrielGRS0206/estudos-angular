import { TransferenciaServiceService } from './../services/transferencia-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.mode';
import { Person } from '../services/models/person.mode';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  listaTransferencias : any[] = [];
  listaPerson : any[] = [];

  constructor(private service: TransferenciaServiceService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaTransferencias: Transferencia[]) => {
      console.table(listaTransferencias);
      this.listaTransferencias = listaTransferencias;

  });

  this.service.listarPerson().subscribe((listPerson: Person[]) => {
    console.table(listPerson);
    this.listaPerson = listPerson;

});
  }
}
