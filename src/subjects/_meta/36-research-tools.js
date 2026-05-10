import { ch, subj } from './_helpers.js'

export default subj({
  id: '36-research-tools',
  number: 36,
  phase: 7,
  title: 'Research & Web Tools for Agents',
  icon: '🔎',
  description:
    'Give your agent eyes and ears: web search, scraping, summarization, RAG over local notes.',
  prerequisites: ['35-llm-integration'],
  estimatedHours: 4,
  difficulty: 'advanced',
  chapters: [
    ch('c1-search', 'Web Search Tools', [
      ['s1-tavily', 'Tavily / Brave / SerpAPI'],
      ['s2-searxng', 'Self-Hosted SearXNG'],
      ['s3-duckduckgo', 'DuckDuckGo (No-Key)'],
    ], 35),
    ch('c2-scrape', 'Web Scraping', [
      ['s1-trafilatura', 'Trafilatura / Readability Extraction'],
      ['s2-playwright', 'Playwright for JS-Heavy Sites'],
      ['s3-yt-transcripts', 'YouTube Transcripts'],
    ], 35),
    ch('c3-summarization', 'Summarization Patterns', [
      ['s1-map-reduce', 'Map-Reduce Summarization'],
      ['s2-stuff-vs-refine', 'Stuff vs Refine'],
    ], 25),
    ch('c4-rag', 'RAG over Local Notes', [
      ['s1-embeddings', 'Local Embeddings (BGE, Nomic)'],
      ['s2-vector-stores', 'Chroma / LanceDB on Mac'],
      ['s3-rag-recipe', 'RAG Recipe in ComfyUI'],
    ], 40, 'advanced'),
    ch('c5-trend-discovery', 'Trend / Topic Discovery', [
      ['s1-reddit-rss', 'Reddit / RSS / X Trends'],
      ['s2-niche-feeds', 'Niche Feeds for Your Channel'],
    ], 25),
  ],
})
