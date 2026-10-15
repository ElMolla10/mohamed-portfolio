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

test("published research and complete CV sections are discoverable", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: /First-author research/ }).click();
  await expect(page).toHaveURL(/#research$/);
  const research = page.locator("#research");
  await expect(research.getByRole("heading", { level: 3 })).toHaveText(
    "Automatic Model Selection and Sign-Aware Multiplicative Sentiment Modulation for Algorithmic Trading",
  );
  await expect(
    research.getByRole("link", { name: "Read the published paper" }),
  ).toHaveAttribute("href", "https://ieeexplore.ieee.org/document/11700381");
  const paperLink = research.getByRole("link", {
    name: "Download paper (PDF)",
  });
  await expect(paperLink).toHaveAttribute(
    "href",
    "/research/IMSA-2026-Sentiment-Modulation.pdf",
  );
  const paperResponse = await page.request.get(
    "/research/IMSA-2026-Sentiment-Modulation.pdf",
  );
  expect(paperResponse.status()).toBe(200);
  expect(paperResponse.headers()["content-type"]).toContain("application/pdf");
  const pdfBytes = await paperResponse.body();
  expect(pdfBytes.subarray(0, 5).toString()).toBe("%PDF-");
  expect(createHash("sha256").update(pdfBytes).digest("hex")).toBe(
    "d10c753ccab7441c26214a6dbc13c67c29da005b454654614c3489b2776e1444",
  );
  const downloadEvent = page.waitForEvent("download");
  await paperLink.click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe(
    "IMSA-2026-Sentiment-Modulation.pdf",
  );
  expect(await download.failure()).toBeNull();
  await expect(research.locator("tbody tr").first()).toContainText("94.2%");
  await expect(research.locator("tbody tr").first()).toContainText("0.9420");
  await expect(research.locator("tbody tr").first()).toContainText("0.060");
  await expect(research.locator("tbody tr").nth(1)).toContainText("89.2%");
  await expect(research.locator("tbody tr").nth(2)).toContainText("12.5%");
  await expect(page.locator("#ragbase .supporting")).toContainText(
    "Deployed on Railway",
  );
  const experience = page.locator("#experience");
  for (const text of [
    "Prosoft",
    "Aug 2026 – Present",
    "BARQ Systems",
    "Aug 2025",
    "CLS Learning Solutions",
    "Apr 2025 – Jul 2025",
    "HyperCore",
    "Platform9",
  ])
    await expect(experience).toContainText(text);
  await expect(experience).not.toContainText("TODO_VERIFY");
  const education = page.locator("#education");
  for (const text of [
    "BSc in Artificial Intelligence",
    "ESLSCA University",
    "2023 – Jun 2026",
    "Technical Professional Certification (TPC)",
    "Infrastructure & Data Center Architecture",
    "Sales Professional",
  ])
    await expect(education).toContainText(text);
  for (const id of ["trading-engine", "malik", "price-intelligence"]) {
    const card = page.locator(`#${id}`);
    await expect(card.getByRole("heading")).toBeVisible();
    await card.locator("summary").click();
    await expect(card.locator("details")).toHaveAttribute("open", "");
  }
  await expect(page.locator("#trading-engine details")).toContainText(
    "idempotent",
  );
  await expect(page.locator("#malik details")).toContainText("FLEURS");
  await expect(page.locator("#price-intelligence details")).toContainText(
    "17-brand",
  );
  await expect(page.locator("#price-intelligence details")).toContainText(
    "11 entries",
  );
  await expect(
    page.getByRole("link", { name: "+20 111 506 6400" }),
  ).toHaveAttribute("href", "tel:+201115066400");
});

test("real iPhone recording plays and seeks; validation notes and Arabic evidence remain clear", async ({
  page,
}) => {
  await page.goto("/");
  expect(await page.content()).not.toContain("TODO_VERIFY");
  const gain = page.locator("#gain");
  await expect(gain.locator(".maturity")).toHaveText("Mobile prerelease");
  await expect(gain.locator(".validation-note")).toContainText(
    "recorded iPhone interaction",
  );
  await expect(page.locator("#ragbase .validation-note")).toContainText(
    "benchmarks have not yet been established",
  );
  await expect(
    page.getByRole("heading", { name: "Arabic interfaces. Arabic speech." }),
  ).toBeVisible();
  await gain.locator(".gain-stills summary").click();
  await expect(
    gain.getByRole("img", { name: /GAIN Arabic Today screen/ }),
  ).toBeVisible();
  await gain.locator(".gain-stills summary").click();
  await gain.locator(".gain-demo-transcript summary").click();
  await expect(gain.locator(".gain-demo-transcript")).toContainText("25 kg");
  const video = gain.locator("video");
  await expect(video).toHaveAttribute("preload", "none");
  await expect(video).not.toHaveAttribute("autoplay");
  expect(await video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(true);
  await video.scrollIntoViewIfNeeded();
  await gain.getByRole("button", { name: "Play iPhone demo" }).click();
  await expect
    .poll(() => video.evaluate((el: HTMLVideoElement) => el.currentTime))
    .toBeGreaterThan(0.3);
  expect(
    await video.evaluate((el: HTMLVideoElement) => el.duration),
  ).toBeCloseTo(15.603, 1);
  expect(
    await video.evaluate((el: HTMLVideoElement) => [
      el.videoWidth,
      el.videoHeight,
    ]),
  ).toEqual([384, 848]);
  await video.evaluate((el: HTMLVideoElement) => el.pause());
  await video.evaluate(
    (el: HTMLVideoElement) =>
      new Promise<void>((resolve) => {
        el.addEventListener("seeked", () => resolve(), { once: true });
        el.currentTime = 7.5;
      }),
  );
  expect(
    await video.evaluate((el: HTMLVideoElement) => el.currentTime),
  ).toBeCloseTo(7.5, 1);
  expect(await video.evaluate((el: HTMLVideoElement) => el.currentSrc)).toMatch(
    /^blob:/,
  );
  const recording = await page.request.get(
    "/videos/gain-iphone-live-adaptation.mp4",
  );
  expect(recording.status()).toBe(200);
  expect(recording.headers()["content-type"]).toContain("video/mp4");
  expect((await recording.body()).length).toBe(1422671);
  const captions = await page.request.get("/captions/gain-iphone-demo-en.vtt");
  expect(captions.status()).toBe(200);
  expect(await captions.text()).toContain("25 kg");
});
