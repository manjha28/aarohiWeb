import { useState } from 'react';
import { HashRouter, Link, NavLink, Route, Routes, useParams, useSearchParams } from 'react-router-dom';

const CONTACT_PHONE = '+916376106457';
const CONTACT_PHONE_DISPLAY = '+91 63761 06457';
const CONTACT_EMAIL = 'thecosmiclight666@gmail.com';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Women\'s Wellness', to: '/women' },
  { label: 'Lifestyle Wellness', to: '/lifestyle-wellness' },
  { label: 'Garbhasanskar', to: '/garbhasanskar' },
  { label: 'Workshops', to: '/workshops' },
  { label: 'Journal', to: '/journal' },
  { label: 'Shop', to: '/shop' },
];

const featuredWomenServices = [
  {
    title: 'Preconception Wellness',
    slug: 'preconception-wellness',
    description: 'Personalised lifestyle and nutrition guidance to support wellbeing while preparing for conception.',
  },
  {
    title: 'Antenatal Care',
    slug: 'antenatal-wellness',
    description: 'Supportive wellbeing education through pregnancy, with attention to nourishment, movement and rest.',
  },
  {
    title: 'Garbhasanskar Education',
    slug: 'garbhasanskar',
    description: 'A mindful educational programme for pregnancy, connection and conscious preparation for parenthood.',
  },
  {
    title: 'Women’s Nutrition',
    slug: 'womens-nutrition',
    description: 'Practical nutrition education shaped around your needs, preferences and everyday routine.',
  },
  {
    title: 'Women’s Lifestyle Wellness',
    slug: 'womens-lifestyle-wellness',
    description: 'Individual-centred guidance on daily habits, movement, sleep and stress across life stages.',
  },
];

const lifestyleServices = [
  {
    title: 'Diabetes & Blood Sugar Wellness',
    description: 'Nutrition habits, physical activity, sleep and lifestyle support alongside prescribed medical care.',
  },
  {
    title: 'Thyroid & Hormonal Health Support',
    description: 'Lifestyle routines, nutrition education and supportive wellbeing practices alongside appropriate thyroid evaluation and treatment.',
  },
  {
    title: 'Digestive & Gut Wellness',
    description: 'Eating patterns, hydration, meal routines and lifestyle habits, with referral for persistent or concerning symptoms.',
  },
  {
    title: 'Blood Pressure & Heart Health',
    description: 'Support with physical activity, stress management, sleep and dietary habits alongside appropriate medical monitoring.',
  },
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

const homeWeCreate = {
  title: 'The Home We Create',
  chapter: 'Chapter 01: The Child We Once Were',
  brand: 'Healing Heaven',
  creator: 'Aarohi Kumari',
  price: '₹499',
  type: 'Digital Download – Guided Reflection Workbook (PDF)',
};

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
        <Link to="/" className="brand-wrap" onClick={closeMenu} aria-label="ARGHYA home">
          <img className="brand-logo" src={`${import.meta.env.BASE_URL}images/arghya-logo.jpg`} alt="ARGHYA — A Conscious Offering to Wellbeing" />
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
          Send an Enquiry
        </Link>
      </header>

      <main>{children}</main>

      <footer className="site-footer" id="contact">
        <div className="footer-brand">
          <p className="section-label">ARGHYA</p>
          <h3>A conscious offering to wellbeing.</h3>
        </div>
        <div className="footer-actions">
          <a className="button button-primary" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <a className="button button-secondary" href={`tel:${CONTACT_PHONE}`}>
            {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
        <div className="footer-meta">
          <div>
            <p>Enquiries</p>
            <span>Contact by phone or email</span>
          </div>
          <div>
            <p>Availability</p>
            <span>Ask about consultation options</span>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/health-disclaimer">Health Disclaimer</Link>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} ARGHYA. A Conscious Offering to Wellbeing.</p>
      </footer>

      <a
        className="whatsapp-fab"
        href={`https://wa.me/${CONTACT_PHONE.slice(1)}?text=${encodeURIComponent('Hi Aarohi, I would like to enquire about a consultation.')}`}
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
  const [emailDraft, setEmailDraft] = useState('');
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setEmailDraft('');
    setError('');
    setSubmitted(false);

    if (!googleSheetsUrl) {
      const payload = Object.fromEntries(new FormData(form).entries());
      const body = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Service: ${payload.service || 'Not specified'}`,
        '',
        'Message:',
        payload.message,
      ].join('\n');
      setEmailDraft(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('ARGHYA website enquiry')}&body=${encodeURIComponent(body)}`);
      setError('');
      setSubmitted(false);
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams(payload).toString(),
      });
      if (!response.ok) {
        throw new Error(`Enquiry endpoint returned HTTP ${response.status}.`);
      }

      form.reset();
      setSubmitted(true);
      setError('');
    } catch {
      setError(`The form could not be sent. Please email ${CONTACT_EMAIL} or call ${CONTACT_PHONE_DISPLAY}.`);
      setSubmitted(false);
    };
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
          <input type="tel" name="phone" placeholder="+91 63761 06457" required />
        </label>
        <label>
          Service of interest
          <select name="service" defaultValue={initialService}>
            <option value="" disabled>
              Select a service
            </option>
            <option value="Consultation">Consultation</option>
            <option value="Women's Wellness">Women's Wellness</option>
            <option value="Lifestyle & Metabolic Wellness">Lifestyle & Metabolic Wellness</option>
            <option value="Garbhasanskar">Garbhasanskar</option>
            <option value="Workshops">Workshops</option>
            <option value="Digital Workbook">The Home We Create workbook</option>
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
        {submitted ? <p className="form-success" role="status">Thank you. Your enquiry has been received.</p> : null}
        {error ? <p className="form-error" role="alert">{error}</p> : null}
        {emailDraft ? (
          <p className="form-status" role="status">
            Online form delivery is not configured. <a href={emailDraft}>Open an email draft to send this enquiry</a>, then send it from your email app.
          </p>
        ) : null}
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
          <p className="tag">ARGHYA · A conscious offering to wellbeing</p>
          <h2>Wellbeing Begins With Understanding You.</h2>
          <p className="lede">
            Personalised holistic wellness through naturopathy, yoga, nutrition, and mindful lifestyle practices.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/services" onClick={scrollToTop}>
              Explore Our Services
            </Link>
            <Link className="button button-secondary" to="/about" onClick={scrollToTop}>
              Meet Aarohi
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

        <div className="hero-visual" aria-label="Aarohi's professional portrait">
          <div className="hero-image-panel">
            <img
              src={`${import.meta.env.BASE_URL}images/aarohi-portrait.jpg`}
              alt="Aarohi, BNYS graduate and holistic wellness practitioner"
              fetchPriority="high"
            />
          </div>
          <div className="floating-card">
            <strong>BNYS Graduate</strong>
            <span>Women’s wellness · Lifestyle guidance</span>
          </div>
        </div>
      </section>

      <section className="trust-strip section" aria-label="Trust indicators">
        <div>Personalised Care</div>
        <div>Holistic Approach</div>
        <div>Evidence-Informed Practice</div>
        <div>Mindful Lifestyle Support</div>
      </section>

      <section className="section photo-story-grid" aria-label="Wellness at ARGHYA">
        <Link className="photo-story-card" to="/womens-nutrition" onClick={scrollToTop}>
          <img
            src={`${import.meta.env.BASE_URL}images/indian-nourishment.jpg`}
            alt="Indian meal with rice, vegetables and curry"
            loading="lazy"
          />
          <span>Nutrition for everyday wellbeing</span>
        </Link>
        <Link className="photo-story-card" to="/garbhasanskar" onClick={scrollToTop}>
          <img
            src={`${import.meta.env.BASE_URL}images/mindful-yoga.jpg`}
            alt="A person practising mindful movement in a quiet setting"
            loading="lazy"
          />
          <span>Yoga and mindful movement</span>
        </Link>
        <Link className="photo-story-card" to="/lifestyle-wellness" onClick={scrollToTop}>
          <img
            src={`${import.meta.env.BASE_URL}images/wellness-consultation.jpg`}
            alt="Healthcare professional reviewing information on a phone"
            loading="lazy"
          />
          <span>Personalised lifestyle guidance</span>
        </Link>
      </section>

      <section id="about" className="section about-grid">
        <div className="about-image-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/aarohi-portrait.jpg`}
            alt="Aarohi wearing a white coat with a stethoscope"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <p className="section-label">Meet Aarohi</p>
          <h3>BNYS Graduate | Holistic Wellness</h3>
          <p>
            I am Aarohi, a BNYS graduate currently undergoing internship training, with a keen interest in naturopathy, yoga, nutrition, and women&apos;s wellness.
          </p>
          <p>
            My approach combines individual-centred care, mindful lifestyle practices, and evidence-informed wellness guidance to support healthier, more balanced living.
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
        <SectionHeader label="Our Services" title="Whole-person wellbeing, thoughtfully supported." />
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
          title="Women’s Wellness"
          text="Our primary focus: compassionate, personalised wellbeing support through different stages of life."
        />
        <div className="chapter-grid">
          {featuredWomenServices.map((page) => (
            <Link key={page.slug} to={`/${page.slug}`} className="chapter-card" onClick={scrollToTop}>
              <h4>{page.title}</h4>
              <p>{page.description}</p>
              <span>Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section lifestyle-preview">
        <SectionHeader
          label="Lifestyle & Metabolic Wellness"
          title="Lifestyle & Metabolic Wellness"
          text="Small, sustainable changes. A more informed approach to health."
        />
        <p className="section-text lifestyle-intro">
          Lifestyle plays an important role in long-term wellbeing. Through personalised lifestyle guidance, nutrition education, yoga, and healthy habit development, the aim is to support individuals in building routines that work for their everyday lives.
        </p>
        <div className="lifestyle-card-grid">
          {lifestyleServices.map((service, index) => (
            <article key={service.title} className="lifestyle-card">
              <span className="icon">0{index + 1}</span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <p className="health-note">
          These wellness services are intended to complement appropriate medical evaluation and treatment. They do not replace prescribed medication, specialist consultation, or emergency medical care.
        </p>
        <Link className="button button-primary" to="/contact?service=Lifestyle%20%26%20Metabolic%20Wellness" onClick={scrollToTop}>
          Enquire about Lifestyle Wellness
        </Link>
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

function PageLayout({ title, intro, children, cta, ctaTo = '/contact' }) {
  const scrollToTop = useScrollToTop();

  return (
    <section className="section content-page">
      <div className="page-hero">
        <p className="section-label">ARGHYA · A Conscious Offering to Wellbeing</p>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
        {cta ? <Link className="button button-primary" to={ctaTo} onClick={scrollToTop}>{cta}</Link> : null}
      </div>
      <div className="page-body">{children}</div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageLayout title="MEET AAROHI" intro="BNYS Graduate | Holistic Wellness" cta="Enquire about a Consultation">
      <div className="about-profile">
        <div className="about-image-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/aarohi-portrait.jpg`}
            alt="Aarohi, BNYS graduate currently undergoing internship training"
            loading="lazy"
          />
        </div>
        <div className="text-stack about-profile-copy">
          <p>
            I am Aarohi, a BNYS graduate currently undergoing internship training, with a keen interest in naturopathy, yoga, nutrition, and women&apos;s wellness.
          </p>
          <p>
            My approach combines individual-centred care, mindful lifestyle practices, and evidence-informed wellness guidance to support healthier, more balanced living.
          </p>
        </div>
      </div>

      <section className="approach-panel">
        <p className="section-label">MY APPROACH TO WELLBEING</p>
        <div className="text-stack">
          <p>ARGHYA was created with a simple intention: to make holistic healthcare more personalised, compassionate, and accessible.</p>
          <p>I believe every individual has a unique story, routine, set of challenges, and health goals. True wellbeing begins with understanding the whole person — their physical health, emotional wellbeing, daily habits, and lifestyle.</p>
          <p>My goal is to create a supportive space where you feel heard, understood, and empowered to take an active role in your health journey.</p>
        </div>
      </section>

      <section className="professional-profile">
        <p className="section-label">Professional Profile</p>
        <div className="profile-tags">
          <span>BNYS Graduate</span>
          <span>Garbhasanskar Trainer</span>
          <span>Holistic Nutrition and Wellness</span>
        </div>
        <div className="separate-offerings">
          <h3>Separate spiritual offerings</h3>
          <p>These are separate from ARGHYA’s clinical wellness services.</p>
          <div className="profile-tags">
            <span>Spiritual Healer and Counsellor</span>
            <span>Tarot Reader</span>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ServicesPage() {
  return (
    <PageLayout title="Our Services" intro="Evidence-informed wellness guidance centred on your needs, routines and health goals." cta="Enquire about Services">
      <section className="service-category">
        <SectionHeader label="Primary focus" title="Women’s Wellness" />
        <div className="chapter-grid detail-grid">
          {featuredWomenServices.map((service) => (
            <Link key={service.slug} to={`/${service.slug}`} className="chapter-card large">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <span>Explore</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="service-category">
        <SectionHeader
          label="Personalised lifestyle guidance"
          title="Lifestyle & Metabolic Wellness"
          text="Small, sustainable changes. A more informed approach to health."
        />
        <div className="lifestyle-card-grid">
          {lifestyleServices.map((service, index) => (
            <article key={service.title} className="lifestyle-card">
              <span className="icon">0{index + 1}</span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <p className="health-note">These wellness services are intended to complement appropriate medical evaluation and treatment. They do not replace prescribed medication, specialist consultation, or emergency medical care.</p>
        <Link className="button button-primary" to="/lifestyle-wellness">Explore Lifestyle Wellness</Link>
      </section>
      <section className="service-category">
        <SectionHeader label="Additional support" title="Whole-person wellness practices" />
        <div className="service-grid single-column">
          {serviceCards.map((card) => (
            <article key={card.number} className="service-card detail">
              <span className="icon">{card.number}</span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <ul>
                {card.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

function WomenWellnessPage() {
  return (
    <PageLayout title="Women's Wellness" intro="Supportive care through every chapter of a woman’s life and wellbeing journey." cta="Enquire about Women’s Wellness">
      <div className="chapter-grid detail-grid">
        {featuredWomenServices.map((item) => (
          <Link key={item.slug} to={`/${item.slug}`} className="chapter-card large">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span>Explore</span>
          </Link>
        ))}
      </div>
      <div className="additional-pathways">
        <h3>Additional wellness pathways</h3>
        <div className="chapter-grid detail-grid">
          {womenPages
            .filter((item) => !featuredWomenServices.some((service) => service.slug === item.slug))
            .map((item) => (
              <Link key={item.slug} to={`/${item.slug}`} className="chapter-card large">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>Explore</span>
              </Link>
            ))}
        </div>
      </div>
    </PageLayout>
  );
}

function WellnessFeaturePage({ title, intro, details, ctaLabel = 'Enquire about this Service' }) {
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
    <PageLayout title="Journal" intro="Simple reflections, mindful practices and supportive ideas for daily wellbeing." cta="Contact Aarohi">
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
    <PageLayout title={article.title} intro={`${article.category} • ${article.date}`} cta="Enquire about a Consultation">
      <article className="article-body">
        <p className="article-summary">{article.excerpt}</p>
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="article-callout">
          <strong>Need personal support?</strong>
          <Link to="/contact">Send a consultation enquiry to Aarohi.</Link>
        </div>
      </article>
    </PageLayout>
  );
}

function WorkshopPage() {
  return (
    <PageLayout title="Workshops" intro="Group sessions that bring practical, compassionate learning into a supportive community space." cta="Enquire about Workshops">
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
      <section className="product-feature">
        <div className="workbook-cover" aria-label="Illustrative design for The Home We Create, Chapter 01">
          <span className="workbook-brand">{homeWeCreate.brand}</span>
          <span className="workbook-seal" aria-hidden="true" />
          <strong>{homeWeCreate.title}</strong>
          <span>{homeWeCreate.chapter}</span>
          <small>Created by {homeWeCreate.creator}</small>
        </div>
        <div className="product-copy">
          <p className="section-label">{homeWeCreate.brand} · {homeWeCreate.type}</p>
          <h3>{homeWeCreate.title}<br /><span>A Conscious Parenthood Journey</span></h3>
          <p>Before we become someone&apos;s safe place, we gently meet the child within us.</p>
          <p>
            A thoughtfully designed reflection workbook for individuals and couples who wish to understand childhood experiences, recognise family patterns and become more conscious about the emotional environment they want to create for their future family.
          </p>
          <p className="product-byline">Chapter 01: The Child We Once Were · Created by {homeWeCreate.creator}</p>
          <Link className="button button-secondary" to="/shop/the-home-we-create">Explore the workbook</Link>
        </div>
      </section>
      <div className="shop-grid">
        {shopItems.map((item) => (
          <article key={item.name} className="shop-card">
            <span>{item.price}</span>
            <h4>{item.name}</h4>
            <p>{item.blurb}</p>
            <Link to="/contact" className="button button-secondary">
              Enquire now
            </Link>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}

function HomeWeCreatePage() {
  const reflectionTopics = [
    'Childhood memories and early experiences',
    'Emotional expressions and family communication patterns',
    'Unspoken family rules and inherited beliefs',
    'Childhood coping patterns and learned responses',
    'Emotional needs and experiences of care',
    'Values, traditions and strengths received from family',
    'Intentions for creating a more conscious family environment',
  ];

  return (
    <PageLayout title={homeWeCreate.title} intro="A Conscious Parenthood Journey · Chapter 01: The Child We Once Were">
      <section className="product-feature product-detail">
        <div className="workbook-cover" aria-label="Illustrative design for The Home We Create, Chapter 01">
          <span className="workbook-brand">{homeWeCreate.brand}</span>
          <span className="workbook-seal" aria-hidden="true" />
          <strong>{homeWeCreate.title}</strong>
          <span>{homeWeCreate.chapter}</span>
          <small>Created by {homeWeCreate.creator}</small>
        </div>
        <div className="product-copy">
          <p className="section-label">{homeWeCreate.type}</p>
          <h3>Before we become someone&apos;s safe place, we gently meet the child within us.</h3>
          <p>
            This reflection workbook invites individuals and couples to understand childhood experiences, recognise family patterns and consider the emotional environment they hope to create for their future family.
          </p>
          <p>It includes guided reflection questions, interactive exercises, individual activities and couple-based reflection exercises.</p>
          <p className="product-price">{homeWeCreate.price}</p>
          <p className="product-availability">Digital PDF workbook. Online checkout and instant delivery are not currently available on this website; please enquire to confirm purchase and delivery arrangements.</p>
          <Link className="button button-primary" to="/contact?service=Digital%20Workbook">Enquire to Buy</Link>
          <p className="product-availability">This button opens an enquiry form. Payment is not available on this website.</p>
        </div>
      </section>

      <section className="product-content-section">
        <h3>What’s inside the workbook</h3>
        <ul className="topic-list">
          {reflectionTopics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      </section>

      <section className="product-content-section">
        <h3>Who this workbook is for</h3>
        <p>
          This self-reflection workbook is for individuals and couples who want to explore their childhood experiences, family patterns and intentions for the emotional home they hope to create. It is educational and reflective, not a substitute for professional mental health support.
        </p>
      </section>

      <section className="disclaimer-panel">
        <h3>Important note about this workbook</h3>
        <p>
          This workbook is designed for self-reflection, personal awareness and conscious parenthood education. It is not psychological healing, psychotherapy, counselling, trauma therapy, psychological assessment or a treatment programme. It does not diagnose, treat or promise to resolve psychological or mental health conditions. Readers are encouraged to seek support from a qualified mental health professional if they need help processing distressing experiences.
        </p>
      </section>

      <section className="guided-experience">
        <p className="section-label">For enrolled participants</p>
        <h3>A Guided Experience for Our Garbhasanskar Community</h3>
        <p>
          For individuals and couples enrolled in our Garbhasanskar programme, each section of the journal is explored through guided sessions with me, Aarohi Kumari, using thoughtfully selected activities.
        </p>
        <ul className="topic-list">
          <li>Creative and reflective activities</li>
          <li>Guided visualization</li>
          <li>Meditation practices</li>
          <li>Breathwork</li>
          <li>Couple-based interactive exercises</li>
          <li>Conscious parenting reflections</li>
        </ul>
        <p>The intention is to help participants engage with each section meaningfully and develop greater awareness as they prepare for parenthood.</p>
        <p className="health-note">This guided experience is exclusively for enrolled Garbhasanskar participants and is not automatically included with the standalone ₹499 digital purchase.</p>
      </section>

      <section className="coming-soon">
        <p className="section-label">The Journey Continues...</p>
        <h3>Chapter 01 is only the beginning.</h3>
        <p>More chapters of <em>The Home We Create</em> are on their way, exploring relationships, conscious communication, emotional awareness and the family we choose to create.</p>
        <span>Chapter 02 – Coming Soon</span>
      </section>
    </PageLayout>
  );
}

function LifestyleWellnessPage() {
  return (
    <PageLayout
      title="Lifestyle & Metabolic Wellness"
      intro="Small, sustainable changes. A more informed approach to health."
      cta="Enquire about Lifestyle Wellness"
      ctaTo="/contact?service=Lifestyle%20%26%20Metabolic%20Wellness"
    >
      <p className="section-text lifestyle-intro">
        Lifestyle plays an important role in long-term wellbeing. Through personalised lifestyle guidance, nutrition education, yoga, and healthy habit development, the aim is to support individuals in building routines that work for their everyday lives.
      </p>
      <div className="lifestyle-card-grid">
        {lifestyleServices.map((service, index) => (
          <article key={service.title} className="lifestyle-card">
            <span className="icon">0{index + 1}</span>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
      <p className="health-note">
        These wellness services are intended to complement appropriate medical evaluation and treatment. They do not replace prescribed medication, specialist consultation, or emergency medical care.
      </p>
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
    <PageLayout title="Contact ARGHYA" intro="Send an enquiry to learn more about services and consultation availability. Submitting an enquiry does not confirm an appointment.">
      <div className="contact-layout">
        <LeadForm />
        <div className="contact-panel">
          <h4>Consultation details</h4>
          <p>For service information and consultation availability, contact Aarohi directly.</p>
          <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          <p><a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a></p>
          <ul>
            <li>Women’s wellness</li>
            <li>Lifestyle and metabolic wellness</li>
            <li>Garbhasanskar education</li>
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
          <Route path="/lifestyle-wellness" element={<LifestyleWellnessPage />} />
          <Route
            path="/womens-nutrition"
            element={
              <WellnessFeaturePage
                title="Women’s Nutrition"
                intro="Practical nutrition education shaped around your needs, preferences and everyday routine."
                details={[
                  { title: 'Personalised nourishment', text: 'Explore food patterns, preferences and routines to create realistic nutrition goals that fit your daily life.' },
                  { title: 'Nutrition education', text: 'Build a clearer understanding of balanced meals, hydration and sustainable food habits.' },
                  { title: 'Supportive planning', text: 'Guidance is individual-centred and complements medical evaluation and care where needed.' },
                ]}
              />
            }
          />
          <Route
            path="/womens-lifestyle-wellness"
            element={
              <WellnessFeaturePage
                title="Women’s Lifestyle Wellness"
                intro="Individual-centred guidance on daily habits, movement, sleep and stress across life stages."
                details={[
                  { title: 'Everyday habits', text: 'Identify small, sustainable changes that can work with your routine, responsibilities and goals.' },
                  { title: 'Movement and rest', text: 'Explore supportive practices around movement, sleep and recovery.' },
                  { title: 'Whole-person support', text: 'Consider lifestyle, wellbeing and personal context together, with appropriate referrals when required.' },
                ]}
              />
            }
          />
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
          <Route path="/shop/the-home-we-create" element={<HomeWeCreatePage />} />
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
                  'The information and services provided through this website are intended to support health promotion, disease prevention, and holistic wellbeing through naturopathy, yoga, and lifestyle-based approaches.',
                  'Individual assessments, recommendations, and clinical services, where applicable, are provided in accordance with the practitioner’s qualifications, scope of practice, and applicable professional requirements.',
                  'These services do not replace emergency medical care or specialist evaluation and treatment when medically necessary. Clients are encouraged to seek appropriate medical attention for health concerns requiring further investigation, specialized care, or urgent intervention.',
                  'Individual outcomes may vary, and no specific health outcome is guaranteed.',
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
