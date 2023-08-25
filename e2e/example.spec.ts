import { test, expect } from "@playwright/test";

test("test react page button", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(
    page.getByRole("heading", { name: "Vite + React" })
  ).toContainText("Vite");

  // check default button
  await expect(page.getByRole("button", { name: "count is 0" })).toBeVisible();

  // click button
  await page.getByTestId("button").click();

  // check update
  await expect(page.getByRole("button", { name: "count is 1" })).toBeVisible();
});
