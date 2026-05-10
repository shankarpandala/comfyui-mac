import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MochiMac() {
  return (
    <>
      <p>Mochi on Mac specifics. Workable but tight.</p>

      <h2>Recipe</h2>
      <ul>
        <li><strong>UNet</strong>: <code>mochi-1-Q4_K_S.gguf</code> via <code>city96/mochi-gguf</code></li>
        <li><strong>Text encoder</strong>: T5-XXL GGUF Q5</li>
        <li><strong>VAE</strong>: mochi-specific VAE (~600 MB)</li>
        <li><strong>Custom node</strong>: <code>ComfyUI-MochiWrapper</code></li>
      </ul>

      <h2>Settings</h2>
      <ul>
        <li>Resolution: 848×480 (native)</li>
        <li>Frames: 84 (~3.5s @ 24fps)</li>
        <li>Steps: 30</li>
        <li>cfg: 4.5</li>
      </ul>

      <h2>Wall time on M5 Pro</h2>
      <p>~10–15 min for 3.5-second clip with Q4_K_S.</p>

      <NoteBlock title="The 'try if curious' status">
        Mochi works on Mac but isn't a daily driver. Try it once to see its motion-physics quality.
        For ongoing work, default to LTX / Hunyuan / Wan.
      </NoteBlock>
    </>
  )
}
