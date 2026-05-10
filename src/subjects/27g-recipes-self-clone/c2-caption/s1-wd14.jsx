import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Wd14() {
  return (
    <>
      <p>WD14 auto-tagger + manual cleanup for self-clone dataset captions.</p>

      <h2>WD14 in ComfyUI</h2>
      <ol>
        <li>Install <code>ComfyUI-WD14-Tagger</code> via Manager.</li>
        <li>Build a small workflow: LoadImage → <code>WD14 Tagger</code> → <code>SaveText</code>.</li>
        <li>Batch-run on all 80 photos.</li>
        <li>Output: a .txt per image with auto-tags.</li>
      </ol>

      <h2>Manual cleanup</h2>
      <p>Open each .txt, do these edits:</p>
      <ul>
        <li>Add your trigger word to the START of every caption (e.g., <code>ohwx man, [auto-tags]</code>).</li>
        <li>Remove tags describing your face/identity (we want LoRA to learn these from images, not have prompt control them).</li>
        <li>Keep tags describing variable things: outfit, background, pose.</li>
        <li>Remove obvious wrong tags from auto-tagger.</li>
      </ul>

      <h2>Time on M5 Pro</h2>
      <ul>
        <li>WD14 batch: ~5 min for 80 images.</li>
        <li>Manual cleanup: ~30-45 min for 80 captions.</li>
      </ul>

      <NoteBlock title="The 'short captions' alternative">
        For self-clone LoRAs, some trainers use very short captions: <code>ohwx man</code> and a
        3-word scene description. Less to caption; LoRA learns subject more strongly. Worth trying
        as a second training run.
      </NoteBlock>
    </>
  )
}
