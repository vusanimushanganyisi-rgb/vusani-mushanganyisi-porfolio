import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Database,
  FileText,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Presentation,
  X,
} from 'lucide-react';
import { useState } from 'react';

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: typeof Database;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Database Management System',
    description:
      'A structured database solution for a simulated business environment, designed around clear relationships, reliable records, and practical SQL workflows.',
    tags: ['SQL', 'Data modelling', 'Business systems'],
    icon: Database,
  },
  {
    number: '02',
    title: 'Systems Analysis Project',
    description:
      'A complete systems analysis exercise: translating business requirements into a proposed technology solution with supporting process documentation.',
    tags: ['Requirements', 'Process mapping', 'Documentation'],
    icon: Network,
  },
  {
    number: '03',
    title: 'Learning Records Toolkit',
    description:
      'A practical records workflow shaped by experience in the classroom, bringing together accurate data capture, organisation, and accessible information.',
    tags: ['Microsoft Excel', 'Data capture', 'Organisation'],
    icon: FileText,
  },
];

const skills = [
  'Technical SQL / Database Management',
  'Systems Analysis & Design',
  'HTML / CSS',
  'Networking Fundamentals',
  'IT Project Management',
  'Information Security',
];

const presentationSlides = [
  { kicker: '01 / Introduction', title: 'Vusani Mushanganyisi', body: 'IT Management student and systems thinker focused on building useful, people-centred technology.', accent: 'Portfolio presentation' },
  { kicker: '02 / About me', title: 'Technology should work for people.', body: 'My experience in education shaped a practical approach: understand the need, communicate clearly, and build with care.', accent: 'Curious · organised · dependable' },
  { kicker: '03 / Technical toolkit', title: 'Strong foundations for the next challenge.', body: 'SQL, database management, systems analysis, HTML/CSS, networking fundamentals, project management, and information security.', accent: 'Skills & capabilities' },
  { kicker: '04 / Selected projects', title: 'Small projects. Solid foundations.', body: 'Academic work in database management, systems analysis, and learning records has helped me practise turning briefs into structured solutions.', accent: 'Projects & practice' },
  { kicker: '05 / Direction', title: 'Open to opportunities.', body: 'I am currently completing my Diploma in IT Management and looking forward to internships, junior roles, and meaningful technology conversations.', accent: 'Let’s build what matters' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">VM</span>
          <span>Vusani<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#submission" onClick={closeMenu}>Submission</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:vusani.mushanganyisi@gmail.com" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> IT student &amp; systems thinker</p>
            <h1>Turning curious<br /><em>ideas</em> into useful systems.</h1>
            <p className="hero-intro">I&apos;m Vusani Mushanganyisi, an IT Management student with a practical eye for technology, organisation, and the people behind every system.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:vusani.mushanganyisi@gmail.com">Send an email <Mail size={16} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Profile introduction">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-card">
              <span className="card-label">Currently building</span>
              <div className="card-code"><span className="code-muted">01</span><span>understanding</span><br /><span className="code-muted">02</span><span className="code-accent">problems</span><br /><span className="code-muted">03</span><span>designing solutions</span></div>
              <div className="card-status"><span className="status-dot" /> Open to opportunities</div>
            </div>
            <div className="visual-caption"><span>01 — PROFILE</span><span>South Africa / 2026</span></div>
          </div>
        </section>

        <section className="marquee" aria-label="Areas of interest">
          <div className="marquee-track"><span>Systems analysis</span><span className="marquee-star">✳</span><span>Database management</span><span className="marquee-star">✳</span><span>Information security</span><span className="marquee-star">✳</span><span>Systems analysis</span><span className="marquee-star">✳</span></div>
        </section>

        <section className="about page-section" id="about">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> A little context</p><span className="section-number">02 / 05</span></div>
          <div className="about-grid">
            <h2>Technology is most<br />valuable when it<br /><em>works for people.</em></h2>
            <div className="about-content">
              <p className="lead">My path combines technical learning with real-world experience in education. That combination taught me to look beyond the tool: to understand the need, communicate clearly, and build with care.</p>
              <p>I am currently studying for a Diploma in IT Management at Rosebank International. I bring an organised, dependable approach to every challenge, with a growing focus on databases, systems analysis, and the foundations of secure technology.</p>
              <a className="text-link" href="#experience">See my journey <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="about-metrics"><div><strong>2024</strong><span>Diploma in progress</span></div><div><strong>06</strong><span>Core technical skills</span></div><div><strong>01</strong><span>Clear direction</span></div></div>
        </section>

        <section className="projects-section page-section" id="projects">
          <div className="section-heading light-heading"><p className="eyebrow"><span className="eyebrow-line" /> Selected work</p><span className="section-number">03 / 05</span></div>
          <div className="projects-intro"><h2>Small projects.<br /><em>Solid foundations.</em></h2><p>Academic work is where I practise turning a brief into something structured, useful, and ready to grow.</p></div>
          <div className="project-list">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><Icon size={25} strokeWidth={1.5} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-arrow"><ArrowUpRight size={20} /></span></article>; })}</div>
        </section>

        <section className="skills page-section" id="skills">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> What I bring</p><span className="section-number">04 / 05</span></div>
          <div className="skills-layout"><div><h2>Tools for the<br /><em>next challenge.</em></h2><p className="skills-note">A balanced toolkit of technical knowledge and the human skills that make it useful.</p></div><div className="skills-list">{skills.map((skill, index) => <div className="skill-row" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><Check size={18} /></div>)}</div></div>
        </section>

        <section className="experience page-section" id="experience">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> Experience &amp; education</p><span className="section-number">05 / 05</span></div>
          <div className="timeline"><div className="timeline-item"><div className="timeline-date">2024 — present</div><div className="timeline-marker"><GraduationCap size={20} /></div><div><h3>Diploma in IT Management</h3><p>Rosebank International</p><span>Building a practical foundation in systems, business, and technology.</span></div></div><div className="timeline-item"><div className="timeline-date">2020 — 2021</div><div className="timeline-marker"><BriefcaseBusiness size={20} /></div><div><h3>Teacher Assistant</h3><p>Graceland Education Centre</p><span>Managed learner records, supported classroom operations, prepared learning materials, and helped create a positive learning environment.</span></div></div><div className="timeline-item"><div className="timeline-date">2019</div><div className="timeline-marker"><GraduationCap size={20} /></div><div><h3>National Senior Certificate</h3><p>Graceland Education Centre</p><span>Matric with Mathematics, Mathematical Literacy, Geography, Business Studies, Life Sciences, and Life Orientation.</span></div></div></div>
        </section>

        <section className="submission page-section" id="submission">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> Project submission</p><span className="section-number">06 / 06</span></div>
          <div className="submission-intro"><h2>Three ways to<br /><em>explore the work.</em></h2><p>The complete portfolio submission, gathered in one place for review.</p></div>
          <div className="deliverables">
            <a className="deliverable-card deliverable-live" href="#top"><span className="deliverable-icon"><Globe2 size={21} /></span><span className="deliverable-type">01 / Online</span><strong>Live portfolio website</strong><span className="deliverable-action">View website <ArrowUpRight size={16} /></span></a>
            <div className="deliverable-card"><span className="deliverable-icon"><FileText size={21} /></span><span className="deliverable-type">02 / Source</span><strong>Project source code</strong><span className="deliverable-action deliverable-note">Repository link to be added</span></div>
            <button className="deliverable-card deliverable-button" type="button" onClick={() => { setActiveSlide(0); setPresentationOpen(true); }}><span className="deliverable-icon"><Presentation size={21} /></span><span className="deliverable-type">03 / Presentation</span><strong>PowerPoint presentation</strong><span className="deliverable-action">Open slide deck <ArrowUpRight size={16} /></span></button>
          </div>
        </section>

        <section className="contact-section page-section" id="contact"><div className="contact-copy"><p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>Have a problem<br />worth <em>solving?</em></h2><p>I&apos;m open to internships, junior opportunities, and conversations about technology. I&apos;d love to hear what you&apos;re working on.</p><a className="button button-light" href="mailto:vusani.mushanganyisi@gmail.com">vusani.mushanganyisi@gmail.com <ArrowUpRight size={17} /></a></div><div className="contact-aside"><div className="contact-detail"><MapPin size={19} /><span>Gauteng, South Africa</span></div><div className="contact-detail"><Mail size={19} /><a href="mailto:vusani.mushanganyisi@gmail.com">Email me directly</a></div><div className="contact-socials"><a href="https://www.linkedin.com/in/vusani-mushanganyisi-835374282" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="mailto:vusani.mushanganyisi@gmail.com" aria-label="Email"><Mail size={19} /></a></div></div></section>
      </main>

      {presentationOpen && <div className="presentation-overlay" role="dialog" aria-modal="true" aria-label="Portfolio presentation"><div className="presentation-window"><div className="presentation-topbar"><span className="presentation-brand">VUSANI / PRESENTATION</span><button className="presentation-close" type="button" onClick={() => setPresentationOpen(false)} aria-label="Close presentation"> <X size={20} /> </button></div><div className="presentation-slide"><div className="slide-number">0{activeSlide + 1} <span>/ 05</span></div><p className="eyebrow"><span className="eyebrow-line" /> {presentationSlides[activeSlide].kicker}</p><div className="slide-content"><p className="slide-accent">{presentationSlides[activeSlide].accent}</p><h2>{presentationSlides[activeSlide].title}</h2><p className="slide-body">{presentationSlides[activeSlide].body}</p></div><div className="slide-footer"><span>Vusani Mushanganyisi · IT Management</span><div className="slide-controls"><button type="button" onClick={() => setActiveSlide((slide) => Math.max(0, slide - 1))} disabled={activeSlide === 0} aria-label="Previous slide"><ChevronLeft size={18} /></button><button type="button" onClick={() => setActiveSlide((slide) => Math.min(presentationSlides.length - 1, slide + 1))} disabled={activeSlide === presentationSlides.length - 1} aria-label="Next slide"><ChevronRight size={18} /></button></div></div></div></div></div>}

      <footer className="footer"><span>© 2026 Vusani Mushanganyisi</span><span>Designed with intention<span className="footer-dot"> ● </span>Built to grow</span><a href="#top" aria-label="Back to top"><ChevronDown size={18} className="back-to-top" /></a></footer>
    </div>
  );
}

export default App;
