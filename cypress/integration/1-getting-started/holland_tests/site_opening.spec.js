describe('Site opening', () => {
    it ('Visit site', () => {
        cy.visit('https://github.com/');
        cy.get('.d-flex.flex-justify-between.flex-items-center > a')
        cy.get('#user_email').should('have.id','user_email')

              
    })
})

describe('Site reload and checking elements', () => {
    it ('Visit site', () => {
        cy.reload(true);
        cy.get('.d-flex.flex-justify-between.flex-items-center > a')
        cy.get('#user_email').should('have.id','user_email')

                  
    })
})
