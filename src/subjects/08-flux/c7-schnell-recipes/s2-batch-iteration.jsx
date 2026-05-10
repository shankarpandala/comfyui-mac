import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2BatchIteration() {
  return (
    <>
      <p>
        FLUX Schnell at 4 steps + ~8 s wall time means you can iterate prompts in near-real-time on
        Mac. Combined with Auto Queue and a randomized seed, it's a "shuffle the dice" exploration
        loop.
      </p>

      <h2>The iteration loop</h2>
      <ol>
        <li>Build a base FLUX Schnell workflow.</li>
        <li>Set <code>seed</code> mode to <strong>randomize</strong>.</li>
        <li>Toggle Auto Queue (Extra Options → Auto Queue).</li>
        <li>Watch outputs land every ~8 s.</li>
        <li>When something good appears, click it in History and lock the seed.</li>
        <li>Switch UNet to FLUX Dev for the final hero render at 20 steps.</li>
      </ol>

      <h2>Batch count vs batch size for Schnell on Mac</h2>
      <ul>
        <li><strong>batch_size = 1</strong>: only choice on 24 GB Mac for FLUX. Activations grow too fast to batch.</li>
        <li><strong>batch count = N</strong>: the queue runs N times. With Auto Queue, this is "infinite mode."</li>
      </ul>

      <h2>Speeding up iteration further</h2>
      <ul>
        <li>Lock the prompt encoders if iterating on seed only (right-click → Bypass on the CLIPTextEncode after first run; ComfyUI caches their output).</li>
        <li>Use 768×768 instead of 1024 for ideation — drops wall time by ~30%.</li>
        <li>Drop to Q4_K_S UNet for ~10% speedup at quality cost.</li>
      </ul>

      <h2>Persistent model cache</h2>
      <p>
        ComfyUI keeps the loaded FLUX model in memory across queue runs. First Schnell render is
        slow (load + JIT compile, ~30 s); subsequent renders are 8 s. Don't restart ComfyUI between
        iterations.
      </p>

      <NoteBlock title="The 'productivity hack'">
        Set Auto Queue + randomized seed Schnell going while you do other things. Come back to a
        folder of 50 variations. Pick the one you like; lock seed; switch to Dev for the polished
        version. This pattern cuts FLUX iteration cost in half.
      </NoteBlock>
    </>
  )
}
