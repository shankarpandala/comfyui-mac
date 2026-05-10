import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Expressions() {
  return (
    <>
      <p>
        Expression variety matters because LoRA learns "your range" from the dataset. Limited range
        → outputs look stiff. Wide range → outputs feel alive.
      </p>

      <h2>Expression checklist</h2>
      <ul>
        <li><strong>Neutral</strong> (10 photos) — default expression, mouth closed.</li>
        <li><strong>Slight smile</strong> (5 photos) — lips closed but corners up.</li>
        <li><strong>Open smile</strong> (5 photos) — teeth showing, full smile.</li>
        <li><strong>Talking</strong> (10 photos) — capture during natural conversation, mouth in various positions.</li>
        <li><strong>Thoughtful</strong> (3 photos) — slight frown, head tilted.</li>
        <li><strong>Surprised / wide-eyed</strong> (3 photos) — eyebrows raised.</li>
        <li><strong>Laughing</strong> (3 photos) — exaggerated mouth shape.</li>
      </ul>

      <h2>Eye direction variety</h2>
      <ul>
        <li>Looking straight at camera (most photos).</li>
        <li>Looking slightly off-camera (5 photos) — adds candid feel.</li>
        <li>Looking down / up (3 each) — useful for varied scenes.</li>
      </ul>

      <h2>Capture during conversation</h2>
      <p>
        Have a friend talk to you while a tripod-mounted phone takes burst shots. You'll naturally
        produce varied expressions. Discard blurry shots; keep ~10 from a 5-minute conversation.
      </p>

      <h2>What NOT to capture</h2>
      <ul>
        <li>Heavy makeup variations — model gets confused about your "base look".</li>
        <li>Different hairstyles in same dataset — pick one consistent style; train hair-variant LoRAs separately if needed.</li>
        <li>Different facial hair — same; lock one style.</li>
      </ul>

      <NoteBlock title="The expression payoff">
        With expression variety, your AI clone smiles when text says "happy", looks thoughtful for
        "considering", lights up for "excited". Without variety, all outputs are slightly stiff
        neutral. The 5 minutes spent on capturing varied expressions pays off forever.
      </NoteBlock>
    </>
  )
}
