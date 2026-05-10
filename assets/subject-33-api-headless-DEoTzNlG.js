import{j as e}from"./vendor-DGc3ZbP6.js";import{C as t,N as r}from"./subject-01-comfyui-fundamentals-DriRrKHa.js";function o(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"ComfyUI's HTTP API. Submit workflows; poll for results. Foundation for headless / agentic / scheduled production."}),e.jsx("h2",{children:"Launching as a server"}),e.jsx(t,{command:"~/AI/ComfyUI/start.sh --listen 0.0.0.0 --port 8188"}),e.jsx("h2",{children:"The endpoints"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Endpoint"}),e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/prompt"})}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"Submit a workflow (API JSON format)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/queue"})}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"Inspect current queue"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/history"})}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"Past prompts and outputs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("code",{children:["/history/","{prompt_id}"]})}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"Specific prompt result"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/view"})}),e.jsx("td",{children:"GET"}),e.jsx("td",{children:"Fetch a generated image"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/upload/image"})}),e.jsx("td",{children:"POST"}),e.jsx("td",{children:"Upload input images"})]})]})]}),e.jsx("h2",{children:"Submit a workflow"}),e.jsx(t,{command:`curl -X POST http://localhost:8188/prompt -H "Content-Type: application/json" -d '{"prompt": <api_format_workflow>, "client_id": "myapp"}'`,label:"Returns prompt_id"}),e.jsx("h2",{children:"API JSON format"}),e.jsx("p",{children:"Different from standard workflow JSON. Get it: in ComfyUI, enable Dev Mode in Settings, then File → Save (API Format)."}),e.jsx("h2",{children:"Poll for completion"}),e.jsx(t,{command:"curl http://localhost:8188/history/<prompt_id>"}),e.jsx("h2",{children:"Mac specifics"}),e.jsxs("p",{children:["Server runs on MPS the same as the GUI. No special config beyond ",e.jsx("code",{children:"--listen 0.0.0.0"})," if accessing from another machine on your network."]}),e.jsx(r,{title:"The agentic capstone foundation",children:"Phase 7's agentic orchestration drives ComfyUI through this API. Every workflow stage in Subject 39's pipeline is a /prompt submission with API JSON."})]})}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));function s(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Python client pattern for ComfyUI API. Submit, poll, download. Reusable across all your automations."}),e.jsx("h2",{children:"Minimal client"}),e.jsx("pre",{children:`import json, time, urllib.request

class ComfyClient:
    def __init__(self, host="127.0.0.1:8188", client_id="myapp"):
        self.host = host
        self.client_id = client_id

    def submit(self, workflow_api_json):
        data = json.dumps({
            "prompt": workflow_api_json,
            "client_id": self.client_id
        }).encode()
        req = urllib.request.Request(
            f"http://{self.host}/prompt",
            data=data,
            headers={"Content-Type": "application/json"}
        )
        return json.loads(urllib.request.urlopen(req).read())["prompt_id"]

    def wait(self, prompt_id, timeout=600, poll=2):
        start = time.time()
        while time.time() - start < timeout:
            with urllib.request.urlopen(
                f"http://{self.host}/history/{prompt_id}"
            ) as r:
                history = json.loads(r.read())
            if prompt_id in history:
                return history[prompt_id]
            time.sleep(poll)
        raise TimeoutError(prompt_id)

    def download_outputs(self, history, save_dir):
        outputs = history.get("outputs", {})
        for node_id, node_outputs in outputs.items():
            for img in node_outputs.get("images", []):
                fn = img["filename"]
                with urllib.request.urlopen(
                    f"http://{self.host}/view"
                    f"?filename={fn}&subfolder={img['subfolder']}"
                    f"&type={img['type']}"
                ) as r:
                    open(f"{save_dir}/{fn}", "wb").write(r.read())`}),e.jsx("h2",{children:"Usage"}),e.jsx("pre",{children:`with open("workflow_api.json") as f:
    wf = json.load(f)

client = ComfyClient()
prompt_id = client.submit(wf)
result = client.wait(prompt_id)
client.download_outputs(result, "outputs/")`}),e.jsx(r,{title:"The Mac-friendly automation",children:"This pattern + a folder of workflow JSONs is the foundation for all production automation. Used in cron jobs, agentic LLM tools, batch processing scripts."})]})}const a=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));function i(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"macOS launchd for scheduled / folder-watch automation. Cron-equivalent on Mac. Runs your ComfyUI client scripts on schedule."}),e.jsx("h2",{children:"The launchd plist"}),e.jsxs("p",{children:["Save as ",e.jsx("code",{children:"~/Library/LaunchAgents/com.you.comfy-cron.plist"}),":"]}),e.jsx("pre",{children:`<?xml version="1.0" encoding="UTF-8"?>
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
</plist>`}),e.jsx("h2",{children:"Activate"}),e.jsx(t,{command:"launchctl load ~/Library/LaunchAgents/com.you.comfy-cron.plist"}),e.jsx("h2",{children:"Folder watch alternative"}),e.jsxs("p",{children:['For "submit workflow when a new file appears": use ',e.jsx("code",{children:"fswatch"})," CLI tool to watch a directory and trigger your script on changes."]}),e.jsx(t,{command:"brew install fswatch"}),e.jsx(t,{command:"fswatch -o /path/to/watch | xargs -n1 -I{} python run_workflow.py"}),e.jsx("h2",{children:"Use cases"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Daily Reels generation at 9 AM."}),e.jsx("li",{children:"Auto-process new photos dropped into a folder."}),e.jsx("li",{children:"Scheduled batches across overnight idle time."})]}),e.jsx(r,{title:"The 'AI workflow on autopilot'",children:"Combine launchd + ComfyUI API client + your trained LoRAs = scheduled AI clone content production. Posts go up while you sleep."})]})}const h=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));function n(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Multi-Mac cluster patterns. Spread renders across multiple Macs for higher throughput."}),e.jsx("h2",{children:"The setup"}),e.jsxs("ul",{children:[e.jsx("li",{children:"2+ Macs (any combination of MacBook + Mac mini + Studio)."}),e.jsx("li",{children:"Same network."}),e.jsxs("li",{children:["Each runs ComfyUI with ",e.jsx("code",{children:"--listen 0.0.0.0"}),"."]}),e.jsx("li",{children:"Shared models folder (NFS / SMB share or external SSD shuttling)."})]}),e.jsx("h2",{children:"Job dispatching"}),e.jsx("pre",{children:`hosts = [
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
        return client, client.submit(workflow)`}),e.jsx("h2",{children:"Use cases"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Batch overnight render of 50 Reels — distribute across 3 Macs."}),e.jsx("li",{children:"Long video render — split segments across machines."}),e.jsx("li",{children:"Parallel LoRA training (kohya runs on machine 1; ai-toolkit on machine 2)."})]}),e.jsx("h2",{children:"Bottleneck"}),e.jsx("p",{children:"Shared models folder over network: ~100 MB/s for SMB. Loading FLUX (~12 GB) over network = ~2 min. For frequent loads, mirror the models folder to each Mac's local SSD; sync nightly."}),e.jsx(r,{title:"The 'multi-Mac for content scaling'",children:"For serious content production (10+ Reels per week), a 2nd Mac mini ($800) doubles your throughput. ROI in a few months for active creators."})]})}const p=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"}));export{a,h as b,p as c,d as s};
