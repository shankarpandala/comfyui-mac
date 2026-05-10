import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3MultiTake() {
  return (
    <>
      <p>Multi-take selection — generate 3-5 takes per scene; LLM-judge picks best.</p>

      <h2>The pattern</h2>
      <pre>{`def generate_with_takes(narration, n_takes=3):
    takes = []
    for seed in range(n_takes):
        path = f"take-{seed}.wav"
        f5_tts_generate(target_text=narration, seed=seed, output_path=path)
        takes.append(path)

    # LLM judge (with Whisper transcript verification)
    transcripts = [whisper(t) for t in takes]
    best = llm(f"""Pick the take where transcription matches narration best:
Narration: {narration}
Take 1: {transcripts[0]}
Take 2: {transcripts[1]}
Take 3: {transcripts[2]}

Respond JSON: {{ "best_take_index": int, "reasoning": str }}""").json()

    return takes[best["best_take_index"]]`}</pre>

      <h2>What the judge looks for</h2>
      <ul>
        <li>Word accuracy (transcription matches narration).</li>
        <li>No mispronunciations.</li>
        <li>Natural pacing.</li>
        <li>No glitches / artifacts.</li>
      </ul>

      <h2>Trade-off</h2>
      <p>3× the TTS time. Worth it for hero content; skip for batch B-roll.</p>

      <NoteBlock title="The 'auto-select with audit' principle">
        Auto-select via LLM judge. Save all takes; keep best one in final/. If something sounds
        off later, you can swap to a different take without regenerating.
      </NoteBlock>
    </>
  )
}
