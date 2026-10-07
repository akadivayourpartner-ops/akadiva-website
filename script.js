/* ==========================================================
   AKADIVA — interaksi ringan
   ========================================================== */

// Nomor WhatsApp AKADIVA (format internasional tanpa + atau spasi)
const WA_NUMBER = "6281546123472";
const WA_DEFAULT_TEXT = "Halo AKADIVA, saya ingin konsultasi.";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Semua tautan bertanda data-wa mengarah ke WhatsApp
$$("[data-wa]").forEach((a) => {
  a.href = waLink(WA_DEFAULT_TEXT);
  a.target = "_blank";
  a.rel = "noopener";
});

// Tampilkan nomor di bagian kontak
const label = $("[data-wa-label]");
if (label) {
  const n = WA_NUMBER;
  label.textContent = `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 9)} ${n.slice(9)}`;
}

// Tahun di footer
$("#year").textContent = new Date().getFullYear();

/* ---------- Navbar: bayangan saat scroll + tombol ke atas ---------- */
const nav = $("#nav");
const toTop = $("#toTop");

function onScroll() {
  nav.classList.toggle("is-scrolled", window.scrollY > 8);
  toTop.hidden = window.scrollY < 700;
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

/* ---------- Menu mobile ---------- */
const toggle = $("#navToggle");
const menu = $("#menu");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute(
    "aria-label",
    open ? "Tutup menu" : "Buka menu"
  );
}

toggle.addEventListener("click", () =>
  setMenu(toggle.getAttribute("aria-expanded") !== "true")
);

$$("a", menu).forEach((a) =>
  a.addEventListener("click", () => setMenu(false))
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

window.matchMedia("(min-width: 961px)").addEventListener("change", () =>
  setMenu(false)
);

/* ---------- Tandai menu sesuai bagian yang sedang dilihat ---------- */
const links = $$('.nav__links a[href^="#"]:not(.btn)');
const sections = links
  .map((a) => $(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((a) =>
          a.classList.toggle(
            "is-active",
            a.getAttribute("href") === `#${entry.target.id}`
          )
        );
      });
    },
    {
      rootMargin: "-45% 0px -50% 0px"
    }
  );

  sections.forEach((s) => io.observe(s));
}

/* ---------- Formulir -> WhatsApp ---------- */
const form = $("#contactForm");
const err = $("#formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const nama = (data.get("nama") || "").toString().trim();

  if (!nama) {
    err.hidden = false;
    $("#f-nama").focus();
    return;
  }

  err.hidden = true;

  const kampus = (data.get("kampus") || "").toString().trim();
  const layanan = (data.get("layanan") || "").toString();
  const pesan = (data.get("pesan") || "").toString().trim();

  const text = [
    "Halo AKADIVA, saya ingin konsultasi.",
    "",
    `Nama: ${nama}`,
    kampus && `Kampus & jurusan: ${kampus}`,
    `Layanan: ${layanan}`,
    pesan && `Kebutuhan: ${pesan}`,
  ]
    .filter((line) => line !== "" ? Boolean(line) : true)
    .join("\n");

  window.open(waLink(text), "_blank", "noopener");
});
