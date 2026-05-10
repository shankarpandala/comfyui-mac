# ComfyUI on Mac

A deep, interactive curriculum for building **any ComfyUI workflow from scratch** on a MacBook Pro M5 Pro / 24 GB unified memory — image, video, audio, AI avatars, voice cloning, hyper-realistic self-clones, and a HeyGen-class agentic capstone — all running locally.

Built in the spirit of [math4ai](https://github.com/shankarpandala/math4ai): React + Vite + Tailwind, per-subject code-split, PWA-ready, deployed to GitHub Pages.

## Why this exists

ComfyUI tutorials and community workflows are overwhelmingly written against NVIDIA hardware. On Apple Silicon the experience is different in ways that silently break things — the most common being **fp8 dtypes that simply don't run on MPS**. This curriculum:

- Treats the Mac/MPS layer as a first-class topic (Subject 02).
- Prescribes fp16 / bf16 / GGUF Q4–Q8 substitutions everywhere fp8 would be assumed.
- Uses 24 GB unified memory budgets in every recipe.
- Ends in a HeyGen-class agentic capstone that produces AI Reels, Shorts, and long videos using your own voice clone and AI clone — entirely offline.

## Curriculum

7 phases · 47 subjects · ~180 chapters · ~600 sections.

- **Phase 1 — Foundations** (Subjects 01–04): ComfyUI, Apple Silicon & MPS, diffusion theory, model formats & quantization.
- **Phase 2 — Image Generation** (05–15): SD1.5, SDXL, SD3, FLUX (Mac), ControlNet, IP-Adapter, LoRAs, training, inpainting, upscaling, advanced sampling.
- **Phase 3 — Video Generation** (16–22): foundations, AnimateDiff, LTX, HunyuanVideo, Wan, others, vid2vid.
- **Phase 4 — Audio, Voice, Music** (23–26): audio basics, music, TTS, voice cloning.
- **Phase 5 — Avatars, Clones, Digital Twin** (27–30): identity preservation, talking heads, the clone capstone, social pipelines.
- **Phase 5b — Workflow Recipes** (27a–27h): downloadable .json recipes for t2i, t+i2i, t2v, t+i2v, v2v, character consistency in long videos, self-clone, and (local) unrestricted content.
- **Phase 6 — Advanced & Production** (31–34): custom nodes, composition patterns, API/headless, M5 Pro performance.
- **Phase 7 — Agentic / HeyGen-Class Capstone** (35–39): local LLMs in ComfyUI, research tools, script agent, orchestration, and the final HeyGen-equivalent build that produces AI Reels / Shorts / long-form videos with your voice and clone.

## Status

**Phase 0 (scaffold) is the current commit.** All subjects are stubs — the framework, navigation, and Models page work; sections show a "Coming soon" placeholder. Content is authored phase-by-phase, subject-by-subject in subsequent commits.

## Develop

```bash
npm install
npm run dev          # http://localhost:5173/comfyui-mac/
npm run build
npm run preview
npm run deploy       # gh-pages
```

## Authoring discipline

- One file per subject's metadata under `src/subjects/_meta/`.
- Section files (when authored) live at `src/subjects/<subject-id>/<chapter-id>/<section-id>.jsx`, target ≤ 250 lines.
- Component files target ≤ 150 lines.
- New section types are added as new components under `src/components/content/` (open/closed).
- Cross-references via `buildsOn` IDs; no section imports another section.

## License

MIT.
