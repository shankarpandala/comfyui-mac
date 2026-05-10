import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Grouping() {
  return (
    <>
      <p>Sub-workflows / groups / reroutes — the organizational primitives that turn a 50-node graph into a readable system.</p>

      <h2>Groups</h2>
      <ul>
        <li>Drag-select nodes → right-click → Add Group.</li>
        <li>Color-code by stage (Load, Encode, Sample, Decode, Post).</li>
        <li>Mute or bypass an entire group with one right-click.</li>
      </ul>

      <h2>Sub-workflow nodes (custom-node packs)</h2>
      <ul>
        <li>Some packs ship "subgraph" nodes that collapse a group into a single node with input/output sockets.</li>
        <li>rgthree-comfy is the standard for this.</li>
        <li>Reusable subgraphs: build once, drop into many workflows.</li>
      </ul>

      <h2>Reroutes</h2>
      <ul>
        <li>Add at right-click → Add Reroute.</li>
        <li>Use to bend long links cleanly.</li>
        <li>Named reroutes ("MODEL_main", "VAE_main") read like code.</li>
      </ul>

      <h2>Notes</h2>
      <p>Right-click → Add Note. Documentation in-graph. Use for architectural decisions, sampler choices, todo items.</p>

      <NoteBlock title="The 'readable in 6 months' rule">
        Every workflow you'll keep around for &gt;1 month should have group labels + reroutes +
        notes. Future-you opening it cold will thank present-you.
      </NoteBlock>
    </>
  )
}
