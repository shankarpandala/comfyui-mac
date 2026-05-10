import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MactopAsitop() {
  return (
    <>
      <p>
        Activity Monitor is good. <code>asitop</code> and <code>mactop</code> are better — they're
        terminal-based, real-time, with per-engine breakdown of GPU / Neural Engine / power. For
        diagnosing a sluggish ComfyUI run, they're worth installing.
      </p>

      <h2>asitop</h2>
      <p>Python tool that wraps <code>powermetrics</code> with a colorful TUI.</p>
      <CommandBlock command="brew install asitop" />
      <CommandBlock command="sudo asitop" label="Needs sudo for powermetrics" />

      <p>The display:</p>
      <ul>
        <li><strong>CPU bars</strong> — P-cores and E-cores separately. P-cores spike during Python orchestration.</li>
        <li><strong>GPU bar</strong> — what you most want during sampling. Should be near full.</li>
        <li><strong>ANE bar</strong> — should be 0 for ComfyUI (ANE isn't used).</li>
        <li><strong>Memory bar</strong> — total system memory pressure.</li>
        <li><strong>Memory bandwidth</strong> — current GB/s vs peak. Diffusion is bandwidth-bound; this should be high during forward passes.</li>
        <li><strong>Power</strong> — total package watts; useful on battery.</li>
      </ul>

      <h2>mactop</h2>
      <p>A Go-based equivalent with similar information, slightly different layout.</p>
      <CommandBlock command="brew install mactop" />
      <CommandBlock command="sudo mactop" />

      <h2>What "good" looks like</h2>
      <p>During a healthy sampler step:</p>
      <ul>
        <li>GPU: 80–100%.</li>
        <li>Memory bandwidth: 60–95% of peak (model size dependent).</li>
        <li>P-core: 50–100% on at least one core (Python).</li>
        <li>ANE: 0%.</li>
      </ul>

      <h2>What "CPU fallback active" looks like</h2>
      <ul>
        <li>P-core: 100% on multiple cores.</li>
        <li>GPU: low, 10–30%.</li>
        <li>Memory bandwidth: low.</li>
        <li>Sampler steps: much slower than expected.</li>
      </ul>
      <p>This is the live signal that your workflow is hitting a non-MPS op and bouncing through CPU.</p>

      <h2>What "swapping" looks like</h2>
      <ul>
        <li>Memory bar: pegged.</li>
        <li>GPU: spiky, dropping to 0% repeatedly.</li>
        <li>Disk I/O light: solid.</li>
        <li>asitop's "swap" line increasing.</li>
      </ul>

      <NoteBlock title="powermetrics needs sudo">
        Both tools wrap <code>powermetrics</code>, which on macOS is privileged. The first time it
        prompts for your password; subsequent runs in the same shell session won't.
      </NoteBlock>
    </>
  )
}
