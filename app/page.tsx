const featuredWork = [
  {
    number: "01",
    type: "Website care & customer protection",
    title: "SiteCare Website Care Monitor",
    description:
      "A live website care dashboard that tells a business whether customers can reach the site, trust the connection and use its inquiry path, then puts the most urgent fix first.",
    tags: ["Customer access", "Lead protection", "Trust", "Clear priorities"],
    accent: "sitecare",
    href: "https://ramphalharrilal.github.io/website-care-monitor/",
  },
  {
    number: "02",
    type: "Business software",
    title: "Combination KEA Inventory System",
    description:
      "A practical Java desktop application built around the hardware store's real workflow. Staff can find products, check current prices and view quantities using a shared inventory source.",
    tags: ["Java", "Swing", "Google Sheets", "Inventory"],
    accent: "orange",
  },
  {
    number: "03",
    type: "Website & communications",
    title: "Kenswick Meadows Community Association",
    description:
      "Designed, built and continue to manage the association website, resident resources, forms, payment information, notices, documents and ongoing technical support.",
    tags: ["Web design", "Administration", "Forms", "Support"],
    accent: "blue",
    href: "https://kenswickmeadows.org/",
  },
  {
    number: "04",
    type: "Marketing & digital operations",
    title: "Dreamhouse Furniture & Appliances",
    description:
      "Led digital sales support across Facebook, Instagram and TikTok, creating promotional flyers, stories, short form videos, captions, product communication and branded content from 2018 through 2026.",
    tags: ["Flyers", "TikTok", "Stories", "Digital sales"],
    accent: "green",
  },
  {
    number: "05",
    type: "Portfolio & storytelling",
    title: "Dale Ray - Gaining Ground Youth Services 501 C 3 Nonprofit",
    description:
      "Organized the nonprofit's mission, services, testimonials, videos and Dale Ray's life story into a clear public portfolio supporting its community work.",
    tags: ["Portfolio", "Storytelling", "Video", "Brand direction"],
    accent: "gold",
    href: "https://gaininggroundyouthservices.com/",
  },
];

const technicalProjects = [
  {
    index: "A",
    title: "A better way to manage customer messages",
    description:
      "When support messages pile up, customers wait and requests get lost. I built a system that handles approved routine questions, sends sensitive or unclear cases to a person, and gives the team one organized view of what needs attention.",
    detail: "Faster replies · Human handoff · Clear ticket ownership",
    href: "https://github.com/ramphalharrilal/whatsapp-support-operations",
  },
  {
    index: "B",
    title: "Fast, reliable inventory answers",
    description:
      "Staff should not have to scan a spreadsheet while a customer waits. This dashboard makes products, prices, quantities and low-stock risks easy to find, helping the team answer questions quickly and avoid stock surprises.",
    detail: "Quick search · Stock visibility · Clear pricing",
    href: "https://github.com/ramphalharrilal/hardware-inventory-system",
  },
  {
    index: "C",
    title: "Fewer surprises before launch",
    description:
      "Broken forms, carts or payment steps cost time and customer trust. This project shows how I test the full customer journey, document problems clearly and check that updates have not broken something that already worked.",
    detail: "Customer journey checks · Clear bug reports · Safer releases",
    href: "https://github.com/ramphalharrilal/manual-qa-portfolio",
  },
  {
    index: "D",
    title: "Support that does not start from zero",
    description:
      "Support becomes slower when every issue is handled differently. I created a reusable playbook for understanding impact, gathering the right information, making safe changes, confirming the fix and handing off with useful context.",
    detail: "Consistent troubleshooting · Safer changes · Better handoffs",
    href: "https://github.com/ramphalharrilal/it-support-documentation",
  },
];

const clientReviews = [
  {
    name: "Vidya R.",
    organization: "Dreamhouse",
    location: "Trinidad and Tobago",
    emoticon: "👩🏽‍💼",
    reaction: "✨",
    accent: "coral",
    review:
      "Creative, reliable digital support across promotions, social content and everyday business needs, with real ownership from idea through delivery.",
  },
  {
    name: "Dale Ray",
    organization: "Gaining Ground Youth Services 501 C 3 Nonprofit",
    location: "Houston, Texas",
    emoticon: "👨🏿‍🏫",
    reaction: "💡",
    accent: "sky",
    review:
      "Thoughtful, organized support that brought an important life story, services and community work together with clarity and care.",
  },
  {
    name: "Cheryl Dawson",
    organization: "KMCA",
    location: "Houston, Texas",
    emoticon: "👩🏾‍💻",
    reaction: "👍🏾",
    accent: "mint",
    review:
      "Trustworthy, dependable and capable — Ramphal takes ownership, follows through and delivers practical technology solutions that make the work easier.",
  },
  {
    name: "Dayle Edwards",
    organization: "Combination K.E.A.",
    location: "Trinidad and Tobago",
    emoticon: "👨🏽‍🔧",
    reaction: "🙌🏽",
    accent: "sun",
    review:
      "Honest, patient and dedicated. Ramphal takes initiative, offers ideas and finds practical ways to make systems more organized, reliable and user friendly.",
  },
];

const visualWork = [
  {
    media: "image",
    src: "/images/gallery/dreamhouse-christmas.webp",
    width: 1920,
    height: 960,
    alt: "Dreamhouse Christmas Big Sale promotional banner featuring appliances and furniture",
    title: "Christmas Big Sale",
    client: "Dreamhouse",
    type: "Seasonal retail campaign",
  },
  {
    media: "video",
    src: "/images/gallery/retail-motion-promo.mp4",
    poster: "/images/gallery/retail-motion-poster.webp",
    title: "Clearance Motion Promotion",
    client: "Dreamhouse",
    type: "Animated sale creative",
  },
  {
    media: "image",
    src: "/images/gallery/kmca-board-member.webp",
    width: 1600,
    height: 900,
    alt: "KMCA graphic welcoming newly appointed board member Jacqueline Cooper",
    title: "Board Member Announcement",
    client: "KMCA",
    type: "Community communication",
  },
  {
    media: "image",
    src: "/images/gallery/dreamhouse-diwali.webp",
    width: 940,
    height: 788,
    alt: "Dreamhouse Grand Divali Sale flyer for Whirlpool washing machines",
    title: "Grand Divali Sale",
    client: "Dreamhouse",
    type: "Product promotion",
  },
  {
    media: "image",
    src: "/images/gallery/kmca-website-launch.webp",
    width: 1357,
    height: 1920,
    alt: "KMCA website launch graphic showing the homeowner form on desktop and mobile",
    title: "Paperless Website Launch",
    client: "KMCA",
    type: "Digital adoption campaign",
  },
  {
    media: "image",
    src: "/images/gallery/dale-ray-book.webp",
    width: 1024,
    height: 800,
    alt: "To Hell and Back book promotion for Chaplain Dale Ray Smith",
    title: "To Hell and Back",
    client: "Dale Ray Smith",
    type: "Book promotion and storytelling",
  },
  {
    media: "image",
    src: "/images/gallery/lime-n-shine.webp",
    width: 1050,
    height: 600,
    alt: "Black, red and green Lime N Shine car wash and detailing brand card",
    title: "Lime N Shine",
    client: "Small Business Creative",
    type: "Brand identity concept",
  },
  {
    media: "image",
    src: "/images/gallery/sonlight-graduation.webp",
    width: 1200,
    height: 1800,
    alt: "Sonlight Kindergarten Class of 2026 graduation congratulations poster",
    title: "Class of 2026",
    client: "Sonlight Kindergarten",
    type: "Education event creative",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ramphal Harrilal, home">
          <span className="brand-mark">RH</span>
          <span>Ramphal Harrilal</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="header-link"
          href="/docs/Ramphal_Harrilal_Final_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Websites · Technical Operations · QA · Business Support</p>
          <h1>
            I make technology
            <span>work for people.</span>
          </h1>
          <p className="hero-intro">
            I build professional websites, create promotional content and provide
            virtual business support, while bringing the same organized, practical
            approach to technical support, QA and software.
          </p>
          <ul className="hero-services" aria-label="Featured services">
            <li>Website Design</li>
            <li>Flyers &amp; Social Media Content</li>
            <li>Virtual Administrative Support</li>
            <li>Troubleshooting &amp; Quality Checks</li>
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-quiet"
              href="https://github.com/ramphalharrilal"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-upwork"
              href="https://www.upwork.com/freelancers/~0123e265f21c212396?mp_source=share"
              target="_blank"
              rel="noreferrer"
            >
              Hire me on Upwork <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-stage">
            <div className="hero-halo" aria-hidden="true" />
            <img
              className="portrait-cutout"
              src="/images/ramphal-hero-cutout.webp"
              alt="Ramphal Harrilal smiling in a blue plaid shirt"
              width={1086}
              height={1448}
              decoding="async"
            />
          </div>
          <div className="availability">
            <span className="status-dot" aria-hidden="true" />
            Open to remote opportunities worldwide
          </div>
          <p className="portrait-note">USA · Trinidad and Tobago · Available worldwide</p>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div><strong>5</strong><span>Practical solutions built around real workflows</span></div>
        <div><strong>40+</strong><span>Daily support requests handled</span></div>
        <div><strong>3+</strong><span>Years managing a live website</span></div>
        <div><strong>6+</strong><span>Marketing content formats created</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected real world work</p>
            <h2>Built for actual people and businesses.</h2>
          </div>
          <p>
            My strongest work starts with a real need: faster access to inventory,
            clearer communication, protected customer inquiries or a professional
            digital presence.
          </p>
        </div>

        <div className="work-grid">
          {featuredWork.map((project) => {
            const Wrapper = project.href ? "a" : "article";
            return (
              <Wrapper
                className={`work-card ${project.accent}`}
                key={project.number}
                {...(project.href
                  ? { href: project.href, target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <div className="work-card-top">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.title} skills`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                {project.href && (
                  <span className="card-link">
                    {project.accent === "sitecare" ? "Open live dashboard ↗" : "Visit live site ↗"}
                  </span>
                )}
              </Wrapper>
            );
          })}
        </div>
      </section>

      <section className="marketing-section" id="marketing">
        <div className="marketing-marquee" aria-hidden="true">
          <div>
            Flyers · TikToks · Stories · Promotions · Captions · Voiceovers · Reels ·
            Flyers · TikToks · Stories · Promotions · Captions · Voiceovers · Reels ·
          </div>
        </div>
        <div className="marketing-inner">
          <div className="marketing-heading">
            <p className="eyebrow">Marketing that supports the sale</p>
            <h2>I don&apos;t just post. I build the message around the business.</h2>
            <p>
              From the first promotion idea to the finished flyer, caption, story
              sequence or short video, I create content that is clear, on brand and
              useful to the customer.
            </p>
          </div>
          <div className="campaign-board" aria-label="Selected marketing capabilities">
            <article className="campaign-card dreamhouse-campaign">
              <div className="campaign-meta"><span>01</span><span>Dreamhouse</span></div>
              <div className="campaign-symbol" aria-hidden="true">%</div>
              <h3>Retail promotions</h3>
              <p>Sale flyers · Product stories · TikTok concepts · Captions · Customer replies</p>
            </article>
            <article className="campaign-card kea-campaign">
              <div className="campaign-meta"><span>02</span><span>Combination KEA</span></div>
              <div className="campaign-symbol play-symbol" aria-hidden="true">▶</div>
              <h3>Product content</h3>
              <p>Tool demonstrations · Voiceovers · Promotional graphics · Price features</p>
            </article>
            <article className="campaign-card community-campaign">
              <div className="campaign-meta"><span>03</span><span>Community & personal brands</span></div>
              <div className="campaign-symbol quote-symbol" aria-hidden="true">“</div>
              <h3>Stories with purpose</h3>
              <p>Event flyers · Community notices · Life story content · Testimonials · Video organization</p>
            </article>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">Websites · campaigns · communications</p>
            <h2 id="gallery-title">The proof is in the work.</h2>
          </div>
          <p>
            Live websites, retail campaigns, community communications, motion
            creative and story-driven design produced for real organizations.
          </p>
        </div>

        <div className="website-showcase" aria-label="Live website work">
          <a
            className="website-showcase-card"
            href="https://kenswickmeadows.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="website-visual">
              <img
                src="/images/gallery/kmca-site.webp"
                alt="Kenswick Meadows Community Association live website homepage"
                width={1600}
                height={697}
                loading="eager"
                decoding="async"
              />
              <span>Live website</span>
            </div>
            <div className="website-copy">
              <div>
                <p>Website management · Houston</p>
                <h3>Kenswick Meadows Community Association</h3>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </a>

          <a
            className="website-showcase-card"
            href="https://gaininggroundyouthservices.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="website-visual">
              <img
                src="/images/gallery/gaining-ground-site.webp"
                alt="Gaining Ground Youth Services live website homepage"
                width={1600}
                height={673}
                loading="eager"
                decoding="async"
              />
              <span>Live website</span>
            </div>
            <div className="website-copy">
              <div>
                <p>501 C 3 nonprofit website · Houston</p>
                <h3>Gaining Ground Youth Services</h3>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </a>
        </div>

        <div className="gallery-masonry" aria-label="Selected visual design work">
          {visualWork.map((item) => (
            <figure className="gallery-piece" key={item.title}>
              <div className="gallery-media">
                {item.media === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    aria-label={`${item.title}, animated promotional video`}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="eager"
                    decoding="async"
                  />
                )}
                <span className="gallery-media-type">{item.media === "video" ? "Motion" : "Design"}</span>
              </div>
              <figcaption>
                <p>{item.client}</p>
                <h3>{item.title}</h3>
                <span>{item.type}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="reviews-section" id="reviews" aria-labelledby="reviews-title">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">Client voices · two countries</p>
            <h2 id="reviews-title">Good work gets remembered.</h2>
          </div>
          <p>
            Long-term collaborators describe the qualities I bring to their work:
            ownership, creativity, patience and dependable follow-through.
          </p>
        </div>

        <div className="reviews-grid">
          {clientReviews.map((review, index) => (
            <article
              className={`review-card ${review.accent}`}
              key={review.name}
              style={{ "--review-delay": `${index * -0.8}s` } as React.CSSProperties}
            >
              <div className="review-person">
                <div className="review-emoticon" aria-hidden="true">
                  <span>{review.emoticon}</span>
                  <i>{review.reaction}</i>
                </div>
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.organization}</p>
                  <span>{review.location}</span>
                </div>
              </div>

              <div className="review-textbox">
                <div className="review-rating" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <span key={star} style={{ "--star": star } as React.CSSProperties} aria-hidden="true">★</span>
                  ))}
                </div>
                <p>{review.review}</p>
                <span className="review-label">Review highlight</span>
              </div>
            </article>
          ))}
        </div>

        <p className="reviews-note">
          Review highlights are condensed for this portfolio from client feedback
          and written recommendations.
        </p>
      </section>

      <section className="technical-section" aria-labelledby="technical-title">
        <div className="technical-heading">
          <p className="eyebrow">Practical solutions</p>
          <h2 id="technical-title">Solutions to problems people actually face.</h2>
          <p className="technical-intro">
            Each project starts with a real question: what is slowing people down,
            and how can the work become clearer, faster or safer?
          </p>
          <a
            href="https://github.com/ramphalharrilal?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View all repositories <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="technical-list">
          {technicalProjects.map((project) => (
            <a
              className="technical-item"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.index}
            >
              <span className="technical-index">{project.index}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="technical-detail">{project.detail} · See how it works ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <p className="eyebrow">About me</p>
          <div className="about-stamp" aria-hidden="true">
            <span>GET IT</span>
            <strong>DONE</strong>
            <span>GUY</span>
          </div>
        </div>
        <div className="about-copy">
          <h2>I&apos;ve never been afraid to learn the next thing.</h2>
          <div className="about-columns">
            <p>
              My career has moved through technical inspection, public service,
              digital business support, website management and school IT. The
              titles changed, but my approach stayed the same: understand the
              problem, communicate clearly and follow the work through.
            </p>
            <p>
              Today I&apos;m completing a B.S. in Computer Science while strengthening
              my work in technical support, QA testing, Java, Python and
              cybersecurity. I&apos;m humble, easily coachable and confident in what I
              bring to a team.
            </p>
          </div>
          <blockquote>
            “I don&apos;t have dreams. I have a reality that has just not happened yet,
            but trust me, it will.”
          </blockquote>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading skills-heading">
          <div>
            <p className="eyebrow">What I bring</p>
            <h2>A practical mix of people skills and technical ability.</h2>
          </div>
          <p>
            I work comfortably between the user and the system, translating
            problems into clear next steps and documenting what matters.
          </p>
        </div>
        <div className="skills-board">
          <div className="skill-group">
            <span>01</span>
            <h3>Technical support</h3>
            <p>Windows · Microsoft 365 · Google Workspace · Printers · DNS · Connectivity · Ticketing</p>
          </div>
          <div className="skill-group">
            <span>02</span>
            <h3>QA and documentation</h3>
            <p>Test planning · Gherkin · BDD · Bug reporting · Regression · Jira · Documentation</p>
          </div>
          <div className="skill-group">
            <span>03</span>
            <h3>Development</h3>
            <p>Java · Swing · Python · GitHub · Basic SQL · HTML · CSS · Google Sheets</p>
          </div>
          <div className="skill-group">
            <span>04</span>
            <h3>Marketing and content</h3>
            <p>Flyers · TikTok · Stories · Reels · Captions · Voiceovers · Canva · Social media</p>
          </div>
        </div>
      </section>

      <section className="credibility-section" aria-label="Education, experience and professional affiliation">
        <div className="credential-card dark-card">
          <p className="eyebrow">Education</p>
          <h3>B.S. Computer Science</h3>
          <p>University of the People · In progress</p>
          <span>Building skills in programming, systems and problem solving.</span>
        </div>
        <div className="credential-card orange-card">
          <p className="eyebrow">Certification</p>
          <h3>Google IT Support</h3>
          <p>Professional Certificate · Completed</p>
          <span>Troubleshooting, networking, operating systems and IT security.</span>
        </div>
        <div className="credential-card paper-card">
          <p className="eyebrow">Experience</p>
          <h3>Support that scales</h3>
          <p>40+ daily requests · 400 student caseload</p>
          <span>Calm communication, accurate records and dependable follow through.</span>
        </div>
        <a className="affiliation-banner" href="https://www.ttcs.tt/" target="_blank" rel="noreferrer">
          <div>
            <p className="eyebrow">Professional affiliation</p>
            <h3>Trinidad and Tobago Computer Society</h3>
          </div>
          <div className="affiliation-meta">
            <strong>TTCS Member</strong>
            <span>Joined 2026 · View organization ↗</span>
          </div>
        </a>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-topline">
          <span>Let&apos;s work together</span>
          <span>USA · Trinidad and Tobago · Worldwide</span>
        </div>
        <h2>Have a role or problem that needs a get it done person?</h2>
        <p className="contact-intro">
          I&apos;m available for remote roles, freelance projects and digital support.
          Choose the contact method that works best for you.
        </p>

        <div className="contact-grid" aria-label="Contact Ramphal Harrilal">
          <a className="contact-card email-contact" href="mailto:harrilal20@gmail.com">
            <span className="contact-card-label">Email · All enquiries</span>
            <strong>harrilal20@gmail.com</strong>
            <span className="contact-card-arrow" aria-hidden="true">↗</span>
          </a>

          <article className="contact-card">
            <span className="contact-card-label">USA · Calls and text</span>
            <strong>+1 (281) 949-8261</strong>
            <div className="contact-actions">
              <a href="tel:+12819498261">Call</a>
              <a href="sms:+12819498261">Text</a>
            </div>
          </article>

          <article className="contact-card whatsapp-card">
            <span className="contact-card-label">USA · WhatsApp</span>
            <strong>+1 (346) 715-0971</strong>
            <div className="contact-actions">
              <a href="https://wa.me/13467150971" target="_blank" rel="noreferrer">Open WhatsApp ↗</a>
            </div>
          </article>

          <article className="contact-card trinidad-card">
            <span className="contact-card-label">Trinidad and Tobago · Calls and WhatsApp</span>
            <strong>+1 (868) 752-5635</strong>
            <div className="contact-actions">
              <a href="tel:+18687525635">Call</a>
              <a href="https://wa.me/18687525635" target="_blank" rel="noreferrer">WhatsApp ↗</a>
            </div>
          </article>

          <a
            className="contact-card upwork-contact"
            href="https://www.upwork.com/freelancers/~0123e265f21c212396?mp_source=share"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card-label">Freelance projects · View my professional profile</span>
            <strong>Hire me on Upwork</strong>
            <span className="contact-card-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-links" aria-label="Professional profiles">
          <a href="https://github.com/ramphalharrilal" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="/docs/Ramphal_Harrilal_Final_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Ramphal Harrilal</span>
        <span>Built with purpose. Presented with proof.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
