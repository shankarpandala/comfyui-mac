import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2NicheFeeds() {
  return (
    <>
      <p>Niche feeds for your channel — pick the 5-10 sources that are 80% of your topic universe.</p>

      <h2>By channel niche</h2>
      <table>
        <thead><tr><th>Niche</th><th>Sources</th></tr></thead>
        <tbody>
          <tr><td>AI / tech</td><td>Hacker News, r/MachineLearning, ai-news RSS, Replicate updates</td></tr>
          <tr><td>Productivity</td><td>r/productivity, BeyondTheToDoList RSS, Tim Ferriss blog</td></tr>
          <tr><td>Finance</td><td>r/personalfinance, Bloomberg RSS, MarketWatch RSS</td></tr>
          <tr><td>Fitness</td><td>r/fitness, Outside RSS, Mens Health RSS</td></tr>
          <tr><td>Travel</td><td>r/travel, Atlas Obscura, Lonely Planet RSS</td></tr>
        </tbody>
      </table>

      <h2>Aggregator script</h2>
      <pre>{`def daily_topics():
    sources = [
        ("reddit", "MachineLearning"),
        ("reddit", "stable_diffusion"),
        ("rss", "https://huggingface.co/papers"),
    ]
    items = []
    for kind, source in sources:
        if kind == "reddit": items.extend(reddit_top(source))
        elif kind == "rss": items.extend(rss_fetch(source))
    return items`}</pre>

      <h2>The agent's role</h2>
      <ol>
        <li>Daily trigger (launchd, Subject 33).</li>
        <li>Aggregator runs; collects ~50 items.</li>
        <li>LLM filters to top 5 most-suitable for Reels.</li>
        <li>For each: research stage → script → produce Reel.</li>
      </ol>

      <NoteBlock title="The 'trends → topics → scripts' pipeline">
        This trend-discovery stage feeds the script agent (Subject 37). Together they turn the
        passive "what should I post about today?" into an automated daily briefing.
      </NoteBlock>
    </>
  )
}
