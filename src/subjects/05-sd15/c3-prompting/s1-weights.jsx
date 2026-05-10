import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Weights() {
  return (
    <>
      <p>
        ComfyUI's CLIPTextEncode supports parenthesis-based weight syntax. Wrap a phrase in parens
        to amplify or diminish its influence.
      </p>

      <h2>The syntax</h2>
      <table>
        <thead><tr><th>Syntax</th><th>Effective weight</th></tr></thead>
        <tbody>
          <tr><td><code>cat</code></td><td>1.0</td></tr>
          <tr><td><code>(cat)</code></td><td>1.1</td></tr>
          <tr><td><code>((cat))</code></td><td>~1.21</td></tr>
          <tr><td><code>(cat:1.5)</code></td><td>1.5 explicit</td></tr>
          <tr><td><code>[cat]</code></td><td>~0.91</td></tr>
          <tr><td><code>(cat:0.5)</code></td><td>0.5 explicit</td></tr>
        </tbody>
      </table>

      <h2>How weights work mechanically</h2>
      <p>
        ComfyUI multiplies the corresponding token's CLIP embedding by the weight before passing it
        to the UNet's cross-attention. A weight of 1.5 means the token's vector is 1.5× longer; the
        UNet's attention treats it as proportionally more important.
      </p>

      <h2>Common patterns</h2>
      <ul>
        <li><code>(masterpiece:1.2), (best quality:1.1), photo of a cat</code> — anime/quality booster pattern.</li>
        <li><code>portrait, (sharp focus:1.3), (depth of field:1.2)</code> — photographic emphasis.</li>
        <li><code>[blurry]</code> as a "soft negative" inside the positive prompt.</li>
      </ul>

      <h2>Weight bounds</h2>
      <ul>
        <li>1.0 baseline.</li>
        <li>1.0–1.3 — useful range for emphasis without distortion.</li>
        <li>1.4–1.6 — strong push; can warp composition.</li>
        <li>1.7+ — usually breaks; produces oversaturated or fragmented outputs.</li>
        <li>0.5–0.9 — useful for de-emphasis; useful in combination with high CFG.</li>
      </ul>

      <NoteBlock title="The diminishing returns rule">
        Going from 1.0 → 1.3 has more effect than 1.3 → 1.6. Beyond 1.5, you usually want to add
        the concept to your negative prompt's opposite instead of cranking the positive.
      </NoteBlock>
    </>
  )
}
