import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1PlatformPresets() {
  return (
    <>
      <p>Platform presets for publishing. Each platform has its quirks; presets handle them.</p>

      <h2>Per-platform requirements</h2>
      <table>
        <thead><tr><th>Platform</th><th>Aspect</th><th>Resolution</th><th>Codec</th><th>Max length</th></tr></thead>
        <tbody>
          <tr><td>Instagram Reels</td><td>9:16</td><td>1080×1920</td><td>H.264</td><td>90s</td></tr>
          <tr><td>TikTok</td><td>9:16</td><td>1080×1920</td><td>H.264</td><td>10 min</td></tr>
          <tr><td>YouTube Shorts</td><td>9:16</td><td>1080×1920</td><td>H.264</td><td>60s</td></tr>
          <tr><td>YouTube Long-form</td><td>16:9</td><td>1920×1080</td><td>H.264</td><td>12 hr</td></tr>
          <tr><td>Twitter / X</td><td>16:9 preferred</td><td>1280×720</td><td>H.264</td><td>2:20</td></tr>
          <tr><td>LinkedIn</td><td>1:1 or 16:9</td><td>1080×1080 or 1920×1080</td><td>H.264</td><td>10 min</td></tr>
          <tr><td>Pinterest</td><td>9:16</td><td>1080×1920</td><td>H.264</td><td>5 min</td></tr>
        </tbody>
      </table>

      <h2>Pipeline integration</h2>
      <p>publish_node generates all platform-specific exports from the master file:</p>
      <pre>{`def publish_node(state):
    master = state["final_master_path"]
    exports = {}
    for platform in state["target_platforms"]:
        exports[platform] = export_for_platform(master, platform)
    return {"exports": exports}`}</pre>

      <NoteBlock title="The 'multi-platform is free' principle">
        Once you have a polished master, exporting to 5 platforms takes ~5 minutes of ffmpeg time.
        Default to all-platform export.
      </NoteBlock>
    </>
  )
}
