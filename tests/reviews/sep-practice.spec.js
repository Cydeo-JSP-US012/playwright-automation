import { test } from "@playwright/test";

test("SEP Practice @sep", async ({ page }) => {

    const ENCODED_CREDENTIALS = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${ENCODED_CREDENTIALS}`
    })

    await page.goto(`${process.env.SEP_QA_URL}`);

    await page.waitForTimeout(3000);

    // Start Application Step:

    CommonUI.completeStartApplicationStep(page, "Muhtar", "Mahmut", "mahmut@example.com", "05555555555" );

    await page.waitForTimeout(3000);

    // Payment Plan Step:

    



});


class CommonUI{

    static async completeStartApplicationStep(page, firstName, lastName, email, phone){
        let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
        await firstNameInput.fill(firstName);

        let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
        await lastNameInput.fill(lastName);

        let emailInput = page.locator("//input[@formcontrolname='email']");
        await emailInput.fill(email);

        let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");
        await phoneInput.fill(phone);

        let howDidYouHearAboutUsDropDown = page.locator("//mat-label[text()='How did you hear about us?']");
        await howDidYouHearAboutUsDropDown.click();

        await page.click(`//span[text()='Email']`);

        let nextButton1 = page.locator("//button[@type='submit']");
        await nextButton1.click();
    }

}