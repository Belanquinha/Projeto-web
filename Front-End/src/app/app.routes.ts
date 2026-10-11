import { Routes } from '@angular/router';
import { Cadastro } from './components/cadastro/cadastro';
import { Vitrine } from './components/vitrine/vitrine';
import { PaginaProduto } from './components/pagina-produto/pagina-produto';
import { Carrinho } from './components/carrinho/carrinho';
import { Login } from './components/login/login';
import { EsqueciSenha } from './components/esqueci-senha/esqueci-senha';
import { GestaoProdutos } from './components/gestao-produtos/gestao-produtos';

export const routes: Routes = [
    { path: "", component: Vitrine },
    { path: "cadastro", component: Cadastro },
    { path: "login", component: Login},
    { path: "esqueci-senha", component: EsqueciSenha},
    { path: 'produto/:codigo', component: PaginaProduto},
    { path: "carrinho", component: Carrinho},
    { path: "gestao-produtos", component: GestaoProdutos}
];
