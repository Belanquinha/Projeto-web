import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Vitrine } from './vitrine/vitrine';
import { PaginaProduto } from './pagina-produto/pagina-produto';

export const routes: Routes = [
    { path: "", component: Vitrine },
    { path: "cadastro", component: Cadastro },
    { path: 'produto/:codigo', component: PaginaProduto}
];
