import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1HookBodyCta() {
  return (
    <>
      <p>Hook → Body → CTA — the irreducible structure of every Reel. The script agent must produce all three reliably.</p>

      <h2>Hook patterns that work</h2>
      <ul>
        <li><strong>Specific number / claim</strong>: "I cut my render time by 80% with one change."</li>
        <li><strong>Counter-conventional</strong>: "Everyone says X. They're wrong. Here's why."</li>
        <li><strong>Personal stakes</strong>: "I almost gave up on AI video on Mac. Then I tried this."</li>
        <li><strong>Question</strong>: "What if your Mac could replace a $5K render farm?"</li>
        <li><strong>Bold contradiction</strong>: "I generated this entire video locally on my MacBook."</li>
      </ul>

      <h2>Body patterns</h2>
      <ul>
        <li><strong>Single transformation</strong>: "Here's what didn't work / here's what did."</li>
        <li><strong>Listicle</strong>: "Three things you need to know about X."</li>
        <li><strong>Story arc</strong>: "I tried X / problem / solution / result."</li>
        <li><strong>Compare-and-contrast</strong>: "Without Y vs with Y."</li>
      </ul>

      <h2>CTA patterns</h2>
      <ul>
        <li>"Try it and tell me how it went."</li>
        <li>"Follow for more Mac AI tutorials."</li>
        <li>"What should I render next? Drop ideas below."</li>
      </ul>

      <NoteBlock title="The 'agent learns your favorites' approach">
        Pick 3-5 hook patterns + 3 body patterns + 2 CTAs that match your channel. The script
        agent's system prompt should reference these and ask it to use them. Constraint
        improves output.
      </NoteBlock>
    </>
  )
}
