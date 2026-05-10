import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CanvasAndNav() {
  return (
    <>
      <p>
        ComfyUI's canvas is a 2-D infinite plane. Nodes float on it, links connect them, and you
        navigate with mouse + trackpad. Once you have ten muscle-memory operations, the UI gets out
        of your way.
      </p>

      <h2>Pan, zoom, select</h2>
      <table>
        <thead><tr><th>Action</th><th>Trackpad / Mouse</th></tr></thead>
        <tbody>
          <tr><td>Pan</td><td>Two-finger drag, or middle-mouse drag</td></tr>
          <tr><td>Zoom</td><td>Pinch, or scroll wheel</td></tr>
          <tr><td>Zoom to fit</td><td>Press <code>.</code> (period) — fits the whole graph in view</td></tr>
          <tr><td>Select node</td><td>Click on it (header)</td></tr>
          <tr><td>Multi-select</td><td>Shift-click each, or click-drag empty area to box-select</td></tr>
          <tr><td>Move node</td><td>Drag header (avoid widget areas)</td></tr>
          <tr><td>Duplicate</td><td>Cmd-C / Cmd-V (or Ctrl on a connected keyboard)</td></tr>
          <tr><td>Delete</td><td>Backspace or Delete</td></tr>
        </tbody>
      </table>

      <h2>Adding nodes</h2>
      <ul>
        <li><strong>Double-click empty canvas</strong> — opens the node search palette. Type to filter.</li>
        <li><strong>Right-click → Add Node</strong> — categorized menu. Useful when you don't know the name.</li>
        <li><strong>Drag from a socket</strong> — release on empty canvas; ComfyUI suggests compatible nodes.</li>
      </ul>

      <p>The drag-from-socket trick is the single biggest productivity win once you know it exists. It filters the node menu to only nodes that accept the type you're dragging.</p>

      <h2>Connecting and disconnecting</h2>
      <ul>
        <li>Click an output socket and drag to an input socket of compatible type.</li>
        <li>To replace a connection, just drag a new one onto the same input — the old one is dropped.</li>
        <li>To disconnect: drag the link's endpoint off into empty canvas, or right-click the link.</li>
      </ul>

      <h2>Type colors</h2>
      <p>Sockets are color-coded by type. After a day you stop reading the labels:</p>
      <ul>
        <li><strong>Purple</strong> — <code>MODEL</code></li>
        <li><strong>Yellow</strong> — <code>CLIP</code></li>
        <li><strong>Red</strong> — <code>VAE</code></li>
        <li><strong>Pink</strong> — <code>LATENT</code></li>
        <li><strong>Blue</strong> — <code>IMAGE</code></li>
        <li><strong>Gray</strong> — <code>MASK</code></li>
        <li><strong>Orange</strong> — <code>CONDITIONING</code></li>
      </ul>

      <NoteBlock title="ComfyUI is type-safe">
        Mismatched types literally cannot connect — the link won't latch. If your link "won't take",
        check colors. Most newcomer "ComfyUI is broken" complaints are type mismatches.
      </NoteBlock>

      <h2>The right-click context menu</h2>
      <p>Right-clicking <em>on a node</em> exposes a menu that's worth memorizing:</p>
      <ul>
        <li><strong>Bypass</strong> — skip this node; pass inputs through. Vital for A/B testing.</li>
        <li><strong>Mute</strong> — disable this node and everything downstream of it.</li>
        <li><strong>Pin</strong> — lock node position so you don't move it accidentally.</li>
        <li><strong>Convert widget to input</strong> — turn a number/text widget into a socket so another node can drive it.</li>
        <li><strong>Collapse</strong> — minimize the node to a tiny bar.</li>
      </ul>

      <h2>Right-click on empty canvas</h2>
      <ul>
        <li><strong>Add Group</strong> — drop a colored rectangle to label a chunk of pipeline.</li>
        <li><strong>Add Reroute</strong> — junction point that lets you tidy long links.</li>
        <li><strong>Add Note</strong> — sticky-note text node, doesn't run.</li>
      </ul>
    </>
  )
}
