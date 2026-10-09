import { useMemo, useState } from 'react';
import { HashRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Women\'s Wellness', to: '/women' },
  { label: 'Garbhasanskar', to: '/garbhasanskar' },
  { label: 'Workshops', to: '/workshops' },
  { label: 'Journal', to: '/journal' },
  { label: 'Shop', to: '/shop' },
];

const serviceCards = [
  {
    number: '01',
    title: 'Nutrition & Lifestyle Care',
    description:
      'Personalised nutrition and lifestyle guidance based on individual needs, health goals and daily routine.',
    list: [
      'Nutrition counselling',
      'Meal guidance',
      'Lifestyle modification',
      'Healthy habit building',
      'Preventive wellness',
    ],
  },
  {
    number: '02',
    title: 'Yoga & Breathwork',
    description:
      'Gentle and therapeutic practices designed to support physical wellbeing, mobility, relaxation and mind-body balance.',
    list: [
      'Yoga',
      'Breathwork',
      'Relaxation practices',
      'Therapeutic movement',
      'Mindful practices',
    ],
  },
  {
    number: '03',
    title: 'Naturopathy & Natural Therapies',
    description:
      'A natural, lifestyle-based approach that supports the body\'s own capacity to restore balance through mindful nutrition, therapeutic practices and healthy routines.',
    list: [
      'Fasting and therapeutic dietary practices',
      'Dietetics and personalised nutrition',
      'Sun bathing',
      'Nature-based lifestyle practices',
      'Yogic counselling',
      'Journaling and self-reflection',
      'Relaxation and restorative practices',
      'Lifestyle correction',
    ],
  },
  {
    number: '04',
    title: 'Stress Management & Mindful Living',
    description:
      'Practical tools to help build healthier relationships with stress, rest and everyday life.',
    list: [
      'Relaxation',
      'Meditation',
      'Breathwork',
      'Sleep-supportive lifestyle',
      'Mindfulness',
      'Stress-management practices',
    ],
  },
  {
    number: '05',
    title: 'Personalised Wellness Consultation',
    description:
      'A one-to-one consultation to understand concerns, lifestyle, nutrition, habits and wellness goals and create a personalised approach.',
    list: [
      'Detailed assessment',
      'Lifestyle understanding',
      'Nutritional guidance',
      'Goal-based planning',
    ],
  },
];

const womenPages = [
  {
    title: 'Menstrual Wellness',
    slug: 'menstrual-wellness',
    description:
      'Supportive lifestyle, nutrition and mind-body practices around menstrual wellbeing.',
  },
  {
    title: 'PCOS / Metabolic Wellness',
    slug: 'pcos-metabolic-wellness',
    description:
      'Gentle, sustainable support for metabolic and hormonal balance through mindful nutrition and habit-building.',
  },
  {
    title: 'Preconception Wellness',
    slug: 'preconception-wellness',
    description:
      'Personalised support before conception to build nourishing routines, strong foundations and healthy rhythms.',
  },
  {
    title: 'Antenatal Wellness',
    slug: 'antenatal-wellness',
    description:
      'Thoughtful guidance throughout pregnancy with focus on nourishment, movement and emotional wellbeing.',
  },
  {
    title: 'Postpartum Wellness',
    slug: 'postpartum-wellness',
    description:
      'Calm, practical support for recovery, energy, sleep and the transition into new motherhood.',
  },
];

const articleList = [
  {
    slug: 'why-gentle-routines-matter',
    title: 'Why gentle routines matter more than perfection',
    category: 'Wellness Journal',
    excerpt:
      'A sustainable rhythm makes it easier to rest, eat well and feel more connected to your own body.',
    date: 'May 2026',
  },
  {
    slug: 'sleep-and-hormonal-balance',
    title: 'Sleep, stress and the body’s natural rhythm',
    category: 'Stress & Rest',
    excerpt:
      'Simple relationships between sleep quality, stress and everyday wellbeing can shift the way you feel over time.',
    date: 'April 2026',
  },
  {
    slug: 'building-a-quiet-morning-practice',
    title: 'A quieter morning can set the tone for your whole day',
    category: 'Mindful Living',
    excerpt:
      'Small rituals can create more calm, clarity and steadiness when your days feel full of demands.',
    date: 'March 2026',
  },
];

const shopItems = [
  {
    name: 'Wellness Journal',
    price: '₹899',
    blurb: 'A guided place to reflect on food, energy, sleep and self-care rituals.',
  },
  {
    name: 'Morning Reset Toolkit',
    price: '₹1,499',
    blurb: 'A simple bundle of practice prompts, tracking notes and gentle daily cues.',
  },
  {
    name: 'Breathwork Notes',
    price: '₹699',
    blurb: 'Short, practical tools to support quiet, grounding routines at home.',
  },
];

const workshopSchedule = [
  {
    title: 'Mindful Nutrition Foundations',
    detail: 'A 90-minute session on everyday nourishment, balanced routines and quietly sustainable habits.',
  },
  {
    title: 'Women’s Yoga & Breathwork Circle',
    detail: 'A supportive group session focused on mobility, relaxation and gentle nervous-system care.',
  },
  {
    title: 'Stress & Sleep Reset Workshop',
    detail: 'Tools to support restful evenings, calmer mornings and more grounded days.',
  },
];

const legalPages = [
  { slug: 'privacy-policy', title: 'Privacy Policy' },
  { slug: 'terms-conditions', title: 'Terms and Conditions' },
  { slug: 'health-disclaimer', title: 'Health Disclaimer' },
];

const pageIntro = {
  about:
    'Aarohi is a mindful wellness practice rooted in the belief that lasting health is built through gentle, personalised care.',
  services:
    'Support that meets you where you are, with care designed around your routines, life stage and goals.',
};

function useScrollToTop() {
  return function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

function AppShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-shell">
      <header className="topbar">
        <Link to="/" className="brand-wrap" onClick={closeMenu} aria-label="Aarohi home">
          <div className="brand-mark">A</div>
          <div>
            <p className="eyebrow">Holistic Wellness</p>
            <h1>Aarohi</h1>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((state) => !state)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="button button-primary desktop-book" to="/contact" onClick={closeMenu}>
          Book a Consultation
        </Link>
      </header>

      <main>{children}</main>

      <footer className="site-footer" id="contact">
        <div className="footer-brand">
          <p className="section-label">Aarohi</p>
          <h3>Personalised care for women through every season of life.</h3>
        </div>
        <div className="footer-actions">
          <a className="button button-primary" href="mailto:hello@aarohiwellness.in">
            hello@aarohiwellness.in
          </a>
          <a className="button button-secondary" href="tel:+919876543210">
            +91 98765 43210
          </a>
        </div>
        <div className="footer-meta">
          <div>
            <p>Mon–Sat</p>
            <span>9:00 AM – 6:30 PM</span>
          </div>
          <div>
            <p>Clinic</p>
            <span>Online & hybrid consultations</span>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/health-disclaimer">Health Disclaimer</Link>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Aarohi Wellness.</p>
      </footer>

      <a
        className="whatsapp-fab"
        href="https://wa.me/919876543210?text=Hi%20Aarohi%2C%20I%27d%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}

function SectionHeader({ label, title, text }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h3>{title}</h3>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbx0pG-EXAMPLE/exec';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const submitRequest = async () => {
      try {
        await fetch(googleSheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: new URLSearchParams(payload).toString(),
        });

        form.reset();
        setSubmitted(true);
        setError('');
      } catch (err) {
        setError('The form could not be sent. Please email hello@aarohiwellness.in directly.');
        setSubmitted(false);
      }
    };

    submitRequest();
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label>
          Email address
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone number
          <input type="tel" name="phone" placeholder="+91 98765 43210" required />
        </label>
        <label>
          Service of interest
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option value="Consultation">Consultation</option>
            <option value="Women's Wellness">Women's Wellness</option>
            <option value="Garbhasanskar">Garbhasanskar</option>
            <option value="Workshops">Workshops</option>
          </select>
        </label>
      </div>
      <label>
        What would you like support with?
        <textarea name="message" rows="5" placeholder="Tell us a little about your wellness goals or concerns." required />
      </label>
      <div className="form-actions">
        <button type="submit" className="button button-primary">
          Send enquiry
        </button>
        {submitted ? <p className="form-success">Thank you. Your enquiry has been received.</p> : null}
        {error ? <p className="form-error">{error}</p> : null}
      </div>
    </form>
  );
}

function HomePage() {
  const scrollToTop = useScrollToTop();

  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <p className="tag">Holistic wellness for women</p>
          <h2>A gentler way to care for your health.</h2>
          <p className="lede">
            Personalised support through nutrition, yoga, naturopathy, stress management and mindful living.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact" onClick={scrollToTop}>
              Book a Consultation
            </Link>
            <Link className="button button-secondary" to="/women" onClick={scrollToTop}>
              Explore Women&apos;s Wellness
            </Link>
          </div>
          <ul className="stats" aria-label="Trust points">
            <li>
              <span>Personalised Care</span>
            </li>
            <li>
              <span>Holistic Approach</span>
            </li>
            <li>
              <span>Evidence-Informed Practice</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Aarohi wellness scenery">
          <div className="hero-image-panel">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"
              alt="Woman practising mindful movement and journaling in a serene home setting"
            />
          </div>
          <div className="floating-card">
            <strong>Gentle, grounded care</strong>
            <span>Nutrition • Yoga • Calm rituals</span>
          </div>
        </div>
      </section>

      <section className="trust-strip section" aria-label="Trust indicators">
        <div>Personalised Care</div>
        <div>Holistic Approach</div>
        <div>Evidence-Informed Practice</div>
        <div>Mindful Lifestyle Support</div>
      </section>

      <section id="about" className="section about-grid">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
            alt="Woman smiling in a calm wellness environment"
          />
        </div>
        <div className="about-copy">
          <p className="section-label">Introduction</p>
          <h3>Wellness is more than treating a symptom.</h3>
          <p>
            I believe the body has an innate capacity to heal and restore balance when given the right conditions. My approach looks beyond symptoms to understand nutrition, movement, sleep, stress, emotions and lifestyle, then gently supports the body&apos;s natural healing process.
          </p>
          <div className="four-step-process" aria-label="Wellness process">
            <span>Understand</span>
            <span>Assess</span>
            <span>Personalise</span>
            <span>Support</span>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <SectionHeader label="Our Services" title="Support that fits your life." />
        <div className="service-grid">
          {serviceCards.map((card) => (
            <article key={card.number} className="service-card">
              <span className="icon">{card.number}</span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <ul>
                {card.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section special-section">
        <SectionHeader
          label="Women&apos;s Wellness"
          title="Women&apos;s Wellness, Through Every Chapter"
          text="Supportive guidance for life stages, hormonal wellbeing and everyday balance."
        />
        <div className="chapter-grid">
          {womenPages.map((page) => (
            <Link key={page.slug} to={`/${page.slug}`} className="chapter-card" onClick={scrollToTop}>
              <h4>{page.title}</h4>
              <p>{page.description}</p>
              <span>Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section values-grid">
        <div className="value-card large">
          <p className="section-label">How I work</p>
          <h3>Practical, compassionate and evidence-informed support.</h3>
          <p>
            Every consultation is designed to help you understand your body, adjust what feels supportive and move forward with steadiness.
          </p>
        </div>
        <div className="value-card">
          <h4>Rooted in calm</h4>
          <p>Gentle structure, realistic guidance and patient support.</p>
        </div>
        <div className="value-card">
          <h4>Built for life</h4>
          <p>Nutrition and lifestyle changes that fit real routines and seasons.</p>
        </div>
      </section>

      <section className="section testimonial-section">
        <p className="section-label">Client stories</p>
        <blockquote>
          “I finally feel like nutrition is something I can maintain. The plan was supportive, practical, and tailored to my lifestyle.”
        </blockquote>
        <p className="author">— Priya S.</p>
      </section>

      <section className="section journal-preview">
        <SectionHeader label="Journal" title="Gentle guidance for real life." />
        <div className="article-grid">
          {articleList.slice(0, 3).map((article) => (
            <Link key={article.slug} to={`/journal/${article.slug}`} className="article-card" onClick={scrollToTop}>
              <span>{article.category}</span>
              <h4>{article.title}</h4>
              <p>{article.excerpt}</p>
              <time>{article.date}</time>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function PageLayout({ title, intro, children, cta }) {
  return (
    <section className="section content-page">
      <div className="page-hero">
        <p className="section-label">Aarohi</p>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
        {cta ? <Link className="button button-primary" to="/contact">{cta}</Link> : null}
      </div>
      <div className="page-body">{children}</div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageLayout title="About Aarohi" intro={pageIntro.about} cta="Book a Consultation">
      <div className="text-stack">
        <p>
          Aarohi was created to offer supportive, grounded wellness care for women who want to feel better, not just manage symptoms.
        </p>
        <p>
          Through nutrition, yoga, lifestyle guidance and mindful practices, each consultation is shaped around the individual—her habits, her routines, her stage of life and her goals.
        </p>
        <p>
          The aim is simple: help you understand your body more deeply, create steadier patterns and support your body’s natural capacity to heal and restore balance.
        </p>
      </div>
    </PageLayout>
  );
}

function ServicesPage() {
  return (
    <PageLayout title="Services" intro={pageIntro.services} cta="Schedule a consultation">
      <div className="service-grid single-column">
        {serviceCards.map((card) => (
          <article key={card.number} className="service-card detail">
            <span className="icon">{card.number}</span>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <ul>
              {card.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function WomenWellnessPage() {
  return (
    <PageLayout title="Women's Wellness" intro="Supportive care through every chapter of a woman’s life and wellbeing journey." cta="Talk to Aarohi">
      <div className="chapter-grid detail-grid">
        {womenPages.map((item) => (
          <Link key={item.slug} to={`/${item.slug}`} className="chapter-card large">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span>Explore</span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}

function WellnessFeaturePage({ title, intro, details, ctaLabel = 'Book a Consultation' }) {
  return (
    <PageLayout title={title} intro={intro} cta={ctaLabel}>
      <div className="feature-list">
        {details.map((detail) => (
          <div key={detail.title} className="feature-item">
            <h4>{detail.title}</h4>
            <p>{detail.text}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

function JournalPage() {
  return (
    <PageLayout title="Journal" intro="Simple reflections, mindful practices and supportive ideas for daily wellbeing." cta="Speak with Aarohi">
      <div className="article-grid">
        {articleList.map((article) => (
          <Link key={article.slug} to={`/journal/${article.slug}`} className="article-card">
            <span>{article.category}</span>
            <h4>{article.title}</h4>
            <p>{article.excerpt}</p>
            <time>{article.date}</time>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}

function ArticlePage() {
  const { slug } = useParams();
  const article = articleList.find((item) => item.slug === slug);

  if (!article) {
    return (
      <PageLayout title="Journal" intro="This article could not be found.">
        <p>Return to the journal to explore more wellness articles.</p>
      </PageLayout>
    );
  }

  const articleContent = {
    'why-gentle-routines-matter': {
      text: [
        'When life feels full, a gentle routine can help you feel more settled instead of constantly catching up. Small rhythm changes often support long-term wellbeing more than rigid plans or perfection-driven habits.',
        'This is especially helpful when energy feels scattered. A more grounded pace can support digestion, sleep, movement and emotional resilience at the same time.',
      ],
    },
    'sleep-and-hormonal-balance': {
      text: [
        'Sleep quality and stress levels can influence how the body responds to everyday demands. When the nervous system feels overloaded, routines around rest, sleep and recovery can make a noticeable difference.',
        'Simple steps like a calmer evening ritual, more predictable screen habits and a supportive meal rhythm may encourage steadier rest and a more balanced feel during the day.',
      ],
    },
    'building-a-quiet-morning-practice': {
      text: [
        'A quiet start to the day can create a sense of steadiness before the environment around you begins to speed up. Even a few minutes of slower breathing, journaling or mindful movement can have a calming effect.',
        'Practices like this are not about chasing productivity. They are about helping you reconnect with your body and choose a rhythm that supports clarity, ease and balance.',
      ],
    },
  };

  const body = articleContent[slug]?.text ?? [
    'A steady and supportive routine can help you feel more present, more rested and more connected to your own body.',
  ];

  return (
    <PageLayout title={article.title} intro={`${article.category} • ${article.date}`} cta="Book a Consultation">
      <article className="article-body">
        <p className="article-summary">{article.excerpt}</p>
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="article-callout">
          <strong>Need personal support?</strong>
          <Link to="/contact">Book a consultation with Aarohi.</Link>
        </div>
      </article>
    </PageLayout>
  );
}

function WorkshopPage() {
  return (
    <PageLayout title="Workshops" intro="Group sessions that bring practical, compassionate learning into a supportive community space." cta="Reserve a seat">
      <div className="feature-list">
        {workshopSchedule.map((session) => (
          <div key={session.title} className="feature-item">
            <h4>{session.title}</h4>
            <p>{session.detail}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

function ShopPage() {
  return (
    <PageLayout title="Shop" intro="Thoughtful wellness resources and supportive tools for everyday practice." cta="Contact Aarohi">
      <div className="shop-grid">
        {shopItems.map((item) => (
          <article key={item.name} className="shop-card">
            <span>{item.price}</span>
            <h4>{item.name}</h4>
            <p>{item.blurb}</p>
            <button type="button" className="button button-secondary">
              Enquire now
            </button>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function GarbhasanskarPage() {
  return (
    <WellnessFeaturePage
      title="Garbhasanskar"
      intro="Supportive, mindful care during pregnancy through nourishment, movement, rest and conscious preparation."
      details={[
        {
          title: 'Mindful preparation',
          text: 'A nurturing approach to pregnancy that supports both physical and emotional wellbeing through calm routines and informed care.',
        },
        {
          title: 'Nutrition and vitality',
          text: 'Practical guidance around nourishment, daily rhythm and healthy choices that support wellness throughout pregnancy.',
        },
        {
          title: 'Movement and rest',
          text: 'Gentle movement, breathwork and relaxation practices that help the body feel supported and connected.',
        },
      ]}
    />
  );
}

function ContactPage() {
  return (
    <PageLayout title="Contact / Book a Consultation" intro="Share a few details and we will be in touch to understand how Aarohi can support your wellness journey." cta="Send enquiry">
      <div className="contact-layout">
        <LeadForm />
        <div className="contact-panel">
          <h4>Consultation details</h4>
          <p>Online consultations and supportive guidance for women seeking gentle, personalised care.</p>
          <ul>
            <li>Initial wellness consultation</li>
            <li>Nutrition, lifestyle and stress support</li>
            <li>Women’s wellness pathways across life stages</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}

function LegalPage({ title, content }) {
  return (
    <PageLayout title={title} intro="Please read the details below carefully." cta="Contact Aarohi">
      <div className="text-stack legal-copy">
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PageLayout>
  );
}

function App() {
  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/women" element={<WomenWellnessPage />} />
          <Route
            path="/menstrual-wellness"
            element={
              <WellnessFeaturePage
                title="Menstrual Wellness"
                intro="Supportive lifestyle, nutrition and mind-body practices around menstrual wellbeing."
                details={[
                  {
                    title: 'Daily rhythm',
                    text: 'Gentle support around hydration, nourishment and regular routines that can help you feel more steady throughout your cycle.',
                  },
                  {
                    title: 'Mind-body care',
                    text: 'Breathwork, movement and self-reflection practices can help improve comfort, calm and emotional steadiness.',
                  },
                  {
                    title: 'Personalised support',
                    text: 'A consultation can help identify patterns in stress, sleep, food habits and lifestyle that may influence menstrual wellbeing.',
                  },
                ]}
              />
            }
          />
          <Route
            path="/pcos-metabolic-wellness"
            element={
              <WellnessFeaturePage
                title="PCOS / Metabolic Wellness"
                intro="Gentle, sustainable support for metabolic and hormonal balance through mindful nutrition and habit-building."
                details={[
                  {
                    title: 'Balanced routines',
                    text: 'Nutritional guidance and self-care practices can help you create consistent, realistic patterns without overwhelm.',
                  },
                  {
                    title: 'Stress and energy',
                    text: 'A supportive plan considers sleep, stress and emotional wellbeing alongside food and lifestyle choices.',
                  },
                  {
                    title: 'Progress over perfection',
                    text: 'The focus is on sustainable steps that fit your life and help you feel more in balance over time.',
                  },
                ]}
              />
            }
          />
          <Route
            path="/preconception-wellness"
            element={
              <WellnessFeaturePage
                title="Preconception Wellness"
                intro="Personalised support before conception to build nourishing routines, strong foundations and healthy rhythms."
                details={[
                  {
                    title: 'Preparation and care',
                    text: 'Thoughtful attention to nutrition, sleep, movement and stress can help support your body before conception.',
                  },
                  {
                    title: 'Lifestyle habits',
                    text: 'Simple adjustments in daily living can encourage steadier energy and a more supportive environment for conception and pregnancy planning.',
                  },
                  {
                    title: 'Holistic planning',
                    text: 'A personalised plan centres your health goals and supports a calmer, more informed transition into pregnancy.',
                  },
                ]}
              />
            }
          />
          <Route
            path="/antenatal-wellness"
            element={
              <WellnessFeaturePage
                title="Antenatal Wellness"
                intro="Thoughtful guidance throughout pregnancy with focus on nourishment, movement and emotional wellbeing."
                details={[
                  {
                    title: 'Nourishing care',
                    text: 'Supportive nutrition and daily routines help create steadier energy and a sense of grounded wellbeing during pregnancy.',
                  },
                  {
                    title: 'Movement and breath',
                    text: 'Gentle movement, breathwork and restorative practices can support comfort, mobility and relaxation.',
                  },
                  {
                    title: 'Whole-person support',
                    text: 'The approach looks at lifestyle, stress and emotional needs together for a more balanced experience.',
                  },
                ]}
              />
            }
          />
          <Route
            path="/postpartum-wellness"
            element={
              <WellnessFeaturePage
                title="Postpartum Wellness"
                intro="Calm, practical support for recovery, energy, sleep and the transition into new motherhood."
                details={[
                  {
                    title: 'Gentle recovery',
                    text: 'A supportive postpartum plan considers rest, nourishment and the changes your body is moving through after birth.',
                  },
                  {
                    title: 'Daily steadiness',
                    text: 'Small, manageable habits can support mental clarity, emotional regulation and practical day-to-day functioning.',
                  },
                  {
                    title: 'Compassionate care',
                    text: 'The focus is on recovery and support, not pressure or perfection, during this deeply transitional time.',
                  },
                ]}
              />
            }
          />
          <Route path="/garbhasanskar" element={<GarbhasanskarPage />} />
          <Route path="/workshops" element={<WorkshopPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<ArticlePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/privacy-policy"
            element={
              <LegalPage
                title="Privacy Policy"
                content={[
                  'Aarohi respects your privacy and is committed to handling personal information responsibly and transparently.',
                  'Any information collected through the website or consultation form is used to respond to enquiries, provide wellness support and maintain communication related to your engagement with Aarohi.',
                  'Your information will not be sold or shared with third parties unless required by law or explicitly authorised by you.',
                ]}
              />
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <LegalPage
                title="Terms and Conditions"
                content={[
                  'The content on this website is for educational and informational purposes only and should not replace medical or professional advice.',
                  'Appointments and consultation details may be subject to availability and scheduling arrangements as communicated by Aarohi.',
                  'By using the website, you agree to the information shared here and the general purpose of wellness support and enquiry handling.',
                ]}
              />
            }
          />
          <Route
            path="/health-disclaimer"
            element={
              <LegalPage
                title="Health Disclaimer"
                content={[
                  'The wellness services and information provided by Aarohi are intended to support general wellbeing and healthy lifestyle choices.',
                  'They are not a replacement for medical care, diagnosis or treatment from a qualified healthcare professional.',
                  'If you are experiencing severe symptoms, medical concerns or are under active treatment, please consult your physician or qualified clinician.',
                ]}
              />
            }
          />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}

export default App;
