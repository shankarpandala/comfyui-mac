import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SceneBatches() {
  return (
    <>
      <p>Scene-batch generation for long-form. Group scenes by type; render in batches efficiently.</p>

      <h2>The pattern</h2>
      <ol>
        <li>Bucket scenes: all talking-head (intro, beats, recap, CTA), all B-roll, all titles.</li>
        <li>Render each bucket in sequence — model stays loaded.</li>
        <li>Talking-head uses one cached self-clone still + Sonic per scene.</li>
        <li>B-roll: one FLUX still + LTX i2v per scene.</li>
      </ol>

      <h2>Why batching helps on Mac</h2>
      <ul>
        <li>FLUX stays loaded across all FLUX renders — no reload time per scene.</li>
        <li>Sonic stays loaded across all talking-head animations.</li>
        <li>~20% wall-time savings vs interleaved rendering.</li>
      </ul>

      <h2>The orchestrator implementation</h2>
      <p>
        Within the visual_node: sort scenes by type before iterating. ComfyUI's model cache
        (Subject 34 / Chapter 4) does the rest.
      </p>

      <NoteBlock title="The 'minimize model swaps' rule">
        Each model swap = ~30s reload. Across 30 scenes, that's 15 minutes of pure overhead.
        Batching by type eliminates it.
      </NoteBlock>
    </>
  )
}
