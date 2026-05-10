import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3AutoCfg() {
  return (
    <>
      <p>
        Automatic CFG varies the CFG scale across sampler steps instead of using a constant.
        Higher CFG early (for prompt adherence during composition) + lower CFG late (for natural
        details) often produces better outputs than constant.
      </p>

      <h2>The default automatic CFG</h2>
      <p>
        From custom-node packs, <code>AutomaticCFG</code> nodes apply a schedule. Common shape:
      </p>
      <ul>
        <li>Steps 0-10%: CFG 12 (strong adherence early)</li>
        <li>Steps 10-50%: CFG 7 (normal)</li>
        <li>Steps 50-100%: CFG 5 (loosen for detail)</li>
      </ul>

      <h2>Why this works</h2>
      <ul>
        <li>Early steps determine composition; high CFG forces prompt match.</li>
        <li>Late steps render detail; high CFG over-cooks textures.</li>
        <li>Variable CFG is the natural compromise.</li>
      </ul>

      <h2>Composition with PAG</h2>
      <p>
        PAG (next chapter) provides additional guidance throughout. Combined: AutoCFG schedule + PAG
        active 0-100% gives both temporal CFG variation AND the per-step extra guidance.
      </p>

      <h2>The simpler alternative: just lower CFG</h2>
      <p>
        AutoCFG is mid-tier-power-user. For most workflows, picking a single CFG between 5-7 is
        enough. Reach for AutoCFG when you have a recurring "great composition but bad details" or
        "soft composition but good details" problem.
      </p>

      <NoteBlock title="The Mac decision">
        Don't optimize CFG before you optimize prompts and base model choice. AutoCFG is a third-tier
        improvement; the first two are larger.
      </NoteBlock>
    </>
  )
}
