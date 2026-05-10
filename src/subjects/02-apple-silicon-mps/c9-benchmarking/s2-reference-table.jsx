import NoteBlock from '../../../components/content/NoteBlock.jsx'
import BenchmarkChart from '../../../components/content/BenchmarkChart.jsx'

export default function S2ReferenceTable() {
  return (
    <>
      <p>
        Reference numbers for M5 Pro / 24 GB. Treat these as ballparks, not contracts — yours will
        vary ±20% based on macOS version, PyTorch version, what else is running, and thermal
        condition. They're here so you can spot when something is severely wrong.
      </p>

      <h2>Image generation (steady state, after warm-up)</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Resolution</th>
            <th>Sampler</th>
            <th>Steps</th>
            <th>it/s</th>
            <th>Wall time</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>SD 1.5 fp16</td><td>512×512</td><td>dpm++ 2m karras</td><td>20</td><td>~7</td><td>~3 s</td></tr>
          <tr><td>SDXL fp16</td><td>1024×1024</td><td>dpm++ 2m karras</td><td>25</td><td>~1.5</td><td>~17 s</td></tr>
          <tr><td>SDXL Lightning</td><td>1024×1024</td><td>euler</td><td>4</td><td>~1.6</td><td>~3 s</td></tr>
          <tr><td>SD3.5 Medium bf16</td><td>1024×1024</td><td>dpm++ 2m</td><td>28</td><td>~0.8</td><td>~35 s</td></tr>
          <tr><td>FLUX Schnell GGUF Q5</td><td>1024×1024</td><td>euler</td><td>4</td><td>~0.5</td><td>~8 s</td></tr>
          <tr><td>FLUX Dev GGUF Q5</td><td>1024×1024</td><td>euler</td><td>20</td><td>~0.45</td><td>~45 s</td></tr>
          <tr><td>FLUX Dev GGUF Q4_K_S</td><td>1024×1024</td><td>euler</td><td>20</td><td>~0.55</td><td>~36 s</td></tr>
        </tbody>
      </table>

      <BenchmarkChart
        title="Image generation it/s on M5 Pro / 24 GB"
        yLabel="it/s"
        data={[
          { label: 'SD1.5 512', value: 7 },
          { label: 'SDXL 1024', value: 1.5 },
          { label: 'SDXL Lightning', value: 1.6 },
          { label: 'SD3.5 Med', value: 0.8 },
          { label: 'FLUX Schnell Q5', value: 0.5 },
          { label: 'FLUX Dev Q5', value: 0.45 },
          { label: 'FLUX Dev Q4', value: 0.55 },
        ]}
      />

      <h2>Video generation (per 5-second clip)</h2>
      <table>
        <thead>
          <tr><th>Model</th><th>Resolution</th><th>Steps</th><th>Wall time</th></tr>
        </thead>
        <tbody>
          <tr><td>LTX-Video 0.9.7 t2v</td><td>768×512</td><td>40</td><td>~1.5–3 min</td></tr>
          <tr><td>HunyuanVideo Q4 t2v</td><td>544×960</td><td>30</td><td>~10–15 min</td></tr>
          <tr><td>Wan 2.2 5B t2v</td><td>720×480</td><td>30</td><td>~5–8 min</td></tr>
          <tr><td>Wan 2.1 14B Q4 i2v</td><td>720×480</td><td>30</td><td>~15–25 min</td></tr>
          <tr><td>SVD-XT i2v</td><td>1024×576</td><td>30</td><td>~3–5 min</td></tr>
          <tr><td>AnimateDiff SDXL 16 fr</td><td>1024×576</td><td>20</td><td>~2 min</td></tr>
        </tbody>
      </table>

      <h2>Audio / voice / LLM (Phase 4 + 7 sneak peek)</h2>
      <table>
        <thead>
          <tr><th>Model</th><th>Throughput / latency</th></tr>
        </thead>
        <tbody>
          <tr><td>F5-TTS (10 s output)</td><td>~6–8 s</td></tr>
          <tr><td>Whisper-Large-v3 (1 min audio)</td><td>~15–20 s</td></tr>
          <tr><td>MusicGen Medium (10 s)</td><td>~30–45 s</td></tr>
          <tr><td>Llama-3 8B Q4 (Ollama)</td><td>~25–40 tok/s</td></tr>
          <tr><td>Qwen 2.5 7B Q5 (mlx-lm)</td><td>~30–50 tok/s</td></tr>
        </tbody>
      </table>

      <h2>How to use these numbers</h2>
      <ul>
        <li>If you're getting <strong>within 30%</strong> of these values: healthy.</li>
        <li>If you're getting <strong>2–5× slower</strong>: probable CPU fallback. Diagnose with chapter 6.</li>
        <li>If you're getting <strong>10×+ slower</strong>: probable swap. Reduce memory pressure first.</li>
        <li>If you're getting <strong>faster</strong>: congrats, file a PR to update this table.</li>
      </ul>

      <NoteBlock title="What's next">
        With Subject 02 complete, you understand the Mac side of the equation. Subject 03 dives into
        diffusion theory — what KSampler is actually doing during those it/s. Subject 04 codifies
        quantization. Then Subject 08 ships the Mac-tuned FLUX recipe that uses everything from this
        chapter.
      </NoteBlock>
    </>
  )
}
