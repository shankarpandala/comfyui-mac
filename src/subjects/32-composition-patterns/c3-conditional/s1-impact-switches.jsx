import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ImpactSwitches() {
  return (
    <>
      <p>Impact Pack switches — conditional branching in workflows. "If X then path A else path B" via switch nodes.</p>

      <h2>The nodes</h2>
      <ul>
        <li><code>ImpactSwitch</code> — pick from N inputs based on an integer selector.</li>
        <li><code>ImageBatchToImageList</code> + <code>ListSwitch</code> — list-based branching.</li>
        <li><code>If/Else</code> nodes from various packs.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Pick model based on prompt content (anime vs photo prompt → anime base or photo base).</li>
        <li>A/B test two sampler configs with one switch.</li>
        <li>Dispatch to different post-processing based on output category.</li>
      </ul>

      <h2>Recipe (model selector)</h2>
      <ol>
        <li>Two CheckpointLoaders — model A and model B.</li>
        <li><code>ImpactSwitch</code> with both as inputs, selector = INT widget.</li>
        <li>Switch's output → KSampler.</li>
        <li>Set selector to 1 or 2 to pick.</li>
      </ol>

      <h2>Limitations</h2>
      <ul>
        <li>ComfyUI evaluates the entire graph; both branches still load even if only one is selected.</li>
        <li>Branches are "switched in result" not "switched in execution" — memory cost is same as evaluating both.</li>
      </ul>

      <NoteBlock title="The 'mute branches you don't use' workaround">
        For real branch-skipping, mute the non-selected group manually before queueing. Switches
        are best for "pick one of these prepared outputs" rather than "skip computing this branch."
      </NoteBlock>
    </>
  )
}
