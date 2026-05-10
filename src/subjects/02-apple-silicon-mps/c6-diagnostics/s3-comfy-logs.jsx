import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3ComfyLogs() {
  return (
    <>
      <p>
        ComfyUI's terminal output is the third diagnostic surface. Most issues — wrong dtype, missing
        custom node, OOM, sampler stalls — leave clues here. Reading the log is a learnable skill.
      </p>

      <h2>The boot sequence</h2>
      <p>A healthy startup looks like:</p>
      <pre>{`** ComfyUI startup time: 2026-05-10 09:00:00.000000
** Platform: Darwin
** Python version: 3.12.x
** Pytorch version: 2.5.x
** xformers version: N/A          <-- expected on Mac
Total VRAM 24576 MB, total RAM 24576 MB
Set vram state to: NORMAL_VRAM
Device: mps
Using pytorch cross attention
...
### Loading: ComfyUI-Manager (V…)
### Loading: ComfyUI-GGUF (V…)
...
Starting server
To see the GUI go to: http://127.0.0.1:8188`}</pre>

      <p>Look for these specific lines:</p>
      <ul>
        <li><strong><code>Device: mps</code></strong> — confirms PyTorch found the GPU. If <code>cpu</code>: PyTorch broken.</li>
        <li><strong><code>Set vram state to: NORMAL_VRAM</code></strong> — the vram mode (chapter 5).</li>
        <li><strong><code>Using pytorch cross attention</code></strong> — the Mac-friendly attention path.</li>
        <li><strong><code>Total VRAM 24576 MB</code></strong> — ComfyUI's view of memory. Matches your unified memory.</li>
        <li><strong>Custom-node load lines</strong> — each successfully loaded package prints. A failure prints a red traceback; scroll up to find what broke.</li>
      </ul>

      <h2>Per-prompt output</h2>
      <p>When you Queue Prompt:</p>
      <pre>{`got prompt
Requested to load BaseModel
loaded partially: ...
[loras applied]
100%|██████████████| 20/20 [00:08<00:00, 2.5it/s]
Prompt executed in 9.47 seconds`}</pre>

      <ul>
        <li><strong>"Requested to load …"</strong> — the model is being moved to MPS. First run only; subsequent runs are cached.</li>
        <li><strong>"loaded partially"</strong> — lowvram mode is offloading parts. Expected with <code>--lowvram</code>; concerning if you didn't ask for it.</li>
        <li><strong>The progress bar's it/s</strong> — your real performance number. Compare against the reference table in chapter 9.</li>
      </ul>

      <h2>Common error patterns</h2>

      <h3>fp8 attempt</h3>
      <pre>{`RuntimeError: MPS backend doesn't support float8_e4m3fn dtype.`}</pre>
      <p>→ chapter 3. Substitute the model.</p>

      <h3>Missing custom node</h3>
      <pre>{`When loading the graph, the following node types were not found:
  UnetLoaderGGUF
Nodes that have failed to load will show as red on the graph.`}</pre>
      <p>→ ComfyUI Manager → Install Missing Custom Nodes.</p>

      <h3>OOM</h3>
      <pre>{`RuntimeError: MPS backend out of memory (MPS allocated: 23.20 GB,
other allocations: 0.50 GB, max allowed: 24.00 GB).`}</pre>
      <p>→ chapter 5. Try lowvram, smaller GGUF, or reduce resolution.</p>

      <h3>Silently slow</h3>
      <p>Not an error in the log. Look for the <code>it/s</code> in the progress bar — if it's 5–10× lower than expected, you're in CPU fallback territory. Profile per chapter 6 / section 1.</p>

      <NoteBlock title="Pipe the log to a file">
        For long renders, redirect the log: <code>./start.sh 2&gt;&amp;1 | tee comfy.log</code>. Then
        you can <code>grep</code> for errors after the fact without scroll-back limitations.
      </NoteBlock>
    </>
  )
}
