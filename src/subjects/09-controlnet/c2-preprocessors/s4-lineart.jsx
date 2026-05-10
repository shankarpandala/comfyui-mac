import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4Lineart() {
  return (
    <>
      <p>
        Lineart and Scribble preprocessors produce hand-drawn-style line images. Lineart is for
        clean detailed line work; Scribble is for rough sketches. Both feed Lineart-trained
        ControlNets that respect line work better than Canny.
      </p>

      <h2>Lineart variants</h2>
      <ul>
        <li><strong>Lineart Realistic</strong> (<code>LineartPreprocessor</code>) — fine detailed lines for realistic photos.</li>
        <li><strong>Lineart Anime</strong> (<code>AnimeLineArtPreprocessor</code>) — bolder lines tuned for anime/manga style.</li>
        <li><strong>Lineart Manga</strong> (<code>Manga2AnimeLineArtPreprocessor</code>) — yet another variant for manga line work.</li>
      </ul>

      <h2>Scribble</h2>
      <p>
        <code>ScribblePreprocessor</code> — converts to a rough scribble. Or skip the preprocessor
        and feed your own hand-drawn scribble directly into the ControlNet (the trained model
        accepts unprocessed hand-drawn input).
      </p>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Sketch → finished art</strong> — your scribble becomes a polished render.</li>
        <li><strong>Style transfer with detailed line preservation</strong> — Lineart on an anime input → photoreal output of the same character.</li>
        <li><strong>Coloring book pipeline</strong> — Lineart input + colored prompt → filled-in version.</li>
      </ul>

      <h2>Lineart vs Canny</h2>
      <ul>
        <li><strong>Canny</strong> — produces clean binary edges. Good for silhouettes.</li>
        <li><strong>Lineart</strong> — produces smoother grayscale line work. Better for "drawing-style" inputs.</li>
        <li><strong>Scribble</strong> — produces loose suggestions. Good for "sketch the idea, model fills in."</li>
      </ul>

      <NoteBlock title="The 'sketch to art' workflow">
        Draw on iPad in Procreate → export as PNG → drop into LoadImage in ComfyUI → Lineart
        preprocessor → ControlNet → SDXL or FLUX → finished render. One of the satisfying loops to
        set up in your Mac workflow library.
      </NoteBlock>
    </>
  )
}
