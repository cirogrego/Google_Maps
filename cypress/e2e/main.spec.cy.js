describe('Google Maps', () => {

it('Iceland - Photos', () => {
    cy.visit('https://www.google.com/maps')
    cy.get("[name='q']").clear().type('Islândia ')
    cy.get("[aria-label='Pesquisar']").click()
    cy.get('#cell0x0 > .cGyruf > .XYuRPe').click()
    cy.get(".d6JfQc").click()
    cy.get(".yra0jd").wait(800).click()
    for (let i = 0; i < 18; i++) { 
    cy.get('.eU5Rrb > .L6Bbsd').click().wait(800)
     
  }

      
})
 

})
