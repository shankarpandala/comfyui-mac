import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2TimeBudget() {
  return (
    <>
      <p>
        Realistic wall-clock numbers for SDXL LoRA training on M5 Pro. Plan your training around
        these — set up before bed for overnight, smaller jobs in the background while you do other
        work.
      </p>

      <h2>Per-step time</h2>
      <p>SDXL LoRA on M5 Pro at 1024×1024, batch 1, gradient accumulation 4: ~8–12 seconds per effective batch step.</p>

      <h2>Total time by configuration</h2>
      <table>
        <thead>
          <tr><th>Configuration</th><th>Total steps</th><th>Wall time</th></tr>
        </thead>
        <tbody>
          <tr><td>Style LoRA, 50 images, 10 epochs</td><td>500</td><td>~1 hour</td></tr>
          <tr><td>Self-clone, 50 images + 200 reg, 10 epochs</td><td>2500</td><td>~6 hours</td></tr>
          <tr><td>Detailed character, 100 images, 15 epochs</td><td>1500</td><td>~4 hours</td></tr>
          <tr><td>Concept LoRA, 30 images, 10 epochs</td><td>300</td><td>~40 min</td></tr>
        </tbody>
      </table>

      <h2>Sample-during-training overhead</h2>
      <p>
        Generate 4 samples every 250 steps (recommended for catching overfit) — each adds ~1 minute
        of wall time. For a 2500-step run, that's an extra ~10 minutes total. Worth it.
      </p>

      <h2>Memory pressure during training</h2>
      <p>
        Activity Monitor will show 17–18 GB committed for the full duration. Don't open browsers,
        IDEs, or anything memory-fat during training — risk of swap (which would slow training to a
        crawl).
      </p>

      <h2>Thermal management</h2>
      <p>
        4+ hour training sessions push the Mac thermal envelope. Step time may slow by 10–15% after
        the first hour as the chip throttles. If you have a fan stand or laptop riser, use it for
        long training runs.
      </p>

      <h2>Battery vs power</h2>
      <p>Always plug in. Long training will drain a battery in 2 hours and the model state may not survive a hibernation.</p>

      <NoteBlock title="The 'overnight' rhythm">
        For self-clone / detailed character LoRAs (3+ hours), start at 11 PM, wake up to a finished
        LoRA + checkpoint snapshots. Pick the best snapshot in the morning. This is the Mac LoRA
        training cadence.
      </NoteBlock>
    </>
  )
}
