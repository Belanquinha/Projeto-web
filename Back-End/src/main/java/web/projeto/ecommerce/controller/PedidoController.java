package web.projeto.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.projeto.ecommerce.model.Pedido;
import web.projeto.ecommerce.repository.PedidoRepository;

@RestController
@RequestMapping("/pedidos")
@CrossOrigin(origins = "http://localhost:4200")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @PostMapping
    public Pedido finalizarCompra(@RequestBody Pedido novoPedido) {
        // Salva o pedido com todos os itens acoplados de uma só vez
        return pedidoRepository.save(novoPedido);
    }
}