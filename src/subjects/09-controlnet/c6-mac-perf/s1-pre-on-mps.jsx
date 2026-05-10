import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1PreOnMps() {
  return (
    <>
      <p>
        ControlNet preprocessors vary wildly in Mac performance. Some are pure numpy (Canny — fast
        on CPU). Some are PyTorch on MPS (DepthAnythingV2 — fast on GPU). Some are ONNX Runtime
        (DWPose — moderate on CPU). Knowing which is which prevents surprises.
      </p>

      <h2>Preprocessor performance on M5 Pro at 1024×1024 input</h2>
      <table>
        <thead><tr><th>Preprocessor</th><th>Backend</th><th>Time</th></tr></thead>
        <tbody>
          <tr><td>Canny</td><td>OpenCV / CPU</td><td>~50 ms</td></tr>
          <tr><td>HED Soft Edge</td><td>PyTorch / MPS</td><td>~200 ms</td></tr>
          <tr><td>Lineart Realistic</td><td>PyTorch / MPS</td><td>~300 ms</td></tr>
          <tr><td>Lineart Anime</td><td>PyTorch / MPS</td><td>~300 ms</td></tr>
          <tr><td>Scribble</td><td>OpenCV / CPU</td><td>~100 ms</td></tr>
          <tr><td>MiDaS Depth</td><td>PyTorch / MPS</td><td>~400 ms</td></tr>
          <tr><td>ZoeDepth</td><td>PyTorch / MPS</td><td>~600 ms</td></tr>
          <tr><td>DepthAnything v2</td><td>PyTorch / MPS</td><td>~500 ms</td></tr>
          <tr><td>OpenPose</td><td>PyTorch / MPS</td><td>~700 ms</td></tr>
          <tr><td>DWPose</td><td>ONNX / CPU</td><td>~1 s</td></tr>
          <tr><td>BAE Normal Map</td><td>PyTorch / MPS</td><td>~400 ms</td></tr>
          <tr><td>UPerNet Seg</td><td>PyTorch / MPS</td><td>~500 ms</td></tr>
          <tr><td>MLSD Lines</td><td>PyTorch / MPS</td><td>~300 ms</td></tr>
        </tbody>
      </table>

      <h2>The total cost</h2>
      <p>
        For SDXL workflow on M5 Pro: KSampler is ~17 s. Adding one preprocessor adds ~0.5–1 s.
        Negligible relative to sampler time. Don't optimize the preprocessor unless it's an outlier.
      </p>

      <NoteBlock title="DWPose's CPU bottleneck">
        DWPose is the only common preprocessor that's CPU-bound. For batch processing many frames
        (Phase 3 vid2vid), this can matter — DWPose on 100 frames is ~100 s. Consider switching to
        regular OpenPose (PyTorch / MPS) if doing video processing.
      </NoteBlock>
    </>
  )
}
