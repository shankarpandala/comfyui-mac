import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Regularization() {
  return (
    <>
      <p>
        Regularization images are "negative" training samples — pictures of "what your subject is
        NOT" that prevent the LoRA from drifting and over-fitting to your training set. Optional
        but useful, especially for self-clone LoRAs.
      </p>

      <h2>The problem regularization solves</h2>
      <p>
        Without regularization, training a "me" LoRA can leak — the model starts associating "person"
        in general with "you specifically." Every prompt with "person" produces you. Regularization
        anchors the model: "person" still means person; "my-trigger person" specifically means you.
      </p>

      <h2>What goes in the regularization set</h2>
      <ul>
        <li>For "me" LoRAs: 50–200 generic photos of people (NOT you), captioned with the same broad terms ("person", "man", "woman").</li>
        <li>For character LoRAs: photos of similar archetypes that aren't your character.</li>
        <li>For style LoRAs: usually skipped — style training is less prone to identity drift.</li>
      </ul>

      <h2>The 1:5 to 1:10 ratio</h2>
      <p>For every training image, include 5–10 regularization images. So 50 photos of you → 250–500 reg images. They train less heavily (lower learning rate effective via dataset weighting) but provide the anchor.</p>

      <h2>Where to source regularization images</h2>
      <ul>
        <li>Pexels / Unsplash — license-friendly stock photos.</li>
        <li>Generated images from the base model itself (use SDXL to generate "person, photo" 200 times).</li>
        <li>FFHQ subset (face dataset) for face LoRAs.</li>
      </ul>

      <h2>Captions for regularization images</h2>
      <p>
        Same caption format, but DO NOT include your trigger word. Just the broad description:
      </p>
      <pre>{`person standing in a park, daylight, casual outfit`}</pre>

      <h2>Folder structure (kohya_ss convention)</h2>
      <pre>{`my-lora-dataset/
├── 10_my-trigger person/        # 10 = repeat count
│   ├── img001.png
│   ├── img001.txt
│   └── ...
└── 1_person/                    # regularization set, 1x repeat
    ├── reg001.png
    ├── reg001.txt
    └── ...`}</pre>

      <NoteBlock title="When to skip regularization">
        For style and concept LoRAs, regularization is usually overkill. For self-clone, it's
        recommended. For character LoRAs, regularization helps prevent your character from
        contaminating other character generations.
      </NoteBlock>
    </>
  )
}
