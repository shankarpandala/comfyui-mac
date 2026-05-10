import WarningBlock from '../../../components/content/WarningBlock.jsx'

export default function S1Consent() {
  return (
    <>
      <p>Consent and likeness rights — the non-negotiable rules for using real people's faces in unrestricted content.</p>

      <h2>The core rules</h2>
      <ol>
        <li><strong>Generate only your own likeness</strong> by default. AI clone of yourself is the safest pattern.</li>
        <li><strong>For other adults</strong>: explicit, written, informed consent for the specific use. Verbal consent isn't enough for legal protection.</li>
        <li><strong>Public figures don't consent by being public</strong>. Their likeness is still legally protected (right of publicity, defamation, etc.).</li>
        <li><strong>Minors</strong>: never. No exceptions. Not real minors, not "fictional" minors, not "young-looking adults" — any ambiguity is a hard stop.</li>
      </ol>

      <h2>What "consent" looks like</h2>
      <ul>
        <li>Written agreement specifying scope: what content, where it'll be distributed, how long, what happens after.</li>
        <li>Right to revoke: subject can pull permission; you delete model + outputs.</li>
        <li>Compensation if commercial.</li>
      </ul>

      <h2>Templates</h2>
      <p>
        Search "model release form template" for solid starting points. Adapt for AI generation:
        explicitly note that AI training and AI-generated outputs are part of scope.
      </p>

      <WarningBlock title="The simple test">
        Before generating any unrestricted content involving a real person: would you be OK with
        them seeing the output AND knowing how it was made AND choosing whether to allow it? If
        any of those is uncomfortable, don't make it.
      </WarningBlock>
    </>
  )
}
