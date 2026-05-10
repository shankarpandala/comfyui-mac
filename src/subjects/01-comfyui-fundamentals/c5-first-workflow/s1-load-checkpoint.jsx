import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LoadCheckpoint() {
  return (
    <>
      <p>
        We're going to build the canonical SD1.5 text-to-image workflow node by node. This chapter is
        the moment ComfyUI stops being abstract. By the end you will have generated a real image on
        your M5 Pro.
      </p>

      <h2>1 — Get a model file</h2>
      <p>For our first workflow we'll use SD1.5 — small (~2 GB), fast, and battle-tested. From a terminal:</p>
      <CommandBlock command="cd ~/AI/ComfyUI/models/checkpoints" />
      <CommandBlock
        command="curl -L -o v1-5-pruned-emaonly.safetensors https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.safetensors"
        label="Download SD1.5 checkpoint (~4 GB)"
      />

      <NoteBlock title="If that mirror is gone">
        Hugging Face occasionally takes down older repos. Equivalent SD1.5 weights are available from
        <code>stable-diffusion-v1-5/stable-diffusion-v1-5</code> and several CivitAI mirrors. Any
        <code>.safetensors</code> SD1.5 checkpoint will work.
      </NoteBlock>

      <h2>2 — Refresh ComfyUI's model list</h2>
      <p>
        With ComfyUI running, press <code>R</code> in the canvas, or click the refresh icon next to
        any <code>ckpt_name</code> dropdown. The new file should appear.
      </p>

      <h2>3 — Add the CheckpointLoader node</h2>
      <ol>
        <li>Double-click empty canvas, type <code>CheckpointLoader</code>, pick <strong>CheckpointLoaderSimple</strong>.</li>
        <li>Set <code>ckpt_name</code> to <code>v1-5-pruned-emaonly.safetensors</code>.</li>
      </ol>
      <p>This node has three outputs:</p>
      <ul>
        <li><strong>MODEL</strong> (purple) — the UNet wrapped in a ModelPatcher.</li>
        <li><strong>CLIP</strong> (yellow) — the text encoder.</li>
        <li><strong>VAE</strong> (red) — the autoencoder.</li>
      </ul>

      <h2>What just happened?</h2>
      <p>
        Adding a node only mutates the canvas — it didn't load anything yet. ComfyUI's lazy execution
        means the actual model load happens the first time you Queue Prompt and the runtime needs
        MODEL/CLIP/VAE outputs. After the first queue, the model stays loaded in memory until you
        change the dropdown or restart.
      </p>

      <h2>Memory on Mac</h2>
      <p>
        SD1.5 in fp16 is about 2 GB of UNet + 250 MB CLIP + 90 MB VAE — a comfortable footprint on
        24 GB unified memory. We will burn through that headroom in later chapters; for now we have
        plenty of room.
      </p>
    </>
  )
}
