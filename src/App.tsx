import { useState } from "react";
import bankingCloudSecurityImage from "./assets/banking-cloud-security.png";
import { projects, type Challenge, type Project } from "./data/projects";

const projectImages: Partial<Record<string, string>> = {
  "deployment-infra-bank": bankingCloudSecurityImage,
};

function ChallengeBlock({ challenge }: { challenge: Challenge }) {
  return (
    <div className="challengeBlock">
      <h4>{challenge.title}</h4>
      {challenge.description ? <p>{challenge.description}</p> : null}
      {challenge.bullets.length > 0 ? (
        <ul>
          {challenge.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const detailId = `${project.slug}-details`;
  const primaryImpact = project.impact[0];
  const projectImage = projectImages[project.slug];

  return (
    <article
      className={`projectCard${isExpanded ? " isExpanded" : ""}`}
      id={project.slug}
    >
      <div className="projectIntro">
        <div>
          <span className="eyebrow">Project case study</span>
          <h3>{project.title}</h3>
          <p>{project.overview}</p>
        </div>
      </div>

      {projectImage ? (
        <div className="projectImageFrame">
          <img
            alt={`${project.title} visual`}
            className="projectImage"
            src={projectImage}
          />
        </div>
      ) : null}

      <div className="projectSummary">
        <div className="toolsUsed" aria-labelledby={`${project.slug}-tools`}>
          <h4 id={`${project.slug}-tools`}>Tools used</h4>
          <div className="stackList">
            {project.techStack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        {primaryImpact ? (
          <div className="impactPreview">
            <h4>Impact highlight</h4>
            <p>{primaryImpact}</p>
          </div>
        ) : null}
      </div>

      <div className="projectActions">
        <button
          aria-controls={detailId}
          aria-expanded={isExpanded}
          className="readMoreButton"
          type="button"
          onClick={onToggle}
        >
          {isExpanded ? "Read less" : "Read more"}
          <span aria-hidden="true">{isExpanded ? "-" : "+"}</span>
        </button>
      </div>

      {isExpanded ? (
        <div className="projectDetails" id={detailId}>
          <section>
            <h4>Challenges and solutions</h4>
            {project.challenges.map((challenge) => (
              <ChallengeBlock key={challenge.title} challenge={challenge} />
            ))}
          </section>

          <section>
            <h4>Architecture</h4>
            <p>{project.architecture}</p>
          </section>

          <section>
            <h4>Impact</h4>
            <ul className="impactList">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {project.links.length > 0 ? (
            <div className="linkRow">
              {project.links.map((link) => (
                <a key={link.url} href={link.url} rel="noreferrer" target="_blank">
                  {link.label}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

function App() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const projectCount = projects.length;

  return (
    <div className="appShell">
      <header className="siteHeader" id="top">
        <nav aria-label="Primary navigation">
          <a className="brand" href="#top">
            Project Showcase
          </a>
          <div className="navLinks">
            <a href="#projects">Projects</a>
          </div>
        </nav>

        <div className="hero">
          <div className="heroCopy">
            <span className="eyebrow">Portfolio</span>
            <h1>Project Showcase</h1>
            <p>
              A simple collection of projects I have worked on, including the
              scope, technology stack, challenges, architecture, and impact.
            </p>
            <div className="heroActions">
              <a className="primaryAction" href="#projects">
                View projects ({projectCount})
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="sectionHeader" id="projects">
          <span className="eyebrow">Projects</span>
          <h2>Projects I have worked on</h2>
          <p>
            Compact project summaries with deeper technical detail available on
            demand.
          </p>
        </section>

        <div className="projectGrid">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isExpanded={expandedProject === project.slug}
              onToggle={() =>
                setExpandedProject((current) =>
                  current === project.slug ? null : project.slug,
                )
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
