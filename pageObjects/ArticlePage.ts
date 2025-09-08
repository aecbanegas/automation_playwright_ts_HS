import { Page, Locator } from "@playwright/test";
import { ARTCILE_SELECTORS } from "../selectors/Article.selectors";
import { assertElementIsVisible } from "../utils/Assertions";
import { clickOnElement, fillElementText } from "../utils/Utils";

export class ArticlePage {
    readonly editArticleButton: Locator
    readonly deleteArticleButton: Locator
    readonly writeCommentTextbox: Locator
    readonly postCommentButton: Locator
    readonly deleteCommentButton: Locator

    constructor(page: Page){
        this.editArticleButton = page.getByRole('button',{'name':ARTCILE_SELECTORS.editArticleButton}).first()
        this.deleteArticleButton = page.getByRole('button',{'name':ARTCILE_SELECTORS.deleteArticleButton}).first()
        this.writeCommentTextbox = page.getByRole('textbox',{'name':ARTCILE_SELECTORS.writeCommentTextbox})
        this.postCommentButton = page.getByRole('button',{'name':ARTCILE_SELECTORS.postCommentButton})
        this.deleteCommentButton = page.locator(ARTCILE_SELECTORS.deleteCommentButton).first()
    }

    async editArticle(){
        await this.verifyArticleElements()
        await clickOnElement(this.editArticleButton)
    }

    async deleteArticle(){
        await this.verifyArticleElements()
        await clickOnElement(this.deleteArticleButton)
    }

    async postComment(comment: string){
        await this.verifyArticleElements()
        await fillElementText(this.writeCommentTextbox, comment)
        await clickOnElement(this.postCommentButton)
        await assertElementIsVisible(this.deleteCommentButton)
    }

    async deleteComment(){
        await assertElementIsVisible(this.deleteCommentButton)
        await clickOnElement(this.deleteCommentButton)
    }

    async verifyArticleElements(){
        await assertElementIsVisible(this.editArticleButton)
        await assertElementIsVisible(this.deleteArticleButton)
        await assertElementIsVisible(this.writeCommentTextbox)
        await assertElementIsVisible(this.postCommentButton)
    }
}