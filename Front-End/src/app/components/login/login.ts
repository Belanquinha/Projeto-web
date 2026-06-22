import { Component, ChangeDetectorRef } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})



export class Login {
  obj: Cliente = new Cliente();
  tituloModal = '';
  mensagemModal = '';
  classeModal = ''; 

  // Injete o cdRef no construtor
  constructor(private http: HttpClient, private router: Router, private cdRef: ChangeDetectorRef) {}

  tentarLogin(formLogin: NgForm) {
    const url = 'http://localhost:8060/perfils/login';
    const dadosLogin = { email: this.obj.email, senha: this.obj.senha };

    this.http.post<any>(url, dadosLogin).subscribe({
      next: (usuarioLogado) => {
        this.tituloModal = 'Login realizado';
        this.classeModal = 'btn-laranja-custom'; // Simplificado: apenas a cor de fundo
        const nomeUsuario = usuarioLogado?.nome || 'Usuário';
        this.mensagemModal = `Bem-vindo, ${nomeUsuario}!`;
        
        // Força o Angular a atualizar o HTML com os textos novos
        this.cdRef.detectChanges();
        this.abrirModal();

        setTimeout(() => {
          this.fecharModal();
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (erro) => {
        console.error('Erro de requisição: ', erro);
        this.tituloModal = 'Erro no login';
        this.classeModal = 'bg-danger'; // Simplificado
        this.mensagemModal = 'E-mail ou senha incorretos.';
        
        this.cdRef.detectChanges();
        this.abrirModal();
      }
    });
  }

  abrirModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      const bootstrapModal = (window as any).bootstrap?.Modal?.getOrCreateInstance(modalElement);
      bootstrapModal?.show();
    }
  }

  fecharModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      const bootstrapModal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
      bootstrapModal?.hide();
      
      // Remove resquícios do backdrop do Bootstrap que às vezes travam a tela
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }
}
