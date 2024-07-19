describe('first test in the Automation Exercise', () =>{
  beforeEach(() =>{
    cy.visit("/")
  })
  it('test the category part', ()=>{
    const pageWomen = ['/category_products/1', '/category_products/2', '/category_products/7']
    const pageMen = ['/category_products/3', '/category_products/6']
    const pageKids = ['/category_products/4', '/category_products/5']
      // fazer o loop primeiro nas tags e colocar o index para selecionar qual tag ele vai testar
      cy.get('.panel-title>a').eq(0).click()
        .get('#Women>div>ul>li>a').each(($a, index)=>{
          cy.wrap($a)
            .should('be.visible')
            .should('have.attr', 'href', `${pageWomen[index]}`)
        })
      cy.get('.panel-title>a').eq(1).click()
        .get('#Men>div>ul>li>a').each(($a, index)=>{
          cy.wrap($a)
            .should('be.visible')
            .should('have.attr', 'href', `${pageMen[index]}`)
        })
      cy.get('.panel-title>a').eq(2).click()
        .get('#Kids>div>ul>li>a').each(($a, index)=>{
          cy.wrap($a)
            .should('be.visible')
            .should('have.attr', 'href', `${pageKids[index]}`)
        })
      
    })
}) 
    // loop attempt
    // the test is passing three times, change it later to make it pass just
    // one for all and see if they are visible

      // it('test the site', () =>{
      //   // it makes sure if the all the tags link to the right site
      //   const page = ['/category_products/1', '/category_products/2', '/category_products/7',
      //      '/category_products/3', '/category_products/6', '/category_products/4', '/category_products/5']
      //     cy.get('.left-sidebar').find('#accordian').each(($div)=>{
      //       cy.wrap($div).find('div>div>h4>a').each(($a)=>{
      //         cy.wrap($a).click()
      //           cy.get('.left-sidebar>div').get('.panel-collapse').find('div>ul>li>a').each(($a, index)=>{
      //             cy.wrap($a)
      //               .should('be.visible')
      //               .should('have.attr', 'href', `${page[index]}`)
      //           })
      //       })
      //     })
      //   })