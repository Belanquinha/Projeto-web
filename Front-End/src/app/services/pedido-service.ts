import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ItemPedidoPayload {
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
}

export interface PedidoPayload {
  itens: ItemPedidoPayload[];
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private readonly baseUrl = 'http://localhost:8060/pedidos';

  constructor(private http: HttpClient) {}

  // POST /pedidos — finalizar compra
  public finalizarCompra(pedido: PedidoPayload): Observable<unknown> {
    return this.http.post(this.baseUrl, pedido);
  }
}
