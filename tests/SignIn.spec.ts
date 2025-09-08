import { test } from '../fixtures/SignIn.fixture'
import { createBaseUser } from '../utils/Utils'
import userData from '../data/UserData.json' assert {type:'json'}

test.describe('Test Sign In screen', async()=>{
    test.beforeEach(async function ({ page }) {
        await createBaseUser(page,userData.createBaseUser.email,userData.createBaseUser.password,userData.createBaseUser.username)
    })
    test('User is able to Sign In - HP',
        { tag: ['@TC4', '@regression', '@SignUp']}, async function ({homePage,signInPage}){
            await homePage.accessSignIn()
            await signInPage.signInUser(userData.createBaseUser.email,userData.createBaseUser.password)
            await homePage.verifyLogin()
        }
    )
    test('User is not able to sign in with invalid credentials - SP',
        { tag: ['@TC5', '@regression', '@SignUp']}, async function ({homePage,signInPage}){
            await homePage.accessSignIn()
            await signInPage.signInUser(userData.invalidSignInUser.email,userData.invalidSignInUser.password)
            await signInPage.verifyErrorLabels()
        }
    )
})
