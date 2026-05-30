import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProduto } from './pagina-produto';

describe('PaginaProduto', () => {
  let component: PaginaProduto;
  let fixture: ComponentFixture<PaginaProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaProduto]
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
