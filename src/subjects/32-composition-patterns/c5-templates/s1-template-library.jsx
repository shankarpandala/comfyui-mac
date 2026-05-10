import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1TemplateLibrary() {
  return (
    <>
      <p>Build your personal workflow template library. Reusable templates beat re-building workflows from scratch.</p>

      <h2>The library structure</h2>
      <pre>{`workflows/
├── images/
│   ├── sdxl-baseline.json
│   ├── sdxl-lightning.json
│   ├── flux-dev-q5.json
│   ├── flux-schnell-q5.json
│   ├── flux-pulid-yourself.json   # the identity stack
│   └── ...
├── video/
│   ├── ltx-t2v.json
│   ├── ltx-i2v.json
│   ├── wan-i2v.json
│   ├── hunyuan-t2v.json
│   └── animatediff-lightning.json
├── recipes/
│   ├── self-clone-still.json
│   ├── self-clone-talking-head.json
│   ├── reels-master-9-16.json
│   └── ...
└── pipeline-stages/
    ├── facedetailer-only.json
    ├── esrgan-upscale.json
    ├── rife-fps-uplift.json
    └── caption-burn-in.json`}</pre>

      <h2>Per-template documentation</h2>
      <p>Add a Note node at the top of each template explaining:</p>
      <ul>
        <li>What it does.</li>
        <li>What inputs to swap.</li>
        <li>Approximate Mac wall time.</li>
        <li>Memory footprint.</li>
      </ul>

      <h2>Versioning</h2>
      <p>
        <code>git init</code> the workflows folder. Each template improvement is a commit.
        Rollback is easy.
      </p>

      <h2>Sharing with yourself</h2>
      <p>
        Sync via private GitHub repo (encrypted) or rsync to other machines. Your template library
        is the bulk of your "AI workflow IP" — version-controlled, portable.
      </p>

      <NoteBlock title="The Phase 7 connection">
        The agentic capstone in Subject 39 selects from your template library. Build templates well;
        the agent picks the right one per task.
      </NoteBlock>
    </>
  )
}
