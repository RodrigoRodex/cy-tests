describe('first test in the Automation Exercise', () =>{
  beforeEach(() =>{
    cy.visit("https://www.automationexercise.com/")
  })

  it('it test the slider-carousel', () =>{
    // get the class slider-carousel and find the last a, then click at it
    const indicator = cy.get("#slider-carousel").find("ol").get('li').eq(9)
    cy.get("#slider-carousel")
      .find('a')
      .last()
      .click()
      // asserts that the carousel indicator changed
      cy.get("#slider-carousel")
        .find("ol")
        .get('li')
        .eq(9)
        .should('have.class', 'active')
    // #
  })
  // get the buttons in the slider carousel and test both of them
  it('tests the buttons in the slider carousel', () =>{
    cy.get("#slider-carousel")
      .get(".carousel-inner")
      .find("a").eq(0).click()
      cy.visit("https://www.automationexercise.com/")
      cy.get("#slider-carousel")
      .get(".carousel-inner")
      .find("a").eq(1).click()
  })
})