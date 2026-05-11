import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1InstallManager() {
  return (
    <>
      <p>
        ComfyUI Manager is the single most useful custom node — it manages all the others. It adds a
        Manager button to the menu, a much better queue/history panel, automated install of custom
        nodes and missing models, and update handling. Install it now.
      </p>

      <h2>Install</h2>
      <p>From a terminal with ComfyUI <strong>not</strong> running:</p>
      <CommandBlock command="cd ~/Documents/ComfyUI/custom_nodes" />
      <CommandBlock command="git clone https://github.com/ltdrdata/ComfyUI-Manager comfyui-manager" />
      <p>That's it for the install. ComfyUI Manager has no extra Python dependencies.</p>

      <h2>Restart ComfyUI</h2>
      <CommandBlock command="~/Documents/ComfyUI/start.sh" label="Use the script we wrote in chapter 2 / section 4" />
      <p>Watch the logs as it boots — you should see <code>### Loading: ComfyUI-Manager (V&lt;version&gt;)</code>.</p>

      <h2>The Manager button</h2>
      <p>
        In the canvas, the menu now has a <strong>Manager</strong> button. Click it. The Manager
        panel exposes:
      </p>
      <ul>
        <li><strong>Custom Nodes Manager</strong> — search, install, update, uninstall.</li>
        <li><strong>Install Models</strong> — curated downloader for common checkpoints, LoRAs, ControlNets.</li>
        <li><strong>Update All</strong> — bumps everything (use with care; we'll discuss pinning in section 3).</li>
        <li><strong>Install Missing Custom Nodes</strong> — when you load a shared workflow with red placeholders, this scans them and offers to install the right packages.</li>
      </ul>

      <NoteBlock title="Why this is non-optional">
        Every recipe in this curriculum from chapter 4 of Subject 02 onward assumes ComfyUI Manager
        is installed. The "Install Missing Custom Nodes" feature is how recipes self-heal when you
        download them from the workflows folder.
      </NoteBlock>
    </>
  )
}
