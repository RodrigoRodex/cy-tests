describe('first test in the Automation Exercise', () =>{
  beforeEach(() =>{
    cy.visit("https://www.automationexercise.com/")
  })

  // it('it test the slider-carousel', () =>{
  //   // get the class slider-carousel and find the last a, then click at it
  //   cy.get("#slider-carousel")
  //     .find('a')
  //     .last()
  //     .click()
  //     // asserts that the carousel indicator changed
  //     cy.get("#slider-carousel")
  //       .find("ol")
  //       .get('li')
  //       .eq(9)
  //       .should('have.class', 'active')
  //   // #
  // })
  // get the buttons in the slider carousel and test both of them
  // it('tests the buttons in the slider carousel', () =>{
  //   cy.get("#slider-carousel")
  //   .get(".carousel-inner")
  //   .find("a").eq(0).click()
  //   cy.visit("https://www.automationexercise.com/")
  //   cy.get("#slider-carousel")
  //   .get(".carousel-inner")
  //   .find("a").eq(1).click()
  //   //make an assert to verify the buttons link

  //   //couldn't make this work
  //   // cy.get("#slider-carousel")
  //   //   .find("div>div>div>a").each(($a) => {
  //   //     cy.wrap($a).click()
  //   //     .visit("https://www.automationexercise.com/").wait(5000)
  //   //   })
  // })
  // it('test the category', () =>{
  //   cy.get(".left-sidebar")
  //     .find("div>div>div>h4>a").eq(0)
  //       .click().should("have.class", '')
        
  //       cy.get("#Women")
  //         .find("div>ul>li>a").each(($a) =>{
  //           cy.wrap($a).should('be.visible')
  //         })
  //   cy.get(".left-sidebar")
  //     .find("div>div>div>h4>a").eq(1)
  //       .click().should("have.class", '')
      
  //       cy.get("#Men")
  //         .find("div>ul>li>a").each(($a) =>{
  //           cy.wrap($a).should('be.visible')
  //         })
  //   cy.get(".left-sidebar")
  //     .find("div>div>div>h4>a").eq(2)
  //       .click().should("have.class", '')
      
  //       cy.get("#Kids")
  //         .find("div>ul>li>a").each(($a) =>{
  //           cy.wrap($a).should('be.visible')
  //         })
  //       // Make a loop that verifies every category, if the new web is right one
  // })
  it('test the site', () =>{
    const page = ['category_products/1', 'category_products/2', 'category_products/7']
      cy.get(".panel-title").find("a").eq(0).click()
      cy.get(".panel-body").find("ul>li>a").each(($a)=>{
        cy.wrap(page).each(($page) =>{
          cy.wrap($a)
            .should('have.attr', 'href', `/${$page}`)
            // failing the loop because the list tries to loop intirely in the same 'a'
        })
      })
    })
})