/* =========================================================
   AKADIVA — Your Academic Partner
   Premium Academic Website
   ========================================================= */


/* =========================
   VARIABLES
   ========================= */

:root {

  --navy: #071a38;
  --navy-2: #0b2855;
  --navy-3: #10386e;

  --blue: #1677d2;
  --blue-light: #63b3ff;
  --blue-soft: #eaf4ff;

  --white: #ffffff;
  --off-white: #f8fafc;

  --text: #16243a;
  --muted: #68758a;

  --line: #e4eaf1;
  --line-dark: rgba(255,255,255,.12);

  --shadow: 0 20px 60px rgba(7,26,56,.10);

  --radius: 20px;
  --container: 1180px;

}


/* =========================
   RESET
   ========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Inter,
    ui-sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: var(--text);
  background: var(--white);
  line-height: 1.6;

  overflow-x: hidden;
}

img {
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.container {
  width: min(
    calc(100% - 40px),
    var(--container)
  );

  margin-inline: auto;
}


/* =========================
   HEADER
   ========================= */

.site-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 100;

  background: rgba(7,26,56,.78);

  border-bottom:
    1px solid rgba(255,255,255,.08);

  backdrop-filter: blur(16px);
}

.nav-wrap {
  min-height: 82px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 28px;
}


/* LOGO */

.brand {
  display: flex;
  align-items: center;

  flex-shrink: 0;
}

.brand-logo {
  display: block;

  width: 118px;
  height: auto;

  object-fit: contain;
}


/* NAV */

.main-nav {
  display: flex;
  align-items: center;

  gap: 30px;

  margin-left: auto;
}

.main-nav a {
  color: rgba(255,255,255,.78);

  font-size: 14px;
  font-weight: 650;

  transition: .2s ease;
}

.main-nav a:hover {
  color: white;
}


/* CTA */

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;

  padding: 0 22px;

  border-radius: 12px;

  background: var(--blue);
  color: white;

  font-size: 14px;
  font-weight: 750;

  box-shadow:
    0 12px 30px rgba(22,119,210,.28);

  transition: .2s ease;
}

.nav-cta:hover {
  transform: translateY(-2px);

  background: #2186e5;
}


/* MOBILE BUTTON */

.menu-toggle {
  display: none;

  width: 44px;
  height: 44px;

  border: 1px solid rgba(255,255,255,.15);

  border-radius: 10px;

  background: transparent;

  cursor: pointer;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5px;
}

.menu-toggle span {
  width: 19px;
  height: 2px;

  background: white;

  border-radius: 2px;
}


/* =========================
   HERO
   ========================= */

.hero {
  position: relative;

  min-height: 780px;

  display: flex;
  align-items: center;

  padding:
    150px 0 100px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 80% 25%,
      rgba(34,119,210,.28),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #061a39 0%,
      #0a2855 55%,
      #0d376d 100%
    );

  color: white;
}


/* GRID */

.hero-grid {
  position: absolute;
  inset: 0;

  opacity: .22;

  background-image:
    linear-gradient(
      rgba(255,255,255,.05) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,.05) 1px,
      transparent 1px
    );

  background-size: 52px 52px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent
    );
}


/* GLOW */

.hero-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(2px);

  pointer-events: none;
}

.hero-glow-one {
  width: 500px;
  height: 500px;

  right: -160px;
  top: 70px;

  background:
    radial-gradient(
      circle,
      rgba(71,167,255,.18),
      transparent 68%
    );
}

.hero-glow-two {
  width: 400px;
  height: 400px;

  left: -180px;
  bottom: -180px;

  background:
    radial-gradient(
      circle,
      rgba(22,119,210,.18),
      transparent 70%
    );
}


.hero-inner {
  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    minmax(0, .92fr)
    minmax(480px, 1.08fr);

  align-items: center;

  gap: 70px;
}


/* HERO COPY */

.hero-copy {
  max-width: 650px;
}

.eyebrow {
  display: flex;
  align-items: center;

  gap: 12px;

  margin-bottom: 22px;

  color: var(--blue-light);

  font-size: 12px;
  font-weight: 800;

  letter-spacing: .17em;

  text-transform: uppercase;
}

.eyebrow span {
  width: 32px;
  height: 2px;

  background: var(--blue-light);

  display: block;
}


.hero h1 {
  max-width: 700px;

  font-size:
    clamp(50px, 6vw, 82px);

  line-height: .98;

  letter-spacing: -.055em;

  font-weight: 800;
}

.hero h1 em {
  display: block;

  margin-top: 10px;

  color: #66b5ff;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: .88em;

  font-weight: 400;

  letter-spacing: -.04em;
}


.hero-description {
  max-width: 590px;

  margin-top: 30px;

  color: rgba(255,255,255,.72);

  font-size: 17px;

  line-height: 1.8;
}


.hero-buttons {
  display: flex;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 34px;
}


/* BUTTONS */

.button {
  min-height: 52px;

  padding:
    0 22px;

  border-radius: 12px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  font-size: 14px;

  font-weight: 750;

  transition: .22s ease;
}

.button-primary {
  background: var(--blue);

  color: white;

  box-shadow:
    0 12px 30px rgba(22,119,210,.25);
}

.button-primary:hover {
  transform: translateY(-2px);

  background: #2388e7;
}

.button-outline {
  color: white;

  border:
    1px solid rgba(255,255,255,.28);
}

.button-outline:hover {
  background: rgba(255,255,255,.08);
}


/* TRUST */

.hero-trust {
  display: flex;
  flex-wrap: wrap;

  gap: 22px;

  margin-top: 30px;

  color: rgba(255,255,255,.56);

  font-size: 12px;

  font-weight: 650;
}

.hero-trust strong {
  color: var(--blue-light);

  margin-right: 5px;
}


/* =========================
   HERO VISUAL
   ========================= */

.hero-visual {
  position: relative;

  min-height: 470px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.workspace-card {
  position: relative;

  width: min(100%, 650px);

  min-height: 430px;

  overflow: hidden;

  border:
    1px solid rgba(255,255,255,.16);

  border-radius: 26px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.16),
      rgba(255,255,255,.06)
    );

  box-shadow:
    0 40px 100px rgba(0,0,0,.25);

  transform: perspective(1000px)
    rotateY(-3deg)
    rotateX(2deg);
}

.workspace-top {
  height: 52px;

  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 0 20px;

  background: rgba(255,255,255,.07);

  border-bottom:
    1px solid rgba(255,255,255,.10);
}

.workspace-top small {
  color: rgba(255,255,255,.38);

  font-size: 10px;

  letter-spacing: .12em;
}

.window-dots {
  display: flex;
  gap: 7px;
}

.window-dots span {
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: rgba(255,255,255,.38);
}


.workspace-content {
  position: relative;

  min-height: 378px;

  padding: 35px;

  background:
    linear-gradient(
      145deg,
      #eef4f9,
      #d9e4ef
    );
}


/* DOCUMENT */

.document {
  position: absolute;

  background: white;

  color: #18263b;

  border-radius: 8px;

  box-shadow:
    0 18px 40px rgba(17,43,70,.16);

  padding: 22px;

  z-index: 3;
}

.document-left {
  width: 190px;

  left: 35px;
  top: 65px;

  transform:
    rotate(-7deg);
}

.document-right {
  width: 180px;

  right: 30px;
  bottom: 35px;

  transform:
    rotate(6deg);
}

.document-label {
  display: block;

  font-size: 11px;

  font-weight: 850;

  letter-spacing: .12em;
}

.document small {
  display: block;

  margin-top: 4px;

  color: #8794a5;

  font-size: 9px;
}

.document-lines {
  margin-top: 20px;
}

.document-lines i {
  display: block;

  height: 5px;

  margin-bottom: 9px;

  border-radius: 10px;

  background: #dce5ee;
}

.document-lines i:nth-child(2) {
  width: 88%;
}

.document-lines i:nth-child(3) {
  width: 76%;
}

.document-lines i:nth-child(4) {
  width: 91%;
}

.document-lines i:nth-child(5) {
  width: 64%;
}

.check-list {
  margin-top: 20px;

  color: var(--blue);

  font-weight: 800;

  line-height: 1.8;
}


/* MONITOR */

.monitor {
  position: absolute;

  width: 350px;

  left: 50%;
  top: 90px;

  transform: translateX(-50%);

  z-index: 2;
}

.monitor-screen {
  padding: 18px;

  border-radius: 12px;

  background: #172e4e;

  border:
    8px solid #243e60;

  box-shadow:
    0 18px 35px rgba(17,43,70,.24);
}

.monitor-header {
  display: flex;

  justify-content: space-between;

  color: #d6e4f4;

  font-size: 8px;
}

.monitor-header b {
  color: #63b3ff;
}

.chart {
  height: 105px;

  display: flex;
  align-items: flex-end;

  gap: 12px;

  padding:
    20px 20px 12px;

  margin-top: 15px;

  border-bottom:
    1px solid rgba(255,255,255,.15);
}

.chart i {
  display: block;

  width: 28px;

  border-radius: 5px 5px 0 0;

  background:
    linear-gradient(
      to top,
      #1677d2,
      #64b6ff
    );
}

.chart i:nth-child(1) {
  height: 35%;
}

.chart i:nth-child(2) {
  height: 55%;
}

.chart i:nth-child(3) {
  height: 45%;
}

.chart i:nth-child(4) {
  height: 75%;
}

.chart i:nth-child(5) {
  height: 90%;
}

.monitor-lines {
  margin-top: 14px;
}

.monitor-lines i {
  display: block;

  height: 4px;

  margin-bottom: 7px;

  width: 100%;

  background: rgba(255,255,255,.15);

  border-radius: 5px;
}

.monitor-lines i:nth-child(2) {
  width: 82%;
}

.monitor-lines i:nth-child(3) {
  width: 60%;
}

.monitor-base {
  width: 80px;
  height: 14px;

  margin: 0 auto;

  border-radius: 0 0 10px 10px;

  background: #243e60;
}


/* NOTE */

.note-card {
  position: absolute;

  left: 45px;
  bottom: 28px;

  padding:
    17px 24px;

  border:
    1px solid #345273;

  background: #173657;

  color: rgba(255,255,255,.62);

  border-radius: 7px;

  font-size: 10px;

  letter-spacing: .1em;

  z-index: 4;
}


/* =========================
   TRUST STRIP
   ========================= */

.trust-strip {
  background: white;

  border-bottom:
    1px solid var(--line);
}

.trust-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);
}

.trust-grid > div {
  min-height: 92px;

  padding: 18px 24px;

  display: flex;
  align-items: center;

  gap: 15px;

  border-right:
    1px solid var(--line);
}

.trust-grid > div:first-child {
  border-left:
    1px solid var(--line);
}

.trust-grid span {
  color: var(--blue);

  font-size: 12px;

  font-weight: 850;
}

.trust-grid p {
  color: var(--muted);

  font-size: 13px;

  font-weight: 650;
}


/* =========================
   GENERAL SECTION
   ========================= */

.section {
  padding: 110px 0;
}

.section-header {
  display: grid;

  grid-template-columns:
    1fr
    400px;

  gap: 70px;

  align-items: end;

  margin-bottom: 55px;
}

.section-header h2,
.center-heading h2,
.pricing-box h2,
.final-cta h2 {
  margin-top: 10px;

  color: var(--navy);

  font-size:
    clamp(36px, 4vw, 56px);

  line-height: 1.05;

  letter-spacing: -.045em;

  font-weight: 800;
}

.section-header h2 em,
.center-heading h2 em,
.pricing-box h2 em,
.final-cta h2 em {
  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-weight: 400;

  color: var(--blue);

  letter-spacing: -.03em;
}

.section-header > p {
  color: var(--muted);

  font-size: 15px;

  line-height: 1.8;
}

.eyebrow.dark {
  color: var(--blue);
}

.eyebrow.dark::before {
  display: none;
}


/* =========================
   SERVICES
   ========================= */

.service-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}

.service-card {
  position: relative;

  padding: 32px 28px;

  min-height: 380px;

  border:
    1px solid var(--line);

  border-radius: var(--radius);

  background: white;

  box-shadow:
    0 10px 35px rgba(7,26,56,.04);

  transition: .25s ease;

  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-7px);

  box-shadow:
    var(--shadow);
}

.service-card.featured {
  background: var(--navy);

  color: white;

  border-color: var(--navy);
}

.card-number {
  color: var(--blue);

  font-size: 12px;

  font-weight: 850;

  letter-spacing: .08em;

  margin-bottom: 60px;
}

.featured .card-number {
  color: var(--blue-light);
}

.service-card h3 {
  font-size: 20px;

  line-height: 1.2;

  letter-spacing: -.025em;

  margin-bottom: 15px;
}

.service-card p {
  color: var(--muted);

  font-size: 14px;

  line-height: 1.7;
}

.featured p {
  color: rgba(255,255,255,.65);
}

.service-card ul {
  list-style: none;

  margin-top: 25px;
}

.service-card li {
  padding: 8px 0;

  border-top:
    1px solid var(--line);

  color: var(--muted);

  font-size: 12px;
}

.featured li {
  border-color:
    rgba(255,255,255,.10);

  color: rgba(255,255,255,.68);
}

.service-card li::before {
  content: "✓";

  margin-right: 8px;

  color: var(--blue);
}

.service-card a {
  margin-top: auto;

  padding-top: 25px;

  color: var(--blue);

  font-size: 13px;

  font-weight: 750;
}

.featured a {
  color: var(--blue-light);
}

.service-card a span {
  margin-left: 5px;
}


/* =========================
   DARK SECTION
   ========================= */

.dark-section {
  padding: 110px 0;

  background:
    linear-gradient(
      135deg,
      #071a38,
      #0c315f
    );

  color: white;
}

.section-header.light h2 {
  color: white;
}

.section-header.light h2 em {
  color: var(--blue-light);
}

.section-header.light > p {
  color: rgba(255,255,255,.62);
}

.benefit-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  border-top:
    1px solid var(--line-dark);
}

.benefit {
  padding:
    32px 25px;

  border-right:
    1px solid var(--line-dark);
}

.benefit:first-child {
  border-left:
    1px solid var(--line-dark);
}

.benefit > span {
  color: var(--blue-light);

  font-size: 12px;

  font-weight: 800;
}

.benefit h3 {
  margin-top: 45px;

  font-size: 20px;
}

.benefit p {
  margin-top: 12px;

  color: rgba(255,255,255,.58);

  font-size: 14px;

  line-height: 1.7;
}


/* =========================
   PROCESS
   ========================= */

.process-section {
  background: var(--off-white);
}

.center-heading {
  max-width: 720px;

  margin:
    0 auto 60px;

  text-align: center;
}

.center-heading .eyebrow {
  justify-content: center;
}

.center-heading > p {
  margin-top: 20px;

  color: var(--muted);

  font-size: 15px;
}

.process-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 0;

  border-top:
    1px solid var(--line);
}

.process-item {
  padding:
    30px 22px;

  border-right:
    1px solid var(--line);
}

.process-item:first-child {
  border-left:
    1px solid var(--line);
}

.process-item > span {
  color: var(--blue);

  font-size: 12px;

  font-weight: 850;
}

.process-item h3 {
  margin-top: 42px;

  font-size: 17px;
}

.process-item p {
  margin-top: 10px;

  color: var(--muted);

  font-size: 13px;

  line-height: 1.65;
}


/* =========================
   PRICING
   ========================= */

.pricing-section {
  padding: 100px 0;

  background: white;
}

.pricing-box {
  display: grid;

  grid-template-columns:
    1fr
    280px;

  gap: 70px;

  align-items: center;

  padding: 65px;

  border-radius: 26px;

  background:
    linear-gradient(
      135deg,
      #eaf4ff,
      #f5f9fd
    );

  border:
    1px solid #d8e9f9;
}

.pricing-box p {
  max-width: 680px;

  margin-top: 22px;

  color: var(--muted);

  font-size: 15px;

  line-height: 1.8;
}

.pricing-action {
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 12px;
}

.pricing-action small {
  color: var(--muted);

  font-size: 12px;
}


/* =========================
   PORTFOLIO
   ========================= */

.portfolio-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}

.portfolio-card {
  min-height: 250px;

  padding: 30px;

  border:
    1px solid var(--line);

  border-radius: 18px;

  background: white;

  transition: .2s ease;
}

.portfolio-card:hover {
  border-color:
    #c5def4;

  box-shadow:
    0 18px 40px rgba(7,26,56,.07);
}

.portfolio-card span {
  color: var(--blue);

  font-size: 12px;

  font-weight: 850;
}

.portfolio-card h3 {
  margin-top: 65px;

  font-size: 19px;
}

.portfolio-card p {
  margin-top: 10px;

  color: var(--muted);

  font-size: 13px;

  line-height: 1.7;
}


/* =========================
   FAQ
   ========================= */

.faq-section {
  padding: 110px 0;

  background: var(--off-white);
}

.faq-list {
  max-width: 850px;

  margin-inline: auto;

  border-top:
    1px solid var(--line);
}

.faq-list details {
  border-bottom:
    1px solid var(--line);
}

.faq-list summary {
  cursor: pointer;

  list-style: none;

  padding:
    25px 5px;

  display: flex;

  justify-content: space-between;

  gap: 30px;

  font-size: 16px;

  font-weight: 750;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary span {
  color: var(--blue);

  font-size: 22px;

  font-weight: 400;
}

.faq-list details[open] summary span {
  transform: rotate(45deg);
}

.faq-list details p {
  max-width: 700px;

  padding:
    0 45px 28px 5px;

  color: var(--muted);

  font-size: 14px;

  line-height: 1.8;
}


/* =========================
   FINAL CTA
   ========================= */

.final-cta {
  padding: 110px 0;

  background:
    linear-gradient(
      135deg,
      #071a38,
      #0c376d
    );

  color: white;

  text-align: center;
}

.final-cta-inner {
  max-width: 760px;

  margin-inline: auto;
}

.final-cta .eyebrow {
  justify-content: center;
}

.final-cta h2 {
  color: white;
}

.final-cta h2 em {
  color: var(--blue-light);
}

.final-cta p {
  max-width: 600px;

  margin:
    22px auto 32px;

  color: rgba(255,255,255,.65);

  font-size: 16px;
}

.button-white {
  background: white;

  color: var(--navy);
}

.button-white:hover {
  transform: translateY(-2px);

  box-shadow:
    0 15px 35px rgba(0,0,0,.18);
}


/* =========================
   FOOTER
   ========================= */

.site-footer {
  padding: 60px 0 25px;

  background: #041329;

  color: white;
}

.footer-grid {
  display: grid;

  grid-template-columns:
    1fr
    1fr
    1fr;

  gap: 40px;

  padding-bottom: 50px;
}

.footer-logo {
  width: 118px;

  display: block;
}

.footer-grid p {
  margin-top: 12px;

  color: rgba(255,255,255,.45);

  font-size: 13px;
}

.footer-links {
  display: flex;

  flex-direction: column;

  gap: 10px;
}

.footer-links a {
  color: rgba(255,255,255,.55);

  font-size: 13px;
}

.footer-links a:hover {
  color: white;
}

.footer-contact {
  display: flex;

  flex-direction: column;

  gap: 10px;
}

.footer-contact span {
  color: rgba(255,255,255,.35);

  font-size: 12px;

  text-transform: uppercase;

  letter-spacing: .12em;
}

.footer-contact a {
  color: var(--blue-light);

  font-size: 14px;

  font-weight: 700;
}

.footer-bottom {
  padding-top: 22px;

  border-top:
    1px solid rgba(255,255,255,.08);

  display: flex;

  justify-content: space-between;

  color: rgba(255,255,255,.35);

  font-size: 11px;
}


/* =========================
   TABLET
   ========================= */

@media (max-width: 1050px) {

  .main-nav {
    gap: 18px;
  }

  .main-nav a {
    font-size: 13px;
  }

  .nav-cta {
    padding: 0 16px;
  }

  .hero-inner {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .hero-copy {
    max-width: 750px;
  }

  .hero-visual {
    min-height: 430px;
  }

  .service-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .benefit-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .process-grid {
    grid-template-columns:
      repeat(3, 1fr);
  }

  .process-item:nth-child(4),
  .process-item:nth-child(5) {
    border-top:
      1px solid var(--line);
  }

  .portfolio-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

}


/* =========================
   MOBILE
   ========================= */

@media (max-width: 760px) {

  .container {
    width:
      min(
        calc(100% - 28px),
        var(--container)
      );
  }


  /* HEADER */

  .site-header {
    background:
      rgba(7,26,56,.94);
  }

  .nav-wrap {
    min-height: 70px;

    gap: 15px;
  }

  .brand-logo {
    width: 100px;
  }

  .menu-toggle {
    display: flex;

    margin-left: auto;
  }

  .main-nav {
    position: absolute;

    top: 70px;
    left: 14px;
    right: 14px;

    display: none;

    padding: 15px;

    flex-direction: column;

    align-items: stretch;

    gap: 0;

    border-radius: 14px;

    background: #0a2348;

    box-shadow:
      0 20px 50px rgba(0,0,0,.25);
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a {
    padding: 13px 12px;

    border-bottom:
      1px solid rgba(255,255,255,.07);
  }

  .main-nav a:last-child {
    border-bottom: 0;
  }

  .nav-cta {
    display: none;
  }


  /* HERO */

  .hero {
    min-height: auto;

    padding:
      125px 0 70px;
  }

  .hero-inner {
    gap: 45px;
  }

  .hero h1 {
    font-size:
      clamp(42px, 13vw, 62px);
  }

  .hero-description {
    font-size: 15px;

    line-height: 1.7;
  }

  .hero-buttons {
    flex-direction: column;

    align-items: stretch;
  }

  .button {
    width: 100%;
  }

  .hero-trust {
    gap: 12px;

    flex-direction: column;
  }

  .hero-visual {
    min-height: 300px;
  }

  .workspace-card {
    min-height: 290px;

    border-radius: 18px;
  }

  .workspace-top {
    height: 42px;

    padding: 0 13px;
  }

  .workspace-content {
    min-height: 248px;

    padding: 15px;
  }

  .document-left {
    width: 120px;

    left: 15px;
    top: 45px;

    padding: 14px;
  }

  .document-right {
    width: 120px;

    right: 12px;
    bottom: 18px;

    padding: 14px;
  }

  .monitor {
    width: 210px;

    top: 65px;
  }

  .monitor-screen {
    border-width: 5px;

    padding: 10px;
  }

  .chart {
    height: 70px;

    gap: 6px;
  }

  .chart i {
    width: 17px;
  }

  .note-card {
    left: 18px;
    bottom: 15px;

    padding: 10px 14px;

    font-size: 8px;
  }


  /* TRUST */

  .trust-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .trust-grid > div {
    min-height: 72px;

    padding: 14px;

    border-bottom:
      1px solid var(--line);
  }


  /* SECTIONS */

  .section,
  .dark-section,
  .faq-section {
    padding: 75px 0;
  }

  .section-header {
    grid-template-columns: 1fr;

    gap: 25px;

    margin-bottom: 40px;
  }

  .section-header h2,
  .center-heading h2,
  .pricing-box h2,
  .final-cta h2 {
    font-size: 38px;
  }


  /* SERVICES */

  .service-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: 330px;
  }


  /* BENEFITS */

  .benefit-grid {
    grid-template-columns: 1fr;
  }

  .benefit {
    border-left:
      1px solid var(--line-dark);

    border-bottom:
      1px solid var(--line-dark);
  }


  /* PROCESS */

  .process-grid {
    grid-template-columns: 1fr;
  }

  .process-item {
    border-left:
      1px solid var(--line);

    border-bottom:
      1px solid var(--line);
  }

  .process-item:nth-child(4),
  .process-item:nth-child(5) {
    border-top: 0;
  }


  /* PRICING */

  .pricing-section {
    padding: 75px 0;
  }

  .pricing-box {
    grid-template-columns: 1fr;

    gap: 30px;

    padding: 35px 25px;
  }


  /* PORTFOLIO */

  .portfolio-grid {
    grid-template-columns: 1fr;
  }


  /* FAQ */

  .faq-list summary {
    font-size: 15px;
  }


  /* FOOTER */

  .footer-grid {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .footer-bottom {
    flex-direction: column;

    gap: 8px;
  }

}
