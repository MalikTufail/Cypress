// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command -
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'
Cypress.Commands.add('Login_api',() => {
    cy.request({
        method: "POST",
        url: "https://dev.directrfp.com/api/auth-password/token-request",
        body:{
            "id": "1mansoor.nasir@gmail.com",
            "password": "T((hmktt@@2",
            "idKeys": ["email","username"]
        },
    }).then((response) =>{
        const jwt =response.body.jwt
        localStorage.setItem("redux.directrfp", JSON.stringify({
            api: {
                users:{
                    "bb24bb96-f115-4a91-9126-52ae840b7f81": {
                        isActive: true,
                        jwt,
                    }
                }
            }
        }))
        cy.request({
            "method": "POST",
            "url": "https://dev.directrfp.com/api/actions/audit_event",
            "headers": {
                authorization: `Bearer ${jwt}`,
                authority: "dev.directrfp.com"
            },
            "body": {
                "collectionName": "auth.sign_in",
                "data": {
                    "api": {
                        "user":{
                            "did_auth": "true",
                            "email": "1mansoor.nasir@gmail.com",
                            "user_id": "bb24bb96-f115-4a91-9126-52ae840b7f81"
                        }
                    },
                    "session": {
                        "duration": "21562",
                        "events": "208",
                        "id": "2uIwzgzpm"
                    }
                }
            }
        })
    })
})
