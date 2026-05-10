import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1HostedVsLocal() {
  return (
    <>
      <p>
        Hosted services (Midjourney, Adobe Firefly, etc.) heavily moderate output. Local Mac
        ComfyUI doesn't. This subject is about exercising that freedom responsibly — covering both
        what's possible and what's required for ethical operation.
      </p>

      <h2>What "uncensored" means here</h2>
      <ul>
        <li>Models without baked-in content filters.</li>
        <li>Generations that hosted services would refuse.</li>
        <li>Includes: artistic nudity, violence in action scenes, mature themes for adult content creators.</li>
        <li>Explicitly does NOT include: content involving minors, non-consenting real people, deception, or any illegal use.</li>
      </ul>

      <h2>Why local is the path</h2>
      <ul>
        <li>You control the moderation policy.</li>
        <li>No data leaves your Mac.</li>
        <li>No third-party ToS to violate.</li>
        <li>Permission is up to you, not a corporate filter trained for risk minimization.</li>
      </ul>

      <h2>What that means for responsibility</h2>
      <ul>
        <li>You ARE the moderation policy. The duty isn't outsourced.</li>
        <li>Consent for likeness, age verification, distribution rules — your responsibility.</li>
        <li>Platform policies (where you POST) still apply even if you generate locally.</li>
      </ul>

      <NoteBlock title="The chapter sequence">
        Chapter 2 is the responsible-use checklist — read before doing anything else in this
        subject. Chapters 3-9 are the model and recipe coverage.
      </NoteBlock>
    </>
  )
}
