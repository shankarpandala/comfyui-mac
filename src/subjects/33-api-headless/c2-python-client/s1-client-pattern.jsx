import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ClientPattern() {
  return (
    <>
      <p>Python client pattern for ComfyUI API. Submit, poll, download. Reusable across all your automations.</p>

      <h2>Minimal client</h2>
      <pre>{`import json, time, urllib.request

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
                    open(f"{save_dir}/{fn}", "wb").write(r.read())`}</pre>

      <h2>Usage</h2>
      <pre>{`with open("workflow_api.json") as f:
    wf = json.load(f)

client = ComfyClient()
prompt_id = client.submit(wf)
result = client.wait(prompt_id)
client.download_outputs(result, "outputs/")`}</pre>

      <NoteBlock title="The Mac-friendly automation">
        This pattern + a folder of workflow JSONs is the foundation for all production automation.
        Used in cron jobs, agentic LLM tools, batch processing scripts.
      </NoteBlock>
    </>
  )
}
