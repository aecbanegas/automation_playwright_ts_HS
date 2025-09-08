import { Page, Locator } from "@playwright/test";
import { SIGNIN_SELECTORS } from "../selectors/SignIn.selectors";

export class SignInPage {
    readonly emailTextbox: Locator
    readonly passwordTextbox: Locator
    readonly needanaccountLink: Locator
    readonly signinButton: Locator
    readonly invalidErrorLabel: Locator

    constructor(page: Page){
        this.emailTextbox = page.getByRole('textbox',{'name':SIGNIN_SELECTORS.emailTextbox})
        this.passwordTextbox = page.getByRole('textbox',{'name':SIGNIN_SELECTORS.passwordTextbox})
        this.needanaccountLink = page.getByRole('link',{'name':SIGNIN_SELECTORS.needanaccountLink})
        this.signinButton = page.getByRole('button',{'name':SIGNIN_SELECTORS.signinButton})
        this.invalidErrorLabel = page.getByText(SIGNIN_SELECTORS.invalidErrorLabel)
    }
}