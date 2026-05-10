import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S122Changes() {
  return (
    <>
      <p>
        Wan 2.2 added Mixture-of-Experts (MoE) to the 14B variant. MoE means the model has more
        total parameters but only activates a subset per inference step — cheaper compute, same or
        better quality.
      </p>

      <h2>What MoE changes</h2>
      <ul>
        <li>~14B "active" parameters per step (similar to 2.1 14B).</li>
        <li>~28B total parameters across all experts.</li>
        <li>~2× quality bump on hard prompts vs 2.1 14B.</li>
        <li>~Same per-step inference cost as 2.1 14B.</li>
      </ul>

      <h2>The Mac trade-off</h2>
      <ul>
        <li>Total parameter count is what determines disk + load memory.</li>
        <li>2.2 14B MoE GGUF Q4: ~16 GB disk and load. Won't fit comfortably on 24 GB.</li>
        <li>Use 2.1 14B Q4_K_S for tight memory; 2.2 14B if you have a 32+ GB Mac.</li>
      </ul>

      <h2>Wan 2.2 5B</h2>
      <p>
        2.2 5B has no MoE — it's just a refined version of the small model. Mac-friendly. Recommended
        Mac default Wan 2.2 variant.
      </p>

      <h2>Other 2.2 improvements</h2>
      <ul>
        <li>Better long-shot consistency (5+ second clips).</li>
        <li>Improved prompt adherence (closer to natural-language-style prompting).</li>
        <li>Better integration with VACE editing.</li>
      </ul>

      <NoteBlock title="The Mac decision in 2026">
        Wan 2.2 5B for daily Mac video work. Wan 2.1 14B Q4_K_S for hero shots. Skip Wan 2.2 14B
        MoE on 24 GB Mac — needs more memory than you have.
      </NoteBlock>
    </>
  )
}
