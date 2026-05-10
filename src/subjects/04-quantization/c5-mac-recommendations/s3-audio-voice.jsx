import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3AudioVoice() {
  return (
    <>
      <p>
        Audio, voice, and LLM models for the agentic capstone. These are smaller individually but
        diverse — you may end up with several. Most run on Mac without quantization gymnastics
        since they're under 8 B params.
      </p>

      <h2>TTS (Phase 4)</h2>
      <table>
        <thead><tr><th>Model</th><th>Source</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>F5-TTS</td><td>HF: <code>SWivid/F5-TTS</code></td><td>~1 GB; zero-shot voice cloning. Mac default.</td></tr>
          <tr><td>ChatTTS</td><td>HF: <code>2Noise/ChatTTS</code></td><td>~1 GB; emotive English/Chinese</td></tr>
          <tr><td>XTTS-v2</td><td>HF: <code>coqui/XTTS-v2</code></td><td>~2 GB; multilingual; license restrictive</td></tr>
          <tr><td>Kokoro-TTS</td><td>HF: <code>hexgrad/Kokoro-82M</code></td><td>82 M params; fastest on Mac</td></tr>
        </tbody>
      </table>

      <h2>Voice cloning (Phase 4)</h2>
      <table>
        <thead><tr><th>Model</th><th>Source / pattern</th></tr></thead>
        <tbody>
          <tr><td>RVC (Retrieval Voice Conversion)</td><td>Trained per-voice; templates from RVC v2 ecosystem</td></tr>
          <tr><td>OpenVoice v2</td><td>HF: <code>myshell-ai/OpenVoiceV2</code></td></tr>
          <tr><td>F5-TTS zero-shot</td><td>Same F5-TTS model; clone from a 10 s reference</td></tr>
        </tbody>
      </table>

      <h2>Music & audio (Phase 4)</h2>
      <table>
        <thead><tr><th>Model</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td>MusicGen Medium</td><td>HF: <code>facebook/musicgen-medium</code></td></tr>
          <tr><td>Stable Audio Open</td><td>HF: <code>stabilityai/stable-audio-open-1.0</code></td></tr>
          <tr><td>ACE-Step</td><td>HF: <code>ACE-Step/ACE-Step-v1-3.5B</code></td></tr>
        </tbody>
      </table>

      <h2>Whisper (transcription, used in Subject 26)</h2>
      <table>
        <thead><tr><th>Model</th><th>Source</th><th>Mac note</th></tr></thead>
        <tbody>
          <tr><td>Whisper-Large-v3</td><td>HF: <code>openai/whisper-large-v3</code></td><td>fp16, ~3 GB</td></tr>
          <tr><td>Whisper-Large-v3 MLX</td><td>HF: <code>mlx-community/whisper-large-v3-mlx</code></td><td>Faster on Mac via MLX</td></tr>
        </tbody>
      </table>

      <h2>LLMs for Phase 7 (agentic capstone)</h2>
      <p>Get one or two of these — you don't need them all.</p>
      <table>
        <thead><tr><th>Model</th><th>Quant</th><th>Source / runtime</th></tr></thead>
        <tbody>
          <tr><td>Llama-3.2 8B Instruct</td><td>Q4_K_M (~5 GB)</td><td>Ollama: <code>ollama pull llama3.2</code></td></tr>
          <tr><td>Qwen 2.5 7B Instruct</td><td>Q5_K_M (~5.5 GB)</td><td>Ollama: <code>ollama pull qwen2.5:7b</code></td></tr>
          <tr><td>Qwen 2.5 14B Instruct</td><td>Q4_K_M (~9 GB)</td><td>Ollama: <code>ollama pull qwen2.5:14b</code></td></tr>
          <tr><td>DeepSeek-R1 Distill 8B</td><td>Q4_K_M</td><td>Ollama: <code>ollama pull deepseek-r1:8b</code></td></tr>
          <tr><td>Llava 13B (vision)</td><td>Q4_K_M</td><td>Ollama: <code>ollama pull llava:13b</code></td></tr>
        </tbody>
      </table>

      <h2>Identity & face (Phase 5)</h2>
      <table>
        <thead><tr><th>Model</th><th>File</th></tr></thead>
        <tbody>
          <tr><td>PuLID</td><td><code>pulid_flux_v0.9.1.safetensors</code> (FLUX) or <code>pulid_v1.bin</code> (SDXL)</td></tr>
          <tr><td>InstantID</td><td><code>instantid-ip-adapter.bin</code></td></tr>
          <tr><td>IP-Adapter FaceID Plus v2</td><td><code>ip-adapter-faceid-plusv2_sdxl.bin</code></td></tr>
          <tr><td>InsightFace antelope_v2</td><td>Used by FaceID for face detection/encoding</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The agentic stack disk budget">
        For the Phase 7 capstone end state: ~30 GB FLUX + Hunyuan + Wan video models, ~10 GB
        TTS + voice models, ~10 GB Whisper + MLX models, ~10 GB LLM (one Q5 7B), ~5 GB identity
        adapters. Total around ~65 GB. Subject 01 / Chapter 8's external-SSD symlink trick is
        designed for exactly this.
      </NoteBlock>
    </>
  )
}
