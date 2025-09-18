import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="projects-title">
            Here are a few of my favorite projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-testid="projects-grid">
          <div className="project-card rounded-xl overflow-hidden" data-testid="project-card-learn-theyei">
            <img
              src="/chatbot.png"
              alt="Learn.TheYEI project screenshot"
              className="w-full h-48 object-cover"
              data-testid="project-image-learn-theyei"
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground" data-testid="project-name-learn-theyei">
                InsureWise – Insurance Recommendation Chatbot
                </h3>
                <div className="flex space-x-2">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View Learn.TheYEI live site"
                    data-testid="project-live-learn-theyei"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View Learn.TheYEI source code"
                    data-testid="project-github-learn-theyei"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm" data-testid="project-description-learn-theyei">
              AI-powered chatbot that recommends the best insurance plans and checks user eligibility across 50+ plans from 5 major companies, using a single smart form and chat-based interaction.
              </p>
              <div className="flex flex-wrap gap-2" data-testid="project-technologies-learn-theyei">
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-react">
                  Langchain
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-next.js">
                  Streamlit
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-tailwindcss">
                  Mysql
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-css">
                  AI
                </span>
              </div>
            </div>
          </div>

          <div className="project-card rounded-xl overflow-hidden" data-testid="project-card-buildfaster">
            <img
              src="/dsa.png"
              alt="BuildFaster project screenshot"
              className="w-full h-48 object-cover"
              data-testid="project-image-buildfaster"
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground" data-testid="project-name-buildfaster">
                AmbuRoute
                </h3>
                <div className="flex space-x-2">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View BuildFaster live site"
                    data-testid="project-live-buildfaster"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View BuildFaster source code"
                    data-testid="project-github-buildfaster"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm" data-testid="project-description-buildfaster">
              Built a system to find the shortest and fastest route for ambulances using Dijkstra’s Algorithm on a Kaggle dataset, helping optimize emergency response time.
              </p>
              <div className="flex flex-wrap gap-2" data-testid="project-technologies-buildfaster">
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-html">
                  Dijkstra's Algorithm
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-css">
                  Heap Sort
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-javascript">
                  Python
                </span>
              </div>
            </div>
          </div>

          <div className="project-card rounded-xl overflow-hidden" data-testid="project-card-react-emoji-search">
            <img
              src="/hms.png"
              alt="React Emoji Search project screenshot"
              className="w-full h-48 object-cover"
              data-testid="project-image-react-emoji-search"
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground" data-testid="project-name-react-emoji-search">
                  Hospital Management System
                </h3>
                <div className="flex space-x-2">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View React Emoji Search live site"
                    data-testid="project-live-react-emoji-search"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View React Emoji Search source code"
                    data-testid="project-github-react-emoji-search"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm" data-testid="project-description-react-emoji-search">
              Developed a hospital management system that shows real-time bed and ICU availability before reaching the hospital, with chatbot integration for seamless communication.
              </p>
              <div className="flex flex-wrap gap-2" data-testid="project-technologies-react-emoji-search">
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-react">
                  FastAPI
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-css">
                  Python
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full" data-testid="tech-tag-json">
                  Langchain
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
