import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";

Then("validar texto do header", ()=> {
    cy.get('.navbar-nav > :nth-child(2)').should('be.visible').contains('John Smith')
})