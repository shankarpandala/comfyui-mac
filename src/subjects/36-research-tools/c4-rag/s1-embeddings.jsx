import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Embeddings() {
  return (
    <>
      <p>Local embeddings — turn text into vectors for semantic search. Foundation of RAG (Retrieval-Augmented Generation).</p>

      <h2>Mac-friendly embedding models</h2>
      <ul>
        <li><strong>BGE-M3</strong> — multilingual; ~600 MB; strong quality.</li>
        <li><strong>Nomic-Embed-Text-v1.5</strong> — English-focused; smaller.</li>
        <li><strong>Llama.cpp embedding mode</strong> — use any GGUF as embedder.</li>
      </ul>

      <h2>Generate embeddings</h2>
      <CommandBlock command='ollama pull nomic-embed-text' />
      <pre>{`from openai import OpenAI
client = OpenAI(base_url="http://localhost:11434/v1", api_key="not-needed")
emb = client.embeddings.create(
    model="nomic-embed-text",
    input="Some text to embed"
).data[0].embedding`}</pre>

      <h2>Use cases for capstone</h2>
      <ul>
        <li>Personal note search (your script ideas, brand voice doc).</li>
        <li>Past-content retrieval ("similar Reels I've made").</li>
        <li>Reference-text indexing for the research agent.</li>
      </ul>

      <NoteBlock title="The embedding-then-retrieve pattern">
        Embed your archive once. Index in a vector store (next sections). Retrieve relevant context
        per query. The agent gets domain knowledge without relearning.
      </NoteBlock>
    </>
  )
}
