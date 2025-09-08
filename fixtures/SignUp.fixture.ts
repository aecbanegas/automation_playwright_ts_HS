import {test as base} from '@playwright/test'
import { HomePage } from '../pageObjects/HomePage' 
import { SignUpPage } from '../pageObjects/SignUpPage'
import { SignInPage } from '../pageObjects/SignInPage'

type Fixtures = {
    homePage: HomePage,
    signUpPage: SignUpPage,
    signInPage: SignInPage
}

export const test = base.extend<Fixtures>({
    homePage: async ({page}, use) =>{
        await page.goto('/')
        const homePage = new HomePage(page)
        await use(homePage)
    },
    signUpPage: async ({page}, use) =>{
        const signUpPage = new SignUpPage(page)
        await use(signUpPage)
    },
    signInPage: async ({page}, use) =>{
            const signInPage = new SignInPage(page)
            await use(signInPage)
    },
})
