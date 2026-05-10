import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Captioning() {
  return (
    <>
      <p>
        Each training image needs a text caption. The captions teach the model the association
        between trigger words and visual concepts. Bad captions = bad LoRA, regardless of how good
        your images are.
      </p>

      <h2>The caption format</h2>
      <p>For each image <code>img001.png</code>, create <code>img001.txt</code> alongside it:</p>
      <pre>{`my-trigger-word, person standing in a park, daylight, casual outfit, smiling`}</pre>
      <p>
        First the trigger word, then a description of what's in the image. The trigger word is what
        you'll type at inference to invoke the LoRA.
      </p>

      <h2>Trigger word</h2>
      <ul>
        <li>Pick something unique that doesn't already mean anything to CLIP. Common patterns: <code>ohwx man</code>, <code>sks person</code>, your initials reversed.</li>
        <li>Avoid real names — CLIP knows them, you don't want LoRA fighting CLIP's existing concept.</li>
        <li>Use the same trigger across every caption in the dataset.</li>
      </ul>

      <h2>Auto-captioning tools on Mac</h2>
      <ul>
        <li><strong>WD14 Tagger</strong> — Booru-style tags, great for anime/illustration. Custom node in ComfyUI: <code>WD14Tagger</code>.</li>
        <li><strong>JoyTag</strong> — newer alternative, often more accurate.</li>
        <li><strong>BLIP / BLIP-2</strong> — natural-language captions; slower but works well for FLUX (which prefers prose captions).</li>
        <li><strong>Llava 13B (via Ollama)</strong> — slowest, best quality. Phase 7 LLMs can also caption.</li>
      </ul>

      <h2>Manual cleanup</h2>
      <p>Auto-captions need editing. Common cleanups:</p>
      <ul>
        <li>Add the trigger word to every caption.</li>
        <li>Remove auto-detected tags that describe what you DON'T want learned (e.g., "blurry" if a sample is slightly blurry — you don't want LoRA to learn blurry).</li>
        <li>Don't describe the trigger concept itself ("the unique chin shape" of you) — let the model figure that out from the trigger.</li>
        <li>Do describe what varies: outfit, background, pose.</li>
      </ul>

      <h2>The captioning principle</h2>
      <p>
        Caption what's <em>variable</em> between images, not what's <em>constant</em>. Variable
        things get learned as text-controllable. Constant things (your face, your hair, your style)
        get attached to the trigger word.
      </p>

      <NoteBlock title="The 'short caption' tactic">
        For self-clone LoRAs, some trainers swear by very short captions: just <code>my-trigger</code>
        + a 3–5 word description. The model learns the subject more strongly because no other text
        competes for attention. Worth trying.
      </NoteBlock>
    </>
  )
}
