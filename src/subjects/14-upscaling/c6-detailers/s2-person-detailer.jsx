import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2PersonDetailer() {
  return (
    <>
      <p>
        Same Impact-Pack technique applied to other detectors. Person, hand, and segmentation
        detailers exist. The pattern is identical: detect → crop → re-sample at higher res → composite.
      </p>

      <h2>The detector models</h2>
      <ul>
        <li><strong>face_yolov8m.pt</strong> — face detection</li>
        <li><strong>person_yolov8m-seg.pt</strong> — person segmentation</li>
        <li><strong>hand_yolov8s.pt</strong> — hand detection</li>
        <li><strong>eyes_yolov8m.pt</strong> — eye detection</li>
      </ul>
      <p>Folder: <code>models/ultralytics/bbox/</code> for bounding-box; <code>models/ultralytics/segm/</code> for segmentation.</p>

      <h2>The Hand Detailer recipe</h2>
      <p>Hands are the perennial diffusion weakness. Hand detailer can fix many cases:</p>
      <ol>
        <li><code>UltralyticsDetectorProvider</code> → load hand_yolov8s.pt.</li>
        <li><code>FaceDetailer</code> (works for any detector — name is misleading) wired with the hand detector.</li>
        <li>Positive prompt: "perfect hands, anatomically correct fingers".</li>
        <li>Denoise: 0.6 (higher than face detailer — hands need more rework).</li>
      </ol>

      <h2>Stack order</h2>
      <p>Apply detailers in order of importance, from biggest region to smallest:</p>
      <pre>{`KSampler → person detailer → face detailer → hand detailer → eyes detailer → SaveImage`}</pre>
      <p>Each adds 5–15 s; total can be 1+ minutes for full-stack.</p>

      <h2>The Mac performance budget</h2>
      <p>
        On M5 Pro, full detailer stack adds ~45 s to a 17 s SDXL render. For final outputs, worth
        it. For iteration, skip — use just FaceDetailer.
      </p>

      <NoteBlock title="The detailer philosophy">
        Detailers fix the failure modes you can predict (bad faces, bad hands). They don't fix the
        ones you can't (weird composition, prompt misinterpretation). Use them as polish at the end
        of a pipeline, not as quality boosters during ideation.
      </NoteBlock>
    </>
  )
}
