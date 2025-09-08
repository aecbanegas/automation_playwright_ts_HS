import { Page, Locator } from "@playwright/test";
import { HOME_SELECTORS } from "../selectors/Home.selectors";

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
}