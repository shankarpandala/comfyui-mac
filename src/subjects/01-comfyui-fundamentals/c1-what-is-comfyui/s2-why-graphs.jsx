import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import ExampleBlock from '../../../components/content/ExampleBlock.jsx'

export default function S2WhyGraphs() {
  return (
    <>
      <p>
        Tabs and form fields don't scale past about five settings. Once a workflow has a base model
        plus a refiner plus three LoRAs plus a ControlNet plus a face-detail pass, the form-style UI
        starts to lie about what is actually happening. A graph cannot lie — every value, every
        connection, is visible.
      </p>

      <DefinitionBlock title="Workflow as a directed acyclic graph (DAG)">
        A ComfyUI workflow is a DAG whose nodes are pure functions over tensors and whose edges are
        typed dataflow. The runtime evaluates the graph in topological order, caches intermediate
        results, and re-runs only the nodes whose upstream inputs changed.
      </DefinitionBlock>

      <h2>Three properties that emerge from "graph"</h2>

      <h3>1. Composability</h3>
      <p>
        Nodes are pure functions: same inputs → same outputs. That means any subgraph (say, the
        ControlNet preprocessor + apply pair) can be lifted out and reused in another workflow without
        changing its behavior. In an A1111 form you cannot lift a feature out — it is welded to the
        UI.
      </p>

      <h3>2. Reproducibility</h3>
      <p>
        Because the graph IS the workflow, you can save the entire pipeline as a single <code>.json</code>{' '}
        file (or embedded in a PNG). Hand it to someone with the same models and they get bit-for-bit
        identical output. That is the bedrock of every recipe in this curriculum.
      </p>

      <h3>3. Branching and reuse</h3>
      <p>
        Want to render the same prompt with three different samplers? In A1111 you'd run it three
        times. In ComfyUI you fan out one CONDITIONING tensor into three KSamplers and three VAE
        decodes. The base prompt is computed once. The savings compound the deeper your pipeline goes.
      </p>

      <ExampleBlock title="Base + refiner + face fix in three forms">
        <ul>
          <li><strong>Tabs:</strong> three separate "Generate" buttons, three sets of form state, manual stitch.</li>
          <li><strong>Forge:</strong> as above, with somewhat better memory reuse.</li>
          <li><strong>ComfyUI:</strong> one graph, one click. Base UNet output flows into refiner; refiner output flows into a FaceDetailer subgraph; final image flows into Save.</li>
        </ul>
      </ExampleBlock>

      <h2>The cost of a graph</h2>
      <p>The trade-off is real and worth naming up front:</p>
      <ul>
        <li><strong>Discoverability is worse.</strong> A node menu is not as guessable as a labeled tab.</li>
        <li><strong>You must learn the type system.</strong> MODEL, CLIP, VAE, LATENT, IMAGE, CONDITIONING, MASK — these are real types and you cannot connect mismatched ones.</li>
        <li><strong>You must think.</strong> The graph forces you to articulate the pipeline. That's a feature, but it costs ten minutes the first time you build something new.</li>
      </ul>

      <h2>Why this matters for our final goal</h2>
      <p>
        The HeyGen-class capstone in Phase 7 is a graph with dozens of nodes — research agent, script
        agent, voice clone, AI clone, lip-sync, B-roll generator, editor. There is no form UI on Earth
        that could express that. The graph is not just a different UI; it is the only UI that scales
        to the pipelines we are going to build.
      </p>
    </>
  )
}
