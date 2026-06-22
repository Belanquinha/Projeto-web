import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.css' // ajuste para o nome do seu arquivo de estilo se necessário
})
export class EsqueciSenha {
  // Objeto simples para espelhar os inputs do HTML
  dadosRecuperacao = {
    email: '',
    senha: ''
  };

  // Controle do Modal
  tituloModal = '';
  mensagemModal = '';
  classeModal = '';
  sucesso = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  processarRecuperacao(form: NgForm) {
    if (form.invalid) return;

    const url = 'http://localhost:8060/perfils/recuperar-senha';

    this.http.put(url, this.dadosRecuperacao).subscribe({
      next: () => {
        // Configura modal para SUCESSO
        this.sucesso = true;
        this.tituloModal = 'Senha Alterada!';
        this.classeModal = 'btn-laranja-custom text-white';
        this.mensagemModal = 'Sua senha foi redefinida com sucesso.';

        this.cdr.detectChanges();
        this.abrirModal();
      },
      error: (erro) => {
        console.error('Erro ao recuperar senha:', erro);
        
        // Configura modal para ERRO
        this.sucesso = false;
        this.tituloModal = 'Erro na recuperação';
        this.classeModal = 'bg-danger text-white';
        this.mensagemModal = 'O e-mail informado não está cadastrado em nosso sistema.';

        this.cdr.detectChanges();
        this.abrirModal();
      }
    });
  }

  abrirModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap?.Modal?.getOrCreateInstance(modal);
      bootstrapModal?.show();
    }
  }

  irParaLogin() {
    // Fecha o modal via JS antes de ir para a rota, evitando tela cinza
    const modal = document.getElementById('myModal');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap?.Modal?.getInstance(modal);
      bootstrapModal?.hide();
    }
    this.router.navigate(['/login']); // coloque a rota exata do seu login
  }
}