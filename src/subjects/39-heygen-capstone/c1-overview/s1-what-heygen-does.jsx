import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WhatHeygenDoes() {
  return (
    <>
      <p>HeyGen — a commercial cloud platform that generates AI-presenter videos from text. The reference for what we're rebuilding locally.</p>

      <h2>What HeyGen offers</h2>
      <ul>
        <li>Library of avatars (or upload your own face).</li>
        <li>Voice cloning (or library of preset voices).</li>
        <li>Type a script → AI presenter delivers it on camera.</li>
        <li>Some templates (intro / explainer / product demo).</li>
        <li>Export 9:16 / 1:1 / 16:9.</li>
      </ul>

      <h2>The cost</h2>
      <ul>
        <li>~$30-100/month subscription.</li>
        <li>Per-minute video credits.</li>
        <li>Cloud upload of your face/voice (privacy concern).</li>
        <li>ToS restrictions on use.</li>
      </ul>

      <h2>What we're building</h2>
      <p>Same capability, locally, on Mac:</p>
      <ul>
        <li>Your AI clone face/voice — already built (Phase 5).</li>
        <li>Type-script-get-video — Phase 7's agentic capstone (this subject).</li>
        <li>Plus: research agent + B-roll generation HeyGen doesn't include.</li>
        <li>One-time setup; no ongoing fees; full privacy.</li>
      </ul>

      <NoteBlock title="The 'open replacement' achievement">
        By the end of this subject, you have a 100%-local HeyGen-class pipeline. Better than HeyGen
        in some ways (research, B-roll, custom orchestration); worse in some (their UI is polished,
        ours is a Python script).
      </NoteBlock>
    </>
  )
}
