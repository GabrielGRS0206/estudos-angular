import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from './models/transferencia.mode';
import { Person } from './models/person.mode';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaServiceService {

  private url = 'http://localhost:3000/transferencias';
  private urlPerson = 'http://localhost:8080/api/clients';
  private listaTransferencia: any[];

  constructor(private httpClient : HttpClient) {
    this.listaTransferencia = [];
  }

  listar(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  listarPerson() : Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.urlPerson);
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  adicionar(transferencia:any){
    this.hidratar(transferencia);
  }

  private hidratar(transferencia:any){
    transferencia.data = new Date();
    this.listaTransferencia.push(transferencia);
  }

}
