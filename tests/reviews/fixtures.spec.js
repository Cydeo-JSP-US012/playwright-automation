
import { test, firefox } from "@playwright/test";

test("Context Fixture Demo", async ({ context }) => {

     let page1 = await context.newPage();
     let page2 = await context.newPage();
     let page3 = await context.newPage();
     let page4 = await context.newPage();


     await page4.waitForTimeout(2000);

     await page1.bringToFront();
     await page1.goto("https://www.youtube.com/")
     await page1.waitForTimeout(2000);

     await page2.bringToFront();
     await page2.goto("https://github.com/")
     await page2.waitForTimeout(2000);

     await page3.bringToFront();
     await page3.goto("https://www.linkedin.com/")
     await page3.waitForTimeout(2000);

     await page4.bringToFront();
     await page4.goto("https://www.facebook.com/")
     await page4.waitForTimeout(2000);


});


test("Browser Fixture Demo", async ({ browser }) => {

    let context1 = await browser.newContext(); // first instance of browser
    let context2 = await browser.newContext(); // second instance of browser


    let page1 = await context1.newPage(); // first tab  in first instance of browser
    let page2 = await context1.newPage(); // second tab in first instance of browser


    let page3 = await context2.newPage(); // first tab in second instance of browser
    let page4 = await context2.newPage(); // second tab in second instance of browser

    await page4.waitForTimeout(4000);

    await page1.bringToFront();
    await page1.goto("https://www.youtube.com/")
    await page1.waitForTimeout(2000);

    await page2.bringToFront();
    await page2.goto("https://github.com/")
    await page2.waitForTimeout(2000);


    await page3.bringToFront();
    await page3.goto("https://www.linkedin.com/")
    await page3.waitForTimeout(2000);

    await page4.bringToFront();
    await page4.goto("https://www.facebook.com/")
    await page4.waitForTimeout(2000);
    
});

test("Custom context and browser configurations demo", async () => {
    
    let browser = await firefox.launch();  // browser
    let context = await browser.newContext(); // instance of browser
    let page = await context.newPage(); // new tab in instance of browser

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);

});


test("", async ({ request }) => {

    let baseURL = "https://api.example.com";
    
    let response = await request.get(`${baseURL}/endPoint`);

    // verify that the status code is 200.
    await expect(response.status()).toBe(200);

    // verify that content-type is application/json.
    await expect(response.headers().get('content-type')).toBe('application/json');

    // verify that the response body is a valid JSON object.
    let jsonResponse = await response.json();
    await expect(jsonResponse).toBeTruthy();

    // verify that the first-name in jason body is Josh.
    await expect(jsonResponse.first_name).toBe('Josh');

    
});