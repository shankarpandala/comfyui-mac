import { ch, subj } from './_helpers.js'

export default subj({
  id: '09-controlnet',
  number: 9,
  phase: 2,
  title: 'ControlNet & Spatial Conditioning',
  icon: '🧭',
  description: 'Inject spatial structure: Canny, Depth, OpenPose, Lineart, Scribble, Tile, Normal, Seg.',
  prerequisites: ['06-sdxl'],
  estimatedHours: 5,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-what-is-controlnet', 'What ControlNet Is', [
      ['s1-residual-injection', 'Residual Injection Principle'],
      ['s2-strength-and-range', 'Strength and Start/End Range'],
    ], 30, 'beginner'),
    ch('c2-preprocessors', 'Preprocessors', [
      ['s1-canny', 'Canny'],
      ['s2-depth', 'Depth (MiDaS, DepthAnything)'],
      ['s3-openpose', 'OpenPose / DWPose'],
      ['s4-lineart', 'Lineart, Scribble'],
      ['s5-tile', 'Tile'],
      ['s6-normal-seg', 'Normal, Seg'],
    ], 60, 'intermediate'),
    ch('c3-per-base', 'ControlNet for SD1.5 / SDXL / FLUX', [
      ['s1-sd15-models', 'SD1.5 ControlNets'],
      ['s2-sdxl-union', 'SDXL Union Models'],
      ['s3-flux-control', 'FLUX Control Variants'],
    ], 40),
    ch('c4-multi-stack', 'Multi-ControlNet Stacking', [
      ['s1-stacking', 'Stacking and Weight Scheduling'],
      ['s2-conflicts', 'Resolving Conflicts'],
    ], 30),
    ch('c5-t2i-adapter', 'T2I-Adapter (Lighter)', [
      ['s1-when-to-use', 'When to Prefer T2I-Adapter'],
    ], 15),
    ch('c6-mac-perf', 'Mac Performance', [
      ['s1-pre-on-mps', 'Which Preprocessors Run on MPS'],
      ['s2-cpu-fallbacks', 'CPU Fallback Cases'],
    ], 20),
  ],
})
