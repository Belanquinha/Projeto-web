import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { of } from 'rxjs';

import { Carrinho } from './carrinho';
import { PedidoService } from '../../services/pedido-service';

describe('Carrinho', () => {
  let component: Carrinho;
  let fixture: ComponentFixture<Carrinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrinho],
      providers: [
        provideRouter([]),
        provideLocationMocks(),
        { provide: PedidoService, useValue: { finalizarCompra: () => of({}) } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrinho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
