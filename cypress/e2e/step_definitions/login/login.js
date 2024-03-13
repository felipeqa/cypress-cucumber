import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na pagina de Login", ()=> {
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
})

When("passo meu user e senha", ()=> {
    cy.get('#Email').clear().type('admin@yourstore.com')
    cy.get('#Password').clear().type('admin')
    cy.get('.login-button').click()
})

Then("eu acesso com sucesso", ()=> {
    cy.get('.brand-image-xl')
})