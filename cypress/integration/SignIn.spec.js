import DRFP_signIn from "../pageObject/signIn"
describe('signIn',() => {
    DRFP_signIn.signIn_invalidCredentials()
    DRFP_signIn.signIn_noCredentials()
    DRFP_signIn.signIn_inValidEmail()
    DRFP_signIn.signIn_inValidPassword()
    DRFP_signIn.signIn_noEmail()
    DRFP_signIn.signIn_noPassword()
    DRFP_signIn.signIn_validCredentials()
})
// describe('signIn',() => {
//     DRFP_e2e.e2e() 
// })