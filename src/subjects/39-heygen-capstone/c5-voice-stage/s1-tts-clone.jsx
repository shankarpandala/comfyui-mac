import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1TtsClone() {
  return (
    <>
      <p>TTS stage — F5-TTS calls per script segment. Already covered in Subject 26 / 29.</p>

      <h2>Pipeline integration</h2>
      <pre>{`def tts_node(state):
    scenes = state["script"]["scenes"]
    audio_artifacts = []
    for scene in scenes:
        if scene["narration"]:
            audio_path = f"runs/{run_id}/audio/scene-{scene['id']}.wav"
            f5_tts_generate(
                reference="my-voice-reference.wav",
                target_text=scene["narration"],
                output_path=audio_path,
                speed=1.0
            )
            audio_artifacts.append({
                "scene_id": scene["id"],
                "audio_path": audio_path,
                "duration_sec": get_duration(audio_path)
            })
    return {"audio_artifacts": audio_artifacts}`}</pre>

      <h2>Per-scene call</h2>
      <ul>
        <li>~20 s per 30s of narration on Mac.</li>
        <li>For 60s Reel with ~6 scenes (mix of talking-head + B-roll), ~5 minutes total TTS.</li>
      </ul>

      <NoteBlock title="The parallel-render opportunity">
        TTS is independent of visual generation — they can run in parallel. Subject 38's parallel
        crew pattern saves ~5 minutes per Reel.
      </NoteBlock>
    </>
  )
}
