/* ==========================================================
   AKADIVA — interaksi ringan + alur pemesanan V2 Lite
   ========================================================== */

const WA_NUMBER = "6281546123472";
const WA_DEFAULT_TEXT = "Halo AKADIVA, saya ingin konsultasi.";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

$$("[data-wa]").forEach((a) => {
  a.href = waLink(WA_DEFAULT_TEXT);
  a.target = "_blank";
  a.rel = "noopener";
});

const label = $("[data-wa-label]");
if (label) {
  const n = WA_NUMBER;
  label.textContent = `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 9)} ${n.slice(9)}`;
}

$("#year").textContent = new Date().getFullYear();

/* ---------- Navbar ---------- */
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
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

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
const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);

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
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((s) => io.observe(s));
}

/* ---------- Order / layanan ---------- */
const orderForm = $("#orderForm");
const orderError = $("#orderError");
const selectedService = $("#selectedService");
const selectedPrice = $("#selectedPrice");
const orderJenis = $("#orderJenis");
const orderReset = $("#orderReset");

let currentService = "";
let currentPrice = "";

const serviceTypes = {
  "Thesis Support": [
    "Proposal",
    "Skripsi",
    "Tesis",
    "Revisi",
    "Metodologi",
    "Persiapan sidang",
    "Lainnya"
  ],
  "Academic Writing": [
    "Makalah",
    "Essay",
    "Artikel",
    "Review paper",
    "Editing",
    "Proofreading",
    "Lainnya"
  ],
  "Research Support": [
    "Pencarian referensi",
    "Metodologi penelitian",
    "Penyusunan instrumen",
    "Konsultasi penelitian",
    "Review penelitian",
    "Lainnya"
  ],
  "Data & Statistics": [
    "Excel",
    "SPSS",
    "Analisis data",
    "Uji statistik",
    "Interpretasi hasil",
    "Lainnya"
  ],
  "Reference Management": [
    "Mendeley",
    "Zotero",
    "Sitasi",
    "Daftar pustaka",
    "Perapian referensi",
    "Lainnya"
  ],
  "Document & Design": [
    "Formatting dokumen",
    "Layout",
    "PowerPoint",
    "Slide seminar",
    "Slide sidang",
    "Lainnya"
  ]
};

function populateTypes(service) {
  orderJenis.innerHTML =
    '<option value="">Pilih jenis pekerjaan</option>';

  (serviceTypes[service] || []).forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    orderJenis.appendChild(option);
  });
}

$$("[data-order-service]").forEach((button) => {
  button.addEventListener("click", () => {
    currentService = button.dataset.orderService || "";
    currentPrice = button.dataset.orderPrice || "";

    selectedService.textContent = currentService || "Belum memilih layanan";
    selectedPrice.textContent = currentPrice || "—";

    populateTypes(currentService);

    orderError.hidden = true;

    document.querySelector("#pesan").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    setTimeout(() => $("#orderNama").focus(), 500);
  });
});

orderReset.addEventListener("click", () => {
  document.querySelector("#layanan").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

function formatDeadline(value) {
  if (!value) return "Belum ditentukan";

  const date = new Date(`${value}T00:00:00`);

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(orderForm);

  const nama = (data.get("nama") || "").toString().trim();
  const whatsapp = (data.get("whatsapp") || "").toString().trim();
  const kampus = (data.get("kampus") || "").toString().trim();
  const jenis = (data.get("jenis") || "").toString().trim();
  const deadline = (data.get("deadline") || "").toString().trim();
  const pesan = (data.get("pesan") || "").toString().trim();

  if (
    !currentService ||
    !nama ||
    !whatsapp ||
    !kampus ||
    !jenis ||
    !pesan
  ) {
    orderError.hidden = false;

    if (!currentService) {
      document.querySelector("#layanan").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (!nama) {
      $("#orderNama").focus();
    } else if (!whatsapp) {
      $("#orderWhatsApp").focus();
    } else if (!kampus) {
      $("#orderKampus").focus();
    } else if (!jenis) {
      orderJenis.focus();
    } else {
      $("#orderPesan").focus();
    }

    return;
  }

  orderError.hidden = true;

  const text = [
    "Halo AKADIVA, saya ingin konsultasi.",
    "",
    `Layanan: ${currentService}`,
    `Harga mulai: ${currentPrice || "Belum ditentukan"}`,
    `Nama: ${nama}`,
    `WhatsApp saya: ${whatsapp}`,
    `Kampus & jurusan: ${kampus}`,
    `Jenis pekerjaan: ${jenis}`,
    `Deadline: ${formatDeadline(deadline)}`,
    `Kebutuhan: ${pesan}`,
    "",
    "Mohon info ketersediaan dan estimasi harga final. Terima kasih."
  ].join("\n");

  window.open(waLink(text), "_blank", "noopener");
});

/* ---------- Form kontak lama / kontak umum ---------- */
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
    pesan && `Kebutuhan: ${pesan}`
  ]
    .filter((line) => line !== "" ? Boolean(line) : true)
    .join("\n");

  window.open(waLink(text), "_blank", "noopener");
});
