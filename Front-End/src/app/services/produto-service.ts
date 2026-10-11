import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly baseUrl = 'http://localhost:8060/produtos';

  constructor(private http: HttpClient) {}

  // POST /produtos — cadastrar (equivale ao gravar do exemplo)
  public gravar(obj: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, obj);
  }

  // GET /produtos — vitrine / listar todos
  // (equivale ao carregarVitrine do exemplo)
  public carregarVitrine(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  public listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  // GET /produtos/{id} — detalhe (equivale ao carregar do exemplo)
  public carregar(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }

  // GET /produtos/pesquisar?nome= — busca (equivale ao busca/{termo} do exemplo)
  public pesquisar(nome: string): Observable<Produto[]> {
    const termo = encodeURIComponent(nome);
    return this.http.get<Produto[]>(`${this.baseUrl}/pesquisar?nome=${termo}`);
  }

  // PUT /produtos/{id} — alterar (equivale ao alterar do exemplo)
  public alterar(id: number, obj: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/${id}`, obj);
  }

  // DELETE /produtos/{id} — remover (equivale ao remover do exemplo)
  public remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
