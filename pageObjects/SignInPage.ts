import { Page, Locator } from "@playwright/test";
import { SIGNIN_SELECTORS } from "../selectors/SignIn.selectors";
import { assertElementIsVisible } from "../utils/Assertions";
import { clickOnElement, fillElementText } from "../utils/Utils";

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

    async signInUser(email:string, password: string){
        await this.verifySignInElements()
        await fillElementText(this.emailTextbox,email)
        await fillElementText(this.passwordTextbox,password)
        await clickOnElement(this.signinButton)
    }

    async verifySignInElements(){
        await assertElementIsVisible(this.emailTextbox)
        await assertElementIsVisible(this.passwordTextbox)
        await assertElementIsVisible(this.signinButton)
    }

    async verifyErrorLabels(){
        await assertElementIsVisible(this.invalidErrorLabel)
    }
}