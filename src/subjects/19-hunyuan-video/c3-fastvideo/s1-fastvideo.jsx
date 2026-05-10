import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Fastvideo() {
  return (
    <>
      <p>
        FastVideo is a distillation technique that compresses HunyuanVideo to fewer sampling
        steps. ~10 steps instead of 30, with similar quality. Reduces wall time by ~3× on Mac.
      </p>

      <h2>The model</h2>
      <p>
        FastHunyuan distillations are community-released. Look for <code>fasthunyuan-video</code>{' '}
        files on HuggingFace, often distributed by city96 or the FastVideo project.
      </p>

      <h2>Recipe (FastHunyuan)</h2>
      <ul>
        <li><strong>UNet</strong>: <code>fasthunyuan-video-Q4_K_S.gguf</code> (or whichever quant)</li>
        <li><strong>steps</strong>: 6–10 (much fewer than vanilla)</li>
        <li><strong>cfg</strong>: 6.0 (same as base)</li>
        <li><strong>sampler</strong>: euler</li>
        <li><strong>scheduler</strong>: simple</li>
      </ul>

      <h2>Wall time reduction on M5 Pro</h2>
      <ul>
        <li>Vanilla Hunyuan Q4_K_S, 30 steps: ~12 minutes</li>
        <li>FastHunyuan Q4_K_S, 10 steps: ~4 minutes</li>
        <li>FastHunyuan Q4_K_S, 6 steps: ~2.5 minutes (slight quality drop)</li>
      </ul>

      <h2>Quality comparison</h2>
      <p>
        FastHunyuan at 10 steps is ~95% of vanilla Hunyuan at 30 steps. Subtle texture differences
        in detailed scenes; composition and motion are equivalent.
      </p>

      <h2>The trade-off</h2>
      <p>
        FastHunyuan compresses output diversity slightly — different seeds produce more similar
        outputs than with vanilla. Acceptable for B-roll / content production; less interesting for
        creative exploration.
      </p>

      <NoteBlock title="The 'iterative Hunyuan' loop">
        For Hunyuan iteration on Mac, use FastHunyuan at 6-10 steps. ~3 minutes per try makes
        it viable. For final hero renders, swap to vanilla Hunyuan at 30 steps.
      </NoteBlock>
    </>
  )
}
