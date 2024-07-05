describe('first test in the Automation Exercise', () =>{
  beforeEach(() =>{
    cy.visit("https://www.automationexercise.com/")
  })

  it('it test the slider-carousel', () =>{
    cy.get("carousel slide")
    // cy.get("carousel-indicators")
  })
})