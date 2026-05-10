import NoteBlock from '../../../components/content/NoteBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S2InstallingNodes() {
  return (
    <>
      <p>
        We will install five custom-node packages that are foundational for the rest of this
        curriculum. Each does a specific job; you'll meet them again in later subjects.
      </p>

      <h2>The five essentials</h2>
      <ol>
        <li><strong>ComfyUI-Manager</strong> — already installed in section 1.</li>
        <li><strong>ComfyUI-Custom-Scripts</strong> (a.k.a. pythongosssss) — quality-of-life UI improvements: lock-icon, image feed, autocomplete in prompt fields.</li>
        <li><strong>ComfyUI Impact Pack</strong> — Detailers, switches, iterative loops. Used heavily in upscaling and face-fix recipes.</li>
        <li><strong>ComfyUI ControlNet Auxiliary</strong> — Canny / Depth / OpenPose / Lineart preprocessors. Required for Subject 09.</li>
        <li><strong>ComfyUI-GGUF</strong> — UnetLoaderGGUF and DualCLIPLoaderGGUF. Required for Subject 04 and FLUX/Hunyuan/Wan on Mac.</li>
      </ol>

      <h2>Install via the Manager UI</h2>
      <ol>
        <li>Click <strong>Manager</strong> → <strong>Custom Nodes Manager</strong>.</li>
        <li>Search box: type each name above.</li>
        <li>Click <strong>Install</strong>. Wait a moment for the spinner to clear.</li>
      </ol>

      <h2>Restart ComfyUI</h2>
      <p>
        After installing custom nodes, click the <strong>Restart</strong> button at the top of the
        Manager panel. ComfyUI restarts itself and the new nodes appear in the node search palette.
      </p>

      <MacGotchaBlock title="Some nodes pull pip dependencies — watch the console">
        Custom nodes can declare extra Python deps in <code>requirements.txt</code>. ComfyUI Manager
        installs them via pip into your venv. Watch the terminal where ComfyUI runs — if a pip install
        fails (most common: a CUDA-only wheel like xformers), the node will crash on load with a
        cryptic error. Read the failure carefully.
      </MacGotchaBlock>

      <h2>Confirming installation</h2>
      <p>Open the node search palette and verify these nodes exist:</p>
      <ul>
        <li><code>UnetLoaderGGUF</code> (from ComfyUI-GGUF)</li>
        <li><code>FaceDetailer</code> (from Impact Pack)</li>
        <li><code>CannyEdgePreprocessor</code> (from ControlNet Auxiliary)</li>
      </ul>
      <p>If any are missing, the package failed to load. Open the terminal log, search for the package name, and read the error.</p>

      <NoteBlock title="Custom nodes by Discord/civitai recipe">
        When you download a recipe from this curriculum or elsewhere, the recipe's metadata names
        every custom-node package it requires. Drop the workflow on the canvas; if any node is red,
        click <strong>Manager → Install Missing Custom Nodes</strong> and accept.
      </NoteBlock>
    </>
  )
}
