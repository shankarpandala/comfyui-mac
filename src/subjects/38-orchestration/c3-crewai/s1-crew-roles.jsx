import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CrewRoles() {
  return (
    <>
      <p>CrewAI — alternative orchestration framework. Role-based; each agent has a "role" + "goal" + "backstory" + tools. Less explicit graph than LangGraph; more "team of specialists".</p>

      <h2>Install</h2>
      <CommandBlock command="pip install crewai" />

      <h2>The pattern</h2>
      <pre>{`from crewai import Agent, Task, Crew

researcher = Agent(
    role="Research analyst",
    goal="Find current accurate info on the topic",
    backstory="A veteran journalist who sources rigorously",
    tools=[web_search_tool, scrape_tool],
    llm=local_llm,
)

writer = Agent(
    role="Reel script writer",
    goal="Convert research into a compelling 60s Reel",
    backstory="A former TV staff writer turned content strategist",
    tools=[],
    llm=local_llm,
)

research_task = Task(description="Research {topic}", agent=researcher)
write_task = Task(description="Write Reel from research", agent=writer, context=[research_task])

crew = Crew(agents=[researcher, writer], tasks=[research_task, write_task])
result = crew.kickoff(inputs={"topic": "Mac FLUX speed"})`}</pre>

      <h2>CrewAI vs LangGraph</h2>
      <ul>
        <li>CrewAI: simpler API; "agent has personality" abstraction.</li>
        <li>LangGraph: more explicit; better for production state machines.</li>
        <li>Both work on Mac with Ollama; choice is preference.</li>
      </ul>

      <NoteBlock title="The 'pick one and learn it' rule">
        Don't try CrewAI AND LangGraph in the same project. Pick one. Subject 39's capstone uses
        LangGraph for explicit state; CrewAI is shown for completeness.
      </NoteBlock>
    </>
  )
}
