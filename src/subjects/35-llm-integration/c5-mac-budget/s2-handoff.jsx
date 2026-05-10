import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S2Handoff() {
  return (
    <>
      <p>Sequential handoff pattern — when memory's too tight for LLM + ComfyUI to coexist, run them in stages.</p>

      <h2>The pattern</h2>
      <ol>
        <li>LLM stage: generate scripts, plans, prompts. Save to disk.</li>
        <li>Stop Ollama service.</li>
        <li>ComfyUI stage: read inputs from disk, generate outputs.</li>
        <li>(If feedback needed) Stop ComfyUI; restart Ollama; LLM critiques outputs.</li>
        <li>Repeat as needed.</li>
      </ol>

      <h2>Stop / start Ollama</h2>
      <CommandBlock command="brew services stop ollama" />
      <CommandBlock command="brew services start ollama" />

      <h2>The trade-off</h2>
      <ul>
        <li>Pro: avoids memory pressure entirely. Each stage gets full 24 GB.</li>
        <li>Con: longer turnaround. Each stage transition adds ~30 s of stop/start/load.</li>
        <li>Con: makes interactive iteration slower.</li>
      </ul>

      <h2>When to use each pattern</h2>
      <ul>
        <li><strong>Coexistence</strong>: tight but works. For ongoing iterative work where stage transitions are frequent.</li>
        <li><strong>Sequential handoff</strong>: when running long batch pipelines. Each stage gets max memory; transitions are infrequent.</li>
      </ul>

      <NoteBlock title="The capstone uses both">
        For the Phase 7 capstone production pipeline (Subject 39), default to coexistence with
        the 3B Llama + FLUX Q4 combo. Switch to sequential handoff for hero-quality renders where
        bigger models are needed.
      </NoteBlock>
    </>
  )
}
