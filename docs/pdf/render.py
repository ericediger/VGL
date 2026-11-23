"""Print the walkthrough with Playwright Chromium and stage the same PDF for the website."""
from pathlib import Path
import os
import shutil
from playwright.sync_api import sync_playwright

docs = Path(__file__).resolve().parents[1]
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=os.environ.get("PLAYWRIGHT_CHROMIUM_EXECUTABLE"))
    page = browser.new_page()
    page.goto((docs / "pdf/walkthrough.html").as_uri(), wait_until="load")
    page.pdf(path=str(docs / "vgl-walkthrough.pdf"), print_background=True,
             prefer_css_page_size=True, display_header_footer=False)
    browser.close()
shutil.copyfile(docs / "vgl-walkthrough.pdf", docs.parent / "website/vgl/review/vgl-walkthrough.pdf")
