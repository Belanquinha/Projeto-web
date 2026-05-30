import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

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
    nome: "Caneta Esferográfica Ballograf Epoca Recycled Plastic",
    descritivo: "Epoca é a caneta esferográfica mais emblemática e conhecida da marca Ballograf. Fabricada na Suécia desde o início dos anos 60, tornou-se vorazmente popular devido à sua presença nas repartições públicas do país, ampliando posteriormente seu mercado ao exterior. Com design clássico e cores radiantes, além de ser um presente perfeito, também é um item indispensável para qualquer colecionador. Caneta na cor antracite fosco, criada a partir de plástico reciclado nos países nórdicos.",
    valor: 112.00,
    promo: 39.9,
    quantidade: 120
  },
  {
    codigo: 2,
    nome: "Caneta Crown Diamond Esferográfica Cromada",
    descritivo: "A Crown Personalizada Diamond une sofisticação, qualidade e exclusividade. Seu corpo totalmente metálico com acabamento brilhante, decorado com pedras reluzentes, destaca-se em qualquer ocasião.Disponível nas cores dourado, prata e rose, permite personalização a laser, tornando-se um presente marcante ou um item de estilo para o dia a dia profissional.Benefícios que fazem da Crown Diamond uma escolha singularO traço da Crown Diamond garante escrita suave e definida, graças à ponta esferográfica de aço e tinta azul de alta durabilidade. O mecanismo por torção oferece praticidade ao escrever.Já o clipe metálico mantém a caneta segura em cadernos ou bolsos, enquanto o design ergonômico proporciona conforto até mesmo em longos períodos de uso.Um presente elegante para formaturas, celebrações corporativas ou para quem valoriza exclusividade e destaque profissional.Praticidade e autonomia: aproveite sua Crown Diamond ao máximoO uso é simples: basta girar para revelar a ponta da . Quando necessário, a troca da carga Mini D1 é rápida — desrosqueie, substitua o refil e pronto. As cargas Crown estão sempre disponíveis em nossa loja oficial. A personalização feita a laser permanece nítida mesmo com o uso diário.Personalize já a sua Crown Diamond: autenticidade em cada detalheA Caneta Crown Personalizada Diamond é símbolo de exclusividade, tradição e valor justo pela qualidade premium. Compre no site oficial para garantir personalização, segurança, embalagem sofisticada e atendimento direto.Presenteie com distinção, eternize momentos e desfrute da experiência única que só a Crown oferece em todo o Brasil.",
    valor: 135,
    promo: 55.9,
    quantidade: 80
  },
  {
    codigo: 3,
    nome: "Conjunto de canetas Crown President",
    descritivo: "Composto por uma caneta esferográfica de mecanismo de torção e uma caneta tinteiro, esta última apresenta uma ponta de pena alemã de irídio, reconhecida por sua durabilidade e precisão. Detalhes em metal dourado complementam o design refinado, enquanto a tinta azul oferece uma experiência de escrita excepcional. Seja para uso pessoal ou como presente, estas canetas são uma declaração de estilo e elegância que certamente impressionará.A marca Crown é sinônimo de excelência e durabilidade, e este luxuoso conjunto de canetas acompanha certificado de garantia para sua tranquilidade.",
    valor: 600.0,
    promo: 49.9,
    quantidade: 65
  },
  {
    codigo: 4,
    nome: "Caneta Crown Rubi DI12004Z Preta e Rose",
    descritivo: "A Caneta Crown Rubi DI12004Z é uma caneta esferográfica sofisticada que une a elegância do preto com o charme do rose. Ideal para quem busca uma escrita suave e precisa, a Rubi oferece um design refinado e moderno, sendo a escolha perfeita tanto para o ambiente profissional quanto para ocasiões especiais.",
    valor: 219.9,
    promo: 68.5,
    quantidade: 50
  },
  {
    codigo: 5,
    nome: "Conjunto Parker (Caneta Tinteiro 14k + Esferográfica) 75",
    descritivo: "A Parker 75 é uma caneta célebre da Parker, lançada pela primeira vez em 1964, para comemorar o 75º aniversário da empresa. A caneta continua muito popular entre os colecionadores e é muito procurada em todos os seus designs. Foi desenhada por Kenneth Parker (filho do fundador George Parker) e pelo extraordinário designer Don Doman, que também desenhou as linhas 45, 61, T1, VP e Liquid Lead. Com o modelo inicial feito em prata de lei com desenho de grade hachurada, a 75 continuou em produção em diversos acabamentos até 1994, quando foi descontinuada na França. Os exemplares em questão formam parte de um conjunto da Parker 75 em metal folheado a ouro, composto de caneta esferográfica e caneta tinteiro com pena em ouro 14k. Produto New Old Stock, ou seja, preservado por décadas sem uso. Raridade.",
    valor: 2699,
    promo: 47.0,
    quantidade: 90
  },
  {
    codigo: 6,
    nome: "Caneta Esferográfica Pilot Super Grip Preta 0.7mm",
    descritivo: "Caneta Esferográfica Pilot Super Grip NI Preta 0.7mmTenha uma escrita uniforme do começo ao fim!Mais macia, cores mais fortes.- Ponta de aço Inox 0.7mm (retrátil);- Corpo fumê;- Clip e Grip coloridos;- Grip em borracha macia;- Tinta à base de óleo;",
    valor: 10.8,
    promo: 79.9,
    quantidade: 40
  }
];



}
