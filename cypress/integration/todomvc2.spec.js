/// <reference types="cypress" />

  it('should be able to add a new task', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Lavate jipi{enter}')

    cy.get('label').should('have.text', 'Lavate jipi')
    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')

    })