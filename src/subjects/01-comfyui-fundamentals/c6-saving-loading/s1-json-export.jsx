import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1JsonExport() {
  return (
    <>
      <p>
        ComfyUI workflows are just JSON. There are two flavors of JSON, and confusing them is one of
        the most common newcomer mistakes. Both live in this section.
      </p>

      <h2>The two JSON formats</h2>
      <table>
        <thead><tr><th>Format</th><th>Purpose</th><th>How to get it</th></tr></thead>
        <tbody>
          <tr><td><strong>Workflow JSON</strong></td><td>Human-friendly. Includes node positions, group colors, sticky notes, widget values. Reloads visually identical canvas.</td><td>Menu → <strong>Save</strong></td></tr>
          <tr><td><strong>API JSON</strong></td><td>Machine-friendly. No layout, no groups; just the executable graph. Used by the <code>/prompt</code> endpoint.</td><td>Menu → <strong>Save (API Format)</strong> (after enabling Dev Mode in settings)</td></tr>
        </tbody>
      </table>

      <h2>Save your first workflow as JSON</h2>
      <ol>
        <li>From the workflow you built in chapter 5, click <strong>Save</strong>.</li>
        <li>Name: <code>01-first-sd15-t2i</code>.</li>
        <li>The browser downloads <code>01-first-sd15-t2i.json</code>.</li>
      </ol>
      <p>Open it in a text editor — you'll see a tree of nodes, links, widget values, and group definitions.</p>

      <h2>Load a workflow JSON</h2>
      <ul>
        <li><strong>Drag and drop</strong> the JSON onto the canvas.</li>
        <li>Or click <strong>Load</strong> and pick the file.</li>
      </ul>
      <p>
        On load, ComfyUI restores the entire visual state. If a node references a custom-node package
        you don't have installed, you'll see a red "missing node" placeholder; ComfyUI Manager
        (chapter 7) can install the missing package for you.
      </p>

      <h2>Which format to share</h2>
      <p>
        For tutorials, blog posts, and Discord shares — <strong>workflow JSON</strong>. For an
        automated agent calling <code>/prompt</code> in Phase 6 / Subject 33 — <strong>API JSON</strong>.
        Throughout this curriculum, every downloadable recipe is the workflow format unless we
        explicitly call out otherwise.
      </p>

      <NoteBlock title="Where workflows live in this curriculum">
        Workflow JSONs ship in this app under <code>public/workflows/</code> and are surfaced by{' '}
        <code>WorkflowBlock</code> components inside lessons. Click <strong>Download .json</strong> on
        any recipe, drop it onto your local ComfyUI canvas, and you're running the lesson.
      </NoteBlock>

      <h2>Versioning workflows</h2>
      <p>
        Treat your serious workflows like code: <code>git init</code> a folder of JSONs, commit each
        change. When you tune a sampler from <code>dpmpp_2m</code> to <code>dpmpp_3m_sde</code> and
        regret it, the diff is one line.
      </p>
    </>
  )
}
