import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LineartCn() {
  return (
    <>
      <p>Rotoscope-style vid2vid — Lineart ControlNet per frame. Result: clean illustrated version of input footage.</p>

      <h2>Recipe</h2>
      <ol>
        <li>VHS_LoadVideo → input clip.</li>
        <li><code>LineArtPreprocessor</code> (or AnimeLineArtPreprocessor) on batch.</li>
        <li>SDXL load + AnimateDiff (or just SDXL per-frame for max control).</li>
        <li>ControlNet Lineart ApplyAdvanced, strength 0.9.</li>
        <li>CLIPTextEncode → "anime illustration", "watercolor", "ink drawing", etc.</li>
        <li>KSampler with denoise 1.0 (full regen, controlled by lineart).</li>
      </ol>

      <h2>Wall time</h2>
      <p>~3 min for 16-frame AnimateDiff version on M5 Pro.</p>

      <h2>Why lineart works for rotoscope</h2>
      <ul>
        <li>Lineart preserves silhouette + line work — the key visual cues.</li>
        <li>Throws away color and texture — model has freedom to repaint.</li>
        <li>Result feels like rotoscoped animation.</li>
      </ul>

      <NoteBlock title="The 'animate your real video' workflow">
        This is the rotoscope-style transformation. Pair with a character LoRA (your AI clone or
        specific character) for "make me into an anime character of myself in this clip."
      </NoteBlock>
    </>
  )
}
