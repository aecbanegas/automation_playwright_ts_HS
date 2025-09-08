import { Page, Locator } from "@playwright/test";
import { NEW_ARTCILE_SELECTORS } from "../selectors/NewArticle.selectors";
import { assertElementIsVisible } from "../utils/Assertions";
import { clickOnElement, fillElementText } from "../utils/Utils";

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

    async createNewArticle(title: string, about: string, write: string){
        await this.verifyNewArticleElements()
        await fillElementText(this.articleTitleTextbox, title + (await this.getDateTimeDigits()))
        await fillElementText(this.aboutArticleTextbox,about)
        await fillElementText(this.writeArticleTextbox,write)
        await clickOnElement(this.publishArticleButton)
        await assertElementIsVisible(this.successNotification)
    }

    async verifyNewArticleElements(){
        await assertElementIsVisible(this.articleTitleTextbox)
        await assertElementIsVisible(this.aboutArticleTextbox)
        await assertElementIsVisible(this.writeArticleTextbox)
        await assertElementIsVisible(this.enterTagsTextbox)
        await assertElementIsVisible(this.publishArticleButton)
    }

    getDateTimeDigits = (): string => {
        const now = new Date();

        const pad = (num: number): string => num.toString().padStart(2, "0");

        const year = now.getFullYear();
        const month = pad(now.getMonth() + 1);
        const day = pad(now.getDate());
        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        const seconds = pad(now.getSeconds());

        return `${year}${month}${day}${hours}${minutes}${seconds}`;
    }
}