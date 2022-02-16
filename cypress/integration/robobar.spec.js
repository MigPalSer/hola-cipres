/// <reference types="cypress" />

  it('debe salirnos la cuenta de una coca cola', () => {
    cy.visit('https://migpalser.github.io/robobar-example/#!/')

    cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click()

    cy.get(':nth-child(4) > .ng-binding').should('have.text', '€1.25')
    })

    it('debe pedirnos una cuenta de edad al pedir una cerveza y fallar con 15 años', () => {
      cy.visit('https://migpalser.github.io/robobar-example/#!/')
  
      cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click()

      cy.contains('Submit').click()

      cy.get('#ageInput').type('15')

      cy.get('.btn-success').click()

      cy.get(':nth-child(2) > :nth-child(1) > .alert').should('be.visible')

    })