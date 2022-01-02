import DRFP_e2e from "../pageObject/e2e";
describe('Direct RFP Automation',() => {
    it('Open an RFP from buyer to bidder', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        // cy.Login_api()
        // cy.visit('/user/bb24bb96-f115-4a91-9126-52ae840b7f81')
        DRFP_e2e.signIntoRFP()
        DRFP_e2e.createNewRFP()
        DRFP_e2e.homeSection()
        DRFP_e2e.aboutSection()
        DRFP_e2e.userSection()
        DRFP_e2e.filesSection()
        DRFP_e2e.questionSection()
        DRFP_e2e.pricingSection()
        DRFP_e2e.inviteSection()
    }) 
})