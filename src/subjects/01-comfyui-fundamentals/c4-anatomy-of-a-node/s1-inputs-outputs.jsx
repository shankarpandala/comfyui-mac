import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1InputsOutputs() {
  return (
    <>
      <p>
        Every ComfyUI node is a small black box with three regions: a header (the title), a body
        (sockets and widgets), and an optional footer for previews. Internally each node is a Python
        class; the canvas is just a visualization of those classes wired together.
      </p>

      <DefinitionBlock title="Anatomy of a node">
        <ul>
          <li><strong>Inputs</strong> — sockets on the left edge, accepting typed dataflow from upstream nodes.</li>
          <li><strong>Outputs</strong> — sockets on the right edge, emitting typed dataflow to downstream nodes.</li>
          <li><strong>Widgets</strong> — UI controls (numbers, text fields, dropdowns) that supply default scalar inputs.</li>
        </ul>
      </DefinitionBlock>

      <h2>Inputs vs widgets — they're the same thing</h2>
      <p>
        This is the most useful realization a beginner can have: a widget is just an input that
        happens to have a UI control attached. Right-click any widget label and you'll see{' '}
        <strong>Convert widget to input</strong>. That action removes the UI control and exposes the
        value as an input socket — which means another node can drive it.
      </p>
      <p>The reverse direction also works: <strong>Convert input to widget</strong> collapses an unused socket back into a UI control to save space.</p>

      <h2>Why this matters</h2>
      <ul>
        <li>You can have one PrimitiveNode driving the seed of three samplers — promote each KSampler's <code>seed</code> to an input.</li>
        <li>You can drive a CFG value with a math node that scales with step count.</li>
        <li>You can have an LLM node (in Phase 7) write the prompt that flows into CLIPTextEncode — promote the <code>text</code> widget.</li>
      </ul>

      <h2>Required vs optional inputs</h2>
      <p>
        Required inputs <em>must</em> be connected (or supplied by a widget). Optional inputs are
        often used by ControlNet/IP-Adapter style nodes to layer behavior. Optional sockets are
        marked with a faded outline. Hovering shows the tooltip.
      </p>

      <h2>Multiple outputs of the same type</h2>
      <p>
        A KSamplerAdvanced has two LATENT outputs: <code>output</code> and <code>denoised_output</code>.
        Multiple outputs of the same type are common; the only way to know what each means is to read
        the tooltip or the source. We label the important ones in the recipes that use them.
      </p>

      <NoteBlock title="The tooltip">
        Hover any socket — the tooltip shows the type, whether the input is required, and (for
        well-documented nodes) a one-line description. The tooltip is your friend when navigating an
        unfamiliar custom node pack.
      </NoteBlock>
    </>
  )
}
