
// @ts-check
import { test, expect } from "@playwright/test";

const TIMEOUT = 60000;

test.describe("Omayo Blog Automation", () => {
  test("Mouseover on blogs and click Selenium by Arun. Verify if landed on selenium by Arun page", async ({
    page,
  }) => {
    await page.goto("https://omayo.blogspot.com/");
   
    await page.hover('//span[@id="blogsmenu"]');
   await page.click(`//a[@href='http://www.selenium-by-arun.blogspot.com']`, {
      timeout: TIMEOUT,
    });
   
    await page.waitForLoadState("load");
    expect(page.url()).toContain("selenium-by-arun");
  });

  test.only("Read all the rows and columns in Table and report it", async ({
    page,
  }) => {
    await page.goto("https://omayo.blogspot.com/");
  
    const rows = await page.$$('//table[@id="table1"]/tbody/tr');
    for (const row of rows) {
      const columns = await row.$$("td");
      const rowData = await Promise.all(
        columns.map(async (col) => (await col.textContent()).trim())
      );
      console.log(rowData.join(" | "));
    }
  });

  test("Login with Username and password", async ({ page }) => {
    await page.goto("https://omayo.blogspot.com/");
    
    await page.fill('//input[@name="userid"]', "user");
    await page.fill('//input[@name="pswrd"]', "password");
    await page.click('//input[@value="Login"]');
  });

  test("Get Text from Preloaded Textbox", async ({ page }) => {
    await page.goto("https://omayo.blogspot.com/");
    
    const preloadedText = await page.inputValue('//input[@id="textbox1"]');
    console.log("Preloaded Text:", preloadedText);
  });

  test("Check if button 2 is enabled and button 1 is disabled", async ({
    page,
  }) => {
    await page.goto("https://omayo.blogspot.com/");
   
    const isButton1Disabled = await page.isDisabled('//button[@id="but1"]');
    const isButton2Enabled = await page.isEnabled('//button[@id="but2"]');
    console.log("Button 1 Disabled:", isButton1Disabled);
    console.log("Button 2 Enabled:", isButton2Enabled);
  });

  test("Fill any text in the search box and check if the URL has the text", async ({
    page,
  }) => {
    await page.goto("https://omayo.blogspot.com/");
    
    const searchText = "Lumel";
    await page.waitForSelector('//input[@title="search"]', {
      timeout: TIMEOUT,
    });
    await page.fill('//input[@title="search"]', searchText);
    await page.press('//input[@title="search"]', "Enter");
    await page.waitForLoadState("load");
    expect(page.url()).toContain(searchText);
  });

  test("Print the entire dropdown options and click doc1", async ({ page }) => {
    await page.goto("https://omayo.blogspot.com/");
  
    const options = await page.$$('//select[@id="drop1"]/option');
    for (const option of options) {
      const optionText = await option.textContent();
      console.log(optionText.trim());
    }
    await page.selectOption('//select[@id="drop1"]', { label: "doc 1" });
  });

  test("Press the delayed dropdown button and Click Flipkart. Check if Flipkart homepage is navigated.", async ({
    page,
  }) => {
    await page.goto("https://omayo.blogspot.com/");
   
    await page.waitForSelector('//button[@class="dropbtn"]', {
      timeout: TIMEOUT,
    });
    await page.click('//button[@class="dropbtn"]');
    await page.waitForSelector('//a[text()="Flipkart"]', { timeout: TIMEOUT });
    await page.click('//a[text()="Flipkart"]');
    await page.waitForLoadState("load");
    expect(page.url()).toContain("flipkart.com");
  });




test("Validate Error keyword in the IFRAME 2", async ({ page }) => {
  await page.goto("https://omayo.blogspot.com/");


  const frameLocator = page.frameLocator("//iframe[2]");

 
  const bodyText = await frameLocator.locator("body").innerText();

 
  if (bodyText.includes("Error")) {
    console.log("The keyword 'Error' is present in IFRAME 2.");
  } else {
    console.log("The keyword 'Error' is NOT present in IFRAME 2.");
  }

  
  expect(bodyText).toContain("Error");
});




});
