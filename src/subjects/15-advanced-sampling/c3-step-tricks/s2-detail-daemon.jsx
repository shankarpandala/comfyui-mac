import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2DetailDaemon() {
  return (
    <>
      <p>
        Detail Daemon adds high-frequency noise back into the latent at specific sampler steps.
        Counterintuitive but effective — gives the sampler more "texture material" to work with,
        producing sharper details than vanilla sampling.
      </p>

      <h2>The technique</h2>
      <ol>
        <li>At certain sampler steps (typically near the end), inject high-frequency noise into the latent.</li>
        <li>The noise gives the next step's denoiser more texture to refine.</li>
        <li>Result: outputs with sharper edges, more detail variation.</li>
      </ol>

      <h2>Custom node</h2>
      <p><code>ComfyUI-DetailDaemon</code> — install via Manager.</p>

      <h2>Parameters</h2>
      <ul>
        <li><strong>amount</strong>: how much extra noise (0.1–0.3 typical)</li>
        <li><strong>start, end</strong>: which sampler step range (0.5–0.95 typical — last half of sampling)</li>
        <li><strong>bias</strong>: shift toward early or late application</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Photoreal portraits — adds skin/fabric texture detail.</li>
        <li>Architectural / product shots — sharpens edges.</li>
        <li>Pairs well with Hyper-SDXL or low-step distillations to claw back detail.</li>
      </ul>

      <h2>What to avoid</h2>
      <ul>
        <li>Don't set amount too high (&gt; 0.5) — produces noisy/grainy outputs.</li>
        <li>Don't apply early in sampling (steps 0–0.3) — disrupts composition.</li>
        <li>Stylized / smooth aesthetic outputs (anime, watercolor) don't benefit and may look noisy.</li>
      </ul>

      <NoteBlock title="The 'detail polish' use">
        Detail Daemon is a tool for the final 5% of quality on photoreal hero shots. Default to no
        Detail Daemon; add it if your outputs need more sharpness specifically.
      </NoteBlock>
    </>
  )
}
