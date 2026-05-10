import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Config() {
  return (
    <>
      <p>
        Concrete SDXL self-clone LoRA training config for kohya_ss on M5 Pro. Numbers tuned for
        24 GB unified memory.
      </p>

      <h2>Recommended config</h2>
      <table>
        <thead><tr><th>Setting</th><th>Value</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Source model</td><td>Juggernaut XL v9</td><td>Photoreal SDXL base; good for clones</td></tr>
          <tr><td>Network type</td><td>LoRA</td><td>Standard; LoCon if you also want texture adaptation</td></tr>
          <tr><td>rank</td><td>16</td><td>Sweet spot; 32 if you have 100+ images</td></tr>
          <tr><td>alpha</td><td>16</td><td>Equal to rank — standard</td></tr>
          <tr><td>train_batch_size</td><td>1</td><td>Mac unified memory limit</td></tr>
          <tr><td>gradient_accumulation_steps</td><td>4</td><td>Effective batch 4 without memory cost</td></tr>
          <tr><td>learning_rate</td><td>1e-4</td><td>UNet LR; CLIP LR usually 5e-5</td></tr>
          <tr><td>lr_scheduler</td><td>cosine_with_restarts</td><td>Better than constant</td></tr>
          <tr><td>optimizer</td><td>AdamW8bit</td><td>Falls back to AdamW if 8bit fails</td></tr>
          <tr><td>mixed_precision</td><td>bf16</td><td>Mac-native bf16 (NOT fp8)</td></tr>
          <tr><td>num_epochs</td><td>10</td><td>50 imgs × 10 epochs = 500 base steps</td></tr>
          <tr><td>save_every_n_epochs</td><td>2</td><td>Snapshots for picking best checkpoint</td></tr>
          <tr><td>resolution</td><td>1024,1024</td><td>SDXL native</td></tr>
          <tr><td>enable_bucket</td><td>true</td><td>Allows mixed aspect ratios in dataset</td></tr>
          <tr><td>min_bucket_reso</td><td>768</td><td>Don't go below for SDXL</td></tr>
          <tr><td>max_bucket_reso</td><td>1280</td><td>Above this is wasteful</td></tr>
          <tr><td>flip_aug</td><td>false</td><td>Off for face/character LoRAs (faces aren't symmetric)</td></tr>
          <tr><td>noise_offset</td><td>0.05</td><td>Helps darker outputs render correctly</td></tr>
        </tbody>
      </table>

      <h2>Memory consumption during training</h2>
      <ul>
        <li>SDXL UNet bf16: ~6.7 GB</li>
        <li>Optimizer state (AdamW8bit): ~3.5 GB</li>
        <li>Gradients + activations: ~6 GB</li>
        <li>Total during training: ~17 GB</li>
      </ul>

      <NoteBlock title="On M5 Pro 24 GB">
        Stays within 16-18 GB working budget — quit Safari/Slack first. With other apps closed,
        SDXL LoRA training is comfortable on Mac. Don't try to use the laptop heavily during
        training; it's a 30-minute commitment for style LoRAs, hours for character.
      </NoteBlock>
    </>
  )
}
