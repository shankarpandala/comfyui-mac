import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3RagRecipe() {
  return (
    <>
      <p>RAG recipe in ComfyUI / Python — retrieve, augment, generate.</p>

      <h2>The recipe</h2>
      <pre>{`# 1. Embed user query
query_embedding = embed("user query")

# 2. Retrieve top-k relevant docs from vector store
results = collection.query(query_embeddings=[query_embedding], n_results=5)
context = "\\n\\n".join(results["documents"][0])

# 3. Augment LLM prompt with retrieved context
prompt = f"""Use this context to answer the question.

Context:
{context}

Question: {user_query}
Answer:"""

# 4. Generate
response = llm(prompt)`}</pre>

      <h2>For the capstone</h2>
      <ul>
        <li>Brand-voice retrieval: pull 3-5 past scripts in similar style.</li>
        <li>Few-shot examples auto-selected per new generation.</li>
        <li>Topic continuity: retrieve past mentions of the topic to avoid repeating yourself.</li>
      </ul>

      <h2>Chunking</h2>
      <p>
        Don't store whole documents as single embeddings. Chunk to ~500 tokens; embed each. Retrieval
        gets relevant passages, not full docs.
      </p>

      <NoteBlock title="The 'small but personal' rule">
        Your personal RAG corpus might be 100 documents. Tiny by industry standards but
        massively valuable for keeping your AI clone on-brand. Build it; maintain it; query it.
      </NoteBlock>
    </>
  )
}
