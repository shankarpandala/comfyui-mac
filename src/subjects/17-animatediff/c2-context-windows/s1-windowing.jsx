import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Windowing() {
  return (
    <>
      <p>
        AnimateDiff motion modules are trained on 16-frame windows. To produce longer videos, the
        Evolved nodes use overlapping context windows — generate frames in sliding 16-frame chunks
        with shared latent state.
      </p>

      <h2>Context options nodes</h2>
      <p>
        <code>ContextOptionsStandard</code> (or its variants) configures windowing:
      </p>
      <ul>
        <li><strong>context_length</strong>: 16 (the trained window size; don't change unless you have a reason).</li>
        <li><strong>context_overlap</strong>: 4–8 (how much windows overlap for smooth blending).</li>
        <li><strong>context_stride</strong>: usually 1.</li>
        <li><strong>context_schedule</strong>: <code>uniform_v2</code> is the safe default.</li>
      </ul>

      <h2>Producing &gt; 16 frames</h2>
      <ol>
        <li>Set EmptyLatentImage batch_size to 32 (or 48, 64).</li>
        <li>Wire ContextOptionsStandard into AnimateDiffLoaderGen1's <code>context_options</code> input.</li>
        <li>Sampler runs windowed inference internally.</li>
      </ol>

      <h2>Memory scales with frames</h2>
      <p>32 frames doesn't take 2× the memory of 16 frames — only the activations grow, and many activations are shared across frames within a window.</p>

      <h2>Quality scales worse than memory</h2>
      <p>
        Long videos with windowing show drift at window boundaries — the visual style or composition
        subtly shifts. Mitigations:
      </p>
      <ul>
        <li>Larger context_overlap (8 instead of 4).</li>
        <li>Same seed across windows (Evolved supports this).</li>
        <li>Static prompt (no scheduling).</li>
        <li>Strong character LoRA at full strength.</li>
      </ul>

      <NoteBlock title="When to switch tools">
        AnimateDiff windowed beyond ~32 frames produces visible drift. For genuinely longer videos,
        switch to LTX-Video or Hunyuan, which are trained for longer outputs natively.
      </NoteBlock>
    </>
  )
}
