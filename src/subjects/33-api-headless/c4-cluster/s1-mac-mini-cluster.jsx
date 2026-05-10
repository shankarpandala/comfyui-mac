import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MacMiniCluster() {
  return (
    <>
      <p>Multi-Mac cluster patterns. Spread renders across multiple Macs for higher throughput.</p>

      <h2>The setup</h2>
      <ul>
        <li>2+ Macs (any combination of MacBook + Mac mini + Studio).</li>
        <li>Same network.</li>
        <li>Each runs ComfyUI with <code>--listen 0.0.0.0</code>.</li>
        <li>Shared models folder (NFS / SMB share or external SSD shuttling).</li>
      </ul>

      <h2>Job dispatching</h2>
      <pre>{`hosts = [
    "192.168.1.10:8188",  # MacBook M5 Pro
    "192.168.1.11:8188",  # Mac mini M4
    "192.168.1.12:8188",  # Mac Studio M4 Max
]

class ClusterClient:
    def __init__(self, hosts):
        self.clients = [ComfyClient(host=h) for h in hosts]
        self.next = 0  # round-robin

    def submit(self, workflow):
        client = self.clients[self.next]
        self.next = (self.next + 1) % len(self.clients)
        return client, client.submit(workflow)`}</pre>

      <h2>Use cases</h2>
      <ul>
        <li>Batch overnight render of 50 Reels — distribute across 3 Macs.</li>
        <li>Long video render — split segments across machines.</li>
        <li>Parallel LoRA training (kohya runs on machine 1; ai-toolkit on machine 2).</li>
      </ul>

      <h2>Bottleneck</h2>
      <p>
        Shared models folder over network: ~100 MB/s for SMB. Loading FLUX (~12 GB) over network =
        ~2 min. For frequent loads, mirror the models folder to each Mac's local SSD; sync nightly.
      </p>

      <NoteBlock title="The 'multi-Mac for content scaling'">
        For serious content production (10+ Reels per week), a 2nd Mac mini ($800) doubles your
        throughput. ROI in a few months for active creators.
      </NoteBlock>
    </>
  )
}
