import { Page, Locator } from "@playwright/test";
import { HOME_SELECTORS } from "../selectors/Home.selectors";
import { assertElementIsVisible } from "../utils/Assertions";
import { clickOnElement } from "../utils/Utils";

export class HomePage {
    readonly homeTab: Locator
    readonly signInTab: Locator
    readonly signUpTab: Locator
    readonly newArticleTab: Locator
    readonly firstArticle: Locator

    constructor(page: Page){
        this.homeTab = page.getByRole('link',{'name':HOME_SELECTORS.homeTab})
        this.signInTab = page.getByRole('link',{'name':HOME_SELECTORS.signInTab})
        this.signUpTab = page.getByRole('link',{'name':HOME_SELECTORS.signUpTab})
        this.newArticleTab = page.getByRole('link',{'name':HOME_SELECTORS.newArticleTab})
        this.firstArticle = page.locator(HOME_SELECTORS.firstArticle).first()
    }

    async accessHome(){
        await assertElementIsVisible(this.homeTab)
        await clickOnElement(this.homeTab)
    }

    async accessSignIn(){
        await assertElementIsVisible(this.signInTab)
        await clickOnElement(this.signInTab)
    }

    async accessSignUp(){
        await assertElementIsVisible(this.signUpTab)
        await clickOnElement(this.signUpTab)
    }

    async accessNewArticle(){
        await assertElementIsVisible(this.newArticleTab)
        await clickOnElement(this.newArticleTab)
    }

    async accessFirstArticle(){
        await assertElementIsVisible(this.firstArticle)
        await clickOnElement(this.firstArticle)
    }

    async verifyLogin(){
        await assertElementIsVisible(this.newArticleTab)
    }
}