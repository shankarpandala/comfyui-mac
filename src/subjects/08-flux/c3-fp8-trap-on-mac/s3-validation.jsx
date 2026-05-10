import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Validation() {
  return (
    <>
      <p>
        After substituting fp8 → GGUF, validate the swap worked correctly. Three quick checks.
      </p>

      <h2>1. The startup log</h2>
      <p>When ComfyUI loads the workflow, the terminal should print:</p>
      <pre>{`Loaded UNet (gguf): flux1-dev-Q5_K_S.gguf, dtype: torch.bfloat16
Loaded CLIP: t5-v1_1-xxl-encoder-Q5_K_M.gguf, dtype: torch.float16
Loaded VAE: ae.safetensors, dtype: torch.bfloat16`}</pre>
      <p>Key: <code>(gguf)</code> tag confirms GGUF loader was used. No fp8 mention. No errors.</p>

      <h2>2. The first sampler step</h2>
      <p>
        Queue Prompt. The progress bar should show steps ticking at ~2.5 s each on M5 Pro for FLUX
        Dev Q5_K_S at 1024×1024. If steps are taking 30+ seconds each, you've hit silent CPU
        fallback — recheck loaders.
      </p>

      <h2>3. Activity Monitor</h2>
      <ul>
        <li>ComfyUI memory usage: ~14 GB total.</li>
        <li>Memory pressure: green (not yellow).</li>
        <li>GPU usage during sampler: 80–100%.</li>
      </ul>
      <p>If GPU usage is low (10–30%) and CPU is pegged, you've hit fallback.</p>

      <h2>If validation fails</h2>
      <table>
        <thead><tr><th>Symptom</th><th>Cause</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td><code>NotImplementedError</code> at queue</td><td>Wrong loader (used fp8 loader)</td><td>Switch to UnetLoaderGGUF</td></tr>
          <tr><td>OOM at queue</td><td>Q8 too big, or fp16 T5 + many extras</td><td>Drop to Q5_K_S; GGUF the T5</td></tr>
          <tr><td>Sampler stuck on first step</td><td>Compiling MPS kernels (first run only)</td><td>Wait — second run will be fast</td></tr>
          <tr><td>Generations look wrong color/garbled</td><td>Wrong VAE or wrong CLIP type</td><td>Use FLUX VAE; type=flux on DualCLIPLoaderGGUF</td></tr>
          <tr><td>Sampler very slow despite green build</td><td>Other apps using memory</td><td>Quit Safari/Slack; restart ComfyUI</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The healthy log signature">
        Once you've successfully validated, that startup log signature ("Loaded UNet (gguf): ...,
        dtype: torch.bfloat16") becomes your sanity check. If you ever see fp8 in the log, you've
        wandered into the wrong loader.
      </NoteBlock>
    </>
  )
}
