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

    // Rota para alterar um produto (equivale ao PUT /api/produto do exemplo)
    @PutMapping("/{id}")
    public ResponseEntity<Produto> alterarProduto(@PathVariable Long id, @RequestBody Produto produtoDados) {
        return repositorio.findById(id)
                .map(produtoExistente -> {
                    produtoExistente.setNome(produtoDados.getNome());
                    produtoExistente.setDescritivo(produtoDados.getDescritivo());
                    produtoExistente.setValor(produtoDados.getValor());
                    produtoExistente.setPromo(produtoDados.getPromo());
                    produtoExistente.setQuantidade(produtoDados.getQuantidade());
                    produtoExistente.setImagem(produtoDados.getImagem());
                    return ResponseEntity.ok(repositorio.save(produtoExistente));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Rota para remover um produto (equivale ao DELETE /api/produto/{codigo} do exemplo)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerProduto(@PathVariable Long id) {
        if (repositorio.existsById(id)) {
            repositorio.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}