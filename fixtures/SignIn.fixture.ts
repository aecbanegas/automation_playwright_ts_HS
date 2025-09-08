import {test as base} from '@playwright/test'
import { HomePage } from '../pageObjects/HomePage'
import { SignInPage } from '../pageObjects/SignInPage'

type Fixtures = {
    homePage: HomePage,
    signInPage: SignInPage
}

export const test = base.extend<Fixtures>({
    homePage: async ({page}, use) =>{
        await page.goto('/')
        const homePage = new HomePage(page)
        await use(homePage)
    },
    signInPage: async ({page}, use) =>{
        const signInPage = new SignInPage(page)
        await use(signInPage)
    },
})
