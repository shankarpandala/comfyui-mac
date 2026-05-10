import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3NeuralEngine() {
  return (
    <>
      <p>
        Apple advertises the Neural Engine prominently. Diffusion users see it on benchmark charts.
        It's reasonable to assume "the Neural Engine helps with Stable Diffusion." Mostly, it
        doesn't. This section explains why, and where it actually does.
      </p>

      <h2>What the Neural Engine is</h2>
      <p>
        The ANE is a fixed-function neural network accelerator. It was designed for Apple's own
        on-device ML — Face ID, Siri, photo classification, natural-language inference. It accepts a
        graph compiled by Apple's CoreML toolchain and runs it very efficiently for low-latency
        inference of models that fit its constraints.
      </p>
      <p>It is great at: int8/fp16 matmuls and convolutions in graphs that look like classifiers and small recurrent networks.</p>

      <h2>Why it doesn't help PyTorch / ComfyUI</h2>
      <ul>
        <li>The ANE only accepts CoreML-compiled graphs. PyTorch tensors cannot be dispatched to it directly.</li>
        <li>The ANE has tight model-size and op-coverage limits. The full SDXL UNet does not compile to a single ANE graph.</li>
        <li>Even when fragments compile, the round-trip to/from PyTorch — serialization, reconversion — eats any speedup.</li>
      </ul>

      <h2>Where the ANE does help on Mac</h2>
      <p>Two practical paths put the ANE to work for diffusion-adjacent tasks:</p>

      <h3>1. Apple's CoreML Stable Diffusion port (DiffusionBee, Mochi Diffusion)</h3>
      <p>
        Apple maintains a CoreML conversion of Stable Diffusion that splits the UNet across GPU + ANE.
        Apps like <strong>DiffusionBee</strong> and <strong>Mochi Diffusion</strong> use this. They
        are fast and battery-friendly — but they are <em>not</em> ComfyUI. You can't bring custom
        nodes, LoRAs (well, limited), ControlNets, FLUX, Hunyuan, etc. They are "another path" — not
        relevant to the rest of this curriculum.
      </p>

      <h3>2. MLX (Apple's native ML framework)</h3>
      <p>
        MLX is Apple's PyTorch-style framework. Some MLX backends can dispatch to the ANE for
        specific ops. For diffusion models converted to MLX (a small but growing list — mostly
        smaller LLMs, MusicGen, Whisper), the ANE provides real speedups. We discuss MLX in chapter 7.
      </p>
      <p>
        For ComfyUI proper, MLX integration is experimental at best. The pragmatic stance: <em>use
        MLX for adjacent tools (LLM in Phase 7, Whisper in Subject 26), keep ComfyUI on PyTorch-MPS.</em>
      </p>

      <NoteBlock title="If you read 'the ANE accelerates Stable Diffusion'">
        A common Apple marketing claim. It's true for Apple's own CoreML pipeline (DiffusionBee).
        For the ComfyUI ecosystem we use in this curriculum, the ANE is silent on every diffusion
        step. Don't worry about it.
      </NoteBlock>

      <h2>So what runs the model?</h2>
      <p>
        On every diffusion step in ComfyUI: <strong>the GPU runs ~99% of the math</strong> via Metal
        compute kernels driven by PyTorch's MPS backend. The CPU drives the Python loop and any
        operation MPS doesn't implement (small minority post-2024). The ANE is asleep. The next
        chapter is about that GPU side: PyTorch-MPS in detail.
      </p>
    </>
  )
}
