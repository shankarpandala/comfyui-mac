import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Sd15Models() {
  return (
    <>
      <p>
        SD 1.5 has the largest ControlNet ecosystem of any base. The original Zhang et al. 2023
        ControlNets are SD 1.5; community has produced dozens of variants since.
      </p>

      <h2>Canonical SD 1.5 ControlNets (lllyasviel/sd-controlnet-*)</h2>
      <ul>
        <li><code>control_v11p_sd15_canny.pth</code></li>
        <li><code>control_v11f1p_sd15_depth.pth</code></li>
        <li><code>control_v11p_sd15_openpose.pth</code></li>
        <li><code>control_v11p_sd15_lineart.pth</code></li>
        <li><code>control_v11p_sd15s2_lineart_anime.pth</code></li>
        <li><code>control_v11p_sd15_scribble.pth</code></li>
        <li><code>control_v11f1e_sd15_tile.pth</code></li>
        <li><code>control_v11p_sd15_softedge.pth</code></li>
        <li><code>control_v11p_sd15_normalbae.pth</code></li>
        <li><code>control_v11p_sd15_seg.pth</code></li>
        <li><code>control_v11p_sd15_mlsd.pth</code></li>
        <li><code>control_v11e_sd15_inpaint.pth</code></li>
      </ul>

      <h2>File sizes</h2>
      <p>Each is ~1.4 GB at fp16. A complete SD 1.5 ControlNet collection is ~16 GB.</p>

      <h2>Naming convention</h2>
      <p>Decoding <code>control_v11p_sd15_canny.pth</code>:</p>
      <ul>
        <li><code>control_</code> — ControlNet prefix</li>
        <li><code>v11p</code> — version 1.1, "p" = product version (vs "e" experimental)</li>
        <li><code>sd15</code> — base model</li>
        <li><code>canny</code> — control type</li>
      </ul>

      <h2>Mac compatibility</h2>
      <p>SD 1.5 ControlNets all load and run on MPS without issue. ~1.5 GB memory each.</p>

      <NoteBlock title="What's still relevant in 2026">
        SDXL and FLUX ControlNets have largely overtaken SD 1.5 for new work. SD 1.5 ControlNets are
        useful when you're already on SD 1.5 (specific styles, character LoRAs) — the ecosystem is
        mature and stable. For new work on a fresh base, prefer SDXL Union (next section).
      </NoteBlock>
    </>
  )
}
