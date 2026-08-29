import { useEffect, useState } from 'react';
import {
  aboutSections,
  certificates,
  experience,
  experiments,
  journey,
  profile,
  selectedWork,
  skills
} from './data';

const Arrow = () => <span aria-hidden="true">↗</span>;

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}

function PlaceholderMedia({ project, compact = false }) {
  return (
    <div
      className={`media-placeholder ${
        project.visual || ''
      } ${compact ? 'compact' : ''}`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
        />
      ) : (
        <>
          <span className="media-kicker">MEDIA / PLACEHOLDER</span>
          <strong>{project.title}</strong>
          <small>
            INSERT {project.title.toUpperCase()} SCREENSHOT HERE
          </small>
          <div className="media-grid" />
        </>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a
        className="brand"
        href="#top"
        aria-label="Nisha Razzaq home"
      >
        <span>NR</span>
        <b>NISHA RAZZAQ</b>
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? 'CLOSE' : 'MENU'}
      </button>

      <nav className={open ? 'open' : ''}>
        {[
          ['about', 'About'],
          ['work', 'Selected work'],
          ['skills', 'Skills'],
          ['archive', 'Archive']
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let's connect <Arrow />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />

      <div className="hero-depth" aria-hidden="true">
        <span className="depth-line line-one" />
        <span className="depth-line line-two" />
        <span className="depth-dot dot-one" />
        <span className="depth-dot dot-two" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">
          <span className="pulse" /> Portfolio / 2026
        </p>

        <h1>
          <span>Nisha</span>
          <em>Razzaq</em>
        </h1>

        <p className="hero-role">
          Computer Science Student <span>&</span> Developer
        </p>

        <p className="hero-tagline">
          I build what I imagine,
          <br />
          <strong>then make it executable.</strong>
        </p>

        <span className="link-caption">
          Scroll to explore
        </span>
      </div>

      <div className="hero-aside">
        <span>01 — 05</span>
        <i />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-head reveal">
        <SectionLabel number="01">About me</SectionLabel>

        <h2>
          A work in
          <br />
          <em>progress.</em>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-intro reveal">
          <span className="quote-mark">“</span>

          <p>
            Curiosity turned into code.
            <br />
            <strong>Code turned into a direction.</strong>
          </p>
        </div>

        <div className="about-text">
          {aboutSections.map((part, i) => (
            <article
              className="about-block reveal"
              key={part.heading}
            >
              <div className="about-index">
                0{i + 1}
              </div>

              <div>
                <h3>{part.heading}</h3>

                {part.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="study-path reveal">
            <div className="study-heading">
              <p className="kicker">Where I studied</p>
              <h3>The path so far</h3>
            </div>

            {journey
              .filter(item =>
                ['School', 'College', 'University'].includes(
                  item.label
                )
              )
              .map(item => (
                <article
                  className="study-step"
                  key={item.mark}
                >
                  <span>{item.year}</span>

                  <div>
                    <p className="kicker">{item.label}</p>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
          </div>

          <div className="study-path reveal">
            <div className="study-heading">
              <p className="kicker">Experience</p>
              <h3>Hands-on work</h3>
            </div>

            {experience.map(item => (
              <article
                className="study-step"
                key={item.role}
              >
                <span>{item.duration}</span>

                <div>
                  <p className="kicker">{item.org}</p>
                  <h4>{item.role}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [active, setActive] = useState(null);

  return (
    <section className="section work" id="work">
      <div className="section-head reveal">
        <SectionLabel number="02">
          Selected work
        </SectionLabel>

        <h2>
          Ideas made
          <br />
          <em>real.</em>
        </h2>

        <p className="section-note">
          Four substantial builds. Every one started as a
          question.
        </p>
      </div>

      <div className="work-list">
        {selectedWork.map(project => (
          <article
            className={`work-card ${project.tone} reveal`}
            key={project.id}
            onClick={() => setActive(project)}
          >
            <div className="work-number">
              {project.id}
            </div>

            <PlaceholderMedia project={project} />

            <div className="work-info">
              <p className="kicker">{project.kicker}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tag-row">
                {project.technologies.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button className="text-button">
                Open case study <Arrow />
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <ProjectModal
          project={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project"
        >
          ×
        </button>

        <PlaceholderMedia project={project} />

        <p className="kicker">
          {project.kicker}
        </p>

        <h2>{project.title}</h2>

        <div className="tag-row">
          {project.technologies.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {project.caseStudy && (
          <div className="case-study">
            <p className="kicker">Case Study</p>
            <ul>
              {project.caseStudy.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PROJECT VIDEO */}
        {project.video && (
          <div className="project-video-wrapper">
            <video
              className="project-video"
              src={project.video}
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video
              element.
            </video>
          </div>
        )}

        <div className="modal-actions">
          <a
            className="solid-button"
            href={project.github || '#'}
            onClick={e =>
              !project.github &&
              e.preventDefault()
            }
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository <Arrow />
          </a>

          {project.live && (
            <a
              className="text-button"
              href={project.live}
            >
              Live demo <Arrow />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Resolves a skill's linked ids to real names.
// 'w01'-'w04' -> selectedWork, 'e01'-'e08' -> experiments,
// 'c01'-'c09' -> certificates (in array order).
const projectIndex = {
  ...Object.fromEntries(
    selectedWork.map(project => [
      `w${project.id}`,
      {
        group: 'Selected work',
        number: project.id,
        title: project.title
      }
    ])
  ),
  ...Object.fromEntries(
    experiments.map(item => [
      `e${item.number}`,
      {
        group: 'Experiment',
        number: item.number,
        title: item.title
      }
    ])
  ),
  ...Object.fromEntries(
    certificates.map((certificate, i) => [
      `c${String(i + 1).padStart(2, '0')}`,
      {
        group: 'Certificate',
        number: String(i + 1).padStart(2, '0'),
        title: certificate.title
      }
    ])
  )
};

function Skills() {
  const [active, setActive] = useState(
    skills[0].name
  );

  const selected = skills.find(
    skill => skill.name === active
  );

  return (
    <section className="section skills" id="skills">
      <div className="section-head reveal">
        <SectionLabel number="03">
          What I build with
        </SectionLabel>

        <h2>
          A growing
          <br />
          <em>toolkit.</em>
        </h2>

        <p className="section-note">
          A small solar system of languages, ideas, and
          tools I keep returning to.
        </p>
      </div>

      <div className="skill-system">
        <div className="skill-solar">
          <span className="orbit orbit-large" />
          <span className="orbit orbit-medium" />
          <span className="orbit orbit-small" />

          <span className="solar-core">
            <b>skills</b>
          </span>

          {skills.map((skill, i) => (
            <button
              className={`solar-node solar-node-${i + 1} ${
                active === skill.name
                  ? 'selected'
                  : ''
              }`}
              key={skill.name}
              onMouseEnter={() =>
                setActive(skill.name)
              }
              onFocus={() =>
                setActive(skill.name)
              }
              onClick={() =>
                setActive(skill.name)
              }
            >
              <i />
              {skill.name}
            </button>
          ))}
        </div>

        <div className="skill-detail reveal">
          <span className="detail-count">
            {selected.projects.length
              .toString()
              .padStart(2, '0')}
          </span>

          <p className="kicker">
            Selected skill
          </p>

          <h3>{selected.name}</h3>

          <p>
            A skill I have explored through hands-on
            projects and continued learning.
          </p>

          <div className="connected">
            {selected.projects.length ? (
              selected.projects.map(id => {
                const project = projectIndex[id];

                return (
                  <span key={id}>
                    {project
                      ? `${project.group} / ${project.number} — ${project.title}`
                      : `Unmapped reference / ${id}`}
                  </span>
                );
              })
            ) : (
              <span>
                Personal practice / ongoing
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Archive() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="section archive"
      id="archive"
    >
      <div className="section-head reveal">
        <SectionLabel number="05">
          The archive
        </SectionLabel>

        <h2>
          Proof of
          <br />
          <em>practice.</em>
        </h2>

        <p className="section-note">
          Certificates, milestones, and evidence of showing
          up.
        </p>
      </div>

      <div className="archive-grid">
        {certificates.map((certificate, i) => (
          <button
            className="certificate reveal"
            key={certificate.title}
            onClick={() =>
              setSelected(certificate)
            }
          >
            <span>
              {String(i + 1).padStart(2, '0')}
            </span>

            {certificate.marker && (
              <img
                className="certificate-thumb"
                src={certificate.marker}
                alt={`${certificate.title} preview`}
              />
            )}

            <i>↗</i>

            <div>
              <p>{certificate.type}</p>
              <h3>{certificate.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="certificate-modal"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() =>
                setSelected(null)
              }
            >
              ×
            </button>

            {selected.marker ? (
              <img
                className="certificate-preview-image"
                src={selected.marker}
                alt={`${selected.title} certificate`}
              />
            ) : (
              <div className="certificate-preview">
                <span>ARCHIVE / CERTIFICATE</span>
                <strong>{selected.title}</strong>
              </div>
            )}

            <p>{selected.type}</p>
            <h2>{selected.title}</h2>
          </div>
        </div>
      )}
    </section>
  );
}

// mydata.js currently stores a few experiments as
// [title, description, image, github] (no video). Because the array is
// destructured as [title, description, image, video, github], the github
// URL for those items lands in `video` instead of `github`. This resolver
// detects that shift (a URL sitting in the video slot) and fixes it so the
// UI works regardless of which shape an entry uses.
function resolveExperimentMedia(item) {
  const looksLikeUrl = value =>
    typeof value === 'string' && value.startsWith('http');

  let { video, github } = item;

  if (!github && looksLikeUrl(video)) {
    github = video;
    video = undefined;
  }

  return { ...item, video, github };
}

function Experiments() {
  return (
    <section
      className="section experiments"
      id="experiments"
    >
      <div className="section-head reveal">
        <SectionLabel number="06">
          Experiments & explorations
        </SectionLabel>

        <h2>
          Small things
          <br />
          <em>teach big.</em>
        </h2>

        <p className="section-note">
          A quieter shelf for curiosity, practice, and
          earlier questions.
        </p>
      </div>

      <div className="experiment-list">
        {experiments.map(raw => {
          const item = resolveExperimentMedia(raw);

          return (
            <article
              className="experiment reveal"
              key={item.title}
            >
              <span>{item.number}</span>

              {item.image && (
                <img
                  className="experiment-thumb"
                  src={item.image}
                  alt={`${item.title} preview`}
                />
              )}

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {item.video && (
                  <video
                    className="experiment-video"
                    src={item.video}
                    controls
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video
                    element.
                  </video>
                )}
              </div>

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.title} repository`}
                >
                  GitHub <Arrow />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

// ...existing code...
function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-shell">
        <div className="contact-intro">
          <SectionLabel number="06">
            Contact
          </SectionLabel>

          <p className="eyebrow">Available for selected work</p>
        </div>

        <div className="contact-showcase">
          <div className="contact-copy">
            <p className="eyebrow">Let’s design something meaningful</p>

            <h2>
              Have an idea?
              <br />
              <em>Let’s make it real.</em>
            </h2>
          </div>

          <aside className="contact-card">
            <p>
              I build polished digital experiences for founders, brands,
              and teams who want clarity, identity, and carefully crafted
              interaction.
            </p>

            <span>Freelance • product • web • prototype</span>
          </aside>
        </div>

        <div className="contact-actions">
          <a
            className="email"
            href={`mailto:${profile.email}`}
          >
            {profile.email} <Arrow />
          </a>

          <div className="contact-links">
            <a
              href={profile.linkedin || '#'}
              onClick={e =>
                !profile.linkedin &&
                e.preventDefault()
              }
            >
              LinkedIn
            </a>

            <a
              href={profile.github || '#'}
              onClick={e =>
                !profile.github &&
                e.preventDefault()
              }
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="contact-bottom">
          <span>© 2026 Nisha Razzaq</span>
          <span>Built with curiosity</span>
          <span>Let’s connect</span>
        </div>
      </div>
    </footer>
  );
}
// ...existing code...

export default function App() {
  useEffect(() => {
    const observer =
      new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                'visible'
              );
            }
          }),
        {
          threshold: 0.12
        }
      );

    document
      .querySelectorAll('.reveal')
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Archive />
        <Experiments />
      </main>

      <Contact />
    </>
  );
}