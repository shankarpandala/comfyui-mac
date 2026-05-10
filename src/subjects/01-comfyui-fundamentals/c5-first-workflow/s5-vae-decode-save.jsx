import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S5VaeDecodeSave() {
  return (
    <>
      <p>
        KSampler emits a denoised LATENT. We need to convert that to RGB pixels and write them to
        disk. Two final nodes complete the workflow: VAEDecode and SaveImage.
      </p>

      <h2>1 — VAEDecode</h2>
      <p>Add a <strong>VAEDecode</strong> node. Wire:</p>
      <ul>
        <li>KSampler's <strong>LATENT</strong> → VAEDecode's <strong>samples</strong></li>
        <li>CheckpointLoader's <strong>VAE</strong> → VAEDecode's <strong>vae</strong></li>
      </ul>
      <p>Output: an IMAGE tensor of shape <code>[1, 512, 512, 3]</code>, values 0–1.</p>

      <h2>2 — SaveImage</h2>
      <p>Add a <strong>SaveImage</strong> node. Wire VAEDecode's IMAGE output to SaveImage's <strong>images</strong> input.</p>
      <p>Configure:</p>
      <ul>
        <li><code>filename_prefix</code>: <code>first-workflow</code> (or anything you like).</li>
      </ul>
      <p>Files land in <code>~/AI/ComfyUI/output/</code> as <code>first-workflow_00001_.png</code>, <code>_00002_</code>, etc.</p>

      <h2>3 — The complete graph</h2>
      <pre>{`CheckpointLoader ─MODEL─→ KSampler
                   │
                   ├─CLIP─→ CLIPTextEncode (positive) ─CONDITIONING─→ KSampler
                   │       └ CLIPTextEncode (negative) ─CONDITIONING─→ KSampler
                   │
                   └─VAE─────────────────────────────────────────→ VAEDecode

EmptyLatentImage ─LATENT─→ KSampler ─LATENT─→ VAEDecode ─IMAGE─→ SaveImage`}</pre>

      <h2>4 — Queue it</h2>
      <p>
        <code>Cmd-Enter</code>. The progress bar at the top of the canvas shows step-by-step progress
        through the sampler. After 4–8 seconds, an image appears in SaveImage's preview area, and a
        PNG lands in <code>output/</code>.
      </p>

      <h2>5 — Save the workflow</h2>
      <p>
        Click <strong>Save</strong> in the menu, name it <em>"01 - first SD1.5 t2i"</em>. We'll
        revisit it in chapter 6 when we cover the difference between browser-saved workflows and
        portable JSON exports.
      </p>

      <NoteBlock title="If you got an OOM here">
        At SD1.5 / 512×512 you should not OOM on a 24 GB Mac. If you did: you launched without
        <code>--force-fp16</code>, or another process is hogging memory. Activity Monitor → Memory →
        sort by Memory. Kill anything large you don't need, then relaunch ComfyUI with the flag.
      </NoteBlock>

      <h2>What you've actually learned</h2>
      <p>The five-node graph above contains every piece of every ComfyUI workflow:</p>
      <ul>
        <li><strong>Load</strong> (CheckpointLoader) — produces MODEL/CLIP/VAE.</li>
        <li><strong>Encode</strong> (CLIPTextEncode × 2) — STRING → CONDITIONING.</li>
        <li><strong>Initialize</strong> (EmptyLatentImage) — noise LATENT.</li>
        <li><strong>Sample</strong> (KSampler) — denoise LATENT.</li>
        <li><strong>Decode &amp; Save</strong> (VAEDecode + SaveImage) — LATENT → IMAGE → disk.</li>
      </ul>
      <p>
        Every recipe in this curriculum — SDXL, FLUX, video, talking head, the full HeyGen capstone —
        starts from this skeleton. Mastering it is the highest-leverage thing you can do in this
        subject.
      </p>
    </>
  )
}
