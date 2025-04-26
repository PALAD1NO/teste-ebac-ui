///<reference types="cypress"/>

describe('Funcionalidade: Login',()=>{

it('Deve fazer login com sucesso',()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('teste.fyl@teste.com.br')
    cy.get('#password').type('teste@1234')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, teste.fyl (não é teste.fyl? Sair)')

})

})