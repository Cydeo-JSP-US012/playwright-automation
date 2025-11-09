import { test } from "@playwright/test";

test("SEP Practice @sep", async ({ page }) => {

    const ENCODED_CREDENTIALS = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${ENCODED_CREDENTIALS}`
    })

    await page.goto(`${process.env.SEP_QA_URL}`);

    await page.waitForTimeout(3000);

    // Start Application Step:

    let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
    await firstNameInput.fill("Muhtar");

    let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
    await lastNameInput.fill("Mahmut");

    let emailInput = page.locator("//input[@formcontrolname='email']");
    await emailInput.fill("muhtar.mahmut@example.com");

    let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");
    await phoneInput.fill("05555555555");

    let howDidYouHearAboutUsDropDown = page.locator("//mat-label[text()='How did you hear about us?']");
    await howDidYouHearAboutUsDropDown.click();

    await page.click("//span[text()='Email']");

    let nextButton1 = page.locator("//button[@type='submit']");
    await nextButton1.click();

    await page.waitForTimeout(3000);



});