import { Page, Locator } from "@playwright/test";
import { NEW_ARTCILE_SELECTORS } from "../selectors/NewArticle.selectors";

export class NewAticlePage {
    readonly page: Page
    readonly articleTitleTextbox: Locator
    readonly aboutArticleTextbox: Locator
    readonly writeArticleTextbox: Locator
    readonly enterTagsTextbox: Locator
    readonly publishArticleButton: Locator
    readonly successNotification: Locator

    constructor(page: Page){
        this.page = page
        this.articleTitleTextbox = page.getByRole('textbox',{'name':NEW_ARTCILE_SELECTORS.articleTitleTextbox})
        this.aboutArticleTextbox = page.getByRole('textbox',{'name':NEW_ARTCILE_SELECTORS.aboutArticleTextbox})
        this.writeArticleTextbox = page.getByRole('textbox',{'name':NEW_ARTCILE_SELECTORS.writeArticleTextbox})
        this.enterTagsTextbox = page.getByRole('textbox',{'name':NEW_ARTCILE_SELECTORS.enterTagsTextbox})
        this.publishArticleButton = page.getByRole('button',{'name':NEW_ARTCILE_SELECTORS.publishArticleButton})
        this.successNotification = page.getByText(NEW_ARTCILE_SELECTORS.successNotification)
    }
}