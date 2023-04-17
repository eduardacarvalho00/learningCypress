/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

// cy.getByData("hero-heading")  ❌
// cy.get("[data-test='hero-heading']") 👍
