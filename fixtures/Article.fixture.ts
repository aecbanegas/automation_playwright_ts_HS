import {test as base} from '@playwright/test'
import { HomePage } from '../pageObjects/HomePage'
import { SignInPage } from '../pageObjects/SignInPage'
import { NewAticlePage } from '../pageObjects/NewArticlePage'
import { ArticlePage } from '../pageObjects/ArticlePage'

type Fixtures = {
    homePage: HomePage,
    signInPage: SignInPage,
    newArticlePage: NewAticlePage,
    articlePage: ArticlePage
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
    newArticlePage: async ({page}, use) =>{
        const newAticlePage = new NewAticlePage(page)
        await use(newAticlePage)
    },
    articlePage: async ({page}, use) =>{
        const articlePage = new ArticlePage(page)
        await use(articlePage)
    },
})
