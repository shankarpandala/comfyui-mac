import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3PopularBases() {
  return (
    <>
      <p>
        For SD 1.5 finetuning, three families dominate. Each has a distinctive output style and a
        large LoRA ecosystem.
      </p>

      <h2>DreamShaper</h2>
      <ul>
        <li>Generalist; balanced between photoreal and stylized.</li>
        <li>Good prompt adherence — accepts longer descriptive prompts than the base SD 1.5.</li>
        <li>Latest version: DreamShaper 8 (2024).</li>
        <li>Hyper-VAE variant ships with both a baked VAE and Lightning-style few-step distillation.</li>
      </ul>

      <h2>Realistic Vision</h2>
      <ul>
        <li>Photoreal-focused; humans and architecture are its strengths.</li>
        <li>v6.0 is the current stable; v6.0 Hyper VAE is the recommended one for Mac (baked VAE + Lightning steps).</li>
        <li>Stricter prompting style — short noun phrases work best.</li>
      </ul>

      <h2>EpicRealism / Juggernaut SD1.5 / RevAnimated</h2>
      <ul>
        <li>EpicRealism — alternative photoreal base.</li>
        <li>Juggernaut SD1.5 — predecessor to the popular Juggernaut XL.</li>
        <li>RevAnimated — stylized, "vibrant illustration" feel.</li>
      </ul>

      <h2>Anime / illustration bases</h2>
      <ul>
        <li>Anything v3 / v4 / v5 — long-running anime base.</li>
        <li>MeinaMix — stylized anime.</li>
        <li>Counterfeit — softer anime aesthetic.</li>
      </ul>

      <h2>The "model collection" trap</h2>
      <NoteBlock title="Pick 3, delete the rest">
        It's easy to download 30 SD 1.5 finetunes and never use 25 of them. Pick one photoreal, one
        stylized, one specialty (anime / NSFW / niche) — that's enough. LoRAs let you change style
        without changing base.
      </NoteBlock>
    </>
  )
}
