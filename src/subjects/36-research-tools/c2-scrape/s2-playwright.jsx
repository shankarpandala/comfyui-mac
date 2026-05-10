import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Playwright() {
  return (
    <>
      <p>Playwright for JS-heavy sites. When trafilatura / requests don't work — typically modern SPAs that load content via JavaScript — Playwright runs a headless browser.</p>

      <h2>Install</h2>
      <CommandBlock command="pip install playwright" />
      <CommandBlock command="playwright install chromium" />

      <h2>Use</h2>
      <pre>{`from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(url)
    page.wait_for_load_state("networkidle")
    html = page.content()
    browser.close()

# Now extract from html with trafilatura
text = trafilatura.extract(html)`}</pre>

      <h2>When to use</h2>
      <ul>
        <li>SPAs (React/Vue apps).</li>
        <li>Content behind JavaScript-triggered lazy loads.</li>
        <li>Sites that block requests-style scraping.</li>
      </ul>

      <h2>Cost</h2>
      <ul>
        <li>Slower than requests (~3-5 s per page vs 0.5 s).</li>
        <li>More memory (~200 MB per browser instance).</li>
      </ul>

      <NoteBlock title="The 'requests first, Playwright fallback' rule">
        Try simple HTTP request + trafilatura first (fast, free). Fall back to Playwright only
        when content is missing.
      </NoteBlock>
    </>
  )
}
