import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2ContextUniform() {
  return (
    <>
      <p>
        ContextOptions's <code>context_schedule</code> dropdown picks how the windowing interacts
        with the sampler timesteps. The choice affects how detail evolves across windows.
      </p>

      <h2>Schedules</h2>
      <ul>
        <li><strong>uniform_v2</strong> — windows applied uniformly across all sampler steps. Default and safe.</li>
        <li><strong>uniform</strong> — older variant; uniform_v2 is generally better.</li>
        <li><strong>looped_uniform_v2</strong> — for seamlessly-looping outputs (last frame matches first).</li>
        <li><strong>static_standard</strong> — windows determined once, no shifting. Lower variety.</li>
      </ul>

      <h2>For looping outputs</h2>
      <p>
        <code>looped_uniform_v2</code> is the trick. Set context_overlap high (8+), and the
        sampler ensures end-of-video matches start-of-video. Useful for GIFs, looping social-media
        clips.
      </p>

      <h2>The choice in practice</h2>
      <ul>
        <li>Standard non-looping clip → uniform_v2.</li>
        <li>Looping clip → looped_uniform_v2.</li>
        <li>Don't experiment with the others unless solving a specific issue.</li>
      </ul>

      <h2>Per-frame conditioning (BatchPromptSchedule)</h2>
      <p>
        Custom-node packs add nodes for per-frame text prompt scheduling — different prompts for
        different frame ranges. Useful for narrative shots ("mountain scene 0–8, then transitions
        to ocean scene 9–15"). Add <code>BatchPromptSchedule</code> from the Fizzlenodes pack.
      </p>

      <NoteBlock title="The 'AnimateDiff is OLD' caveat">
        AnimateDiff is a 2023 technique. LTX, Hunyuan, Wan all post-date it and produce better
        video. AnimateDiff is still useful for fast iteration on Mac because it's lightweight; for
        final video work, default to the newer dedicated video models.
      </NoteBlock>
    </>
  )
}
