import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3AestheticCond() {
  return (
    <>
      <p>
        SDXL conditions on more than just text. It also takes <em>aesthetic</em> and{' '}
        <em>crop</em> conditioning — micro-conditioning vectors that influence quality and framing
        without being part of the prompt. Most ComfyUI workflows accept the defaults silently;
        knowing they exist lets you tune for specific looks.
      </p>

      <h2>The four micro-conditions</h2>
      <ol>
        <li><strong>Original size</strong> (<code>orig_width</code>, <code>orig_height</code>) — what the model thinks the source image was.</li>
        <li><strong>Crop coordinates</strong> (<code>crop_w</code>, <code>crop_h</code>) — where the crop began in the original.</li>
        <li><strong>Target size</strong> (<code>target_width</code>, <code>target_height</code>) — what's being generated now.</li>
        <li><strong>Aesthetic score</strong> (positive) and (negative) — implicit quality knob.</li>
      </ol>

      <h2>How to use them</h2>
      <p>
        ComfyUI's <code>CLIPTextEncodeSDXL</code> exposes <code>width</code>, <code>height</code>,{' '}
        <code>crop_w</code>, <code>crop_h</code>, <code>target_width</code>, <code>target_height</code>{' '}
        as inputs. Defaults (matching your latent dims) are correct 99% of the time. Tweaks:
      </p>
      <ul>
        <li><strong>Higher orig size</strong> than target — model treats output as a downsample, biases toward sharper detail.</li>
        <li><strong>Crop coordinates &gt; 0</strong> — model treats output as a cropped portion of a larger image, biases toward edge-cropped framing.</li>
      </ul>

      <h2>Aesthetic score nodes</h2>
      <p>
        <code>CLIPTextEncodeSDXLRefiner</code> exposes <code>aesthetic_score</code> directly — a
        scalar (typically 6.0) that biases toward "high aesthetic" outputs as judged by the LAION
        aesthetic predictor. Higher values can produce more polished but less varied outputs.
      </p>

      <NoteBlock title="When defaults are wrong">
        For very tall (9:16 Reels) or very wide (21:9) outputs, the default micro-conditioning
        sometimes fights you. Setting <code>orig_size</code> to match (e.g., 768×1344 for 9:16) and
        keeping crop at 0,0 helps the model treat the output as native rather than as a cropped
        subset.
      </NoteBlock>
    </>
  )
}
