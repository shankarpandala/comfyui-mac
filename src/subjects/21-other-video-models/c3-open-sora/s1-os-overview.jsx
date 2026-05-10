import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1OsOverview() {
  return (
    <>
      <p>
        Open-Sora is the open-source attempt at recreating OpenAI's Sora. Multiple research
        releases in 2024-2025; quality has improved dramatically across versions. Mac compatibility
        is uneven — community ComfyUI integration lags behind.
      </p>

      <h2>Status in 2026</h2>
      <ul>
        <li>Open-Sora 1.x: research-quality; rough.</li>
        <li>Open-Sora 2.x: meaningfully better; production-usable for some content.</li>
        <li>ComfyUI nodes exist but are less mature than for LTX/Hunyuan/Wan.</li>
      </ul>

      <h2>When to use it</h2>
      <ul>
        <li>Specifically interested in the Sora-style approach.</li>
        <li>Want to experiment with an actively-developed open project.</li>
        <li>Comfortable with rough community integration.</li>
      </ul>

      <h2>When to skip</h2>
      <ul>
        <li>You want a stable, well-tested workflow for production work.</li>
        <li>You're prioritizing quality + Mac-friendliness today (LTX/Wan/Hunyuan win).</li>
      </ul>

      <NoteBlock title="The 'wait and see' verdict">
        Open-Sora is worth tracking. By late 2026 it may be a peer of Hunyuan/Wan; today it's not
        quite there. For the curriculum's purposes, we don't lean on it.
      </NoteBlock>
    </>
  )
}
