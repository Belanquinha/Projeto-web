import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto-service';

@Component({
  selector: 'app-gestao-produtos',
  imports: [CommonModule, FormsModule],
  templateUrl: './gestao-produtos.html',
  styleUrl: './gestao-produtos.css',
})
export class GestaoProdutos implements OnInit {
  lista: Produto[] = [];
  produto: Produto = new Produto();
  editando = false;
  mensagem = '';

  constructor(
    private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista() {
    this.produtoService.listar().subscribe({
      next: (dados) => { this.lista = dados; this.cdr.detectChanges(); },
      error: (erro) => {
        console.error('Erro ao listar produtos:', erro);
        this.mensagem = 'Erro ao carregar produtos.';
      }
    });
  }

  salvar(form: NgForm) {
    if (form.invalid) return;

    if (this.editando && this.produto.id) {
      // PUT /produtos/{id} — equivale ao alterar do ProdutoController do exemplo
      this.produtoService.alterar(this.produto.id, this.produto).subscribe({
        next: () => {
          this.mensagem = 'Produto alterado com sucesso!';
          this.cancelar(form);
          this.carregarLista();
        },
        error: (erro) => {
          console.error('Erro ao alterar:', erro);
          this.mensagem = 'Erro ao alterar produto.';
        }
      });
    } else {
      // POST /produtos — equivale ao gravar do ProdutoController do exemplo
      this.produtoService.gravar(this.produto).subscribe({
        next: () => {
          this.mensagem = 'Produto cadastrado com sucesso!';
          this.cancelar(form);
          this.carregarLista();
        },
        error: (erro) => {
          console.error('Erro ao cadastrar:', erro);
          this.mensagem = 'Erro ao cadastrar produto.';
        }
      });
    }
  }

  editar(obj: Produto) {
    this.produto = { ...obj };
    this.editando = true;
    this.mensagem = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  remover(id: number) {
    if (!confirm('Deseja remover este produto?')) return;

    // DELETE /produtos/{id} — equivale ao remover do ProdutoController do exemplo
    this.produtoService.remover(id).subscribe({
      next: () => {
        this.mensagem = 'Produto removido com sucesso!';
        this.carregarLista();
      },
      error: (erro) => {
        console.error('Erro ao remover:', erro);
        this.mensagem = 'Erro ao remover produto.';
      }
    });
  }

  cancelar(form?: NgForm) {
    this.produto = new Produto();
    this.editando = false;
    form?.resetForm();
  }
}
