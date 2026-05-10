import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Conflicts() {
  return (
    <>
      <p>
        ControlNets can fight each other. When stacking, the controls' constraints sometimes
        conflict — the result is a muddled output that doesn't satisfy any of them well.
      </p>

      <h2>Common conflict patterns</h2>

      <h3>Depth vs Canny disagreeing on object placement</h3>
      <p>
        Your depth map says "object is in foreground" but your Canny edge map (from a different
        source) says the silhouette is at a different location. Result: blurry compositional mess.
      </p>
      <p><strong>Fix</strong>: derive both controls from the same source image so they agree.</p>

      <h3>OpenPose + Canny pose mismatch</h3>
      <p>
        Pose says "arms raised", Canny silhouette has arms down. Model produces weird hybrid.
      </p>
      <p><strong>Fix</strong>: same — both controls from one source. Or use only one.</p>

      <h3>High-strength stack producing artifacts</h3>
      <p>
        Three ControlNets at strength 1.0 each = "control budget" 3.0. The model gets so tightly
        constrained that it can't satisfy them all + the prompt + its own learned distribution.
      </p>
      <p><strong>Fix</strong>: drop each strength to 0.6.</p>

      <h2>The "consistent source" rule</h2>
      <p>
        When stacking multiple controls, derive all of them from the same input image (run multiple
        preprocessors on the same source). This guarantees the controls are geometrically consistent
        with each other. Mixing controls from different sources is asking for trouble.
      </p>

      <h2>The "prefer fewer" rule</h2>
      <ul>
        <li>1 ControlNet — start here.</li>
        <li>2 ControlNets — add one only if the first is missing some specific structural information.</li>
        <li>3+ ControlNets — rare; usually means you should use a Union model with multi-control wiring or rethink the workflow.</li>
      </ul>

      <NoteBlock title="When you can't avoid stacking">
        Identity workflows (Phase 5b) sometimes need three controls: pose (OpenPose) + character
        identity (PuLID, technically not a ControlNet but stacks similarly) + outfit reference (IP-Adapter
        on a clothing photo). At that complexity, careful strength budgeting matters more than ever.
      </NoteBlock>
    </>
  )
}
