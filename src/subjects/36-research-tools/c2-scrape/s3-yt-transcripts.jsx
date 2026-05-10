import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3YtTranscripts() {
  return (
    <>
      <p>YouTube transcripts — fetch captions / auto-generated transcripts for video research.</p>

      <h2>Install</h2>
      <CommandBlock command="pip install youtube-transcript-api" />

      <h2>Use</h2>
      <pre>{`from youtube_transcript_api import YouTubeTranscriptApi

video_id = "dQw4w9WgXcQ"
transcript = YouTubeTranscriptApi.get_transcript(video_id)
text = " ".join(seg["text"] for seg in transcript)
print(text)`}</pre>

      <h2>For the agentic capstone</h2>
      <ul>
        <li>Research current trending videos on a topic.</li>
        <li>Pull transcripts of competitor / inspiration content.</li>
        <li>Feed transcripts to LLM for "what are people saying about X" summary.</li>
      </ul>

      <h2>Alternatives</h2>
      <ul>
        <li><code>yt-dlp --write-auto-sub --skip-download</code> — fetch via yt-dlp.</li>
        <li>Whisper on the audio if no captions exist (slower, more expensive).</li>
      </ul>

      <NoteBlock title="The 'video research without watching' workflow">
        For the research agent: fetch transcripts of top 5 YouTube videos on the topic; LLM
        synthesizes the gist across all of them; that becomes the script's foundation.
      </NoteBlock>
    </>
  )
}
