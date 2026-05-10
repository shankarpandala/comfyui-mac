/**
 * Model catalog aggregator. One file per modality; this file orders them.
 * Populated lesson-by-lesson as content is authored.
 */
import imageModels from './image.js'
import videoModels from './video.js'
import audioModels from './audio.js'
import voiceModels from './voice.js'
import upscalerModels from './upscaler.js'
import controlnetModels from './controlnet.js'
import ipadapterModels from './ipadapter.js'
import llmModels from './llm.js'

export const MODELS = [
  ...imageModels,
  ...videoModels,
  ...audioModels,
  ...voiceModels,
  ...upscalerModels,
  ...controlnetModels,
  ...ipadapterModels,
  ...llmModels,
]

export const MODALITIES = [
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Video' },
  { id: 'audio', label: 'Audio' },
  { id: 'voice', label: 'Voice / TTS' },
  { id: 'upscaler', label: 'Upscaler' },
  { id: 'controlnet', label: 'ControlNet' },
  { id: 'ipadapter', label: 'IP-Adapter / Identity' },
  { id: 'llm', label: 'LLM' },
]

export const DTYPES = ['fp16', 'bf16', 'fp8', 'gguf-q4', 'gguf-q5', 'gguf-q6', 'gguf-q8', 'int8', 'fp32']
