import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../model/produto';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Injetado HttpClient

@Component({
  selector: 'app-pagina-produto',
  imports: [CommonModule],
  templateUrl: './pagina-produto.html',
  styleUrl: './pagina-produto.css',
})
export class PaginaProduto implements OnInit {
  
  idPegou: number = -1;
  produto: Produto = new Produto();

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Pega o parâmetro definido na sua rota (seja 'codigo' ou 'id')
    const idParam = this.route.snapshot.paramMap.get('codigo');

    if (idParam !== null) {
      this.idPegou = parseInt(idParam);
      this.carregarProdutoDoBackend(this.idPegou);
    }
  }

  carregarProdutoDoBackend(id: number) {
    const url = `http://localhost:8060/produtos/${id}`;

    this.http.get<any>(url).subscribe({
      next: (produtoDoBanco) => {
        this.produto = produtoDoBanco;
        console.log('Produto carregado com sucesso:', this.produto);
        
        // Força a atualização imediata dos textos no HTML
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar detalhes do produto: ', erro);
      }
    });
  }



  adicionarAoCarrinho() {
    if (!this.produto) return;

    // 1. Pega o carrinho que já existe no localStorage ou inicia um array vazio
    let carrinhoLog = localStorage.getItem('carrinho');
    let itens: any[] = carrinhoLog ? JSON.parse(carrinhoLog) : [];

    // 2. Verifica se o produto já está no carrinho
    const itemExistente = itens.find(i => i.id === this.produto.id);

    if (itemExistente) {
      itemExistente.quantidade += 1; // Soma quantidade se já existir
    } else {
      // Adiciona o item montado se for novo
      itens.push({
        id: this.produto.id,
        nome: this.produto.nome,
        valor: this.produto.valor,
        quantidade: 1
      });
    }

    // 3. Devolve a lista atualizada para o LocalStorage
    localStorage.setItem('carrinho', JSON.stringify(itens));
    alert('Produto adicionado ao carrinho');
  }
}