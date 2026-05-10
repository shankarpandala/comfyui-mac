import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1AceStep() {
  return (
    <>
      <p>
        ACE-Step (2024) is a newer open-source music model. 3.5 B parameters, generates ~3-minute
        full songs with vocals from a prompt. Mac-feasible at GGUF quants.
      </p>

      <h2>Files</h2>
      <ul>
        <li><code>ACE-Step-v1-3.5B</code> — primary release</li>
        <li>GGUF quants emerging</li>
      </ul>

      <h2>Distinctive capability</h2>
      <ul>
        <li><strong>Generates vocals</strong> — sings sung lyrics that match the prompt's intent.</li>
        <li><strong>Long-form</strong> — 3+ minutes vs MusicGen's 30 s.</li>
        <li><strong>Multilingual</strong> — vocals in multiple languages.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Demo songs from text descriptions.</li>
        <li>Reels with sung phrases.</li>
        <li>Background music with vocal hooks.</li>
      </ul>

      <h2>Mac feasibility</h2>
      <p>fp16 ~7 GB. Q4_K_S ~2 GB. Generates 3-minute song in ~10-20 minutes on M5 Pro.</p>

      <NoteBlock title="The Mac music ladder">
        Stable Audio Open for short clips and SFX. MusicGen for structured 30s tracks. ACE-Step for
        long-form vocal music. Each fits a different use case.
      </NoteBlock>
    </>
  )
}
