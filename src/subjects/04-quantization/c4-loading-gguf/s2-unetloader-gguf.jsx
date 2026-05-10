import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2UnetLoaderGguf() {
  return (
    <>
      <p>
        Concrete walkthrough of the FLUX Dev loading pipeline using GGUF. This pattern repeats for
        Hunyuan, Wan, and any other GGUF-distributed model — only the file names change.
      </p>

      <h2>Step 1 — UnetLoaderGGUF</h2>
      <p>Add the node and configure:</p>
      <ul>
        <li><strong>unet_name</strong>: <code>flux1-dev-Q5_K_S.gguf</code></li>
        <li>Wires output <strong>MODEL</strong> (purple) to the rest of the graph (KSampler, etc.).</li>
      </ul>

      <h2>Step 2 — DualCLIPLoaderGGUF</h2>
      <p>Add and configure:</p>
      <ul>
        <li><strong>clip_name1</strong>: <code>clip_l.safetensors</code> — the small CLIP-L. Stays as .safetensors fp16.</li>
        <li><strong>clip_name2</strong>: <code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code> — the big T5 in GGUF.</li>
        <li><strong>type</strong>: <code>flux</code> (other options: <code>sdxl</code>, <code>sd3</code>, <code>hunyuan_video</code>).</li>
      </ul>
      <p>
        The dropdown lists <em>both</em> .safetensors and .gguf files in <code>models/clip/</code>{' '}
        — you can mix-and-match, e.g., GGUF T5 and .safetensors CLIP-L. Output: <strong>CLIP</strong>{' '}
        (yellow).
      </p>

      <h2>Step 3 — VAELoader (standard)</h2>
      <ul>
        <li><strong>vae_name</strong>: <code>ae.safetensors</code> (or <code>ae.sft</code>).</li>
        <li>Output: <strong>VAE</strong> (red).</li>
      </ul>

      <h2>Step 4 — Connect to the rest</h2>
      <p>From here the workflow is identical to a standard FLUX workflow:</p>
      <ul>
        <li>UnetLoaderGGUF.MODEL → KSampler.model (or SamplerCustomAdvanced)</li>
        <li>DualCLIPLoaderGGUF.CLIP → CLIPTextEncode.clip (positive and negative)</li>
        <li>VAELoader.VAE → VAEDecode.vae</li>
      </ul>

      <h2>Common errors</h2>

      <h3>"unet_name not found"</h3>
      <p>
        File isn't in <code>models/unet/</code> or hasn't been refreshed. Press <code>R</code> on
        the canvas.
      </p>

      <h3>"CLIPLoader dropdown shows .gguf but DualCLIPLoaderGGUF doesn't"</h3>
      <p>
        Two different scan paths. <code>DualCLIPLoaderGGUF</code> looks in <code>models/clip/</code>;{' '}
        the standard <code>CLIPLoader</code> may scan additional paths from{' '}
        <code>extra_model_paths.yaml</code>. Place the .gguf in <code>models/clip/</code> for
        consistent behavior.
      </p>

      <h3>OOM during first load</h3>
      <p>
        Even GGUF Q5 is borderline if other apps are eating memory. Quit Safari/Chrome, restart
        ComfyUI, retry. Subject 02 / Chapter 5 has the full memory discipline.
      </p>

      <h3>Slow load</h3>
      <p>
        First load reads ~12 GB from disk + does compute-shader compilation. Subsequent loads are
        much faster (cached). External SSD adds ~5 s. If load time exceeds 30 s on internal SSD, you
        may be swapping — Activity Monitor will tell you.
      </p>

      <NoteBlock title="The mental model">
        UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader is the canonical Mac trio for FLUX, SD3, and
        Hunyuan/Wan video models. CheckpointLoaderSimple is for SD1.5 and SDXL only. Once that
        click happens, Mac diffusion gets a lot less mysterious.
      </NoteBlock>
    </>
  )
}
