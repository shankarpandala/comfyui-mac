import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3BreakAndSchedule() {
  return (
    <>
      <p>
        Two advanced prompt techniques: <code>BREAK</code> for splitting a prompt across CLIP's
        77-token chunks deliberately, and prompt scheduling for changing the prompt over sampler steps.
      </p>

      <h2>BREAK</h2>
      <p>
        Inserting <code>BREAK</code> in your prompt forces a chunk boundary. ComfyUI ends the
        current 77-token chunk and starts a new one. Tokens in different chunks cannot attend to
        each other — useful when you have two semi-independent ideas you want kept separate.
      </p>
      <p>Example:</p>
      <pre>{`portrait of a knight, full plate armor, sword in hand
BREAK
fantasy castle in background, dramatic lighting`}</pre>
      <p>
        The knight description gets one chunk; the background gets its own. Without BREAK, all 77
        tokens compete for attention, and the background concepts would dilute the knight description.
      </p>

      <h2>Prompt scheduling</h2>
      <p>
        Prompt scheduling lets you change the prompt over the sampler's iterations. Syntax (requires{' '}
        <code>ComfyUI-Custom-Scripts</code> or similar):
      </p>
      <pre>{`a [cat:dog:0.5]
# steps 1–50%: "a cat"
# steps 50%–end: "a dog"`}</pre>
      <p>The number is the fraction of steps at which to swap. Useful patterns:</p>
      <ul>
        <li><code>[man:bear:0.3]</code> — start as man, transform to bear at 30%. Anchors composition early, swaps subject mid-sample.</li>
        <li><code>[detailed face::0.7]</code> — emphasize "detailed face" only for the first 70%. Empty replacement after.</li>
        <li><code>[:close-up:0.5]</code> — empty positive for first 50%, then add "close-up". Lets the model establish composition first.</li>
      </ul>

      <h2>Per-region prompts (with custom nodes)</h2>
      <p>
        For separate prompts in different image regions, use <code>ConditioningSetArea</code> or
        regional prompter custom nodes. This goes beyond chunking — different prompts apply to
        different spatial regions of the latent.
      </p>

      <NoteBlock title="Mac compatibility">
        BREAK works in vanilla ComfyUI. Prompt scheduling requires Custom-Scripts or similar
        custom-node packs (covered in Subject 01 / Chapter 7). All run fine on MPS — no CUDA-specific
        kernels involved.
      </NoteBlock>
    </>
  )
}
