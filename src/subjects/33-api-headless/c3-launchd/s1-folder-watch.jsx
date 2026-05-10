import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FolderWatch() {
  return (
    <>
      <p>macOS launchd for scheduled / folder-watch automation. Cron-equivalent on Mac. Runs your ComfyUI client scripts on schedule.</p>

      <h2>The launchd plist</h2>
      <p>Save as <code>~/Library/LaunchAgents/com.you.comfy-cron.plist</code>:</p>
      <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.you.comfy-cron</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/you/AI/ComfyUI/venv/bin/python</string>
    <string>/Users/you/scripts/run_workflow.py</string>
  </array>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key><integer>9</integer>
    <key>Minute</key><integer>0</integer>
  </dict>
  <key>StandardOutPath</key>
  <string>/tmp/comfy-cron.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/comfy-cron.err</string>
</dict>
</plist>`}</pre>

      <h2>Activate</h2>
      <CommandBlock command="launchctl load ~/Library/LaunchAgents/com.you.comfy-cron.plist" />

      <h2>Folder watch alternative</h2>
      <p>
        For "submit workflow when a new file appears": use <code>fswatch</code> CLI tool to watch a
        directory and trigger your script on changes.
      </p>
      <CommandBlock command="brew install fswatch" />
      <CommandBlock command="fswatch -o /path/to/watch | xargs -n1 -I{} python run_workflow.py" />

      <h2>Use cases</h2>
      <ul>
        <li>Daily Reels generation at 9 AM.</li>
        <li>Auto-process new photos dropped into a folder.</li>
        <li>Scheduled batches across overnight idle time.</li>
      </ul>

      <NoteBlock title="The 'AI workflow on autopilot'">
        Combine launchd + ComfyUI API client + your trained LoRAs = scheduled AI clone content
        production. Posts go up while you sleep.
      </NoteBlock>
    </>
  )
}
