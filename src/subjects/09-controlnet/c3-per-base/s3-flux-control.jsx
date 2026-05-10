import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3FluxControl() {
  return (
    <>
      <p>
        FLUX has two paths for spatial control: <strong>community ControlNets</strong> (XLabs,
        InstantX) that stack on base FLUX, and <strong>dedicated control UNets</strong> (FLUX Canny,
        FLUX Depth — covered in Subject 08 / Chapter 6) that replace base FLUX entirely.
      </p>

      <h2>Community FLUX ControlNets</h2>

      <h3>XLabs FLUX ControlNets</h3>
      <ul>
        <li><code>flux-canny-controlnet-v3.safetensors</code> — ~1.5 GB</li>
        <li><code>flux-depth-controlnet-v3.safetensors</code> — ~1.5 GB</li>
        <li><code>flux-hed-controlnet-v3.safetensors</code> — soft edge variant</li>
      </ul>

      <h3>InstantX FLUX ControlNets</h3>
      <ul>
        <li><code>FLUX.1-dev-Controlnet-Union.safetensors</code> — Union model, ~6 GB. Multiple control types in one file.</li>
        <li>Various single-purpose models in <code>InstantX/FLUX.1-dev-Controlnet-*</code> repos.</li>
      </ul>

      <h2>Dedicated control UNets vs ControlNets</h2>
      <table>
        <thead>
          <tr><th>Approach</th><th>Pros</th><th>Cons</th></tr>
        </thead>
        <tbody>
          <tr><td>FLUX Canny/Depth UNet (Subject 08)</td><td>Tightest adherence; native</td><td>Replaces base FLUX; can't stack with other controls easily</td></tr>
          <tr><td>Community ControlNet</td><td>Stacks with base FLUX; multiple controls possible</td><td>Slightly looser adherence; extra memory</td></tr>
        </tbody>
      </table>

      <h2>Mac recommendation</h2>
      <ul>
        <li><strong>Single tight control</strong> (e.g., precise depth-driven recoloring): use FLUX Depth dedicated UNet.</li>
        <li><strong>Multi-control or want to keep base FLUX</strong>: use XLabs or InstantX community ControlNet.</li>
        <li><strong>Multi-control with low memory budget</strong>: InstantX Union (one file, many controls).</li>
      </ul>

      <h2>Memory math</h2>
      <p>FLUX Dev Q5_K_S (~8 GB) + GGUF T5 (~3.5 GB) + InstantX Union ControlNet (~6 GB at fp16, often available in fp8 — but won't load on Mac, so fp16 it is) + activations = ~20 GB. Tight; <code>--lowvram</code> helps.</p>

      <NoteBlock title="The Phase 5b recipe path">
        For the Phase 5b recipe subjects, we use community FLUX ControlNets (mostly InstantX Union)
        because they stack with PuLID, IP-Adapter, and LoRAs needed for the AI clone capstone. The
        dedicated control UNets are for specialty single-purpose use.
      </NoteBlock>
    </>
  )
}
