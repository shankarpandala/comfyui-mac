import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2QueueAndHistory() {
  return (
    <>
      <p>
        ComfyUI runs everything through an asynchronous queue. The "Queue Prompt" button does not run
        immediately — it serializes your graph and adds it to a server-side FIFO. This is what lets
        you keep editing the canvas while a job runs.
      </p>

      <h2>The Queue panel</h2>
      <p>Top-right of the UI you'll find:</p>
      <ul>
        <li><strong>Queue Prompt</strong> — submit current graph to the back of the queue.</li>
        <li><strong>Queue Front</strong> — submit to the front (skip the line).</li>
        <li><strong>View Queue</strong> — see what's pending and what's running.</li>
        <li><strong>Cancel</strong> — abort the running job. Pending jobs stay queued.</li>
      </ul>

      <h2>Auto-Queue</h2>
      <p>
        Toggle <strong>Extra options → Auto Queue</strong> to make ComfyUI re-queue the graph as soon
        as the current run finishes. Combined with a fixed seed of <code>-1</code> (random), this is
        how you "shuffle" indefinitely. Combined with a fixed seed and a slowly-changing prompt, it's
        a poor man's animation.
      </p>

      <h2>Batch count vs batch size</h2>
      <p>Two distinct knobs that newcomers conflate:</p>
      <ul>
        <li><strong>Batch size</strong> (in EmptyLatentImage) — number of images generated in <em>one</em> sampler call. They share VRAM. On 24 GB Mac, SDXL batch_size 4 is borderline; FLUX batch_size 1 is the realistic ceiling.</li>
        <li><strong>Batch count</strong> (in the Queue header) — number of times the whole graph runs. Sequential, not parallel; each run gets a fresh seed.</li>
      </ul>

      <p>For variation, prefer batch <em>count</em> on Mac — it's slower but won't OOM.</p>

      <h2>History</h2>
      <p>
        Every queued prompt is stored. Open the <strong>History</strong> panel to see:
      </p>
      <ul>
        <li>The graph state at queue time.</li>
        <li>The output images (clickable to load back into the viewer).</li>
        <li>A <strong>Load</strong> button — restores the canvas exactly as it was when you pressed Queue.</li>
      </ul>

      <NoteBlock title="History persists across restarts">
        ComfyUI keeps the last N prompts in <code>output/</code> and serves them from disk. You can
        close ComfyUI, come back tomorrow, and reload yesterday's graph from the History panel.
      </NoteBlock>

      <h2>Saved Workflows</h2>
      <p>
        The browser also keeps a localStorage list of named saved workflows. Save a graph with a
        descriptive name (<strong>Save</strong> button) and reload it from <strong>Load</strong>.
        These are stored only in your browser — they do not move with you to another machine. For
        portable workflows, use Export / Import (covered in chapter 6).
      </p>

      <h2>The "Manager" replacement: ComfyUI Manager</h2>
      <p>
        Out of the box ComfyUI's queue UI is functional but spartan. <strong>ComfyUI Manager</strong>{' '}
        adds a much nicer queue+history panel along with custom-node management. We install it in
        chapter 7 of this subject.
      </p>
    </>
  )
}
