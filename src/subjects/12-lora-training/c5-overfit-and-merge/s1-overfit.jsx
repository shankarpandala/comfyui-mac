import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Overfit() {
  return (
    <>
      <p>
        Overfit is the most common LoRA training failure. The model learns your training photos so
        specifically that it can't generalize to new prompts. Detection is easy if you know what to
        look for.
      </p>

      <h2>Overfit symptoms</h2>
      <ul>
        <li><strong>Background replication</strong> — outputs include backgrounds from your training photos even when prompt says otherwise.</li>
        <li><strong>Outfit replication</strong> — same shirt as training photo no matter what prompt asks.</li>
        <li><strong>Pose stiffness</strong> — limited pose variety; model only knows poses it saw.</li>
        <li><strong>Style collapse</strong> — every generation looks like a copy of one training photo.</li>
        <li><strong>Reduced prompt control</strong> — "in a coffee shop" gets ignored.</li>
      </ul>

      <h2>Causes</h2>
      <ul>
        <li>Too many training epochs.</li>
        <li>Learning rate too high.</li>
        <li>rank too high for dataset size (rank 64 LoRA on 30 images = overfit).</li>
        <li>Captions describe variable things as constant (don't caption your training-photo background as "neutral background").</li>
        <li>No regularization images.</li>
      </ul>

      <h2>Fixes</h2>
      <ol>
        <li><strong>Use an earlier checkpoint snapshot</strong> — usually the simplest fix. Test snapshots from epoch 5, 6, 7 vs the final epoch 10.</li>
        <li><strong>Lower learning rate</strong> next training (5e-5 instead of 1e-4).</li>
        <li><strong>Reduce rank</strong> (16 → 8 for small datasets).</li>
        <li><strong>Add regularization images</strong>.</li>
        <li><strong>Better captions</strong> — describe variable things explicitly.</li>
      </ol>

      <h2>The "lower the strength" cheap fix</h2>
      <p>
        At inference, applying an overfit LoRA at strength 0.6 instead of 1.0 sometimes recovers
        usable behavior — the LoRA's overfit influence is diluted. Not a great fix; better to
        retrain.
      </p>

      <NoteBlock title="The fast detection trick">
        Generate one sample with prompt "{trigger} person on a beach in tropical clothing." If the
        output is your training-photo backdrop in your training-photo outfit, you've overfit. If
        it's a beach with you in tropical clothing, you've trained well.
      </NoteBlock>
    </>
  )
}
