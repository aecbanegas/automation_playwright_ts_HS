import { Locator, Page, APIResponse} from "@playwright/test";

export const waitUntilElementIsVisible = async (element: Locator, timeout: number = 90000):Promise<void> => {
    await element.waitFor({state:'visible', timeout})
}

export const clickOnElement = async (element: Locator, options?:Parameters<Locator['click']>[0]) : Promise<void> =>{ 
    await waitUntilElementIsVisible(element)
    await element.click(options)
}

export const fillElementText = async (element:Locator, text:string): Promise<void> =>{
    await waitUntilElementIsVisible(element)
    await element.clear()
    await element.fill(text)
}

export const gotoPage = async (page: Page, url:string): Promise<void> =>{
    await page.goto(url)
}

export const createBaseUser = async (
  page: Page,
  email: string,
  password: string,
  username: string
): Promise<APIResponse> => {
  const response = await page.request.post("http://localhost:8000/api/users", {
    data: {
      user: {
        email,
        password,
        username,
      },
    },
  });

  return response;
}