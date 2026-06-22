import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine implements OnInit {

  lista: Produto[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        const termo = params['nome'];
        if (termo) {
          this.filtrarProdutosPorNome(termo);
        } else {
          this.carregarProdutosDaVitrine(); 
        }
      });
  }

  carregarProdutosDaVitrine() {
    this.http.get<any[]>('http://localhost:8060/produtos').subscribe({
      next: (dados) => { this.lista = dados; this.cdr.detectChanges(); }
    });
  }

  filtrarProdutosPorNome(nome: string) {
    const url = `http://localhost:8060/produtos/pesquisar?nome=${nome}`;
    
    this.http.get<any[]>(url).subscribe({
      next: (dadosFiltrados) => {
        this.lista = dadosFiltrados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao pesquisar:', erro)
    });
  }

  verDetalhes(id: number) {
    this.router.navigate(['produto', id]);
  }
}