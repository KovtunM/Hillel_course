describe('template spec', () => {
  it('Google', () => {
    cy.visit('https://google.com')
    cy.get("textarea[name = 'q']").type("Ukraine")
    cy.get("div[jsname='VlcLAe']").within(() => {
      cy.get("input[value = 'Пошук Google']").click();
    })
    
  })
})