import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S3SwapDiscipline() {
  return (
    <>
      <p>
        Swap is the floor falling out from under your workflow. Once macOS starts paging diffusion
        activations to disk, performance drops to near-CPU speeds. This section is the discipline for
        keeping out of swap.
      </p>

      <h2>The signs you're swapping</h2>
      <ol>
        <li>Sampler step time jumps from seconds to tens of seconds, even minutes.</li>
        <li>Activity Monitor → Memory tab → Memory Pressure indicator turns red.</li>
        <li><code>vm_stat 1</code> in a terminal shows non-zero "Pageouts/sec".</li>
        <li>Your fan kicks in despite low GPU utilization.</li>
      </ol>

      <CommandBlock command="vm_stat 1" label="Watch swap activity in real time (Ctrl-C to stop)" />

      <h2>The five rules to avoid swap</h2>

      <h3>1. Quit memory-fat apps before big workflows</h3>
      <p>
        Browsers, Slack, Discord, Notion, Electron-anything. Even closed Safari with stale tabs eats
        2 GB. Quit them, then launch ComfyUI.
      </p>

      <h3>2. Restart ComfyUI between heavy workflows</h3>
      <p>
        ComfyUI's caching allocator can hold onto memory across runs. If you switch from FLUX to
        HunyuanVideo without restarting, the previous model's weights may still be cached and
        crowd out the new one. Cmd-C in the terminal, restart.
      </p>

      <h3>3. Don't open output folder thumbnails in Finder</h3>
      <p>
        Mac's QuickLook generation for large image folders can spike memory by 1–2 GB. Browse your
        outputs <em>after</em> you're done generating, or in a different login session.
      </p>

      <h3>4. Use the canvas's mute / bypass</h3>
      <p>
        When iterating on a downstream node (e.g., tweaking the upscale settings), bypass the
        upstream model loaders so ComfyUI doesn't reload. Right-click a node → <strong>Bypass</strong>{' '}
        — covered in Subject 01 / Chapter 3.
      </p>

      <h3>5. Watch the meter</h3>
      <p>
        Keep Activity Monitor open in a corner. The instant Memory Pressure turns yellow, save your
        progress and consider what to drop.
      </p>

      <MacGotchaBlock title="The 'compressed' counter is mostly fine">
        macOS proactively compresses memory before swapping to disk. Some Compressed memory is
        normal (1–3 GB even on a fresh boot). It's only a problem when Compressed grows steadily and
        Memory Pressure stays yellow.
      </MacGotchaBlock>

      <h2>If you do start swapping mid-run</h2>
      <ol>
        <li>Don't cancel the current job — Mac swap is partial; you may finish.</li>
        <li>Don't queue more jobs — that piles on more pressure.</li>
        <li>After the job finishes, restart ComfyUI before the next.</li>
        <li>Quit other apps first this time.</li>
      </ol>

      <h2>Disabling swap entirely (advanced)</h2>
      <p>
        macOS has an undocumented sysctl that prevents swap creation. <strong>We don't recommend
        this</strong> — if you OOM with swap disabled, the system kills processes uncontrollably,
        often the wrong ones. Better to live within budget than to remove the safety net.
      </p>
    </>
  )
}
