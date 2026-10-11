import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { of } from 'rxjs';

import { Vitrine } from './vitrine';
import { ProdutoService } from '../../services/produto-service';

describe('Vitrine', () => {
  let component: Vitrine;
  let fixture: ComponentFixture<Vitrine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vitrine],
      providers: [
        provideRouter([]),
        provideLocationMocks(),
        {
          provide: ProdutoService,
          useValue: { carregarVitrine: () => of([]), pesquisar: () => of([]), listar: () => of([]) },
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vitrine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
