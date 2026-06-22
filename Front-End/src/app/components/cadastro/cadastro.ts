import { Component } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})

export class Cadastro {
  cliente: Cliente = new Cliente();
  mensagemCadastro = '';
  codigoCadastro: number | string = '';

  constructor(private http: HttpClient) {}

  enviarCadastro(formCadastro: NgForm) {
    const url = 'http://localhost:8060/perfils';

    this.http.post<any>(url, this.cliente).subscribe({
      next: (resposta) => {
        console.log('Perfil salvo', resposta);

        this.mensagemCadastro = 'Cadastro realizado com sucesso!';
        this.codigoCadastro = resposta?.id || '';

        // Limpa o formulário e reseta o objeto
        formCadastro.resetForm();
        this.cliente = new Cliente();
        
        this.abrirModal();
      },
      error: (erro) => {
        console.error('Deu erro ao salvar: ', erro);
        this.mensagemCadastro = 'Erro ao realizar cadastro.';
        this.codigoCadastro = '';
        
        this.abrirModal();
      }
    });
  }

  // lógica do Modal 
  private abrirModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      const bootstrapModal = (window as any).bootstrap?.Modal?.getOrCreateInstance(modalElement);
      bootstrapModal?.show();
    }
  }
}
