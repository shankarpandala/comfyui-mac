import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1RedditRss() {
  return (
    <>
      <p>Trend discovery sources: Reddit, RSS feeds, X. The agent's "what's new" inputs.</p>

      <h2>Reddit JSON API</h2>
      <p>
        Public, no key needed: <code>https://www.reddit.com/r/SUBREDDIT/top.json?t=day&limit=10</code>{' '}
        returns top posts as JSON.
      </p>
      <pre>{`import requests
def reddit_top(subreddit, time="day", limit=10):
    url = f"https://www.reddit.com/r/{subreddit}/top.json"
    headers = {"User-Agent": "ComfyAgent/1.0"}
    return requests.get(url, params={"t": time, "limit": limit}, headers=headers).json()`}</pre>

      <h2>RSS feeds</h2>
      <ul>
        <li><code>feedparser</code> Python package.</li>
        <li>Aggregate niche industry feeds.</li>
      </ul>

      <h2>X (Twitter)</h2>
      <ul>
        <li>Official API: paid, complex.</li>
        <li>Nitter front-ends: scrape; status varies.</li>
        <li>For trend signal, often Reddit is enough.</li>
      </ul>

      <NoteBlock title="The 'curated topic feed' pattern">
        Pick 5-10 specific subreddits / RSS feeds that match your channel niche. Agent pulls top
        posts daily; LLM identifies which 1-2 are worth Reels-content. Pre-filtered topic
        pipeline.
      </NoteBlock>
    </>
  )
}
