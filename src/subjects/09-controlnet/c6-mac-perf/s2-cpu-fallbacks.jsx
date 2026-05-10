import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S2CpuFallbacks() {
  return (
    <>
      <p>
        Some ControlNet preprocessors silently fall back to CPU even when MPS is available. The
        fallback isn't always logged loudly. Knowing the patterns lets you investigate when you
        see unexpected slowdowns.
      </p>

      <h2>Known CPU-only preprocessors</h2>
      <ul>
        <li><strong>DWPose</strong> — uses ONNX Runtime, which doesn't have MPS support. Always CPU.</li>
        <li><strong>Canny / HED scribble (cv2)</strong> — pure OpenCV, runs on CPU. Fast enough that it doesn't matter.</li>
        <li><strong>Some custom-node preprocessors</strong> — check the source if you suspect.</li>
      </ul>

      <h2>Common silent-fallback ops</h2>
      <p>
        Some PyTorch ops in image-processing nodes (e.g., bilateral filtering, certain Sobel
        variants) silently fall through MPS to CPU because MPS doesn't implement them. With{' '}
        <code>PYTORCH_ENABLE_MPS_FALLBACK=1</code> set (Subject 02 / Chapter 2 / Section 3) this is
        invisible — it just runs slower than expected.
      </p>

      <h2>Diagnosing</h2>
      <p>If a preprocessor takes 5 s when it should take 0.5 s:</p>
      <ol>
        <li>Watch Activity Monitor's GPU bar. If 0% during preprocess, it's CPU.</li>
        <li>Check the ComfyUI log for any "Falling back to CPU" warnings.</li>
        <li>Try a different preprocessor (e.g., regular OpenPose instead of DWPose).</li>
      </ol>

      <MacGotchaBlock title="ControlNet apply itself is fully MPS">
        The preprocessors might fall back, but the actual ControlNet residual computation during
        sampling runs on MPS without issue. Slowdowns localized to the preprocessor stage are
        annoying but don't affect sampler throughput.
      </MacGotchaBlock>

      <h2>Mitigation</h2>
      <ul>
        <li>For batch / video work, swap CPU-only preprocessors for MPS-friendly equivalents (DWPose → OpenPose).</li>
        <li>For one-off images, accept the small overhead.</li>
        <li>For repeated runs of the same control image, cache the preprocessor output (use <code>SaveImage</code> on the preprocessed map, then <code>LoadImage</code> on subsequent runs).</li>
      </ul>
    </>
  )
}
