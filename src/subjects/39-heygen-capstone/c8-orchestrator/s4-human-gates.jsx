import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4HumanGates() {
  return (
    <>
      <p>Human approval gates — the pipeline pauses at key checkpoints for your review.</p>

      <h2>Where to gate</h2>
      <ol>
        <li><strong>After research</strong> — "Is this the right angle?" Quick scan; cheap pivot.</li>
        <li><strong>After script</strong> — "Approve / revise?" Most-impactful gate; expensive stages follow.</li>
        <li><strong>After visual prompts expanded</strong> — "These prompts will produce these scenes; OK?"</li>
        <li><strong>Before publish</strong> — final review of the actual finished Reel.</li>
      </ol>

      <h2>Gate UX</h2>
      <p>
        For solo Mac creators: terminal CLI with link to local file. "Script ready: open
        runs/.../script/final.json. Approve? (y/n/revise):"
      </p>

      <h2>Notification</h2>
      <p>Send Mac native notification when gate hits. Use <code>terminal-notifier</code> or AppleScript:</p>
      <pre>{`osascript -e 'display notification "Capstone needs review" with title "AI Pipeline"'`}</pre>

      <h2>Gate skip</h2>
      <p>For batch overnight runs: skip non-essential gates; only gate at "before publish" if at all.</p>

      <NoteBlock title="The 'thoughtful auto, automatic when proven' principle">
        Initially gate everything; learn what you actually need to review. Over time, remove gates
        that you always approve. Keep the ones where you sometimes pivot.
      </NoteBlock>
    </>
  )
}
