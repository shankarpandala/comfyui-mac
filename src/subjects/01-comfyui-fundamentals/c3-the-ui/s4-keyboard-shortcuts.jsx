import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4KeyboardShortcuts() {
  return (
    <>
      <p>
        Once your fingers know these shortcuts, you'll move through ComfyUI three times faster. We
        list them by frequency of use, not alphabetically.
      </p>

      <h2>Tier 1 — daily</h2>
      <table>
        <thead><tr><th>Shortcut</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td><code>Cmd-Enter</code></td><td>Queue Prompt</td></tr>
          <tr><td><code>Cmd-Shift-Enter</code></td><td>Queue Prompt at Front</td></tr>
          <tr><td><code>Cmd-S</code></td><td>Save current workflow (browser)</td></tr>
          <tr><td><code>Cmd-O</code></td><td>Open / load workflow</td></tr>
          <tr><td><code>Cmd-A</code></td><td>Select all nodes</td></tr>
          <tr><td><code>Cmd-C / Cmd-V</code></td><td>Copy / paste nodes (with links)</td></tr>
          <tr><td><code>Cmd-D</code></td><td>Duplicate selected (no links)</td></tr>
          <tr><td><code>Backspace / Delete</code></td><td>Delete selected</td></tr>
          <tr><td><code>.</code> (period)</td><td>Zoom to fit graph</td></tr>
          <tr><td><code>Space</code></td><td>Hold + drag to pan, regardless of which area you're over</td></tr>
        </tbody>
      </table>

      <h2>Tier 2 — weekly</h2>
      <table>
        <thead><tr><th>Shortcut</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td><code>Cmd-M</code></td><td>Mute selected</td></tr>
          <tr><td><code>Cmd-B</code></td><td>Bypass selected</td></tr>
          <tr><td><code>Cmd-G</code></td><td>Group selected</td></tr>
          <tr><td><code>Cmd-Z / Cmd-Shift-Z</code></td><td>Undo / Redo</td></tr>
          <tr><td><code>Q</code></td><td>Toggle Queue panel</td></tr>
          <tr><td><code>H</code></td><td>Toggle History panel</td></tr>
          <tr><td><code>R</code></td><td>Refresh node definitions (after installing a custom node)</td></tr>
        </tbody>
      </table>

      <h2>Tier 3 — niche but powerful</h2>
      <ul>
        <li><strong>Hold Shift while connecting</strong> — drag from a connected output socket to start a parallel link.</li>
        <li><strong>Alt-drag a node</strong> — duplicate it in place.</li>
        <li><strong>Double-click a link</strong> — convert it to a reroute at the cursor position.</li>
        <li><strong>Right-click a connected input</strong> → "Convert input to widget" — collapses the socket back into the node.</li>
      </ul>

      <NoteBlock title="ComfyUI Manager adds more">
        After we install ComfyUI Manager (chapter 7), you'll get additional shortcuts for the manager
        panel. The "frontend" project (the React-based new UI ComfyUI is migrating to) also keeps
        adding shortcuts — check its settings panel periodically.
      </NoteBlock>

      <h2>Customizing shortcuts</h2>
      <p>
        Open <strong>Settings</strong> (gear icon, top-right) → <strong>Keybindings</strong>. You can
        rebind every action above. Most users leave the defaults; if you have a strong RTS-game
        muscle memory, remap selection to <code>Cmd</code>-only and bind a different chord to Queue.
      </p>
    </>
  )
}
