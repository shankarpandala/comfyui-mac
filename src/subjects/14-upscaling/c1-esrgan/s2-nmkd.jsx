import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Nmkd() {
  return (
    <>
      <p>
        NMKD's upscale models are a curated collection of community ESRGAN-style models tuned for
        specific domains. Worth knowing for specialized use.
      </p>

      <h2>NMKD models worth having</h2>
      <ul>
        <li><strong>4x_NMKD-Superscale-SP_178000_G</strong> — generalist photoreal.</li>
        <li><strong>4x_NMKD-Siax_200k</strong> — portrait / skin softness.</li>
        <li><strong>4x_NMKD-YandereNeoXL_200k</strong> — anime upscale.</li>
        <li><strong>1x_NMKD-Photo-Refiner</strong> — same-resolution detail enhancement.</li>
        <li><strong>2x_NMKD-DeJPG</strong> — removes JPEG artifacts.</li>
        <li><strong>1x_NMKD-DeBlur</strong> — deblur (limited).</li>
      </ul>

      <h2>The "1x" upscalers</h2>
      <p>
        Some models are 1× — same resolution out as in. Used for cleaning artifacts or boosting
        detail without scaling. Stack: 1x detail-refiner first, then 4x upscaler.
      </p>

      <h2>Picking by domain</h2>
      <table>
        <thead><tr><th>Domain</th><th>Recommended NMKD model</th></tr></thead>
        <tbody>
          <tr><td>Photoreal portrait</td><td>4x_NMKD-Siax_200k (gentle on skin)</td></tr>
          <tr><td>Photoreal landscape</td><td>RealESRGAN_x4plus or 4x_NMKD-Superscale</td></tr>
          <tr><td>Anime</td><td>4x_NMKD-YandereNeoXL_200k</td></tr>
          <tr><td>Pixel art / clean lines</td><td>4x_NMKD-Superscale + low strength</td></tr>
          <tr><td>JPEG-artifact-laden source</td><td>2x_NMKD-DeJPG → then 4× upscaler</td></tr>
        </tbody>
      </table>

      <h2>Where to download</h2>
      <p>
        NMKD's UpscalerWiki on github.com/NMKD or community mirrors. Some are also on civitai/HF
        under the upscale-models category.
      </p>

      <NoteBlock title="Don't hoard">
        It's tempting to download 30 upscalers. You won't use 25 of them. Pick 3–5 that match your
        actual content domains. The differences between similar models are usually subtle.
      </NoteBlock>
    </>
  )
}
