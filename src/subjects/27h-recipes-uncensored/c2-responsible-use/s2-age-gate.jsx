import WarningBlock from '../../../components/content/WarningBlock.jsx'

export default function S2AgeGate() {
  return (
    <>
      <p>The non-negotiable rule. No content involving minors. Period.</p>

      <h2>What this means in practice</h2>
      <ul>
        <li>Training data: never include images of minors. Even partial sets, even "as part of a wider dataset". Excise everything.</li>
        <li>Generation: never prompt for content involving minors. Use age-clear words ("adult woman", "man in his 30s") to bias models.</li>
        <li>If a model produces ambiguous output: discard. Treat as a hard rule.</li>
      </ul>

      <h2>The legal reality</h2>
      <ul>
        <li>CSAM is illegal in every jurisdiction the user might operate in.</li>
        <li>"AI-generated" doesn't shield from prosecution in most jurisdictions (and is increasingly being explicitly criminalized).</li>
        <li>Possession is criminal regardless of intent or distribution.</li>
      </ul>

      <h2>Some bases / LoRAs are tagged "anime girl"</h2>
      <p>
        Anime-style characters of ambiguous age require careful prompting. If outputs look young,
        don't generate them. Bias to "adult woman" wording even for character generation.
      </p>

      <WarningBlock title="No exceptions">
        This isn't a moderation guideline. It's the law. And it's a moral floor that is
        non-negotiable regardless of legality. Don't generate, don't possess, don't share. Period.
      </WarningBlock>
    </>
  )
}
