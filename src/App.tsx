const STACK = ["Golang", "PostgreSQL", "Kubernetes", "Apache Kafka", "Apache Cassandra"];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/ValeryVerkhoturov",
    icon: (
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    ),
    viewBox: "0 0 16 16",
  },
  {
    label: "Telegram",
    href: "https://t.me/ValerianaOfficinalis",
    icon: (
      <path d="M9.04 15.31l-.38 5.32c.54 0 .78-.23 1.06-.5l2.55-2.44 5.28 3.87c.97.53 1.66.25 1.92-.89l3.48-16.31c.31-1.44-.52-2-1.46-1.65L1.68 9.29c-1.4.54-1.38 1.32-.24 1.67l5.2 1.62L18.7 5.6c.57-.38 1.09-.17.66.21l-10.32 9.5z" />
    ),
    viewBox: "0 0 24 24",
  },
  {
    label: "Habr",
    href: "https://habr.com/ru/users/ValeryV/",
    icon: (
      <path d="M2 4h3v6.5h.04c.6-1.9 2.1-2.6 3.7-2.6 1.4 0 2.5.5 3.2 1.4.6.8.9 1.9.9 3.3V19h-3v-5.9c0-1.9-.6-2.8-2-2.8-1.5 0-2.8 1-2.8 3.1V19H2V4zm15.5 0H21v3h-3.5V4zM17.5 9H21v10h-3.5V9z" />
    ),
    viewBox: "0 0 24 24",
  },
];

const PROJECTS = [
  {
    name: "wb-api-client",
    href: "https://github.com/ValeryVerkhoturov/wb-api-client",
    description:
      "Auto-generated client libraries for the Wildberries Seller API in Python, TypeScript, Go, Java, PHP, OneScript and C#. Specs are pulled daily; on change, new packages are published to PyPI, npm, Maven Central, Packagist, NuGet and hub.oscript.io.",
    lang: "Python / TS / Go / Java / PHP / C#",
    color: "#3572A5",
  },
  {
    name: "json-streaming",
    href: "https://github.com/ValeryVerkhoturov/json-streaming",
    description:
      "Streaming read/write for JSON arrays with constant memory usage. Element-by-element writer and reader backed by goccy/go-json for ~3× throughput over encoding/json.",
    lang: "Go",
    color: "#00ADD8",
    stars: 22,
  },
  {
    name: "multiagent-golang",
    href: "https://github.com/ValeryVerkhoturov/multiagent-golang",
    description:
      "LLM-agnostic multi-agent framework based on layered parallel communication of agents. Define agents and tasks with dependencies, then kick off the crew and let it execute in parallel.",
    lang: "Go",
    color: "#00ADD8",
  },
  {
    name: "onescript-openapi-generator",
    href: "https://github.com/ValeryVerkhoturov/onescript-openapi-generator",
    description:
      "OpenAPI Generator plugin that generates a ready-to-publish OneScript (opm) client from an OpenAPI 3 spec — HTTP transport on 1connector, annotation-based models on jason, and secret-string token redaction.",
    lang: "Java",
    color: "#b07219",
  },
  {
    name: "vitepress-editorial-modernist",
    href: "https://github.com/ValeryVerkhoturov/vitepress-editorial-modernist",
    description:
      "Editorial-modernist theme layer for VitePress — warm paper, ink-black type, a single vermilion accent, hairline rules instead of boxes. CSS-only: extends the default theme without replacing a single component.",
    lang: "CSS",
    color: "#563d7c",
    extra: "npm package",
  },
  {
    name: "mirea-kb2-programming-languages",
    href: "https://github.com/ValeryVerkhoturov/mirea-kb2-programming-languages",
    description:
      "XeLaTeX template for the MIREA course work on the «Programming Languages» discipline, following the official methodological guidelines (Мерсов, Русаков, Филатов, 2022).",
    lang: "TeX",
    color: "#3D6117",
    stars: 6,
  },
];

const ARTICLES = [
  {
    title: "Авторизация в CLI приложении с помощью OAuth",
    href: "https://habr.com/ru/users/ValeryV/",
    lang: "RU",
  },
  {
    title:
      "Retrieval-Augmented Generation in technical support service based on ChatGPT, YandexGPT",
    href: "https://habr.com/ru/users/ValeryV/",
    lang: "EN / RU",
  },
  {
    title: "Автоматизация написания ВКР: LaTeX, GitHub, Google Drive и ChatGPT в действии",
    href: "https://habr.com/ru/users/ValeryV/",
    lang: "RU",
  },
];

function Header() {
  return (
    <header>
      <div className="container">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/ValeryVerkhoturov"
          alt="Valery Verkhoturov"
        />
        <h1>Valery Verkhoturov</h1>
        <p className="tagline">Senior Backend Developer · Go</p>
        <div className="badges">
          {STACK.map((tech) => (
            <span className="badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <nav className="links" aria-label="Social links">
          {SOCIALS.map((s) => (
            <a className="btn" href={s.href} target="_blank" rel="noopener" key={s.label}>
              <svg viewBox={s.viewBox} aria-hidden="true">
                {s.icon}
              </svg>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <h2>About</h2>
      <p>
        Backend software engineer specializing in Go. Works at RWB, building a financial reporting
        system with PostgreSQL, Kubernetes, Apache Kafka and Apache Cassandra.
      </p>
      <p>
        Writes articles on Habr about CLI authorization with OAuth, retrieval-augmented generation
        (RAG) in technical support with ChatGPT and YandexGPT, and automating thesis writing with
        LaTeX, GitHub, Google Drive and ChatGPT.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {PROJECTS.map((p) => (
          <a className="card" href={p.href} target="_blank" rel="noopener" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="meta">
              <span>
                <span className="dot" style={{ background: p.color }} />
                {p.lang}
              </span>
              {p.stars != null && <span>★ {p.stars}</span>}
              {p.extra && <span>{p.extra}</span>}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Articles() {
  return (
    <section id="articles">
      <h2>Articles on Habr</h2>
      <ul className="articles">
        {ARTICLES.map((a) => (
          <li key={a.title}>
            <a href={a.href} target="_blank" rel="noopener">
              {a.title}
            </a>
            <span>{a.lang}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <About />
        <Projects />
        <Articles />
      </main>
      <footer>
        <div className="container">
          <p>© Valery Verkhoturov</p>
        </div>
      </footer>
    </>
  );
}
