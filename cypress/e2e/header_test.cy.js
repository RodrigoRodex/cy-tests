describe('testing the header', () =>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('testing the logo link', ()=>{
        cy.get('.logo>a')
            .should('have.attr', 'href', '/')
            .click().location('href').should('eq','https://www.automationexercise.com/')
    })

    it('testing the headers buttons',()=>{
        // loops through all the button pages and test if the href is correct
        const pages = ['/', '/products', '/view_cart', '/login', '/test_cases', '/api_list',
            'https://www.youtube.com/c/AutomationExercise', '/contact_us'
        ]
        cy.get('.shop-menu>ul>li>a').each(($a, index)=>{
            cy.wrap($a).should('have.attr', 'href', `${pages[index]}`)
        })
    })
})