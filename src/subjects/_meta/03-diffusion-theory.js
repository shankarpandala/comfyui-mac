const ch = (id, title, sections, mins = 40, diff = 'advanced') => ({
  id, title, difficulty: diff, estimatedMinutes: mins, description: '',
  sections: sections.map(([sid, t, m = 15]) => ({
    id: sid, title: t, difficulty: diff, readingMinutes: m, status: 'stub',
  })),
})

export default {
  id: '03-diffusion-theory',
  number: 3,
  phase: 1,
  title: 'Diffusion Theory',
  icon: '🌫️',
  description: 'How diffusion models actually work — from forward SDE to flow matching.',
  prerequisites: ['01-comfyui-fundamentals'],
  estimatedHours: 8,
  difficulty: 'advanced',
  status: 'stub',
  chapters: [
    ch('c1-forward-reverse', 'Forward and Reverse Diffusion (DDPM/DDIM)', [
      ['s1-ddpm', 'DDPM: Forward Noising'],
      ['s2-reverse-process', 'Reverse Process and Score'],
      ['s3-ddim', 'DDIM Deterministic Sampling'],
    ]),
    ch('c2-score-and-eps', 'Score Matching, ε-Pred, v-Pred', [
      ['s1-score-matching', 'Score Matching Intuition'],
      ['s2-eps-vs-v', 'ε-Prediction vs v-Prediction'],
    ]),
    ch('c3-latent-diffusion', 'Latent Diffusion and VAEs', [
      ['s1-why-vae', 'Why a VAE'],
      ['s2-latent-space', 'Anatomy of the Latent Space'],
    ]),
    ch('c4-cfg', 'Classifier-Free Guidance', [
      ['s1-cfg-equation', 'The CFG Equation'],
      ['s2-cfg-tuning', 'Tuning CFG, Rescale, Dynamic Thresholding'],
    ]),
    ch('c5-samplers', 'Samplers', [
      ['s1-euler', 'Euler and Euler-a'],
      ['s2-dpm', 'DPM++ 2M, DPM++ SDE'],
      ['s3-unipc', 'UniPC'],
      ['s4-lcm-tcd', 'LCM and TCD (Few-Step)'],
    ]),
    ch('c6-schedulers', 'Schedulers', [
      ['s1-karras', 'Karras Schedule'],
      ['s2-exp-sgm', 'Exponential and SGM-Uniform'],
      ['s3-beta', 'Beta'],
    ]),
    ch('c7-flow-matching', 'Flow Matching (FLUX, SD3, Wan)', [
      ['s1-flow-vs-ddpm', 'Flow Matching vs DDPM'],
      ['s2-rectified-flow', 'Rectified Flow'],
      ['s3-shortcut-models', 'Shortcut Models'],
    ]),
  ],
}
