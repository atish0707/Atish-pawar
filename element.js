describe('ways to select element in cypress', () => {

    it('selecting the element using css selector', () => {

        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('python')
    })

    it('selecting the element using css selector', () => {

        cy.visit('https://www.google.com/')
        cy.xpath('//input[@name="q"]').type('python')

    })

    it('selecting the element using css selector', () => {

        cy.visit('https://www.google.com/')
        cy.xpath('//input[@name="q"]').type('python')
        cy.contains('input[value="Google Search"]').click()

    })

})