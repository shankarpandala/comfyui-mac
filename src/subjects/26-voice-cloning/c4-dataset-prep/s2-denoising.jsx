import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S2Denoising() {
  return (
    <>
      <p>
        Real-world recordings have HVAC hum, fridge noise, fan whoosh. Denoising before training
        / cloning produces meaningfully better output.
      </p>

      <h2>The tools</h2>

      <h3>RNNoise / NoiseTorch</h3>
      <p>Real-time denoising via deep learning. Works on Mac as a CLI tool.</p>

      <h3>Audacity Noise Reduction</h3>
      <p>Free GUI. Sample 10 seconds of "noise only" silence; Audacity subtracts that profile from the rest.</p>

      <h3>Adobe Enhance Speech (cloud)</h3>
      <p>Best-in-class denoising for speech. Free with limits. Upload, download cleaned audio. Worth using for your reference recording.</p>

      <h3>ffmpeg afftdn filter</h3>
      <CommandBlock command="ffmpeg -i raw.wav -af afftdn=nf=-25 cleaned.wav" label="Quick denoise via ffmpeg" />

      <h2>The order of operations</h2>
      <ol>
        <li>Record clean as you can.</li>
        <li>Denoise (any tool above).</li>
        <li>Trim silence at start/end.</li>
        <li>Normalize volume to -3 dB peak.</li>
        <li>Save as wav 44.1 kHz.</li>
      </ol>

      <h2>How much denoising</h2>
      <p>
        Aggressive denoising removes background but introduces "underwater" artifacts. Light
        denoising preserves naturalness. For voice cloning: lean light. The TTS / RVC model can
        handle some background; over-denoised speech sounds robotic.
      </p>

      <NoteBlock title="The Adobe Enhance recommendation">
        For a one-shot cleanup of your voice clone reference recording, Adobe Enhance Speech (free
        with limits) produces noticeably better results than other tools. Worth using even just
        once for the F5-TTS reference clip.
      </NoteBlock>
    </>
  )
}
