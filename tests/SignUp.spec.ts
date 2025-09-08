import { test } from '../fixtures/SignUp.fixture'
import { createBaseUser } from '../utils/Utils'
import userData from '../data/UserData.json' assert {type:'json'}

test.describe('Test Sign Up screen', async()=>{
    test.beforeEach(async function ({ page }) {
        await createBaseUser(page,userData.createBaseUser.email,userData.createBaseUser.password,userData.createBaseUser.username)
    })
    test('User is able to Register - HP',
        { tag: ['@TC1', '@regression', '@SignUp']}, async function ({homePage,signUpPage, signInPage}){
            await homePage.accessSignUp()
            await signUpPage.signUpUser()
            await signInPage.verifySignInElements()
        }
    )
    test('User is not able to Register with Invalid credentials - SP',
        { tag: ['@TC2', '@regression', '@SignUp']}, async function ({homePage,signUpPage}){
            await homePage.accessSignUp()
            await signUpPage.signUpUser(userData.invalidUser.username, userData.invalidUser.email, userData.invalidUser.password)
            await signUpPage.verifyErrorLabels()
        }
    )
})
