import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S1MusicgenMac() {
  return (
    <>
      <p>
        MusicGen (Meta, 2023) is the standard open-source music generation model. Transformer-based
        on Encodec tokens. Apple maintains an MLX port for fast Mac inference; the transformers
        version also works on MPS.
      </p>

      <h2>Model variants</h2>
      <ul>
        <li><code>facebook/musicgen-small</code> (~300M) — fastest, lower quality</li>
        <li><code>facebook/musicgen-medium</code> (~1.5B) — recommended Mac default</li>
        <li><code>facebook/musicgen-large</code> (~3.3B) — highest quality</li>
        <li><code>facebook/musicgen-melody</code> — accepts melody conditioning</li>
      </ul>

      <h2>Mac install (MLX path)</h2>
      <CommandBlock command="pip install mlx mlx-audio" />
      <CommandBlock command='mlx_audio.tts.musicgen "upbeat electronic dance, 128 BPM" --output music.wav' />

      <h2>Mac install (transformers path)</h2>
      <CommandBlock command="pip install transformers torchaudio" />
      <p>Then use the standard <code>AudioCraftLoader</code> ComfyUI node.</p>

      <h2>Mac performance</h2>
      <ul>
        <li>MLX MusicGen Medium: ~30-45 seconds for 10 seconds of audio.</li>
        <li>Transformers MusicGen Medium: ~60-90 seconds for the same.</li>
        <li>MLX is ~2× faster on Apple Silicon.</li>
      </ul>

      <h2>ComfyUI integration</h2>
      <p>
        ComfyUI has community nodes for MusicGen. For Phase 7 capstone, we run MusicGen as a
        background MLX server (Subject 35 / Chapter 1 pattern) and call it from ComfyUI via HTTP.
      </p>

      <NoteBlock title="MusicGen vs Stable Audio">
        MusicGen excels at music with structure (chords, rhythm). Stable Audio Open is more
        general-purpose (sound effects, ambient). For background music in Reels: MusicGen Medium.
      </NoteBlock>
    </>
  )
}
