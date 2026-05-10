import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1RealEsrgan() {
  return (
    <>
      <p>
        ESRGAN (Enhanced Super-Resolution GAN) is the workhorse pixel upscaler. Many variants exist;
        Real-ESRGAN family is the most-used. Fast, no diffusion, runs in seconds even at 4K.
      </p>

      <h2>Popular Real-ESRGAN models</h2>
      <ul>
        <li><strong>RealESRGAN_x4plus</strong> — generalist 4× upscaler, good photoreal detail.</li>
        <li><strong>RealESRGAN_x4plus_anime_6B</strong> — tuned for anime/illustration; preserves line work.</li>
        <li><strong>4x-UltraSharp</strong> — community variant; sharper output, sometimes too aggressive.</li>
        <li><strong>4x_NMKD-Siax_200k</strong> — softer detail, good for portrait/skin.</li>
        <li><strong>4x_RealisticRescaler_100000_G</strong> — modern photoreal upscaler.</li>
      </ul>

      <h2>File placement</h2>
      <p>Drop in <code>models/upscale_models/</code>. ComfyUI's <code>UpscaleModelLoader</code> picks them up.</p>

      <h2>The simplest upscale workflow</h2>
      <ol>
        <li><code>VAEDecode</code> → IMAGE</li>
        <li><code>UpscaleModelLoader</code> → upscale model</li>
        <li><code>ImageUpscaleWithModel</code> → IMAGE in, upscaled IMAGE out (4× by default)</li>
        <li><code>SaveImage</code></li>
      </ol>

      <h2>Wall time on M5 Pro</h2>
      <p>4× upscale of 1024×1024 → 4096×4096: ~3–5 seconds.</p>

      <h2>Why ESRGAN is fast</h2>
      <ul>
        <li>Pure CNN, no iterative sampling.</li>
        <li>One forward pass per image (or per tile for huge inputs).</li>
        <li>No text encoder, no CFG, no noise scheduling.</li>
      </ul>

      <NoteBlock title="The default upscaler">
        For Mac workflows, RealESRGAN_x4plus or 4x-UltraSharp covers ~80% of upscale needs. Add
        anime variant if doing anime work. Skip the rest unless you find a specific model that
        excels at your domain.
      </NoteBlock>
    </>
  )
}
