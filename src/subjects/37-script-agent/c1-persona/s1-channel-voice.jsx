import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ChannelVoice() {
  return (
    <>
      <p>Channel voice — the consistent tone, vocabulary, and POV your AI clone uses. The script agent's "personality."</p>

      <h2>Define your voice</h2>
      <ul>
        <li><strong>Formality</strong>: casual / professional / academic.</li>
        <li><strong>Pace</strong>: punchy short sentences vs flowing prose.</li>
        <li><strong>POV</strong>: first-person ("I"), instructive ("you"), narrator (third).</li>
        <li><strong>Vocabulary</strong>: jargon-heavy / accessible / colorful.</li>
        <li><strong>Humor</strong>: dry, none, self-deprecating, absurd.</li>
      </ul>

      <h2>Write a "voice doc"</h2>
      <p>1-2 page document that codifies all of the above with examples. Becomes the script agent's system prompt.</p>

      <h2>Example voice doc</h2>
      <pre>{`# Channel Voice Guide

POV: First-person ("I"). Conversational.
Formality: Casual but informed. No corporate-speak.
Pace: Short sentences. ~80% under 12 words.
Vocabulary: Plain words. Jargon only when accurate matters.
Humor: Dry observations. Never punny. Self-deprecating about my mistakes.
Hook: First sentence ALWAYS specific and surprising. Never "Today we're going to talk about..."
Endings: Always end on a question or call-to-experiment.

Examples:
- "I tried running FLUX on a 24 GB Mac last weekend. It immediately OOMed. Here's what I learned."
- "Most diffusion tutorials assume NVIDIA. I'm on a Mac. The tutorials are wrong about three things."`}</pre>

      <NoteBlock title="The 'consistent voice = brand' principle">
        Your AI clone's voice IS your channel brand. Audiences recognize voice before they
        recognize face. Lock it in early; refine over time.
      </NoteBlock>
    </>
  )
}
