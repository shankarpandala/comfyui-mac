import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Overview() {
  return (
    <>
      <p>
        Wan (Alibaba, 2024-2025) is a video model family targeting both quality and a smaller-model
        option. Two main variants: 14 B (high quality, slow) and 5 B (fast, lower quality but still
        strong). Comparable in spirit to Hunyuan but with the 5 B option giving Mac users a
        middle-ground.
      </p>

      <DefinitionBlock title="Wan video models">
        DiT-based video diffusion. Two parameter scales (14 B and 5 B) with separate UNets. Strong
        i2v support via the I2V-specific variants. Wan 2.2 added MoE (Mixture of Experts) to the
        14B model for more efficient inference.
      </DefinitionBlock>

      <h2>The Wan model variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Wan 2.1 T2V 14B</td><td>Largest text-to-video</td></tr>
          <tr><td>Wan 2.1 I2V 14B</td><td>Image-to-video</td></tr>
          <tr><td>Wan 2.1 I2V 14B 720p</td><td>Higher-resolution i2v variant</td></tr>
          <tr><td>Wan 2.1 Fun-Control</td><td>Pose / camera control variant</td></tr>
          <tr><td>Wan 2.1 VACE</td><td>Video-editing variant</td></tr>
          <tr><td>Wan 2.2 T2V 5B</td><td>Smaller, faster, fp16-friendly on Mac</td></tr>
          <tr><td>Wan 2.2 T2V 14B MoE</td><td>Mixture-of-Experts efficiency</td></tr>
        </tbody>
      </table>

      <h2>Sizes</h2>
      <ul>
        <li>Wan 14B fp16: ~28 GB. GGUF Q4_K_S: ~8 GB.</li>
        <li>Wan 5B fp16: ~10 GB. GGUF Q5_K_S: ~3.5 GB.</li>
      </ul>

      <h2>Native resolutions</h2>
      <ul>
        <li>720×480 — common t2v baseline</li>
        <li>832×480 — 16:9-ish</li>
        <li>480×832 — vertical/Reels</li>
        <li>720p (1280×720) — for the dedicated 720p i2v variant</li>
      </ul>

      <h2>Frame counts</h2>
      <p>4n+1 typical: 81 frames @ 16 fps ≈ 5 seconds.</p>

      <NoteBlock title="The Wan choice">
        For Mac: Wan 5B for fast video (no GGUF needed). Wan 14B Q4_K_S for highest quality. Wan
        I2V 14B specifically for animating stills with high fidelity. Subject 27d / 27f use Wan
        heavily for the AI clone capstone.
      </NoteBlock>
    </>
  )
}
