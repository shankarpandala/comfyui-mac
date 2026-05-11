import{j as e}from"./vendor-CumJrUdK.js";import{N as r,C as t}from"./subject-01-comfyui-fundamentals-CxYg6t9x.js";function s(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Linear pipeline — the simplest orchestration pattern. Output of stage N feeds input of stage N+1."}),e.jsx("h2",{children:"The shape"}),e.jsx("pre",{children:`research_agent(topic)
  → script_agent(research_output)
  → visual_agent(script_output)
  → tts_agent(script_output)
  → orchestrator(visuals + tts)
  → final_video.mp4`}),e.jsx("h2",{children:"When linear works"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Each stage's output is fully needed by the next."}),e.jsx("li",{children:"No conditionals / branches."}),e.jsx("li",{children:"Simple to debug — failures are localized to a specific stage."})]}),e.jsx("h2",{children:"Implementation (Python)"}),e.jsx("pre",{children:`def heygen_class_pipeline(topic):
    research = research_agent(topic)
    script = script_agent(research)
    visuals = [generate_visual(s) for s in script.scenes]
    audio = tts_agent(script)
    return composite(visuals, audio, script)`}),e.jsx(r,{title:"The 'start linear' principle",children:"For Subject 39's HeyGen-class capstone, start with linear pipeline. Add complexity only when needed."})]})}const _=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));function i(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Router pattern — an LLM decides which downstream path to dispatch to. Useful when the same input could need different processing."}),e.jsx("h2",{children:"The shape"}),e.jsx("pre",{children:`router_agent(topic)
  → decides format: "Reel" / "Short" / "Long-form"
  → dispatches to format-specific script_agent
  → continues pipeline`}),e.jsx("h2",{children:"Use case"}),e.jsx("p",{children:'User says "make a video about X" without specifying format. Router agent decides the right format based on topic complexity:'}),e.jsxs("ul",{children:[e.jsx("li",{children:"Single tip → Reel."}),e.jsx("li",{children:"Multi-step tutorial → Short."}),e.jsx("li",{children:"Deep-dive analysis → Long-form."})]}),e.jsx("h2",{children:"Implementation"}),e.jsx("pre",{children:`def router_agent(topic):
    decision = llm(f"""Given the topic, which format fits?
    Topic: {topic}
    Format options: reel (60s), short (3min), long-form (10min+).
    Respond with format name and reasoning.""")
    return parse(decision)

def pipeline(topic):
    format = router_agent(topic)
    if format == "reel":
        return reel_pipeline(topic)
    elif format == "short":
        return short_pipeline(topic)
    else:
        return long_form_pipeline(topic)`}),e.jsx(r,{title:"The 'router for variants, pipeline for steps'",children:'Routers handle "which path?". Pipelines handle "next step." Most workflows have both — router up front, pipeline after.'})]})}const b=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));function n(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Supervisor / sub-agents pattern — a top-level agent coordinates multiple specialized sub-agents. Each sub-agent has its own context and tools."}),e.jsx("h2",{children:"The shape"}),e.jsx("pre",{children:`Supervisor:
├── Researcher (web search tools)
├── Writer (script generation, voice doc)
├── Visualizer (FLUX prompts, ComfyUI submission)
├── TTS Agent (F5-TTS calls)
└── Editor (ffmpeg composition)`}),e.jsx("h2",{children:"Why sub-agents"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Each agent has narrow context — better at its job."}),e.jsx("li",{children:"Cleaner debugging — issue is localized."}),e.jsx("li",{children:"Easier to swap implementations (try different model per agent)."})]}),e.jsx("h2",{children:"Communication"}),e.jsx("p",{children:"Supervisor sends task → sub-agent returns result. Either via in-process function calls or via a queue / message bus for distributed execution."}),e.jsx("h2",{children:"Trade-off"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Complexity overhead vs simple pipeline."}),e.jsx("li",{children:"Each agent needs its own LLM call — more tokens, slower."}),e.jsx("li",{children:"Worth it for production-grade pipelines (Subject 39's capstone)."})]}),e.jsx(r,{title:"The 'supervisor for production' pattern",children:"Sub-agent supervisor pattern is the foundation of LangGraph and similar frameworks. Subject 39's capstone is built around it."})]})}const w=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"}));function a(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Graph (LangGraph-style) — agents and tools as nodes; explicit edges with conditional routing. Most powerful pattern for complex agentic workflows."}),e.jsx("h2",{children:"What LangGraph adds"}),e.jsxs("ul",{children:[e.jsx("li",{children:"State machine model — explicit state passed between nodes."}),e.jsx("li",{children:'Conditional edges — "if research_score > 8, go to writer; else loop research".'}),e.jsx("li",{children:"Persistence — pause / resume long-running pipelines."}),e.jsx("li",{children:"Streaming — emit partial results as they're ready."})]}),e.jsx("h2",{children:"For the capstone"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Research → Writer → Critic → (loop if score low) → Visualizer → TTS → Editor → Publish."}),e.jsx("li",{children:"Each transition can have conditions, retries, fallbacks."})]}),e.jsx("h2",{children:"Mac compatibility"}),e.jsx("p",{children:"LangGraph is pure Python; runs anywhere. Combined with Ollama for local LLM, fully Mac-native."}),e.jsx("h2",{children:"The complexity tax"}),e.jsx("p",{children:"LangGraph adds significant code complexity. For one-off pipelines, simple Python orchestration is easier. For production (run daily, error-recover), LangGraph pays off."}),e.jsx(r,{title:"When to graduate to graphs",children:"Start with linear pipeline. Add router for branching. Add supervisor for sub-agents. Adopt LangGraph when you need state persistence + complex conditionals. Don't skip ahead."})]})}const v=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));function l(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"LangGraph nodes from a Comfy workflow — each ComfyUI workflow becomes a graph node."}),e.jsx("h2",{children:"Install"}),e.jsx(t,{command:"pip install langgraph langchain-openai"}),e.jsx("h2",{children:"The pattern"}),e.jsx("pre",{children:`from langgraph.graph import StateGraph, END
from typing import TypedDict

class CapstoneState(TypedDict):
    topic: str
    research: str
    script: dict
    visuals: list
    audio: list
    final_path: str

graph = StateGraph(CapstoneState)
graph.add_node("research", research_node)
graph.add_node("write", write_node)
graph.add_node("visualize", visualize_node)
graph.add_node("tts", tts_node)
graph.add_node("compose", compose_node)

graph.set_entry_point("research")
graph.add_edge("research", "write")
graph.add_edge("write", "visualize")
graph.add_edge("visualize", "tts")
graph.add_edge("tts", "compose")
graph.add_edge("compose", END)

app = graph.compile()
result = app.invoke({"topic": "Mac FLUX speed tips"})`}),e.jsx("h2",{children:"Each node is a function"}),e.jsx("pre",{children:`def visualize_node(state):
    visuals = []
    for scene in state["script"]["scenes"]:
        if scene["type"] == "talking-head":
            still = comfy_submit("flux-pulid-yourself.json", scene["visual_prompt"])
        else:
            still = comfy_submit("flux-baseline.json", scene["visual_prompt"])
        clip = comfy_submit("ltx-i2v.json", still)
        visuals.append({"scene_id": scene["id"], "clip_path": clip})
    return {"visuals": visuals}`}),e.jsx(r,{title:"The state-passing pattern",children:"Each node returns a dict that LangGraph merges into the state. Downstream nodes access prior outputs via state[]. Clean, debuggable, persistent."})]})}const S=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));function o(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"State passing in LangGraph — the dict that flows between nodes. Defines what each node sees and produces."}),e.jsx("h2",{children:"Designing state"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Include everything any downstream node might need."}),e.jsx("li",{children:"Don't include secrets / API keys (use env vars)."}),e.jsx("li",{children:"Use simple types — dicts, lists, strings, numbers — for serialization."}),e.jsx("li",{children:'Versioning: include a "stage" field so you can resume from where you left off.'})]}),e.jsx("h2",{children:"State persistence"}),e.jsx("p",{children:"LangGraph supports checkpointing. Save state to disk after each node; resume on next run. For long pipelines (10+ minutes), this is critical — power outage / crash doesn't redo everything."}),e.jsx("pre",{children:`from langgraph.checkpoint.sqlite import SqliteSaver

memory = SqliteSaver.from_conn_string(":memory:")
app = graph.compile(checkpointer=memory)

# Run with thread_id
result = app.invoke(
    {"topic": "..."},
    config={"configurable": {"thread_id": "reel-2026-05-10-1"}}
)`}),e.jsx("h2",{children:"Resume"}),e.jsx("p",{children:"If a node fails, you can re-invoke with the same thread_id and LangGraph picks up where it left off."}),e.jsx(r,{title:"The 'resumable pipeline' principle",children:"For Mac AI clone production where any single render takes 30+ minutes, never lose work to a crash. Checkpoint everything. Worth the slight code complexity."})]})}const k=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));function c(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:'CrewAI — alternative orchestration framework. Role-based; each agent has a "role" + "goal" + "backstory" + tools. Less explicit graph than LangGraph; more "team of specialists".'}),e.jsx("h2",{children:"Install"}),e.jsx(t,{command:"pip install crewai"}),e.jsx("h2",{children:"The pattern"}),e.jsx("pre",{children:`from crewai import Agent, Task, Crew

researcher = Agent(
    role="Research analyst",
    goal="Find current accurate info on the topic",
    backstory="A veteran journalist who sources rigorously",
    tools=[web_search_tool, scrape_tool],
    llm=local_llm,
)

writer = Agent(
    role="Reel script writer",
    goal="Convert research into a compelling 60s Reel",
    backstory="A former TV staff writer turned content strategist",
    tools=[],
    llm=local_llm,
)

research_task = Task(description="Research {topic}", agent=researcher)
write_task = Task(description="Write Reel from research", agent=writer, context=[research_task])

crew = Crew(agents=[researcher, writer], tasks=[research_task, write_task])
result = crew.kickoff(inputs={"topic": "Mac FLUX speed"})`}),e.jsx("h2",{children:"CrewAI vs LangGraph"}),e.jsxs("ul",{children:[e.jsx("li",{children:'CrewAI: simpler API; "agent has personality" abstraction.'}),e.jsx("li",{children:"LangGraph: more explicit; better for production state machines."}),e.jsx("li",{children:"Both work on Mac with Ollama; choice is preference."})]}),e.jsx(r,{title:"The 'pick one and learn it' rule",children:"Don't try CrewAI AND LangGraph in the same project. Pick one. Subject 39's capstone uses LangGraph for explicit state; CrewAI is shown for completeness."})]})}const T=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));function h(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"CrewAI handoff patterns — how agents pass context to each other."}),e.jsx("h2",{children:"Sequential context"}),e.jsxs("p",{children:["Tasks declare ",e.jsx("code",{children:"context=[other_task]"}),". The dependent task receives the prior task's output."]}),e.jsx("h2",{children:"Async parallel"}),e.jsx("p",{children:"Independent tasks can run in parallel. Crew kicks off matching tasks concurrently when context allows."}),e.jsx("h2",{children:"Hierarchical"}),e.jsx("p",{children:'One "manager" agent orchestrates others — gives sub-tasks dynamically based on intermediate results.'}),e.jsx("h2",{children:"For the capstone"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sequential: research → script → visuals → tts → compose."}),e.jsx("li",{children:"Parallel: visualizer + tts agents work concurrently after script (different inputs)."}),e.jsx("li",{children:"Hierarchical: editor agent orchestrates final composition based on what the others produced."})]}),e.jsx(r,{title:"The throughput payoff",children:"Parallel handoff cuts wall time. Visuals + TTS can run in parallel — saves ~10 minutes per Reel. Subject 39's pipeline takes advantage."})]})}const L=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));function d(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Native ComfyUI orchestration patterns — Impact-Pack switches + LLM nodes for in-graph branching."}),e.jsx("h2",{children:"The pattern"}),e.jsx("p",{children:"Inside ComfyUI: an LLM node decides a branch; ImpactSwitch dispatches to the right sub-workflow. No external Python orchestrator."}),e.jsx("h2",{children:"Use case"}),e.jsxs("ul",{children:[e.jsx("li",{children:'"Generate image with FLUX or SDXL based on prompt complexity"'}),e.jsx("li",{children:'"Route to anime base or photoreal base based on prompt content"'}),e.jsx("li",{children:'"Apply heavy detailer or skip based on output type"'})]}),e.jsx("h2",{children:"Pros"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Self-contained — workflow JSON IS the orchestration."}),e.jsx("li",{children:"No separate Python script."}),e.jsx("li",{children:"Visual; easy to inspect and modify."})]}),e.jsx("h2",{children:"Cons"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Limited to what ComfyUI's graph can express."}),e.jsx("li",{children:"Both branches still load (Subject 32 / Chapter 3)."}),e.jsx("li",{children:"State management is awkward."})]}),e.jsx(r,{title:"The 'simple branches in ComfyUI, complex flow in Python' rule",children:"For 1-2 conditional branches, native ComfyUI is fine. For multi-stage agentic flow with retries / persistence / parallelism, escape to LangGraph + ComfyUI API."})]})}const I=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));function p(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Anything-Everywhere as state — broadcast key values across a sprawling graph. Useful when many sub-graphs need the same MODEL / CLIP / config."}),e.jsx("h2",{children:"The pattern"}),e.jsxs("p",{children:["Add ",e.jsx("code",{children:"Anything Everywhere?"})," nodes for each shared value. Sub-graphs pick up the value automatically. Result: tidy graph despite many consumers."]}),e.jsx("h2",{children:"For complex workflows"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Self-clone identity stack: PuLID + LoRA + character ref broadcast across multiple sample paths."}),e.jsx("li",{children:"Style preset: one place to set; many places to consume."}),e.jsx("li",{children:"Seed broadcast for reproducibility."})]}),e.jsx("h2",{children:"Limit"}),e.jsx("p",{children:"Anything-Everywhere is a static value broadcast. For dynamic per-call state (user inputs varying per Reel), use Python orchestration."}),e.jsx(r,{title:"The 'static config in graph, dynamic state in Python'",children:"Things that don't change per render → ComfyUI Anything-Everywhere. Things that do change per render → Python orchestrator."})]})}const P=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));function u(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Retries and timeouts — the agentic capstone runs for hours. Transient failures must auto-recover; permanent failures must surface clearly."}),e.jsx("h2",{children:"Retry pattern"}),e.jsx("pre",{children:`from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(min=4, max=60),
    reraise=True
)
def llm_call(prompt):
    return ollama_chat(prompt)`}),e.jsx("h2",{children:"What to retry"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Network errors (Tavily, scraping) — yes, with backoff."}),e.jsx("li",{children:"LLM JSON parse failures — yes, with re-prompt."}),e.jsx("li",{children:"ComfyUI submission errors — yes (server might be busy)."}),e.jsx("li",{children:"OOM errors — no (won't fix itself)."}),e.jsx("li",{children:"File-not-found — no (config issue)."})]}),e.jsx("h2",{children:"Timeouts"}),e.jsxs("ul",{children:[e.jsx("li",{children:"LLM call: 60s."}),e.jsx("li",{children:"Image generation: 120s for SDXL, 300s for FLUX."}),e.jsx("li",{children:"Video generation: 30 min for Wan / Hunyuan."}),e.jsx("li",{children:"Web search: 30s."})]}),e.jsx("h2",{children:"Logging"}),e.jsx("p",{children:"Log every retry. After-the-fact, you'll want to see which stages failed transiently."}),e.jsx(r,{title:"The 'fail loud, retry quiet' principle",children:"Transient failures retry silently. Permanent failures (third retry exhausted) raise loud exceptions. Logs show the difference."})]})}const F=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"}));function m(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Fallback models — when the primary model fails, gracefully degrade to a backup. Ensures pipeline completes even when one component breaks."}),e.jsx("h2",{children:"Fallback chains"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Stage"}),e.jsx("th",{children:"Primary"}),e.jsx("th",{children:"Fallback"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"LLM"}),e.jsx("td",{children:"Llama 3.1 8B (Ollama)"}),e.jsx("td",{children:"Llama 3.2 3B (smaller, faster)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Image"}),e.jsx("td",{children:"FLUX Dev Q5_K_S"}),e.jsx("td",{children:"SDXL Lightning (faster fallback)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Video"}),e.jsx("td",{children:"Wan I2V 14B"}),e.jsx("td",{children:"LTX I2V (faster fallback)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"TTS"}),e.jsx("td",{children:"F5-TTS voice clone"}),e.jsx("td",{children:"Kokoro (preset voices)"})]})]})]}),e.jsx("h2",{children:"Pattern"}),e.jsx("pre",{children:`def llm_with_fallback(prompt):
    try:
        return primary_llm(prompt, timeout=60)
    except Exception:
        log("primary failed, falling back")
        return fallback_llm(prompt)`}),e.jsx("h2",{children:"Quality vs reliability trade-off"}),e.jsx("p",{children:"Fallbacks usually mean lower quality. For non-hero content (B-roll, drafts), this is fine. For hero shots, raise the failure to a human gate instead of degrading silently."}),e.jsx(r,{title:"The 'never silent quality degradation' principle",children:'Always log when a fallback happens. End-user / yourself sees "fallback used 3 times this run" and knows quality may be off.'})]})}const C=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}));function f(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Human-in-the-loop approval gates — pause the pipeline at key checkpoints, send to user for review, resume after approval."}),e.jsx("h2",{children:"Where to pause"}),e.jsxs("ul",{children:[e.jsx("li",{children:'After research summary — "Is this the right angle?"'}),e.jsx("li",{children:'After script first draft — "Approve / revise?"'}),e.jsx("li",{children:'After visual prompts generated — "Use as-is?"'}),e.jsx("li",{children:"Before final publish."})]}),e.jsx("h2",{children:"Pattern (LangGraph)"}),e.jsx("pre",{children:`# Use LangGraph's interrupt feature
graph = StateGraph(State)
# ... add nodes ...
graph.add_node("script", script_node)
graph.add_node("approve_script", approve_node)
graph.add_edge("script", "approve_script")

# approve_node uses interrupt_before to pause
# external system polls for state and presents to user`}),e.jsx("h2",{children:"Notification"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Email / Slack / Telegram on pause."}),e.jsx("li",{children:"Local web UI showing current state + approve/revise buttons."}),e.jsx("li",{children:"CLI prompt for solo usage."})]}),e.jsx("h2",{children:"For Mac solo creators"}),e.jsx("p",{children:'Simplest: terminal prompt. "Script ready, view at out/script-2026-05-10.json. Approve? (y/n/revise):"'}),e.jsx(r,{title:"The 'gate at expensive stages' principle",children:"Place gates BEFORE expensive stages (video render). Catching errors before a 30-min Wan I2V render saves a lot of compute. Don't gate cheap stages — friction."})]})}const M=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));function g(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Tracing — log every agent step + tool call + LLM input/output. When pipelines fail or produce weird output, traces explain what happened."}),e.jsx("h2",{children:"What to log per step"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Timestamp."}),e.jsx("li",{children:"Node name."}),e.jsx("li",{children:"Inputs (full state dict)."}),e.jsx("li",{children:"LLM prompt + response (full text)."}),e.jsx("li",{children:"Tool calls + results."}),e.jsx("li",{children:"Output state."}),e.jsx("li",{children:"Time taken."}),e.jsx("li",{children:"Token count (cost tracking)."})]}),e.jsx("h2",{children:"Tools"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"LangSmith"})," (LangChain's official) — cloud; commercial."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Phoenix (Arize)"})," — open-source; self-hosted; recommended for Mac local."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom JSON logging"})," — simplest; one log file per run; grep when needed."]})]}),e.jsx("h2",{children:"Custom logger pattern"}),e.jsx("pre",{children:`import json, time

def log_node(node_name, state, output, llm_calls, duration):
    entry = {
        "ts": time.time(),
        "node": node_name,
        "state_in_keys": list(state.keys()),
        "output_keys": list(output.keys()),
        "llm_calls": llm_calls,
        "duration_sec": duration,
    }
    with open(f"runs/{run_id}/trace.jsonl", "a") as f:
        f.write(json.dumps(entry) + "\\n")`}),e.jsx(r,{title:"The 'trace from day one' rule",children:"Don't add tracing later. Build it from the first version of your pipeline. When debugging in week 2, you'll thank week-1 you."})]})}const O=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));function x(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Cost / time accounting — even local-only Mac pipelines have cost: wall time, electricity, your attention. Track to optimize."}),e.jsx("h2",{children:"What to track per Reel"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Wall time per stage (research, script, visuals, audio, compose)."}),e.jsx("li",{children:"Total wall time end-to-end."}),e.jsx("li",{children:"LLM tokens consumed."}),e.jsx("li",{children:"Number of retries / failures."}),e.jsx("li",{children:"Number of human gate interventions."})]}),e.jsx("h2",{children:"Why care on Mac (no API costs)"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Wall time is your scarcest resource."}),e.jsx("li",{children:"Identifying slow stages tells you where to optimize."}),e.jsx("li",{children:"Retry counts surface unstable components."}),e.jsx("li",{children:"Human gate frequency surfaces quality issues."})]}),e.jsx("h2",{children:"Reporting"}),e.jsx("p",{children:"End of each run, print summary:"}),e.jsx("pre",{children:`Pipeline complete: reel-2026-05-10-1
- Research: 3m 15s, 2 LLM calls
- Script: 1m 40s, 5 LLM calls (1 retry)
- Visuals: 12m 30s, 6 stills + 6 i2v clips (1 fallback)
- Audio: 2m 15s, 6 F5-TTS calls
- Compose: 45s, ffmpeg
Total: 20m 25s. 1 human approval gate.`}),e.jsx(r,{title:"The 'measure to improve' principle",children:"Per-stage timing reveals where to focus optimization. If visuals dominate, that's where switching from Wan to LTX matters. If LLM iterations dominate, simpler prompts."})]})}const A=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{b as a,w as b,v as c,S as d,k as e,T as f,L as g,I as h,P as i,F as j,C as k,M as l,O as m,A as n,_ as s};
