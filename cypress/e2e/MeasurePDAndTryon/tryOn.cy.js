///<reference types = "Cypress"/>
///<reference types = "cypress-iframe"/>

import 'cypress-iframe'

describe('TRY ON',function(){
    it ('TC_001', function(){
    cy.visit('/sunglasses')
    cy.wait(2000)
    cy.reload()
    cy.get('#prd-2 > .mask-wrap > :nth-child(2) > .glass-mask').click()
    cy.wait(2000)
    cy.get('#tryOnMobileBtn').click()
    cy.wait(3000)
    cy.get('#scan-iframe').each($iframe => {
    // Switch to the current iframe context
    cy.wrap($iframe).then($iframe => {
      // Perform actions within the current iframe
      const body = $iframe.contents().find('body')
      // Example action: click a button inside the iframe
      cy.wrap(body)
        .find('[class="Btn"]')
        .click()
        cy.wait(2000)
        cy.wrap(body)
        .find('[class="Btn"]')
        .click()
        cy.wait(5000)
        cy.wrap(body)
        .find('[class="Btn"]')
        .click()
        cy.wait(2000)
        cy.wrap(body)
        .find('[class="Btn"]')
        .click()
        cy.wait(5000)
        cy.wrap(body)
        .find('[class="u-displayBlock"]')
        .should('contain.text','We had trouble tracking your face.')
    })
    })
    })
})