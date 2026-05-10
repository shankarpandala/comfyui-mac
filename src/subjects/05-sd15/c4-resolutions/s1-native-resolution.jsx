import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1NativeResolution() {
  return (
    <>
      <p>
        SD 1.5 was trained at 512×512. Going larger introduces a specific failure mode: composition
        breaks down because the UNet's effective receptive field is sized for that resolution. The
        model literally can't "see" the whole image at higher sizes.
      </p>

      <h2>Symptoms of going too large</h2>
      <ul>
        <li>Two or three faces in a portrait that should have one.</li>
        <li>Repeated body parts (arms, legs growing out of unexpected places).</li>
        <li>Tiled-looking compositions where the same element repeats.</li>
        <li>Loss of overall scene coherence.</li>
      </ul>

      <h2>The safe range</h2>
      <table>
        <thead><tr><th>Resolution</th><th>Behavior</th></tr></thead>
        <tbody>
          <tr><td>448×448</td><td>Fine; slightly smaller than native</td></tr>
          <tr><td>512×512</td><td>Native; sweet spot</td></tr>
          <tr><td>512×768 / 768×512</td><td>OK with portrait/landscape prompt cues</td></tr>
          <tr><td>768×768</td><td>Mostly OK; occasional composition issues</td></tr>
          <tr><td>1024×1024</td><td>Often broken — use SDXL instead</td></tr>
        </tbody>
      </table>

      <h2>Aspect ratios for SD 1.5</h2>
      <table>
        <thead><tr><th>Ratio</th><th>Width × Height</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td>1:1</td><td>512×512</td><td>Square portrait or icon</td></tr>
          <tr><td>2:3</td><td>512×768</td><td>Portrait orientation</td></tr>
          <tr><td>3:2</td><td>768×512</td><td>Landscape orientation</td></tr>
          <tr><td>16:9</td><td>912×512</td><td>Wide cinematic</td></tr>
          <tr><td>9:16</td><td>448×768</td><td>Reels/Shorts (cropped post-gen if needed)</td></tr>
        </tbody>
      </table>

      <h2>Width and height must be multiples of 8</h2>
      <p>
        The VAE downscales by 8×, and the UNet's stride alignment requires multiples of 8. ComfyUI
        will silently round, but staying exactly on multiples of 64 is safer for known-good behavior.
      </p>

      <NoteBlock title="The hi-res fix workaround">
        If you want a 1024×1024 SD 1.5 output, the workflow is: generate at 512, latent-upscale to
        1024, and run a low-denoise sampler pass at the larger size. We cover this in the next
        section.
      </NoteBlock>
    </>
  )
}
