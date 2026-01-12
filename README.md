# AI Engineering Projects

Learn AI Engineering through hands-on, production-ready projects. Master RAG, LLM Applications, Embeddings, AI Agents, and MLOps.

## Overview

This platform provides comprehensive tutorials for building real-world AI systems with:

- **Complete code** - Production-ready implementations
- **Architecture diagrams** - Visual system designs with Mermaid
- **Step-by-step explanations** - From setup to deployment
- **Progressive difficulty** - Beginner to Advanced levels

## Project Categories

| Category | Description |
|----------|-------------|
| **RAG Systems** | Document Q&A, hybrid search, multi-doc retrieval |
| **LLM Applications** | Chatbots, content generation, code assistants |
| **Embeddings** | Semantic search, clustering, vector databases |
| **AI Agents** | Tool-using agents, multi-agent systems |
| **MLOps** | Model deployment, monitoring, CI/CD |

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aalhommada/ai-projects.git
cd ai-projects

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

## Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **React**: 19.2
- **Documentation**: Fumadocs 15
- **Styling**: Tailwind CSS 4
- **Diagrams**: Mermaid 11

## Contributing

Contributions are welcome! Here's how you can help:

### Adding a New Tutorial

1. **Fork the repository**
   ```bash
   git fork https://github.com/aalhommada/ai-projects.git
   ```

2. **Create a new branch**
   ```bash
   git checkout -b feat/your-tutorial-name
   ```

3. **Add your tutorial** in the appropriate category folder:
   ```
   content/docs/
   ├── rag/
   │   ├── basic/
   │   ├── intermediate/
   │   └── advanced/
   ├── llm-applications/
   ├── embeddings/
   ├── agents/
   └── mlops/
   ```

4. **Follow the tutorial structure**:
   ```mdx
   ---
   title: Your Tutorial Title
   description: Brief description of what you'll build
   ---

   # Your Tutorial Title

   | Property | Value |
   |----------|-------|
   | **Difficulty** | Beginner/Intermediate/Advanced |
   | **Time** | ~X hours |
   | **Code Size** | ~XXX LOC |
   | **Prerequisites** | [Link to prerequisite](/docs/path) |

   ## Tech Stack
   ## Prerequisites
   ## What You'll Learn
   ## System Architecture (Mermaid diagram)
   ## Implementation (Step-by-step)
   ## Testing
   ## Summary
   ```

5. **Submit a Pull Request**
   - Provide a clear description of your tutorial
   - Include screenshots if applicable
   - Ensure the build passes

### Improving Existing Tutorials

- Fix typos or unclear explanations
- Add missing error handling
- Improve code examples
- Update outdated dependencies

### Reporting Issues

- Use GitHub Issues for bugs or suggestions
- Include steps to reproduce for bugs
- Provide context for feature requests

### Code Style

- Use clear, descriptive variable names
- Add comments for complex logic
- Follow existing patterns in the codebase
- Test your code before submitting

## Project Structure

```
ai-projects/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── docs/              # Documentation routes
├── content/docs/          # MDX tutorial content
│   ├── rag/
│   ├── llm-applications/
│   ├── embeddings/
│   ├── agents/
│   └── mlops/
├── components/            # React components
├── lib/                   # Utility functions
└── public/               # Static assets
```

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

**Abdullah Alhommada** - [@aalhommada](https://github.com/aalhommada)
