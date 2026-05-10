import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S4Schedule() {
  return (
    <>
      <p>Local scheduling via launchd — set Reels to publish daily / on a schedule. Mac equivalent of cron jobs.</p>

      <h2>The plist (launchd)</h2>
      <p>From Subject 33 / Chapter 3. Schedule the entire pipeline:</p>
      <pre>{`<key>StartCalendarInterval</key>
<dict>
    <key>Hour</key><integer>9</integer>
    <key>Minute</key><integer>0</integer>
</dict>`}</pre>

      <h2>Posting via API</h2>
      <ul>
        <li>YouTube: official Data API v3.</li>
        <li>Instagram: Meta Graph API (business accounts only).</li>
        <li>TikTok: Content Posting API.</li>
        <li>Or: just generate the file; manually upload via web/mobile.</li>
      </ul>

      <h2>The "auto-pipeline, manual post" pattern</h2>
      <p>Many creators run the pipeline automatically each morning, then manually upload during their phone-time. Less complexity; full control over scheduling.</p>

      <h2>Notification</h2>
      <pre>{`# Mac notification when Reel is ready
osascript -e 'display notification "Today\\'s Reel is ready in final/" with title "AI Capstone"'`}</pre>

      <NoteBlock title="The 'autonomous content factory'">
        With launchd + capstone + auto-publishing API: AI Reels go up while you sleep. You provide
        topic ideas; the system handles everything else. The HeyGen-class promise fulfilled.
      </NoteBlock>
    </>
  )
}
