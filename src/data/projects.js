export const projects = [
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