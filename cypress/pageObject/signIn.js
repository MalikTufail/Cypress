import selectors from '../selectors/DRFP_selectors'
import {id,password} from '../fixtures/rfp.json' 



class DRFP_signIn{
        signIn_invalidCredentials(){
            it('signIn with invalid credentials',() => {
                cy.visit('/')
                cy.get(selectors.signIn.emailPlaceholder)
                .type(selectors.signIn.incorrect_userName)            
                cy.get(selectors.signIn.passwordPlaceholder)
                .type(selectors.signIn.incorrect_userPass)
                cy.get(selectors.signIn.signIn_button)
                .click({force: true})
                cy.get(selectors.signIn.email_errorPlaceholder)
                .contains(selectors.signIn.email_errorMsg)
                })
            }
        signIn_noCredentials(){
                it('signIn with empty fields',() => {
                    cy.visit('/')
                    cy.get(selectors.signIn.signIn_button)
                    .click({force: true})
                    cy.get(selectors.signIn.email_errorPlaceholder)
                    .contains(selectors.signIn.email_errorMsg)
                    cy.get(selectors.signIn.pass_error1Placeholder)
                    .contains(selectors.signIn.password_errorMsg1)
                    })
                }
        signIn_inValidEmail(){
                it('signIn with invalid email and valid password',() => {
                    cy.visit('/')
                    cy.get(selectors.signIn.emailPlaceholder)
                    .type(selectors.signIn.incorrect_userName)
                    cy.get(selectors.signIn.passwordPlaceholder)
                    .type(password)
                    cy.get(selectors.signIn.signIn_button)
                    .click({force: true})
                    cy.get(selectors.signIn.email_errorPlaceholder)
                    .contains(selectors.signIn.email_errorMsg)
                    })
                }
        signIn_inValidPassword(){
                it('signIn with valid email and invalid password',() => {
                    cy.visit('/')
                    cy.get(selectors.signIn.emailPlaceholder)
                    .type(id)
                    cy.get(selectors.signIn.passwordPlaceholder)
                    .type(selectors.signIn.incorrect_userPass)
                    cy.get(selectors.signIn.signIn_button)
                    .click({force: true})
                    cy.get(selectors.signIn.pass_error2Placeholder)
                    .contains(selectors.signIn.password_errorMsg2)
                    })
                }
        signIn_noEmail(){
                it('signIn with no email and valid password',() => {
                    cy.visit('/')
                    cy.get(selectors.signIn.passwordPlaceholder)
                    .type(password)
                    cy.get(selectors.signIn.signIn_button)
                    .click({force: true})
                    cy.get(selectors.signIn.email_errorPlaceholder)
                    .contains(selectors.signIn.email_errorMsg)
                    })
                }
        signIn_noPassword(){
                it('signIn with valid email and no password',() => {
                    cy.visit('/')
                    cy.get(selectors.signIn.emailPlaceholder)
                    .type(id)
                    cy.get(selectors.signIn.signIn_button)
                    .click({force: true})
                    cy.get(selectors.signIn.pass_error1Placeholder)
                    .contains(selectors.signIn.password_errorMsg1)
                    })
                }
        signIn_validCredentials(){
            it('signIn with valid credentials',() => {
                cy.visit('/')
                cy.get(selectors.signIn.emailPlaceholder)
                .type(id)            
                cy.get(selectors.signIn.passwordPlaceholder)
                .type(password)
                cy.get(selectors.signIn.signIn_button)
                .click({force: true})
                })  
            }
}
export default new DRFP_signIn