describe("Homepage", () => {
  it("successfully loads", () => {
    cy.visit("/")
  })

  it("should redirect to older posts page", () => {
    cy.visit("/")

    cy.contains(/Older posts/i).click()

    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/1")
    })
  })

  it("should redirect to older posts page and back to main page", () => {
    cy.visit("/")

    cy.contains(/Older posts/i).click()
    cy.contains(/Newer posts/i).click()

    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/")
    })
  })
})
