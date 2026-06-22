package web.projeto.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.projeto.ecommerce.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
