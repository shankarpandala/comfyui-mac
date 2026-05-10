import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2ImageEncoders() {
  return (
    <>
      <p>
        IP-Adapter needs an image encoder. Several options exist; pick the one matching the IP-Adapter
        variant you're using. Loading the wrong encoder produces broken outputs.
      </p>

      <h2>The CLIP-Vision encoders</h2>
      <ul>
        <li><strong>OpenAI CLIP-Vision-L (vit-large-patch14)</strong> — paired with most original IP-Adapter variants. ~600 MB.</li>
        <li><strong>OpenCLIP CLIP-G (vit-bigg-14)</strong> — paired with IP-Adapter SDXL Plus. ~3.5 GB.</li>
        <li><strong>SigLIP (siglip-large)</strong> — paired with FLUX Redux and some FaceID variants. ~880 MB.</li>
      </ul>

      <h2>Folder placement</h2>
      <p>All go in <code>models/clip_vision/</code> regardless of which one.</p>

      <h2>The matching</h2>
      <table>
        <thead><tr><th>IP-Adapter variant</th><th>Required encoder</th></tr></thead>
        <tbody>
          <tr><td>IP-Adapter Plus SD15</td><td>CLIP-Vision-L</td></tr>
          <tr><td>IP-Adapter Plus SDXL</td><td>CLIP-Vision-G (bigg)</td></tr>
          <tr><td>IP-Adapter FaceID Plus v2 SD15/SDXL</td><td>CLIP-Vision-L + InsightFace antelopev2</td></tr>
          <tr><td>InstantID</td><td>CLIP-Vision-G + InsightFace antelopev2</td></tr>
          <tr><td>PuLID FLUX</td><td>SigLIP + InsightFace antelopev2</td></tr>
          <tr><td>FLUX Redux</td><td>SigLIP</td></tr>
        </tbody>
      </table>

      <h2>InsightFace</h2>
      <p>
        Identity-preserving variants (FaceID, InstantID, PuLID) use a face-detection + face-embedding
        model called InsightFace's <strong>antelopev2</strong> on top of CLIP-Vision. The face model
        crops the face region and produces a face-specific embedding that the IP-Adapter consumes
        alongside the general image embedding.
      </p>

      <h2>The IPAdapter Unified Loader</h2>
      <p>
        The <code>ComfyUI_IPAdapter_plus</code> custom node ships <code>IPAdapterUnifiedLoader</code>{' '}
        that auto-picks the right encoder for whichever IP-Adapter you pick. Use it instead of
        wiring encoders manually for less mistake-prone setup.
      </p>

      <NoteBlock title="Mac compatibility">
        All these encoders run on MPS without issue. InsightFace uses ONNX Runtime (CPU only) — adds
        ~200 ms per face detection. Negligible at runtime.
      </NoteBlock>
    </>
  )
}
