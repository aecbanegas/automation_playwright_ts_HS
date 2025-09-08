import { Page, Locator } from "@playwright/test";
import { ARTCILE_SELECTORS } from "../selectors/Article.selectors";

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
}