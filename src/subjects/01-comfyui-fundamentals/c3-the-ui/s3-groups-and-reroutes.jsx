import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3GroupsAndReroutes() {
  return (
    <>
      <p>
        Groups and reroutes are the two organizational primitives that turn a node soup into a
        readable graph. Both are zero-cost — they don't run, don't allocate, don't slow anything down.
      </p>

      <h2>Groups</h2>
      <p>
        A group is a colored rectangle that visually contains a set of nodes. Add one with right-click{' '}
        → <strong>Add Group</strong>. Resize from any edge. Drag the group's title bar to move all
        contained nodes together.
      </p>
      <p>Two practical patterns:</p>
      <ol>
        <li><strong>Stage groups</strong> — one group per pipeline stage: "Load", "Encode", "Sample", "Decode". Color-code consistently and you can read a workflow at a glance.</li>
        <li><strong>Function groups</strong> — group all nodes that participate in one feature: "Identity (PuLID)", "Upscale", "FaceDetail". You can mute or bypass an entire group with one right-click.</li>
      </ol>

      <h3>Group operations</h3>
      <ul>
        <li><strong>Bypass group</strong> — right-click group → Bypass Group Nodes. Whole feature off in one click.</li>
        <li><strong>Mute group</strong> — same, but cuts dataflow downstream too.</li>
        <li><strong>Pin group</strong> — locks contents in place; safety against accidental drags.</li>
      </ul>

      <h2>Reroutes</h2>
      <p>
        A reroute is a typed pass-through node that exists purely so a long link can bend cleanly
        through your graph. Add with right-click → <strong>Add Reroute</strong>.
      </p>
      <p>Use reroutes when:</p>
      <ul>
        <li>A model link from CheckpointLoader has to travel across the canvas to several samplers.</li>
        <li>You want a single CLIP text encoder feeding many KSamplers — fan-out from one reroute is cleaner than one socket with seven outgoing wires.</li>
        <li>You're building a reusable subgraph with one labeled "main highway" of MODEL/CLIP/VAE running across the top.</li>
      </ul>

      <h3>Named reroutes</h3>
      <p>
        Right-click a reroute → <strong>Add title</strong> to name it. A graph with named reroutes
        ("MODEL_main", "CLIP_main", "VAE_main") reads almost like code.
      </p>

      <NoteBlock title="Don't go reroute-crazy">
        Reroutes are addictive once you discover them. Resist the urge to put one on every wire — at
        some point they add visual noise rather than removing it. A reasonable rule: add a reroute only
        if the link has to travel across more than a third of the visible canvas, or fan out to
        three or more destinations.
      </NoteBlock>

      <h2>Notes</h2>
      <p>
        The <strong>Note</strong> node (right-click → Add Note) is a yellow sticky-note that doesn't
        execute. Use it for inline documentation: prompt-engineering decisions, sampler choices,
        warnings to your future self. When you reopen a workflow six months later, notes are the only
        thing that will save you.
      </p>
    </>
  )
}
