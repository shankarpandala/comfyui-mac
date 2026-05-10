import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Rubric() {
  return (
    <>
      <p>Quality evaluation rubric — explicit criteria for "is this Reel good?" Used by LLM judges and human reviewers.</p>

      <h2>The rubric (1-10 each)</h2>
      <ul>
        <li><strong>Identity</strong> — does the AI clone look like you?</li>
        <li><strong>Lip-sync</strong> — does the mouth match the audio?</li>
        <li><strong>Pacing</strong> — does the rhythm feel right?</li>
        <li><strong>Hook</strong> — would viewers keep watching past 3s?</li>
        <li><strong>Coherence</strong> — does the message land?</li>
        <li><strong>Visual quality</strong> — sharp / artifact-free?</li>
        <li><strong>Audio quality</strong> — clean voice, balanced music?</li>
        <li><strong>Captions</strong> — accurate, readable?</li>
      </ul>

      <h2>Pass criteria</h2>
      <ul>
        <li>All scores ≥ 7 → pass.</li>
        <li>Any score &lt; 5 → fail; specific issue.</li>
        <li>Scores 5-6 → flag for human review.</li>
      </ul>

      <h2>Tracking over time</h2>
      <p>
        Log scores per Reel. Trend over weeks shows where pipeline is improving / regressing.
        Identity scores trending down? Time to retrain LoRA. Hook scores low? Update few-shot
        examples.
      </p>

      <NoteBlock title="The 'rubric is your QA' principle">
        Don't ship Reels without rubric pass. The 1 minute it takes saves you from posting bad
        content that hurts channel growth.
      </NoteBlock>
    </>
  )
}
