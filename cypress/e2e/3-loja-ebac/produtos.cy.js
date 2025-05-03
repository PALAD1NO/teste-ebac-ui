///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos/')        
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.eq(0)
            .contains('Abominable Hoodie')
            .click()
        cy.get('#tab-title-description > a').should('exist')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});