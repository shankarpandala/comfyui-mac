import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Plus() {
  return (
    <>
      <p>
        IP-Adapter Plus is the workhorse general-purpose image-prompt adapter. Use it when you want
        the reference image to influence style, composition, color, and content broadly — but
        you're not specifically targeting face identity preservation.
      </p>

      <h2>Files</h2>
      <ul>
        <li><strong>IP-Adapter Plus SD15</strong>: <code>ip-adapter-plus_sd15.safetensors</code> (~150 MB)</li>
        <li><strong>IP-Adapter Plus SDXL</strong>: <code>ip-adapter-plus_sdxl_vit-h.safetensors</code> (~700 MB)</li>
        <li><strong>IP-Adapter Plus Face SD15</strong>: <code>ip-adapter-plus-face_sd15.safetensors</code> — face-specialized but not as strong as FaceID</li>
      </ul>

      <h2>Recipe (SDXL)</h2>
      <ol>
        <li>Standard SDXL load.</li>
        <li><code>IPAdapterUnifiedLoader</code> → preset: <code>PLUS (high strength)</code>.</li>
        <li><code>LoadImage</code> → reference image.</li>
        <li><code>IPAdapter</code> node → wire MODEL, IPADAPTER, image, weight.</li>
        <li>Output replaces MODEL going into KSampler.</li>
      </ol>

      <h2>The weight knob</h2>
      <ul>
        <li><strong>0.0</strong> — no influence.</li>
        <li><strong>0.5</strong> — moderate; reference is a hint.</li>
        <li><strong>0.8</strong> — strong; reference dominates content/style.</li>
        <li><strong>1.0</strong> — maximum; can over-cook outputs.</li>
      </ul>

      <h2>Weight types</h2>
      <p>
        IPAdapter node has a <code>weight_type</code> dropdown: <code>standard</code>, <code>prompt is more important</code>,
        <code>style transfer</code>. Each adjusts how the IP signal blends with the text prompt.
      </p>
      <ul>
        <li><strong>standard</strong> — equal weight; default.</li>
        <li><strong>prompt is more important</strong> — text wins ties; for "use this reference's style but follow my prompt".</li>
        <li><strong>style transfer</strong> — emphasize style features over content features.</li>
      </ul>

      <NoteBlock title="The composition vs style choice">
        For "I want a portrait in this color palette" use <code>style transfer</code>. For "I want
        the same person with a different background" use FaceID Plus v2 (next section). For "I want
        this exact photo recomposed slightly" use <code>standard</code> at weight 0.8.
      </NoteBlock>
    </>
  )
}
