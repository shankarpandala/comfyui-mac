import WarningBlock from '../../../components/content/WarningBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4Distribution() {
  return (
    <>
      <p>Distribution policies and storage hygiene. Where unrestricted content goes — and how to manage it locally — matters.</p>

      <h2>Platform policies</h2>
      <table>
        <thead><tr><th>Platform</th><th>Adult content stance</th></tr></thead>
        <tbody>
          <tr><td>Instagram / TikTok / YouTube Shorts</td><td>No</td></tr>
          <tr><td>X (Twitter)</td><td>Allows behind opt-in</td></tr>
          <tr><td>Reddit</td><td>Subreddit-specific</td></tr>
          <tr><td>Patreon / Substack</td><td>Allows; ToS varies</td></tr>
          <tr><td>OnlyFans / FanCentro</td><td>Yes (intended use)</td></tr>
          <tr><td>Pornhub / similar</td><td>Yes; verification required</td></tr>
        </tbody>
      </table>

      <h2>Storage hygiene</h2>
      <ul>
        <li>Encrypted folder for unrestricted content (Mac Disk Utility encrypted DMG, or Vorta/Borg).</li>
        <li>Separate Time Machine policy if needed.</li>
        <li>Don't sync to iCloud / Dropbox / cloud services that may have content rules.</li>
        <li>Backup to encrypted external drive only.</li>
      </ul>

      <h2>Don't share generation files casually</h2>
      <ul>
        <li>Workflow JSONs may contain references to your trained LoRAs / identity embeddings.</li>
        <li>PNG metadata embeds prompts (Subject 01 / Chapter 6).</li>
        <li>Strip metadata before sharing any output.</li>
      </ul>

      <WarningBlock title="The ToS reality">
        Generating locally doesn't bypass distribution platform ToS. If Instagram's ToS prohibits
        certain content, posting it (regardless of how generated) violates ToS. Match platform to
        content type.
      </WarningBlock>

      <NoteBlock title="The 'don't post what you wouldn't sign your name to' rule">
        For unrestricted content: imagine the platform shutting down and your content showing up
        elsewhere with your name attached. If that's OK, post. If not, don't.
      </NoteBlock>
    </>
  )
}
