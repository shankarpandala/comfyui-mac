import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3StorageLayout() {
  return (
    <>
      <p>Storage layout for the capstone. Per-run folder; clean separation of artifacts.</p>

      <h2>The structure</h2>
      <pre>{`runs/
└── 2026-05-10-mac-flux-tips/
    ├── input.json              # original user input
    ├── trace.jsonl             # full pipeline log
    ├── research/
    │   ├── search-results.json
    │   ├── scraped/
    │   │   ├── article-1.txt
    │   │   └── ...
    │   └── summary.json
    ├── script/
    │   ├── draft-1.json
    │   ├── critique.json
    │   └── final.json          # the scene_breakdown
    ├── visuals/
    │   ├── scene-1-still.png
    │   ├── scene-1-clip.mp4
    │   └── ...
    ├── audio/
    │   ├── scene-1.wav
    │   └── ...
    ├── intermediate/
    │   ├── concat.txt          # ffmpeg concat list
    │   └── pre-captions.mp4
    └── final/
        ├── reel-9-16.mp4
        ├── reel-1-1.mp4
        ├── thumbnail.png
        └── metadata.json       # title / desc / tags / hashtags`}</pre>

      <h2>Why separate</h2>
      <ul>
        <li>Easy to inspect intermediate artifacts.</li>
        <li>Re-run later stages without redoing earlier ones.</li>
        <li>Compare scripts / visuals across runs.</li>
        <li>Debug-friendly when something fails.</li>
      </ul>

      <h2>Cleanup policy</h2>
      <p>
        Keep <code>final/</code> indefinitely. Archive <code>research/</code>,{' '}
        <code>visuals/</code>, <code>audio/</code> after 30 days. Delete <code>intermediate/</code>{' '}
        immediately on success.
      </p>

      <NoteBlock title="The 'every run is auditable' principle">
        Production AI workflows must be auditable. The per-run folder structure makes this
        automatic. If anyone (you, future-you, a regulator) asks "how did this Reel get made", the
        answer is the folder.
      </NoteBlock>
    </>
  )
}
