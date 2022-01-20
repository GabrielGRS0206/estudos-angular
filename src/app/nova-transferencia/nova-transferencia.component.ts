import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponet {

  @Output() aoTransferir = new EventEmitter<any>();

  //------------------
  valor: number | undefined;
  destino!: string | undefined;

  transferir() {
    console.log('Transferencia realizada com sucesso');
    const valorParaTransferir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorParaTransferir);
    //aqui esse valor vai ser transferido para o app-component.html

    this.limparCampos();
  }

  exibirModalComErro() {}

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
