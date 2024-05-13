describe('navigation tests', () => {
  context('macbook-13 resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('display header', () => {
      cy.visit('/')
      cy.get('[data-id="desktop-menu"]').should('be.visible')
      cy.get('[data-id="desktop-menu-item-home"]').should('be.visible')
      cy.get('[data-id="desktop-menu-item-properties"]').should('be.visible')
      cy.get('[data-id="desktop-menu-item-categories"]').should('be.visible')
    })
  })
})
