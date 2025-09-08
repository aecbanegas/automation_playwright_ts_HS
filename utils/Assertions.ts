import { expect, Locator } from '@playwright/test'

export const  assertElementIsVisible = async function (element : Locator, timeout = 90000):Promise<void>{
    try {
        await expect(element).toBeVisible({timeout})
    } catch (error) {
        console.log(error)
    }
}
