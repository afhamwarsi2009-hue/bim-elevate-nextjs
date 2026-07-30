"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  DraftingCompass,
  FileCheck2,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  Network,
  Phone,
  Send,
  ShieldCheck,
  UsersRound,
  X
} from "lucide-react";
import ServiceCard from "./components/ServiceCard";
import { servicesData } from "./data/servicesData";

const services = [
  ["BIM Services", "Digital models built for better planning, clearer coordination, and confident delivery.", Layers3],
  ["Revit Family Creation", "Smart, consistent Revit families that improve model accuracy and productivity.", Building2],
  ["Clash Detection & Coordination", "Resolve multi-disciplinary conflicts before they reach the construction site.", Network],
  ["MEP Services", "Coordinated mechanical, electrical, plumbing, and fire-protection modeling.", ShieldCheck],
  ["Structural BIM Services", "Buildable structural models and documentation for efficient execution.", Building2],
  ["Architectural BIM Services", "Precise architectural modeling, drawings, and permit-ready documentation.", DraftingCompass],
  ["CAD To BIM Conversion", "Transform legacy drawings into information-rich, coordinated BIM models.", FileCheck2],
  ["MEP Shop Drawings", "Fabrication-ready drawings with clear routing, detail, and installation logic.", CheckCircle2],
  ["Construction Document Set", "Accurate construction documentation designed for reliable project delivery.", FileCheck2]
];

const projects = [
  ["HGR", "Commercial BIM Coordination", "/images/projects/hgr.jpg"],
  ["Marina View", "Architectural & MEP Modeling", "/images/projects/marina-view.jpg"],
  ["GVX 24", "Multidisciplinary BIM Delivery", "/images/projects/gvx-24.jpg"],
  ["KFU LAB", "Laboratory Coordination", "/images/projects/kfu-lab.jpg"]
];

const megaMenuColumns = [
  {
    title: "BIM Services",
    icon: Layers3,
    items: [
      "BIM Services",
      "Revit Family Creation",
      "Clash Detection & Coordination",
      "CAD To BIM Conversion",
      "Construction Document Set"
    ]
  },
  {
    title: "MEP Services",
    icon: ShieldCheck,
    items: [
      "MEP Services",
      "MEP Shop Drawings",
      "MEP Coordination",
      "Fire Protection Modeling",
      "Quantity Takeoffs"
    ]
  },
  {
    title: "Architectural BIM Services",
    icon: DraftingCompass,
    items: [
      "Architectural BIM Services",
      "Architectural Documentation",
      "Scan To BIM",
      "Permit Drawing Support",
      "Design Development Models"
    ]
  },
  {
    title: "Structural BIM Services",
    icon: Building2,
    items: [
      "Structural BIM Services",
      "Structural Modeling",
      "Steel Detailing Support",
      "Rebar Modeling",
      "Structural Shop Drawings"
    ]
  }
];

const blogs = [
  ["How BIM coordination reduces site risk", "Practical ways multidisciplinary reviews uncover issues before construction."],
  ["What to include in a BIM proposal", "Scope, LOD, inputs, timelines, and review cycles that keep delivery clear."],
  ["CAD to BIM conversion best practices", "How legacy drawings become reliable, information-rich models."]
];

const navigationItems = [["Home", "#top"], ["About", "#about"], ["Services", "#services"], ["Projects", "#projects"], ["Blogs", "#blogs"], ["Contact Us", "#contact"]];

const trustPoints = [
  ["NDA Protection", "Your project data stays confidential through controlled workflows.", LockKeyhole],
  ["Dedicated BIM Managers", "A clear point of contact keeps every delivery cycle accountable.", UsersRound],
  ["24/7 Support", "Responsive coordination support for global project teams.", Clock3],
  ["Global Standards", "Models and documentation aligned with international expectations.", Globe2],
  ["Scalable Teams", "Flexible capacity that grows with your delivery requirements.", Network],
  ["Fast Delivery", "Structured production workflows built to protect timelines.", CheckCircle2]
];

const testimonials = [
  ["The BIM Elevate team brought clarity to a complex coordination scope. Their response time and documentation quality were excellent.", "Project Manager", "United States"],
  ["Their MEP coordination support helped our consultants resolve issues earlier and keep the review cycle moving.", "MEP Consultant", "UAE"],
  ["Professional, accurate, and very easy to work with. The models were clean and the communication stayed consistent.", "Architect", "United Kingdom"]
];

const faqs = [
  ["What BIM services does BIM Elevate provide?", "We support 3D BIM modeling, Revit modeling, clash detection, coordination, MEP services, structural BIM, architectural BIM, CAD to BIM conversion, shop drawings, and construction documentation."],
  ["Can BIM Elevate support international projects?", "Yes. Our delivery model is designed for global AEC teams and adapts to project-specific standards, software environments, and review workflows."],
  ["How do you protect confidential project information?", "We follow controlled access workflows and support NDA-protected engagements for project data, models, drawings, and documentation."],
  ["Can your team scale for larger project scopes?", "Yes. We can align focused specialist support or expand into a dedicated delivery team as project requirements change."],
  ["How can I request a quote?", "Send your scope, drawings, model requirements, and timeline through the inquiry form or email info@bimelevate.in."]
];

function SectionIntro({ eyebrow, title, copy, center = false }) {
  return (
    <div className={center ? "section-intro section-intro-center" : "section-intro"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaStyle, setMegaStyle] = useState({});

  const openMegaMenu = (event) => {
    const trigger = event.currentTarget.matches("a") ? event.currentTarget : event.currentTarget.querySelector("a");
    const rect = trigger.getBoundingClientRect();
    const headerRect = trigger.closest(".site-header").getBoundingClientRect();
    const width = Math.min(860, window.innerWidth - 32);
    const left = Math.min(Math.max(rect.left + rect.width / 2 - width / 2, 16), window.innerWidth - width - 16);

    setMegaStyle({
      left: `${left}px`,
      top: `${rect.bottom - headerRect.top + 18}px`,
      width: `${width}px`
    });
    setMegaOpen(true);
  };

  useEffect(() => {
    const sectionIds = navigationItems.map(([, href]) => href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="contact-strip">
        <div className="shell contact-strip-inner">
          <a href="mailto:info@bimelevate.in"><Mail size={15} /> info@bimelevate.in</a>
          <span><Globe2 size={15} /> www.bimelevate.in</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-inner">
          <a href="#top" className="brand" aria-label="BIM Elevate home">
            <Image src="/images/bim-elevate-logo.png" alt="BIM Elevate" width={156} height={64} priority />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigationItems.map(([label, href]) => (
              label === "Services" ? (
                <div className="nav-mega-wrap" key={href} onMouseEnter={openMegaMenu} onMouseLeave={() => setMegaOpen(false)}>
                  <a className={active === href.slice(1) ? "nav-active" : ""} href={href} onFocus={openMegaMenu}>
                    {label} <ChevronDown size={14} />
                  </a>
                  <AnimatePresence>
                    {megaOpen ? (
                      <motion.div
                        className="services-mega"
                        style={megaStyle}
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <div className="mega-column-grid">
                          {megaMenuColumns.map(({ title, icon: Icon, items }) => (
                            <div className="mega-column" key={title}>
                              <div className="mega-column-heading">
                                <Icon size={19} />
                                <h3>{title}</h3>
                              </div>
                              <ul>
                                {items.map((item) => (
                                  <li key={item}>
                                    <a href="#services">{item}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <a className={active === href.slice(1) ? "nav-active" : ""} key={href} href={href}>{label}</a>
              )
            ))}
          </nav>
          <a className="nav-phone" href="tel:+12152533500"><Phone size={16} /> +1-215-253-3500</a>
          <a className="button button-primary desktop-cta" href="#contact">Request Proposal <ArrowUpRight size={16} /></a>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {open ? (
            <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
              {navigationItems.map(([label, href]) => <a className={active === href.slice(1) ? "nav-active" : ""} key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
              <a href="tel:+12152533500" onClick={() => setOpen(false)}><Phone size={15} /> +1-215-253-3500</a>
              <a href="#contact" onClick={() => setOpen(false)}>Request Proposal</a>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline poster="/images/architectural-documentation.jpeg">
        <source src="/videos/bim-elevate-cinematic-hero-4k.webm" type="video/webm" />
        <source src="/videos/bim-elevate-cinematic-hero-4k.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="shell hero-content">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow eyebrow-light">Global BIM Solutions for the AEC Industry</p>
          <h1>Build Smarter.<br /><span>Coordinate Better.</span><br />Deliver With Confidence.</h1>
          <p className="hero-copy">BIM Elevate provides precise modeling, coordination, and documentation services that help architects, engineers, and contractors reduce risk and move projects forward.</p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">Start Your Project <ArrowUpRight size={18} /></a>
            <a href="#services" className="button button-ghost">Explore Services <ArrowRight size={18} /></a>
          </div>
          <div className="hero-proof">
            <div><strong>1100+</strong><span>Projects Supported</span></div>
            <div><strong>15+</strong><span>Countries Served</span></div>
            <div><strong>17+</strong><span>Years of Delivery</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="shell about-grid">
        <div className="about-art">
          <Image src="/images/architectural-documentation.jpeg" alt="Architectural construction documentation set" width={900} height={760} />
          <div className="about-card"><span>PRECISION FIRST</span><strong>Better documentation.<br />Better construction.</strong></div>
        </div>
        <div>
          <SectionIntro eyebrow="About BIM Elevate" title={<>Digital construction expertise for <span>smarter project outcomes.</span></>} copy="We help AEC teams improve design communication, coordination, and construction readiness through accurate BIM models and reliable documentation." />
          <div className="check-grid">
            {["Model-first delivery", "Multidisciplinary coordination", "Quality-controlled documentation", "Flexible global support"].map((item) => <div key={item}><Check size={16} />{item}</div>)}
          </div>
          <a href="#services" className="text-link">Discover our capabilities <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section section-soft" id="services">
      <div className="shell">
        <SectionIntro center eyebrow="Our Services" title={<>Complete BIM support.<br /><span>One reliable partner.</span></>} copy="Specialist services that improve project visibility, accuracy, and coordination from early design through delivery." />
        <div className="service-grid">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              index={index}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section section-navy" id="why-us">
      <div className="shell">
        <SectionIntro eyebrow="Why Choose BIM Elevate" title={<>A stronger BIM team,<br /><span>built around your project.</span></>} copy="Reliable support, disciplined workflows, and responsive coordination for complex AEC programs." />
        <div className="trust-grid">
          {trustPoints.map(([title, copy, Icon]) => (
            <article className="trust-card" key={title}><div><Icon size={23} /></div><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <SectionIntro eyebrow="Selected Portfolio" title={<>Our Projects.<br /><span>Your proof of success.</span></>} copy="Selected BIM engagements that reflect our focus on coordination quality, documentation accuracy, and dependable delivery." />
        <div className="project-grid">
          {projects.map(([title, copy, image], index) => (
            <article className={index === 0 ? "project-card project-card-large" : "project-card"} key={title}>
              <Image src={image} alt={title} fill loading="eager" sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 50vw" />
              <div className="project-shade" />
              <div className="project-info"><p>0{index + 1} / Selected Project</p><h3>{title}</h3><span>{copy}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blogs() {
  return (
    <section className="section section-soft" id="blogs">
      <div className="shell">
        <SectionIntro eyebrow="BIM Insights" title={<>Ideas for cleaner models,<br /><span>coordination, and delivery.</span></>} copy="Short reads for AEC teams planning better BIM scopes, reviews, and documentation workflows." />
        <div className="blog-grid">
          {blogs.map(([title, copy], index) => (
            <article className="blog-card" key={title}>
              <p><span>{String(index + 1).padStart(2, "0")}</span> Insight</p>
              <h3>{title}</h3>
              <span>{copy}</span>
              <a href="#contact">Discuss this topic <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section">
      <div className="shell">
        <SectionIntro eyebrow="Client Feedback" title={<>Built on accuracy.<br /><span>Remembered for reliability.</span></>} />
        <div className="testimonial-grid">
          {testimonials.map(([quote, role, location]) => <article key={role + location}><p>“{quote}”</p><div><strong>{role}</strong><span>{location}</span></div></article>)}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section section-soft" id="faq">
      <div className="shell faq-grid">
        <SectionIntro eyebrow="Frequently Asked Questions" title={<>Practical answers for your <span>next BIM engagement.</span></>} copy="A few quick answers before we discuss your project scope in detail." />
        <div>
          {faqs.map(([question, answer], index) => (
            <article className={`faq-item ${open === index ? "faq-open" : ""}`} key={question}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><ChevronDown size={19} /></button>
              <AnimatePresence>{open === index ? <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{answer}</motion.p> : null}</AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">Start A Conversation</p>
          <h2>Ready to elevate<br /><span>your next project?</span></h2>
          <p>Share your scope, timeline, and delivery requirements. Our BIM team will respond with a clear path forward.</p>
          <a href="mailto:info@bimelevate.in"><Mail size={18} /> info@bimelevate.in</a>
          <span><Globe2 size={18} /> www.bimelevate.in</span>
        </div>
        <form action="mailto:info@bimelevate.in" method="post" encType="text/plain">
          <div className="form-row"><input name="name" placeholder="Your name" required /><input name="email" type="email" placeholder="Work email" required /></div>
          <div className="form-row"><input name="company" placeholder="Company name" /><input name="phone" type="tel" placeholder="Phone number" /></div>
          <select name="service" defaultValue=""><option value="" disabled>Service required</option>{services.map(([title]) => <option key={title}>{title}</option>)}</select>
          <textarea name="message" placeholder="Tell us about your project scope, timeline, and requirements." rows="5" required />
          <button className="button button-primary" type="submit">Submit Inquiry <Send size={16} /></button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div><Image src="/images/bim-elevate-logo.png" alt="BIM Elevate" width={160} height={66} /><p>Professional BIM modeling, coordination, and documentation support for global AEC teams.</p></div>
        <div><h3>Explore</h3><a href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#blogs">Blogs</a><a href="#contact">Contact Us</a></div>
        <div><h3>Core Services</h3><a href="#services">BIM Modeling</a><a href="#services">MEP Services</a><a href="#services">Clash Detection</a><a href="#services">Shop Drawings</a></div>
        <div><h3>Contact</h3><a href="mailto:info@bimelevate.in">info@bimelevate.in</a><span>www.bimelevate.in</span></div>
      </div>
      <div className="footer-bottom"><div className="shell">© 2026 BIM Elevate. All rights reserved.</div></div>
    </footer>
  );
}

export default function HomeContent() {
  return <><Navbar /><main><Hero /><About /><Services /><WhyUs /><Projects /><Blogs /><Testimonials /><FAQ /><Contact /></main><Footer /></>;
}
