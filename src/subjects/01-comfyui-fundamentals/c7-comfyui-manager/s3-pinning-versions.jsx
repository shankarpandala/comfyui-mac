import CommandBlock from '../../../components/content/CommandBlock.jsx'
import WarningBlock from '../../../components/content/WarningBlock.jsx'

export default function S3PinningVersions() {
  return (
    <>
      <p>
        ComfyUI Manager's <strong>Update All</strong> button is satisfying and dangerous. Custom
        nodes break each other regularly — a new ComfyUI release changes an internal API, two custom
        nodes stop loading, and your previous-day workflow no longer queues. Treat updates like
        package upgrades on a production server: deliberate, never auto.
      </p>

      <h2>The reality of the custom-node ecosystem</h2>
      <ul>
        <li>Most popular packages have one maintainer.</li>
        <li>Breaking changes ship without semver discipline.</li>
        <li>Models referenced by name change capitalization across releases (and your saved workflow now points to nothing).</li>
        <li>Some nodes silently change defaults — your output looks different but you can't see why.</li>
      </ul>

      <h2>Pinning by git commit</h2>
      <p>
        Every custom node is a git repo. To pin a known-good version: open a terminal, navigate to
        the package, check out a specific commit.
      </p>
      <CommandBlock command="cd ~/AI/ComfyUI/custom_nodes/ComfyUI-Impact-Pack" />
      <CommandBlock command="git log --oneline -10" label="See recent commits" />
      <CommandBlock command="git checkout <commit-sha>" />
      <p>
        Document this in a <code>PINS.md</code> in your <code>custom_nodes/</code> directory: package
        name, commit SHA, date, why you pinned it.
      </p>

      <h2>Recovering from a bad update</h2>
      <p>If <strong>Update All</strong> broke something:</p>
      <ol>
        <li>Identify the broken package from the ComfyUI startup log (the failing import names it).</li>
        <li><code>cd ~/AI/ComfyUI/custom_nodes/&lt;package&gt;</code></li>
        <li><code>git log --oneline -20</code> to find a recent good commit.</li>
        <li><code>git checkout &lt;sha&gt;</code></li>
        <li>Restart ComfyUI.</li>
      </ol>

      <WarningBlock title="Don't update the day before a deadline">
        If you're producing client work or running the agentic capstone in production, pin everything.
        Update only when you have time to retest your workflows. The "small UI tweak" PR you just
        pulled may have changed which sampler is the default.
      </WarningBlock>

      <h2>Snapshots</h2>
      <p>
        ComfyUI Manager has a <strong>Snapshot Manager</strong> that records the current set of
        installed packages and their commits as a JSON file. Take a snapshot after a known-good
        configuration; restoring it puts every package back to the recorded commit. Quick and
        portable across machines.
      </p>
    </>
  )
}
