package web.projeto.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.projeto.ecommerce.model.Perfil;

import java.util.Optional;

public interface PerfilRepository extends JpaRepository<Perfil, Long> {
    Optional<Perfil> findByEmail(String email);
}
