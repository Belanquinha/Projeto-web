import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})

export class Carrinho implements OnInit {
  
  itensCarrinho: any[] = [];
  totalPreco: number = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    const dados = localStorage.getItem('carrinho');
    this.itensCarrinho = dados ? JSON.parse(dados) : [];
    this.calcularTotal();
  }

  calcularTotal() {
    this.totalPreco = this.itensCarrinho.reduce((acc, item) => acc + (item.valor * item.quantidade), 0);
    this.cdr.detectChanges();
  }

  limparItem(id: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));
    this.calcularTotal();
  }

  finalizarCompra() {
    if (this.itensCarrinho.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    const url = 'http://localhost:8060/pedidos';

    // Mapeia os dados do localStorage para o formato que as entidades do Java esperam
    const corpoPedido = {
      itens: this.itensCarrinho.map(item => ({
        produtoId: item.id,
        quantidade: item.quantidade,
        precoUnitario: item.valor
      }))
    };

    this.http.post(url, corpoPedido).subscribe({
      next: (resposta) => {
        alert('Compra concluída com sucesso!');
        localStorage.removeItem('carrinho'); // Limpa após fechar
        this.itensCarrinho = [];
        this.totalPreco = 0;
        this.router.navigate(['/']); // Volta para a vitrine
      },
      error: (erro) => {
        console.error('Erro ao salvar pedido:', erro);
        alert('Houve um erro ao processar o seu pedido.');
      }
    });
  }
}
