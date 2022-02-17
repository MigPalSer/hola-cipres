/// <reference types="cypress" />



describe('filtrando', function() {

  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Lavate jipi{enter}')
    cy.get('.new-todo').type('Aprende baquen{enter}')
    cy.get('.new-todo').type('Planta un pino, o un cipres{enter}')
    cy.get('.todo-list li:nth-child(2) .toggle').click()
  })

  it('should filter "Active" correctly', () => {
    cy.contains('Active').click()
    cy.get('.todo-list li').should('have.length', 2)
    })
    
    it('should filter "Completed" correctly', () => {
      cy.contains('Completed').click()
      cy.get('.todo-list li').should('have.length', 1)
    })
  
    it('should filter "All" correctly', () => {
      cy.contains('All').click()
      cy.get('.todo-list li').should('have.length', 3)
    })

/*
describe('todo actions', () => {

  

  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Lavate jipi{enter}')
  })

  it('should be able to add a new task', () => {

    cy.get('label').should('have.text', 'Lavate jipi')
    cy.get('.toggle').should('not.be.checked')

    })

    it('should be able to mark task as complete', () => {
   
      cy.get('.toggle').click()
      cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
  
  
      })

      it('should be able to clear the list', () => {
      
        cy.get('.toggle').click()
        cy.contains('Clear completed').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    
        })

*/

      } )