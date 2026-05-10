/**
 * Curriculum aggregator. Single source of truth for all subjects.
 * Each _meta/*.js file owns its subject's metadata; this file just orders them.
 */
import s01 from './_meta/01-comfyui-fundamentals.js'
import s02 from './_meta/02-apple-silicon-mps.js'
import s03 from './_meta/03-diffusion-theory.js'
import s04 from './_meta/04-quantization.js'
import s05 from './_meta/05-sd15.js'
import s06 from './_meta/06-sdxl.js'
import s07 from './_meta/07-sd3.js'
import s08 from './_meta/08-flux.js'
import s09 from './_meta/09-controlnet.js'
import s10 from './_meta/10-ipadapter.js'
import s11 from './_meta/11-loras.js'
import s12 from './_meta/12-lora-training.js'
import s13 from './_meta/13-inpainting.js'
import s14 from './_meta/14-upscaling.js'
import s15 from './_meta/15-advanced-sampling.js'
import s16 from './_meta/16-video-foundations.js'
import s17 from './_meta/17-animatediff.js'
import s18 from './_meta/18-ltx.js'
import s19 from './_meta/19-hunyuan-video.js'
import s20 from './_meta/20-wan.js'
import s21 from './_meta/21-other-video-models.js'
import s22 from './_meta/22-vid2vid.js'
import s23 from './_meta/23-audio-basics.js'
import s24 from './_meta/24-music.js'
import s25 from './_meta/25-tts.js'
import s26 from './_meta/26-voice-cloning.js'
import s27 from './_meta/27-identity.js'
import s28 from './_meta/28-talking-head.js'
import s29 from './_meta/29-clone-capstone.js'
import s30 from './_meta/30-social-pipelines.js'
import s27a from './_meta/27a-recipes-t2i.js'
import s27b from './_meta/27b-recipes-ti2i.js'
import s27c from './_meta/27c-recipes-t2v.js'
import s27d from './_meta/27d-recipes-ti2v.js'
import s27e from './_meta/27e-recipes-v2v.js'
import s27f from './_meta/27f-character-consistency.js'
import s27g from './_meta/27g-recipes-self-clone.js'
import s27h from './_meta/27h-recipes-uncensored.js'
import s31 from './_meta/31-custom-nodes.js'
import s32 from './_meta/32-composition-patterns.js'
import s33 from './_meta/33-api-headless.js'
import s34 from './_meta/34-mac-perf.js'
import s35 from './_meta/35-llm-integration.js'
import s36 from './_meta/36-research-tools.js'
import s37 from './_meta/37-script-agent.js'
import s38 from './_meta/38-orchestration.js'
import s39 from './_meta/39-heygen-capstone.js'

export const CURRICULUM = [
  s01, s02, s03, s04,
  s05, s06, s07, s08, s09, s10, s11, s12, s13, s14, s15,
  s16, s17, s18, s19, s20, s21, s22,
  s23, s24, s25, s26,
  s27, s28, s29, s30,
  s27a, s27b, s27c, s27d, s27e, s27f, s27g, s27h,
  s31, s32, s33, s34,
  s35, s36, s37, s38, s39,
]

export const PHASES = [
  { id: 1, name: 'Foundations', range: [1, 4] },
  { id: 2, name: 'Image Generation', range: [5, 15] },
  { id: 3, name: 'Video Generation', range: [16, 22] },
  { id: 4, name: 'Audio, Voice, Music', range: [23, 26] },
  { id: 5, name: 'Avatars, Clones, Digital Twin', range: [27, 30] },
  { id: '5b', name: 'Workflow Recipes', range: ['27a', '27h'] },
  { id: 6, name: 'Advanced & Production', range: [31, 34] },
  { id: 7, name: 'Agentic — HeyGen-Class Capstone', range: [35, 39] },
]
