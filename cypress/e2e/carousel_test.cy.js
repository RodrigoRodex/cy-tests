describe('the slider carousel', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    // #
    
    it('tries the controls', ()=>{
        // click three times in the next button, then see if the image changes
        // the class changes to active 
        // cy.get('.carousel>a').eq(1)
        //   .click()
        //     .get('.carousel-inner>div').eq(1).should('have.class', 'item active')
        cy.get('.carousel-inner>div').each(($div, index)=>{
            cy.wrap($div)
                .get($div)
                // this goes to the recommended tab, afther it look the carousel
                .should('have.class', 'active')
                .get('.carousel>a').eq(1).click()
        })

        })

    // it('tries the indicators',()=>{
    //     // click every indicator and see if the image changes
    // })

    // it('tries the buttons in the slider',()=>{
    //     // click the buttons and see if the site that links is the right
    //     // use the href to verify the link
    // })
})