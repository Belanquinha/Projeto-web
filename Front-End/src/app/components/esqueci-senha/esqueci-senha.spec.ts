import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { of } from 'rxjs';

import { EsqueciSenha } from './esqueci-senha';
import { PerfilService } from '../../services/perfil-service';

describe('EsqueciSenha', () => {
  let component: EsqueciSenha;
  let fixture: ComponentFixture<EsqueciSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsqueciSenha],
      providers: [
        provideRouter([]),
        provideLocationMocks(),
        { provide: PerfilService, useValue: { recuperarSenha: () => of(undefined) } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsqueciSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
