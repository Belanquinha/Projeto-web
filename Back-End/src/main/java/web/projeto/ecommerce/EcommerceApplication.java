package web.projeto.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import web.projeto.ecommerce.model.Produto;
import web.projeto.ecommerce.repository.ProdutoRepository;

import java.math.BigDecimal;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}

	@Bean
	public CommandLineRunner popularBanco(ProdutoRepository repositorio) {
		return args -> {
			// Se o banco de dados já tiver produtos, ele não faz nada para não duplicar
			if (repositorio.count() == 0) {

				repositorio.save(new Produto(
						"Cama Box Casal Conjugada com Colchão de Molas",
						"O item número um para qualquer mudança. Esta cama box casal oferece a praticidade de uma estrutura única (base + colchão acoplado) de molas ensacadas, que se adaptam ao corpo. Revestida em tecido antiderrapante na parte superior e lateral em corino preto, garantindo higiene e facilidade de limpeza nos primeiros dias de mudança. Pés rosqueáveis de montagem imediata.",
						new BigDecimal("1199.00"), new BigDecimal("899.90"), 40
				));

				repositorio.save(new Produto(
						"Guarda-Roupa Casal 4 Portas de Correr Prático",
						"Essencial para não deixar as roupas nas malas. Modelo compacto por fora e espaçoso por dentro, ideal para se adaptar a diferentes tamanhos de quarto. Possui duas portas de correr que economizam espaço de circulação, 3 gavetas internas com corrediças metálicas e cabideiros em alumínio. Acabamento em pintura UV de fácil conservação.",
						new BigDecimal("850.00"), new BigDecimal("629.00"), 25
				));

				repositorio.save(new Produto(
						"Sofá 3 Lugares Fixo em Tecido Linho",
						"Para garantir o descanso na sala logo após a mudança. Este sofá de 3 lugares possui design clean e estrutura robusta em madeira de reflorestamento. Assento com espuma D26 e encosto fixo confortável. Por não ser retrátil, possui profundidade reduzida, passando facilmente por portas e elevadores estreitos durante o frete.",
						new BigDecimal("1399.00"), new BigDecimal("999.00"), 15
				));

				repositorio.save(new Produto(
						"Mesa de Jantar 4 Lugares com Tampo de Vidro",
						"Item indispensável para as refeições na casa nova. Conjunto completo composto por uma mesa quadrada com tampo de vidro temperado e base em MDF, acompanhada por 4 cadeiras estofadas em tecido suede. Combina com qualquer estilo de cozinha ou sala de jantar e possui montagem simplificada.",
						new BigDecimal("799.00"), new BigDecimal("579.90"), 20
				));

				repositorio.save(new Produto(
						"Rack para TV de até 55 Polegadas com Rodízios",
						"O primeiro móvel da sala de estar para organizar a TV e os aparelhos de internet. Conta com duas portas basculantes para esconder a fiação e nichos abertos para decorações. O grande diferencial para quem acabou de se mudar são os rodízios (rodinhas), que facilitam muito a movimentação do móvel na hora de limpar ou mudar o layout da sala.",
						new BigDecimal("340.00"), new BigDecimal("219.90"), 50
				));

				repositorio.save(new Produto(
						"Armário de Cozinha Compacto Módulo Único",
						"A solução imediata para organizar panelas e mantimentos sem precisar de móveis planejados. Este armário suspenso possui 3 portas superiores (uma com vidro), nicho para micro-ondas e 2 portas inferiores com uma gaveta para talheres. Puxadores ergonômicos em plástico resistente e pés com regulagem de altura para pisos desnivelados.",
						new BigDecimal("650.00"), new BigDecimal("449.90"), 35
				));

				System.out.println("Banco de dados prototipo de produtos cadastrados no sistema");
			}
		};
	}
}
