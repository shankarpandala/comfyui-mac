import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2VectorStores() {
  return (
    <>
      <p>Local vector stores on Mac — Chroma and LanceDB. Store + query embeddings for RAG.</p>

      <h2>Chroma (simplest)</h2>
      <CommandBlock command="pip install chromadb" />
      <pre>{`import chromadb
client = chromadb.PersistentClient(path="./mydb")
collection = client.get_or_create_collection("notes")

collection.add(
    documents=["Note 1 text", "Note 2 text"],
    ids=["1", "2"]
)

results = collection.query(
    query_texts=["search query"],
    n_results=5
)`}</pre>

      <h2>LanceDB (faster, more features)</h2>
      <ul>
        <li>Disk-backed; scales to millions of vectors.</li>
        <li>Hybrid search (vector + full-text).</li>
        <li>Lower memory.</li>
      </ul>
      <CommandBlock command="pip install lancedb" />

      <h2>For the capstone</h2>
      <ul>
        <li>Index your script archive: every past script + tags.</li>
        <li>Index brand-voice docs: how you write, your aesthetic preferences.</li>
        <li>Retrieve relevant past examples per new script generation.</li>
      </ul>

      <h2>Mac performance</h2>
      <p>Both run fast on Mac. Vector search of 10K embeddings: ~10 ms. Negligible.</p>

      <NoteBlock title="The 'personal knowledge base' pattern">
        Use vector store to hold YOUR content history. The agent retrieves relevant prior work as
        context for new generations. Result: agent stays "on brand" automatically.
      </NoteBlock>
    </>
  )
}
