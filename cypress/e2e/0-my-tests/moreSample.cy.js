describe('My Second Test', () => {
    it('Insert email in my WS', () => {
        cy.visit('https://gabrielhenrique--dipua.myvtex.com');
        cy.get('#email').type('gabriel.henrique@agenciam3.com');
        cy.get('.vtex-button').click()
    })
})