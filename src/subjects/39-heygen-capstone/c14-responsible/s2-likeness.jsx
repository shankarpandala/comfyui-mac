import WarningBlock from '../../../components/content/WarningBlock.jsx'

export default function S2Likeness() {
  return (
    <>
      <p>Your own likeness only — the safest pattern. Don't generate AI clones of others without explicit, written, scope-specific consent.</p>

      <h2>What "your own" means</h2>
      <ul>
        <li>You captured the photos.</li>
        <li>You trained the LoRA on your photos.</li>
        <li>You're the subject in every output.</li>
        <li>You're posting under your name / channel.</li>
      </ul>

      <h2>What's risky</h2>
      <ul>
        <li>Public figures: protected by right of publicity, defamation laws.</li>
        <li>Other private individuals: even with consent, written agreement essential.</li>
        <li>Composite (you + others): limit to clearly fictional / artistic contexts.</li>
        <li>Anyone you can identify but didn't ask: no.</li>
      </ul>

      <WarningBlock title="The 'when in doubt, don't' rule">
        Likeness law varies by jurisdiction; default to conservative. Generating someone else's
        face without explicit consent invites legal trouble at best, real harm at worst.
      </WarningBlock>
    </>
  )
}
