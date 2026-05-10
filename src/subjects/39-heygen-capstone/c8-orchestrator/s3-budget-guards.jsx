import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3BudgetGuards() {
  return (
    <>
      <p>M5 Pro budget guards — memory + time limits per stage. Prevent runaway pipelines.</p>

      <h2>Memory checks</h2>
      <pre>{`import psutil

def memory_pressure_ok():
    mem = psutil.virtual_memory()
    return mem.percent < 85  # leave 15% headroom

def visual_node(state):
    while not memory_pressure_ok():
        log("Memory pressure high; waiting...")
        time.sleep(30)
    # proceed`}</pre>

      <h2>Time budgets</h2>
      <pre>{`STAGE_TIMEOUTS = {
    "research": 600,        # 10 min
    "script": 300,          # 5 min
    "visual": 3600,         # 60 min for ~6 scenes
    "tts": 600,             # 10 min
    "talking_head_sync": 3600,  # 60 min
    "compose": 300,         # 5 min
}`}</pre>

      <h2>Per-Reel total budget</h2>
      <p>
        ~90 minutes for a polished 60s Reel. ~3 hours for a 3-min Short. ~6 hours for a 10-min
        long-form. Budget guards prevent infinite loops.
      </p>

      <h2>Disk checks</h2>
      <p>Per-run folder caps at ~5 GB. Alert if approaching disk limits.</p>

      <NoteBlock title="The 'fail fast at limits' rule">
        Better to fail at minute 30 than to discover at hour 4 that the pipeline is in an infinite
        loop. Budget guards enforce sanity.
      </NoteBlock>
    </>
  )
}
