/// <reference types="cypress" />

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

      } )