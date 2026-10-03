export const projects = [
  {
    title: "AI Task Worker",
    description:
      "An autonomous AI worker that runs accounts-payable tasks across a simulated company's inbox, vendor portal, PDFs and ERP. The model proposes, code decides: every write must cite facts it actually read, then passes policy checks for duplicates, payment fraud and approval limits, and an independent verifier confirms the result. 25/27 eval runs pass with zero incorrect writes.",
    tech: ["Python", "LangGraph", "OpenAI API", "FastAPI", "Playwright"],
    link: "https://github.com/gowtham965/ai-task-worker",
  },
  {
    title: "Job Application Agent",
    description:
      "A human-in-the-loop agent that searches LinkedIn, Naukri, Wellfound and Internshala, keeps roles that fit, tailors a one-page resume per posting, drafts referral outreach and fills the application form, then stops for you to click Submit. A verifier blocks any resume claim not backed by the source profile, and a layout check measures every line of the rendered PDF.",
    tech: ["Python", "Claude Code", "Playwright", "FastAPI", "SQLite"],
    link: "https://github.com/gowtham965/job-agent",
  },
  {
    title: "Python Docs RAG",
    description:
      "RAG Q&A system over the Python standard library docs — hand-built hybrid retrieval (BM25 + vector search, RRF fusion, cross-encoder reranking) with FastAPI + React, and a real eval harness.",
    tech: ["Python", "FastAPI", "React", "ChromaDB", "BM25", "Cross-Encoder Reranking", "Docker"],
    link: "https://github.com/gowtham965/python-docs-rag",
  },
  {
    title: "GitHub Issue Triage Agent",
    description:
      "A LangGraph agentic system that takes an ambiguous GitHub issue, locates the relevant code via tool-calling search, and produces a tested, working patch inside a network-isolated Docker sandbox — requiring explicit human approval before opening any PR.",
    tech: ["Python", "LangGraph", "OpenAI API", "Docker", "PyGithub"],
    link: "https://github.com/gowtham965/gh-issue-agent",
  },
];