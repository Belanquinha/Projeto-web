package web.projeto.ecommerce.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "produtos")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descritivo;

    private BigDecimal valor;
    private BigDecimal promo;
    private Integer quantidade;

    public Produto() {}

    public Produto(String nome, String descritivo, BigDecimal valor, BigDecimal promo, Integer quantidade) {
        this.nome = nome;
        this.descritivo = descritivo;
        this.valor = valor;
        this.promo = promo;
        this.quantidade = quantidade;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getDescritivo() { return descritivo; }
    public void setDescritivo(String descritivo) { this.descritivo = descritivo; }

    public BigDecimal getValor() { return valor; }
    public void setValor(BigDecimal valor) { this.valor = valor; }

    public BigDecimal getPromo() { return promo; }
    public void setPromo(BigDecimal promo) { this.promo = promo; }

    public Integer getQuantity() { return quantidade; }
    public void setQuantity(Integer quantidade) { this.quantidade = quantidade; }
}

