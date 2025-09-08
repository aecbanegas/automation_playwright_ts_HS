import { Page, Locator } from "@playwright/test";
import { SIGNUP_SELECTORS } from "../selectors/SignUp.selectors";
import { assertElementIsVisible } from "../utils/Assertions";
import { clickOnElement, fillElementText } from "../utils/Utils";

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

    async signUpUser(username: string = 'user', email: string = 'andreselias1404', password: string = 'andreselias1404') {
        await assertElementIsVisible(this.usernameTextbox)
        const usernameFinal = (username!='user' ? username:(username+this.getDateTimeDigits()))
        await fillElementText(this.usernameTextbox,usernameFinal)
        await assertElementIsVisible(this.emailTextbox)
        const emailFinal = (email!='andreselias1404'? email:(email+'+'+this.getDateTimeDigits()+'@gmail.com'))
        await fillElementText(this.emailTextbox, emailFinal)
        await assertElementIsVisible(this.passwordTextbox)
        const passwordFinal = (password!='andreselias1404'?password:emailFinal)
        await fillElementText(this.passwordTextbox,passwordFinal)
        await clickOnElement(this.signupButton)
    }

    async verifyErrorLabels(){
        await assertElementIsVisible(this.emailErrorLabel)
        await assertElementIsVisible(this.usernameErrorLabel)
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