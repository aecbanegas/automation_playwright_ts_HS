import { Page, Locator } from "@playwright/test";
import { SIGNUP_SELECTORS } from "../selectors/SignUp.selectors";

export class SignUpPage {
    readonly usernameTextbox: Locator
    readonly emailTextbox: Locator
    readonly passwordTextbox: Locator
    readonly haveanaccountLink: Locator
    readonly signupButton: Locator
    readonly emailErrorLabel: Locator
    readonly usernameErrorLabel: Locator

    constructor(page: Page) {
        this.usernameTextbox = page.getByRole('textbox', { 'name': SIGNUP_SELECTORS.usernameTextbox })
        this.emailTextbox = page.getByRole('textbox', { 'name': SIGNUP_SELECTORS.emailTextbox })
        this.passwordTextbox = page.getByRole('textbox', { 'name': SIGNUP_SELECTORS.passwordTextbox })
        this.haveanaccountLink = page.getByRole('link', { 'name': SIGNUP_SELECTORS.haveanaccountLink })
        this.signupButton = page.getByRole('button', { 'name': SIGNUP_SELECTORS.signupButton })
        this.emailErrorLabel = page.getByText(SIGNUP_SELECTORS.emailErrorLabel)
        this.usernameErrorLabel = page.getByText(SIGNUP_SELECTORS.usernameErrorLabel)
    }
}