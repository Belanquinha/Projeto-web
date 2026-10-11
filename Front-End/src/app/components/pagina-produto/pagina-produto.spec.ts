import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { of } from 'rxjs';

import { PaginaProduto } from './pagina-produto';
import { ProdutoService } from '../../services/produto-service';
import { Produto } from '../../model/produto';

describe('PaginaProduto', () => {
  let component: PaginaProduto;
  let fixture: ComponentFixture<PaginaProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaProduto],
      providers: [
        provideRouter([{ path: 'produto/:codigo', component: PaginaProduto }]),
        provideLocationMocks(),
        { provide: ProdutoService, useValue: { carregar: () => of(new Produto()) } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
