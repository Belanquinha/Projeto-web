package web.projeto.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.projeto.ecommerce.model.Produto;
import web.projeto.ecommerce.repository.ProdutoRepository;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repositorio;

    // Rota para cadastrar um produto
    @PostMapping
    public Produto cadastrarProduto(@RequestBody Produto produto) {
        return repositorio.save(produto);
    }

    // Rota para buscar todos (caso precise para a vitrine)
    @GetMapping
    public List<Produto> listarTodos() {
        return repositorio.findAll();
    }

    // Rota para a página de detalhes de um produto único por ID
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        return repositorio.findById(id)
                .map(produto -> ResponseEntity.ok(produto))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/pesquisar")
    public List<Produto> pesquisarProdutos(@RequestParam("nome") String nome) {
        return repositorio.findByNomeContainingIgnoreCase(nome);
    }
}