import { useState } from 'react'
import './App.css'

const sundayHighlights = [
  { time: '8:30 AM', label: 'Contemporary Worship' },
  { time: '10:00 AM', label: 'Sunday School' },
  { time: '11:00 AM', label: 'Traditional Worship' },
]

const weeklySchedule = [
  {
    day: 'Sunday mornings',
    description: 'Choose a worship service and stay for fellowship or a class.',
    items: [
      { time: '8:30 AM', label: 'Contemporary Worship' },
      { time: '9:30 AM', label: 'Fellowship' },
      { time: '10:00 AM', label: 'Sunday School for all ages' },
      { time: '11:00 AM', label: 'Traditional Worship' },
    ],
    note: 'Nursery care is provided.',
  },
  {
    day: 'Wednesday nights',
    description: 'Midweek programs help every age grow and connect.',
    items: [
      { time: '6:00 PM', label: 'Children and family dinner' },
      { time: '6:30 PM', label: 'K.I.D.S. program' },
      { time: '6:30 PM', label: 'Youth group' },
      { time: '6:30 PM', label: 'Adult Bible study' },
    ],
    note: 'Nursery care is provided during adult Bible study.',
  },
]

const visitDetails = [
  {
    number: '01',
    title: 'Arrive with confidence',
    text: 'Use the directions link before you leave home. Friendly volunteers can help you find the worship center and the right place for each child.',
  },
  {
    number: '02',
    title: 'Come as you are',
    text: 'You will see everything from casual clothes to Sunday best. Wear what helps you feel comfortable and ready to worship.',
  },
  {
    number: '03',
    title: 'Choose your service',
    text: 'The 8:30 AM service is contemporary, and the 11:00 AM service is traditional. Sunday School begins at 10:00 AM.',
  },
  {
    number: '04',
    title: 'Bring the whole family',
    text: 'Nursery and children’s ministry options are available, and students in grades 6–12 can connect through the youth ministry.',
  },
]

const ministryCards = [
  {
    eyebrow: 'Birth–5th grade',
    title: 'TBC Kids',
    text: 'A safe, joyful environment with Bible-based teaching, caring leaders, and age-appropriate activities.',
    link: 'https://www.timberlakebaptist.com/tbckidmin',
    linkText: 'Explore children’s ministry',
  },
  {
    eyebrow: '6th–12th grade',
    title: 'Youth Ministry',
    text: 'Students grow through Bible study, prayer, music, games, and relationships in a welcoming environment.',
    link: 'https://www.timberlakebaptist.com/youth-minstry',
    linkText: 'Explore youth ministry',
  },
  {
    eyebrow: 'Find your place',
    title: 'All Ministries',
    text: 'Discover opportunities for adults, families, service, discipleship, and community connection.',
    link: 'https://www.timberlakebaptist.com/our-ministries',
    linkText: 'View every ministry',
  },
]

const resourceCards = [
  {
    title: 'Connection & Prayer',
    text: 'Introduce yourself or share a prayer request with the church team.',
    link: 'https://forms.ministryforms.net/viewForm.aspx?formId=bc25fa9a-a52f-4bf8-9cc6-2e735f680eb3',
  },
  {
    title: 'Digital Bulletin',
    text: 'See current announcements and information for the church family.',
    link: 'https://www.timberlakebaptist.com/bulletin-1',
  },
  {
    title: 'Watch Services',
    text: 'Find contemporary, traditional, Wednesday, and special-event videos.',
    link: 'https://www.timberlakebaptist.com/sermons',
  },
  {
    title: 'Events & Calendar',
    text: 'Check the church calendar and find the next opportunity to participate.',
    link: 'https://www.timberlakebaptist.com/about-4-1',
  },
  {
    title: 'Online Giving',
    text: 'Open Timberlake’s secure Realm giving page in a new browser tab.',
    link: 'https://onrealm.org/TimberlakeBapti/-/form/give/default',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="Timberlake Baptist Church visitor guide home"
        >
          <span className="brand-name">Timberlake Baptist Church</span>
          <span className="brand-divider" aria-hidden="true">
            |
          </span>
          <span className="brand-location">Myrtle Beach</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <a href="#visit" onClick={closeMenu}>
            I’m New
          </a>
          <a href="#ministries" onClick={closeMenu}>
            Ministries
          </a>
          <a
            href="https://www.timberlakebaptist.com/about-4-1"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Events
          </a>
          <a
            href="https://www.timberlakebaptist.com/sermons"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Watch
          </a>
          <a
            className="nav-cta"
            href="https://www.timberlakebaptist.com/connect"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Connect
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">WELCOME HOME</p>
            <h1 id="hero-title">Plan your first visit</h1>
            <p className="hero-text">
              A welcoming church family in Myrtle Beach. Know where to go, what
              to expect, and how your family can connect before you arrive.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#visit">
                Plan My Visit
              </a>
              <a
                className="button button-secondary"
                href="https://www.google.com/maps/search/?api=1&query=9850+SC-707+Myrtle+Beach+SC+29588"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <aside className="schedule-card" aria-labelledby="sunday-title">
            <p className="card-eyebrow">THIS SUNDAY</p>
            <h2 id="sunday-title" className="sr-only">
              Sunday schedule
            </h2>
            <ul className="schedule-list">
              {sundayHighlights.map((service) => (
                <li key={service.time}>
                  <span className="schedule-time">{service.time}</span>
                  <span>{service.label}</span>
                </li>
              ))}
            </ul>
            <a
              className="address-link"
              href="https://www.google.com/maps/search/?api=1&query=9850+SC-707+Myrtle+Beach+SC+29588"
              target="_blank"
              rel="noreferrer"
            >
              9850 SC-707, Myrtle Beach, SC 29588
            </a>
          </aside>
        </section>

        <section className="section visit-section" id="visit">
          <div className="section-heading">
            <p className="eyebrow">YOUR FIRST SUNDAY</p>
            <h2>Know what to expect</h2>
            <p>
              We want your first visit to feel simple, comfortable, and
              welcoming from the moment you arrive.
            </p>
          </div>

          <div className="visit-grid">
            {visitDetails.map((detail) => (
              <article className="visit-card" key={detail.number}>
                <span className="card-number" aria-hidden="true">
                  {detail.number}
                </span>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section weekly-section" id="schedule">
          <div className="section-heading section-heading-light">
            <p className="eyebrow">WEEKLY RHYTHM</p>
            <h2>Worship, learn, and connect</h2>
            <p>
              Use this schedule to choose the best starting point for your
              family.
            </p>
          </div>

          <div className="weekly-grid">
            {weeklySchedule.map((group) => (
              <article className="weekly-card" key={group.day}>
                <h3>{group.day}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={`${group.day}-${item.time}-${item.label}`}>
                      <span>{item.time}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="weekly-note">{group.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section ministries-section" id="ministries">
          <div className="section-heading">
            <p className="eyebrow">FOR EVERY GENERATION</p>
            <h2>Find a place to belong</h2>
            <p>
              Explore ministries designed to help children, students, and
              adults grow in faith and build meaningful relationships.
            </p>
          </div>

          <div className="ministry-grid">
            {ministryCards.map((ministry) => (
              <article className="ministry-card" key={ministry.title}>
                <p className="ministry-eyebrow">{ministry.eyebrow}</p>
                <h3>{ministry.title}</h3>
                <p>{ministry.text}</p>
                <a href={ministry.link} target="_blank" rel="noreferrer">
                  {ministry.linkText}
                  <span aria-hidden="true"> →</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section resources-section" id="resources">
          <div className="section-heading">
            <p className="eyebrow">CHURCH RESOURCES</p>
            <h2>Take your next step</h2>
            <p>
              Connect with the church, watch a service, read the bulletin, or
              find an upcoming opportunity.
            </p>
          </div>

          <div className="resource-grid">
            {resourceCards.map((resource) => (
              <a
                className="resource-card"
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                key={resource.title}
              >
                <span>{resource.title}</span>
                <p>{resource.text}</p>
                <strong>Open resource →</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-band" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">WE’RE HERE TO HELP</p>
            <h2 id="contact-title">Have a question before Sunday?</h2>
            <p>
              Call the church office at (843) 650-9509 or send a message to the
              Timberlake team.
            </p>
          </div>
          <a
            className="button button-light"
            href="mailto:tbcoffice@timberlakebaptist.com"
          >
            Email the Church
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Timberlake Baptist Church</strong>
          <span>9850 SC-707, Myrtle Beach, SC 29588</span>
        </div>
        <div className="footer-links">
          <a href="tel:+18436509509">(843) 650-9509</a>
          <a href="mailto:tbcoffice@timberlakebaptist.com">
            tbcoffice@timberlakebaptist.com
          </a>
          <a
            href="https://www.timberlakebaptist.com/"
            target="_blank"
            rel="noreferrer"
          >
            Main Website
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
