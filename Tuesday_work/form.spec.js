import { test, expect } from "@playwright/test";

const studentDetails = {
  firstname: "Delicia",
  lastname: "Milton",
  email: "teresa@sample.com",
  number: "1234567890",
};

test("FillTest", async ({ page }) => {
  
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(page.url()).toContain("automation-practice-form");

  // Fill First Name
  const firstNameInput = page.locator("#firstName");
  await firstNameInput.fill(studentDetails.firstname);
  await expect(firstNameInput).toHaveValue(studentDetails.firstname);

  // Fill Last Name
  const lastNameInput = page.locator("#lastName");
  await lastNameInput.fill(studentDetails.lastname);
  await expect(lastNameInput).toHaveValue(studentDetails.lastname);

  // Fill Email
  const emailInput = page.locator("#userEmail");
  await emailInput.fill(studentDetails.email);
  await expect(emailInput).toHaveValue(studentDetails.email);

  // Fill Mobile Number
  const userNumberInput = page.locator("#userNumber");
  await userNumberInput.fill(studentDetails.number);
  await expect(userNumberInput).toHaveValue(studentDetails.number);

  // Submit Form
  await page.locator("#submit").click();

  // Add a short wait to ensure submission is processed
  await page.waitForTimeout(3000);
});
