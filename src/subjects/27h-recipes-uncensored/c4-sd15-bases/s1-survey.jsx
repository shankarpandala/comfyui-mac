import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Survey() {
  return (
    <>
      <p>SD 1.5 uncensored bases survey. Smaller, faster than SDXL; older ecosystem but still useful.</p>

      <h2>Notable bases</h2>
      <ul>
        <li>RealisticVision V6.0 (B1) — photoreal SD1.5 base, semi-uncensored.</li>
        <li>EpicRealism — alternative photoreal.</li>
        <li>NeverEndingDream — stylized.</li>
        <li>MeinaMix / Counterfeit — anime SD1.5 bases.</li>
      </ul>

      <h2>When SD1.5 wins</h2>
      <ul>
        <li>Tight memory budget — SD1.5 + LoRA stack uses ~3 GB total vs SDXL's ~10 GB.</li>
        <li>Niche character LoRAs that exist only on SD1.5.</li>
        <li>Faster iteration (3 s/image vs 17 s on SDXL).</li>
      </ul>

      <h2>When SD1.5 loses</h2>
      <ul>
        <li>Above 768 resolution — composition breaks.</li>
        <li>Modern photoreal quality — SDXL bases are noticeably better.</li>
        <li>Prompt complexity — SD1.5 ignores long prompts.</li>
      </ul>

      <NoteBlock title="The 'legacy but useful' status">
        SD1.5 is largely superseded by SDXL/FLUX in 2026. Worth keeping a SD1.5 base around for
        specific niche LoRAs but not the default.
      </NoteBlock>
    </>
  )
}
