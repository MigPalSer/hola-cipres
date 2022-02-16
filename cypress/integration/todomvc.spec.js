/// <reference types="cypress" />

it('should navigate to the TodoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
  })

  it('should be able to add a new task', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Lavate jipi{enter}')
    cy.get('.toggle').click()
    cy.contains('Clear').click()

    })