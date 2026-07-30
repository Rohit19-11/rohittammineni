const projects = [
  {
    index: "01",
    title: "ShopSphere",
    category: "Full-stack e-commerce platform",
    description:
      "A deployed commerce application with product discovery, category filters, cart and wishlist flows, checkout, JWT authentication, role-based access, and an admin dashboard.",
    stack: ["React", "Django REST Framework", "PostgreSQL", "JWT"],
    result: "Live production deployment",
    live: "https://shopsphere-store-gamma.vercel.app/",
    source: "https://github.com/Rohit19-11/shopsphere-ecommerce",
  },
  {
    index: "02",
    title: "Password Security Analyzer",
    category: "Security-focused web application",
    description:
      "A privacy-first password analysis tool with strength scoring, breach checks using k-anonymity, reuse detection, SHA-256 hashing, authentication, and a shared vault protected by row-level security.",
    stack: ["React", "TypeScript", "Supabase", "Security"],
    result: "Secure-by-design implementation",
    source: "https://github.com/Rohit19-11/password-security-analyzer",
  },
  {
    index: "03",
    title: "AIVOA Complaint System",
    category: "AI-assisted complaint intelligence",
    description:
      "A complaint management workflow that structures citizen reports, runs AI-assisted analysis, and stores cases through a responsive React interface and Python API.",
    stack: ["React", "FastAPI", "LangGraph", "Groq"],
    result: "AI + full-stack workflow",
    source: "https://github.com/Rohit19-11/aivoa-ai-complaint-management",
  },
];

const experience = [
  {
    date: "Jul 2026 — Present",
    role: "Web Developer Intern",
    company: "InAmigos Foundation",
    mode: "Remote · India",
    summary:
      "Developing responsive, user-friendly web pages and translating researched project requirements into functional interfaces.",
    highlights: [
      "Build responsive pages with HTML, CSS, and web development fundamentals.",
      "Research requirements and convert them into clear, usable web experiences.",
      "Strengthen practical delivery, collaboration, and communication skills.",
    ],
  },
  {
    date: "May 2026 — Jun 2026",
    role: "Cyber Crime Intern",
    company: "Cyber Crime Police Station, Visakhapatnam",
    mode: "On-site · Visakhapatnam, Andhra Pradesh",
    summary:
      "Supported cybercrime investigation workflows through digital evidence documentation, complaint review, incident reporting, and organized case records.",
    highlights: [
      "Assisted with digital evidence collection and investigation documentation.",
      "Prepared incident reports and maintained accurate case records.",
      "Observed digital forensic workflows and established investigation procedures.",
    ],
  },
];

const certificationGroups = [
  {
    label: "Generative AI · Google Cloud",
    count: "05",
    items: [
      "Gen AI Agents: Transform Your Organization",
      "Gen AI Apps: Transform Your Work",
      "Gen AI: Navigate the Landscape",
      "Gen AI: Unlock Foundational Concepts",
      "Gen AI: Beyond the Chatbot",
    ],
    meta: "Google Cloud Security · Issued Jul 2026",
  },
  {
    label: "Software development",
    count: "03",
    items: [
      "Software Product Developer — NASSCOM",
      "Web Developer — Skill India Digital Hub",
      "Python Intermediate — SoloLearn",
    ],
    meta: "Issued Jul 2026",
  },
  {
    label: "Cisco developer foundations",
    count: "05",
    items: [
      "Python Essentials 2",
      "CSS Essentials",
      "Python Essentials 1",
      "JavaScript Essentials 1",
      "HTML Essentials",
    ],
    meta: "Cisco Networking Academy · 2025–2026",
  },
  {
    label: "Cloud & AI foundation",
    count: "01",
    items: [
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    ],
    meta: "Oracle · Issued Oct 2025 · Expires Oct 2027",
  },
];

const skillGroups = [
  {
    title: "Core",
    items: ["Python", "JavaScript", "SQL", "Data Structures & Algorithms"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Django REST Framework", "FastAPI", "REST APIs", "JWT Auth"],
  },
  {
    title: "Data & delivery",
    items: ["PostgreSQL", "Supabase", "Git", "GitHub", "Vercel", "Render"],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {diagonal ? (
        <path d="M7 17 17 7M8 7h9v9" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function CodeMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="mobile-header">
        <a href="#home" className="mobile-brand">
          <span>RT</span>
          Rohit Tammineni
        </a>
        <a href="#contact">Contact</a>
      </header>

      <aside className="side-rail">
        <a className="brand" href="#home" aria-label="Rohit Tammineni, home">
          <span className="brand-mark">RT</span>
          <span>
            <strong>Rohit Tammineni</strong>
            <small>Software Developer</small>
          </span>
        </a>

        <nav aria-label="Portfolio sections">
          <a href="#about"><span>01</span> About</a>
          <a href="#experience"><span>02</span> Experience</a>
          <a href="#projects"><span>03</span> Projects</a>
          <a href="#profiles"><span>04</span> Coding</a>
          <a href="#certifications"><span>05</span> Credentials</a>
          <a href="#contact"><span>06</span> Contact</a>
        </nav>

        <div className="rail-footer">
          <div className="availability"><i /> Open to SDE internships</div>
          <div className="rail-links">
            <a href="https://github.com/Rohit19-11" target="_blank" rel="noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/rohit-tammineni" target="_blank" rel="noreferrer">IN</a>
            <a href="https://leetcode.com/u/Rohit191106" target="_blank" rel="noreferrer">LC</a>
            <a href="https://www.geeksforgeeks.org/profile/rohittamminegz3s" target="_blank" rel="noreferrer">GFG</a>
          </div>
        </div>
      </aside>

      <div className="page">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-signal" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">B.Tech CSE · Cyber Security · 2028</p>
            <h1>
              I build software
              <br />
              that turns <em>ideas</em>
              <br />
              into outcomes.
            </h1>
            <p className="hero-summary">
              I&apos;m Rohit Tammineni, a Python-focused software developer
              building secure full-stack applications, practicing DSA, and
              exploring practical AI systems.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View selected work <Arrow />
              </a>
              <a className="secondary-button" href="#experience">
                Explore experience
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <div>
              <span>Based in</span>
              <strong>Visakhapatnam, India</strong>
            </div>
            <div>
              <span>Current focus</span>
              <strong>Full-stack · Python · DSA</strong>
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span>Scroll to discover</span><i />
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-index">01 / About</div>
          <div className="section-intro">
            <p className="eyebrow dark">Profile</p>
            <h2>
              Engineering fundamentals.
              <br />
              <em>Real-world curiosity.</em>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p className="lead">
                I&apos;m a Computer Science Engineering student at VIIT,
                Visakhapatnam, specializing in Cyber Security and working
                toward a software development career.
              </p>
              <p>
                My work combines secure thinking with product development. I
                enjoy moving across the stack—from responsive interfaces to
                Python APIs, authentication, SQL databases, and deployment.
              </p>
              <p>
                Internships in web development and cybercrime investigation
                have strengthened my ability to research requirements,
                document carefully, and communicate technical work clearly.
              </p>
            </div>
            <div className="metric-grid">
              <article>
                <strong>8.67</strong>
                <span>Current CGPA</span>
              </article>
              <article>
                <strong>03</strong>
                <span>Selected projects</span>
              </article>
              <article>
                <strong>02</strong>
                <span>Internship experiences</span>
              </article>
              <article>
                <strong>14</strong>
                <span>Verified credentials</span>
              </article>
            </div>
          </div>

          <div className="skill-strip">
            {skillGroups.map((group, index) => (
              <article key={group.title}>
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-index light">02 / Experience</div>
          <div className="section-intro inverse">
            <p className="eyebrow">Experience</p>
            <h2>
              Learning in the field,
              <br />
              <em>delivering with intent.</em>
            </h2>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article key={item.role}>
                <div className="experience-number">0{index + 1}</div>
                <div className="experience-date">
                  <span>{item.date}</span>
                  <small>{item.mode}</small>
                </div>
                <div className="experience-body">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.summary}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-index">03 / Projects</div>
          <div className="section-intro projects-heading">
            <div>
              <p className="eyebrow dark">Selected work</p>
              <h2>
                Products built to
                <br />
                <em>solve real problems.</em>
              </h2>
            </div>
            <a className="inline-link" href="https://github.com/Rohit19-11" target="_blank" rel="noreferrer">
              Explore GitHub <Arrow diagonal />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.index}</span>
                  <span>{project.result}</span>
                </div>
                <div className="project-visual" aria-hidden="true">
                  <CodeMark />
                  <i />
                  <i />
                  <i />
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-actions">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live project <Arrow diagonal />
                    </a>
                  )}
                  {project.source && (
                    <a href={project.source} target="_blank" rel="noreferrer">
                      Source code <Arrow diagonal />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section profiles-section" id="profiles">
          <div className="section-index">04 / Coding profiles</div>
          <div className="profiles-layout">
            <div className="section-intro">
              <p className="eyebrow dark">Practice</p>
              <h2>
                Consistency beyond
                <br />
                <em>the project codebase.</em>
              </h2>
              <p className="profiles-copy">
                I practice data structures and algorithms in Python and
                maintain my solutions as visible evidence of continuous
                learning.
              </p>
            </div>
            <div className="profile-cards">
              <a href="https://github.com/Rohit19-11" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>Rohit19-11</strong>
                <small>Projects & source code</small>
                <Arrow diagonal />
              </a>
              <a href="https://leetcode.com/u/Rohit191106" target="_blank" rel="noreferrer">
                <span>LeetCode</span>
                <strong>Rohit191106</strong>
                <small>DSA practice in Python</small>
                <Arrow diagonal />
              </a>
              <a href="https://github.com/Rohit19-11/leetcode-solutions" target="_blank" rel="noreferrer">
                <span>Solutions repository</span>
                <strong>leetcode-solutions</strong>
                <small>Organized problem-solving record</small>
                <Arrow diagonal />
              </a>
              <a href="https://www.geeksforgeeks.org/profile/rohittamminegz3s" target="_blank" rel="noreferrer">
                <span>GeeksforGeeks</span>
                <strong>rohittamminegz3s</strong>
                <small>Problem of the Day participant</small>
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <section className="section credentials-section" id="certifications">
          <div className="section-index light">05 / Credentials</div>
          <div className="section-intro inverse">
            <p className="eyebrow">Certifications</p>
            <h2>
              Structured learning,
              <br />
              <em>applied through projects.</em>
            </h2>
          </div>

          <div className="credential-list">
            {certificationGroups.map((group) => (
              <article key={group.label}>
                <div className="credential-count">{group.count}</div>
                <div className="credential-heading">
                  <h3>{group.label}</h3>
                  <p>{group.meta}</p>
                </div>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>
            Looking for a developer
            <br />
            who learns fast and <em>builds?</em>
          </h2>
          <p>
            I&apos;m open to software development internships and opportunities
            where I can contribute, learn, and grow with a strong engineering
            team.
          </p>
          <a className="contact-email" href="mailto:rohittammineni19112006@gmail.com">
            rohittammineni19112006@gmail.com <Arrow />
          </a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/rohit-tammineni" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
            <a href="https://github.com/Rohit19-11" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
            <a href="https://leetcode.com/u/Rohit191106" target="_blank" rel="noreferrer">LeetCode <Arrow diagonal /></a>
            <a href="https://www.geeksforgeeks.org/profile/rohittamminegz3s" target="_blank" rel="noreferrer">GeeksforGeeks <Arrow diagonal /></a>
          </div>
          <footer>
            <span>© 2026 Rohit Tammineni</span>
            <a href="#home">Back to top ↑</a>
          </footer>
        </section>
      </div>
    </main>
  );
}
