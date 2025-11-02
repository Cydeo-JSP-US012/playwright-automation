import { test } from "@playwright/test";

test.describe("Test Cases of User Story", () => {

    test.beforeEach(async () => {
        console.log("Before each test case");
    });

    test("Test case 1", async ({ page }) => {
        
    });

    test("Tets case 2", async ({ page }) => {
        // Empty test function
    });

    test("Test case 3", async ({ page }) => {
        // Empty test function
    });
    
});



test("One Single Test Case", async ({ page }) => {
    // Empty test function
});