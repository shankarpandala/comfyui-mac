import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StrengthAndRange() {
  return (
    <>
      <p>
        Two knobs control how strongly a ControlNet steers the output: <strong>strength</strong>{' '}
        (how big the residuals are) and <strong>start/end range</strong> (which sampler steps the
        ControlNet is active for). Together they're the difference between "ControlNet exactly
        replicates the input" and "ControlNet softly suggests."
      </p>

      <h2>Strength</h2>
      <ul>
        <li><strong>0.0</strong> — ControlNet off (residuals × 0).</li>
        <li><strong>0.5</strong> — soft guidance; output follows the structure but has freedom.</li>
        <li><strong>1.0</strong> — strong guidance; output adheres tightly. Default.</li>
        <li><strong>1.5</strong> — over-strong; can produce artifacts.</li>
      </ul>

      <h2>Start/end range</h2>
      <p>
        Sampler steps go from 0 (full noise) to 1 (clean). ControlNet's start/end define a fraction
        of that range during which residuals are applied.
      </p>
      <ul>
        <li><strong>start=0, end=1</strong> — ControlNet active throughout. Default.</li>
        <li><strong>start=0, end=0.5</strong> — ControlNet active for first half. Good for "establish composition, then let the model improvise details."</li>
        <li><strong>start=0.3, end=1</strong> — ControlNet inactive early. Lets the model establish coarse composition freely, then constrain finer details.</li>
        <li><strong>start=0.5, end=0.7</strong> — ControlNet active in a narrow middle band. Niche use; usually for refining specific structures.</li>
      </ul>

      <h2>The Apply ControlNet node</h2>
      <p>
        ComfyUI's <code>ControlNetApplyAdvanced</code> node has these inputs:
      </p>
      <ul>
        <li><code>positive</code> + <code>negative</code> — conditioning to apply control to.</li>
        <li><code>control_net</code> — loaded ControlNet model.</li>
        <li><code>image</code> — preprocessed control image (Canny edges, depth map, etc).</li>
        <li><code>strength</code> — 0.0–1.5+.</li>
        <li><code>start_percent</code>, <code>end_percent</code> — 0.0–1.0.</li>
      </ul>

      <NoteBlock title="The workflow tuning order">
        First get a baseline image without ControlNet. Then add ControlNet at strength 1.0, end 1.0
        — see if it works. If too rigid, drop strength to 0.7 or end to 0.5. If too loose, increase
        strength toward 1.2.
      </NoteBlock>
    </>
  )
}
