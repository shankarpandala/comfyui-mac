import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LargeBf16T5() {
  return (
    <>
      <p>SD3.5 Large with bf16 T5 (avoiding the fp8 trap). The Mac path to SD3.5 Large.</p>

      <h2>Files</h2>
      <ul>
        <li><code>sd3.5_large.safetensors</code> (bf16, ~16 GB) — UNet</li>
        <li><code>clip_l.safetensors</code> + <code>clip_g.safetensors</code> (fp16)</li>
        <li><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code> — GGUF T5 (NOT fp8!)</li>
      </ul>

      <h2>Settings</h2>
      <ul>
        <li>Steps: 28 · cfg: 4.5 · sampler: <code>dpmpp_2m</code> · scheduler: <code>sgm_uniform</code></li>
        <li>Launch flags: <code>--bf16-unet --lowvram --cpu-vae</code> (mandatory)</li>
      </ul>

      <h2>Wall time</h2>
      <p>~3 minutes per image on M5 Pro with --lowvram swap penalty.</p>

      <h2>Memory</h2>
      <p>~22 GB peak. Tight; don't run anything else.</p>

      <NoteBlock title="SD3.5 Medium is the simpler choice">
        For most Mac users, SD3.5 Medium (5 GB UNet) at fp16 with bundled encoders is faster, easier,
        and produces excellent results. Reach for Large only when you specifically need its
        bigger-brain composition handling.
      </NoteBlock>
    </>
  )
}
