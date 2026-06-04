import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';

import { Router } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {

  constructor(private router: Router) {}

    verDetalhes(codigo: number) {
    this.router.navigate(['produto', codigo]);
  }

lista: Produto[] = [
  {
    codigo: 1,
    nome: "Cama Box Casal Conjugada com Colchão de Molas",
    descritivo: "O item número um para qualquer mudança. Esta cama box casal oferece a praticidade de uma estrutura única (base + colchão acoplado) de molas ensacadas, que se adaptam ao corpo. Revestida em tecido antiderrapante na parte superior e lateral em corino preto, garantindo higiene e facilidade de limpeza nos primeiros dias de mudança. Pés rosqueáveis de montagem imediata.",
    valor: 1199.00,
    promo: 899.90,
    quantidade: 40
  },
  {
    codigo: 2,
    nome: "Guarda-Roupa Casal 4 Portas de Correr Prático",
    descritivo: "Essencial para não deixar as roupas nas malas. Modelo compacto por fora e espaçoso por dentro, ideal para se adaptar a diferentes tamanhos de quarto. Possui duas portas de correr que economizam espaço de circulação, 3 gavetas internas com corrediças metálicas e cabideiros em alumínio. Acabamento em pintura UV de fácil conservação.",
    valor: 850.00,
    promo: 629.00,
    quantidade: 25
  },
  {
    codigo: 3,
    nome: "Sofá 3 Lugares Fixo em Tecido Linho",
    descritivo: "Para garantir o descanso na sala logo após a mudança. Este sofá de 3 lugares possui design clean e estrutura robusta em madeira de reflorestamento. Assento com espuma D26 e encosto fixo confortável. Por não ser retrátil, possui profundidade reduzida, passando facilmente por portas e elevadores estreitos durante o frete.",
    valor: 1399.00,
    promo: 999.00,
    quantidade: 15
  },
  {
    codigo: 4,
    nome: "Mesa de Jantar 4 Lugares com Tampo de Vidro",
    descritivo: "Item indispensável para as refeições na casa nova. Conjunto completo composto por uma mesa quadrada com tampo de vidro temperado e base em MDF, acompanhada por 4 cadeiras estofadas em tecido suede. Combina com qualquer estilo de cozinha ou sala de jantar e possui montagem simplificada.",
    valor: 799.00,
    promo: 579.90,
    quantidade: 20
  },
  {
    codigo: 5,
    nome: "Rack para TV de até 55 Polegadas com Rodízios",
    descritivo: "O primeiro móvel da sala de estar para organizar a TV e os aparelhos de internet. Conta com duas portas basculantes para esconder a fiação e nichos abertos para decorações. O grande diferencial para quem acabou de se mudar são os rodízios (rodinhas), que facilitam muito a movimentação do móvel na hora de limpar ou mudar o layout da sala.",
    valor: 340.00,
    promo: 219.90,
    quantidade: 50
  },
  {
    codigo: 6,
    nome: "Armário de Cozinha Compacto Módulo Único",
    descritivo: "A solução imediata para organizar panelas e mantimentos sem precisar de móveis planejados. Este armário suspenso possui 3 portas superiores (uma com vidro), nicho para micro-ondas e 2 portas inferiores com uma gaveta para talheres. Puxadores ergonômicos em plástico resistente e pés com regulagem de altura para pisos desnivelados.",
    valor: 650.00,
    promo: 449.90,
    quantidade: 35
  }
];



}
