import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2Aula');

termoPesquisa: string = '';

  constructor(private router: Router) {}

  executarBusca() {
    if (!this.termoPesquisa.trim()) return; // Evita pesquisar texto em branco

    // Envia o usuário para a vitrine levando o termo como um parâmetro opcional (?nome=...)
    this.router.navigate(['/'], { queryParams: { nome: this.termoPesquisa } });
  }
}
