import { createHash } from "node:crypto";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("responsive layout, working tabs, source details, downloads, and email copy", async ({
  page,
  context,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Mohamed Ehab",
  );
  await expect(
    page.getByRole("img", {
      name: "Mohamed Ehab, ML and infrastructure engineer",
    }),
  ).toBeVisible();
  for (const width of [320, 375, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      )
      .toBe(true);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByRole("button", { name: /Retrieval systems/ }).click();
  await expect(page.locator(".system-path")).toContainText("ragbase/backend");
  await page.getByRole("tab", { name: /On-device inference/ }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: /Offline-first architecture/ }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText(
    "The phone is the source of truth.",
  );
  await page.keyboard.press("End");
  await expect(page.getByRole("tabpanel")).toContainText(
    "Freeze the forecast.",
  );
  await page.keyboard.press("Home");
  await expect(page.getByRole("tabpanel")).toContainText(
    "A rule sets the plan.",
  );
  await page.locator("#ragbase summary").click();
  await expect(page.locator("#ragbase details")).toHaveAttribute("open", "");
  await expect(page.locator("#ragbase details")).toContainText(
    "Arabic retrieval is limited",
  );
  const cv = await page.request.get("/Mohamed_ElMolla_AIEngineer_CV.pdf");
  expect(cv.status()).toBe(200);
  expect(
    createHash("sha256")
      .update(await cv.body())
      .digest("hex"),
  ).toBe("294d62cb3f3e91f489837a359d9c2175b3174519313de40ebae07d65dbd8cbb8");
  expect(cv.headers()["content-type"]).toContain("application/pdf");
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status")).toContainText("Email copied");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "imody10@gmail.com",
  );
  await page.setViewportSize({ width: 375, height: 900 });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Skills" })
    .click();
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(page).toHaveURL(/#skills$/);
  expect(errors).toEqual([]);
});

test("WCAG automated accessibility checks on desktop and mobile", async ({
  page,
}) => {
  for (const width of [1440, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
});

test("metadata, generated social image, and reduced motion", async ({
  page,
  request,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Mohamed Ehab/,
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  const socialImage = await request.get("/social-image");
  expect(socialImage.status()).toBe(200);
  expect(socialImage.headers()["content-type"]).toContain("image/png");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://mohamed-ehab-portfolio.pages.dev",
  );
  expect(await page.content()).not.toContain("http://localhost");
  expect(await page.content()).not.toContain("http://127.0.0.1");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://mohamed-ehab-portfolio.pages.dev/social-image",
  );
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
});
