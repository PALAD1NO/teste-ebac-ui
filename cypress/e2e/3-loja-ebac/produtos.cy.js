///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()        
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)       
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('aero daily fitness tee')
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
    });

    it('adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Atomic Endurance Running Tee (V-neck)')
        produtosPage.addPrutoCarrinho('M', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Atomic Endurance Running Tee (V-neck)” foram adicionados no seu carrinho.')
    });

    it.only('adicionar produto ao carrinho, buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addPrutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })    
    });
});