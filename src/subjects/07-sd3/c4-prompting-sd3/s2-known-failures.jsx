import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2KnownFailures() {
  return (
    <>
      <p>
        SD3 launched with some well-publicized problems. SD3.5 fixed most. Knowing the lingering
        failure modes saves a lot of "why is this image so weird" debugging.
      </p>

      <h2>SD3 (original release) — what was broken</h2>
      <ul>
        <li><strong>Anatomy on humans</strong> — particularly people lying down. Famously bad. Memed widely.</li>
        <li><strong>Hands</strong> — even worse than SD1.5 in some cases.</li>
        <li><strong>Skin texture</strong> — plasticky look on photoreal portraits.</li>
      </ul>

      <h2>SD3.5 fixes</h2>
      <ul>
        <li>Anatomy mostly fixed; hands competitive with SDXL.</li>
        <li>Skin much improved.</li>
        <li>Text rendering even better.</li>
      </ul>

      <h2>Lingering SD3.5 issues</h2>
      <ul>
        <li><strong>Tiny artifacts on faces</strong> at extreme aspect ratios.</li>
        <li><strong>Less stylistic range</strong> than SDXL — fewer "looks". Particularly weak on illustration vs SDXL+Pony.</li>
        <li><strong>Smaller LoRA ecosystem</strong> than SDXL — community support is growing but still thin.</li>
        <li><strong>License complexity</strong> — Stability's commercial-use terms are stricter than SDXL's.</li>
      </ul>

      <h2>When SD3.5 wins clearly</h2>
      <ul>
        <li>Text-in-image (signs, posters, UI).</li>
        <li>Long natural-language prompts.</li>
        <li>Complex multi-element compositions.</li>
        <li>Novel concept compositions where SDXL would lose track.</li>
      </ul>

      <h2>When SDXL wins clearly</h2>
      <ul>
        <li>Anime/illustration (Pony, Illustrious dominate this niche).</li>
        <li>Specific photoreal styles (Juggernaut XL).</li>
        <li>Tight memory budget without GGUF gymnastics.</li>
        <li>Need any specific community LoRA.</li>
      </ul>

      <NoteBlock title="The pragmatic stance">
        On Mac, SDXL + Lightning + Pony/Juggernaut covers ~85% of image needs faster and easier
        than SD3.5 Medium. Reach for SD3.5 specifically when you need text-in-image or natural-language
        prompt adherence. FLUX (next subject) ate much of SD3.5's mindshare.
      </NoteBlock>
    </>
  )
}
