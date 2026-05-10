import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Validation() {
  return (
    <>
      <p>
        Sample-during-training is the single most important quality control you can do. Without it,
        you train for 6 hours and discover the LoRA is broken. With it, you catch problems early and
        adjust.
      </p>

      <h2>Setting up validation samples</h2>
      <p>In your trainer config:</p>
      <ul>
        <li><strong>sample_every_n_steps</strong>: 250 (or every epoch for small datasets)</li>
        <li><strong>sample_prompts</strong>: 4–6 prompts that test different aspects of the LoRA:
          <pre>{`my-trigger person portrait, neutral expression, soft lighting
my-trigger person walking in a park, daylight
my-trigger person at a desk, warm indoor light, working on laptop
my-trigger person in formal attire, evening event, dramatic lighting`}</pre>
        </li>
      </ul>

      <h2>What to look for in samples</h2>

      <h3>Underfit (training too short)</h3>
      <ul>
        <li>Subject doesn't look like the target.</li>
        <li>Generic person with vague resemblance.</li>
        <li>→ Train more epochs.</li>
      </ul>

      <h3>Sweet spot</h3>
      <ul>
        <li>Subject is recognizable across all sample prompts.</li>
        <li>Variations work (different settings, outfits).</li>
        <li>Background and clothing follow prompt, not training data.</li>
      </ul>

      <h3>Overfit (training too long)</h3>
      <ul>
        <li>All outputs look like the training photos (same backgrounds, same outfits).</li>
        <li>Subject features get exaggerated or distorted.</li>
        <li>Prompt has less control — outputs ignore "in a coffee shop" and put the subject in their training-photo background.</li>
        <li>→ Use an earlier checkpoint snapshot.</li>
      </ul>

      <h2>The snapshot strategy</h2>
      <p>
        Save a checkpoint every 1–2 epochs. After training, test the last 4–5 checkpoints and pick
        the one with best generalization. Often it's not the final epoch — overfit checkpoints come
        from late in training.
      </p>

      <h2>Sample compute cost on Mac</h2>
      <p>
        4 samples @ 1024×1024 SDXL × 25 steps = ~70 seconds per validation cycle. At every 250 steps
        in a 2500-step run = 10 cycles × 70 s = ~12 extra minutes. Cheap insurance.
      </p>

      <NoteBlock title="The 'sweet spot' usually arrives early">
        For self-clone LoRAs, the sweet spot is often around epoch 6-8 of 10 planned epochs. The
        last 2 epochs often slide into overfit. Always save snapshots; test multiple to find the
        actual best.
      </NoteBlock>
    </>
  )
}
