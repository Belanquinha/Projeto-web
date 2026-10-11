import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

export interface LoginPayload {
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private readonly baseUrl = 'http://localhost:8060/perfils';

  constructor(private http: HttpClient) {}

  // POST /perfils — cadastro (equivale ao gravar do ClienteService do exemplo)
  public gravar(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, obj);
  }

  // POST /perfils/login — login (o exemplo previa fazerLogin no backend)
  public login(dados: LoginPayload): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/login`, dados);
  }

  // GET /perfils/{id} — carregar um (equivale ao carregar do exemplo)
  public carregar(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  // GET /perfils/verTodos — listar (equivale ao listar do exemplo)
  public listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/verTodos`);
  }

  // PUT /perfils/recuperar-senha — redefinir senha
  public recuperarSenha(dados: LoginPayload): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/recuperar-senha`, dados);
  }

  // PUT /perfils/alterar/{id} — alterar (equivale ao alterar do exemplo)
  public alterar(id: number, obj: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.baseUrl}/alterar/${id}`, obj);
  }

  // DELETE /perfils/{id} — remover (equivale ao remover do exemplo)
  public remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
