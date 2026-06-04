import { Component } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  mensagem : string = "";
  obj: Cliente = new Cliente();
  codigo: number = 0;

  gravar() {
    const codigoMemoria = localStorage.getItem("codigoAtual");

    if (codigoMemoria !== null) {
      this.codigo = parseInt(codigoMemoria);
    }

    this.codigo ++
    let json = JSON.stringify(this.obj); // serializar ou trocar uma texto em um formato json??
  
    localStorage.setItem("meuCliente", json);
    localStorage.setItem("codigoAtual", (this.codigo).toString());
    this.mensagem = this.codigo.toString();
  }
}
