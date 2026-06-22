package web.projeto.ecommerce.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.projeto.ecommerce.model.Perfil;
import web.projeto.ecommerce.repository.PerfilRepository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/perfils")
@CrossOrigin(origins = "http://localhost:4200")
public class PerfilController {

    @Autowired
    private PerfilRepository repositorio;


    @PostMapping
    public Perfil salvarNovoPerfil(@RequestBody Perfil perfilRecebido) {
        return repositorio.save(perfilRecebido);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginPerfil(@RequestBody Perfil perfilRecebido) {
        Optional<Perfil> perfilEncontrado = repositorio.findByEmail(perfilRecebido.getEmail());
        if (perfilEncontrado.isEmpty()) {
            return ResponseEntity.status(401).build();
        }

        Perfil perfilInfo = perfilEncontrado.get();
        if (Objects.equals(perfilRecebido.getSenha(), perfilInfo.getSenha())) {
            return ResponseEntity.ok(perfilInfo);
        }

        return ResponseEntity.status(401).build();
    }

    // conseultar 1
    @GetMapping("/{id}")
    public Perfil procuraPerfil(@PathVariable Long id) {
        return repositorio.getReferenceById(id);
    }
    // conseultar varios
    @GetMapping("/verTodos")
    public List<Perfil> verPerfil() {

        return repositorio.findAll();
    }

    @PutMapping("/recuperar-senha")
    public ResponseEntity<?> recuperarSenha(@RequestBody Perfil dados) {
        Optional<Perfil> perfilEncontrado = repositorio.findByEmail(dados.getEmail());

        if (perfilEncontrado.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        Perfil perfilInfo = perfilEncontrado.get();
        perfilInfo.setSenha(dados.getSenha());
        repositorio.save(perfilInfo);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<?> atualizarPerfil(@PathVariable Long id, @RequestBody Perfil perfilDadosNovos) {

        return repositorio.findById(id).map(perfilExistente -> {
            perfilExistente.setNome(perfilDadosNovos.getNome());
            perfilExistente.setEmail(perfilDadosNovos.getEmail());
            perfilExistente.setTelefone(perfilDadosNovos.getTelefone());
            perfilExistente.setCpf(perfilDadosNovos.getCpf());

            if (perfilDadosNovos.getSenha() != null && !perfilDadosNovos.getSenha().isEmpty()) {
                perfilExistente.setSenha(perfilDadosNovos.getSenha());
            }

            Perfil perfilAtualizado = repositorio.save(perfilExistente);
            return ResponseEntity.ok(perfilAtualizado);

        }).orElseGet(() -> ResponseEntity.status(404).build());
    }
}
