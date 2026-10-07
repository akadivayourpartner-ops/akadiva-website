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
  a.rel = "noopener noreferrer";
});

const label = $("[data-wa-label]");
if (label) {
  const n = WA_NUMBER;
  label.textContent = `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 9)} ${n.slice(9)}`;
}

const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

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
const orderLayanan = $("#orderLayanan");
const orderJenis = $("#orderJenis");
const orderReset = $("#orderReset");
const orderDeadline = $("#orderDeadline");

const services = {
  "Thesis Support": {
    price: "Rp80.000",
    types: ["Pendampingan proposal", "Pendampingan skripsi", "Pendampingan tesis", "Pendampingan revisi", "Konsultasi metodologi", "Persiapan sidang", "Lainnya"]
  },
  "Academic Writing": {
    price: "Rp30.000",
    types: ["Review makalah", "Review essay", "Review artikel", "Editing", "Proofreading", "Konsultasi struktur tulisan", "Lainnya"]
  },
  "Research Support": {
    price: "Rp55.000",
    types: ["Pencarian referensi", "Konsultasi metodologi", "Penyusunan instrumen", "Konsultasi penelitian", "Review penelitian", "Lainnya"]
  },
  "Data & Statistics": {
    price: "Rp80.000",
    types: ["Pengolahan data Excel", "Pengolahan data SPSS", "Pemilihan uji statistik", "Interpretasi hasil", "Lainnya"]
  },
  "Reference Management": {
    price: "Rp30.000",
    types: ["Mendeley", "Zotero", "Gaya sitasi", "Perapian daftar pustaka", "Lainnya"]
  },
  "Document & Design": {
    price: "Rp30.000",
    types: ["Formatting dokumen", "Layout", "Slide seminar", "Slide sidang", "Lainnya"]
  }
};

let currentService = "";

function setStep(step, done = false) {
  $$(".order__progress [data-step]").forEach((el) => {
    const n = Number(el.dataset.step);
    el.classList.toggle("is-active", n === step && !done);
    el.classList.toggle("is-done", n < step || (done && n <= step));
  });
}

function populateTypes(service) {
  orderJenis.innerHTML = "";
  const first = document.createElement("option");
  first.value = "";
  first.textContent = service ? "Pilih jenis pendampingan" : "Pilih layanan dulu";
  orderJenis.appendChild(first);

  ((services[service] && services[service].types) || []).forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    orderJenis.appendChild(option);
  });
}

function selectService(service) {
  currentService = services[service] ? service : "";
  const info = services[currentService];

  selectedService.textContent = currentService || "Belum memilih layanan";
  selectedPrice.textContent = info ? info.price : "—";
  orderLayanan.value = currentService;
  populateTypes(currentService);
  setStep(currentService ? 2 : 1);
}

if (orderDeadline) {
  const t = new Date();
  orderDeadline.min = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}

$$("[data-order-service]").forEach((button) => {
  button.addEventListener("click", () => {
    selectService(button.dataset.orderService || "");
    clearErrors();
    $("#pesan").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => $("#orderNama").focus({ preventScroll: true }), 500);
  });
});

orderLayanan.addEventListener("change", () => {
  selectService(orderLayanan.value);
  orderLayanan.removeAttribute("aria-invalid");
});

orderReset.addEventListener("click", () => {
  $("#layanan").scrollIntoView({ behavior: "smooth", block: "start" });
});

function formatDeadline(value) {
  if (!value) return "Belum ditentukan";
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

function clearErrors() {
  orderError.hidden = true;
  $$(".field-error", orderForm).forEach((el) => el.remove());
  $$("[aria-invalid]", orderForm).forEach((el) => el.removeAttribute("aria-invalid"));
}

function showFieldError(field, message) {
  field.setAttribute("aria-invalid", "true");
  const note = document.createElement("span");
  note.className = "field-error";
  note.setAttribute("role", "alert");
  note.textContent = message;
  field.insertAdjacentElement("afterend", note);
}

function openWhatsApp(text) {
  const url = waLink(text);
  const win = window.open(url, "_blank");
  if (win) win.opener = null;
  else window.location.href = url;
}

function validPhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

orderForm.addEventListener("input", (e) => {
  const f = e.target;
  if (f.getAttribute && f.getAttribute("aria-invalid")) {
    f.removeAttribute("aria-invalid");
    const next = f.nextElementSibling;
    if (next && next.classList.contains("field-error")) next.remove();
  }
});

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const data = new FormData(orderForm);
  const get = (k) => (data.get(k) || "").toString().trim();

  const nama = get("nama");
  const whatsapp = get("whatsapp");
  const kampus = get("kampus");
  const jenis = get("jenis");
  const deadline = get("deadline");
  const pesan = get("pesan");

  const checks = [
    [orderLayanan, currentService, "Pilih layanan terlebih dahulu."],
    [$("#orderNama"), nama, "Nama wajib diisi."],
    [$("#orderWhatsApp"), whatsapp && validPhone(whatsapp), whatsapp ? "Nomor WhatsApp belum valid (9–15 angka)." : "Nomor WhatsApp wajib diisi."],
    [$("#orderKampus"), kampus, "Kampus & jurusan wajib diisi."],
    [orderJenis, jenis, "Pilih jenis pendampingan."],
    [$("#orderPesan"), pesan, "Ceritakan kebutuhanmu secara singkat."]
  ];

  const failed = checks.filter(([, ok]) => !ok);

  if (failed.length) {
    failed.forEach(([field, , msg]) => showFieldError(field, msg));
    orderError.hidden = false;
    failed[0][0].focus();
    return;
  }

  const text = [
    "Halo AKADIVA, saya ingin konsultasi.",
    "",
    `Layanan: ${currentService}`,
    `Harga mulai: ${services[currentService].price}`,
    `Nama: ${nama}`,
    `WhatsApp saya: ${whatsapp}`,
    `Kampus & jurusan: ${kampus}`,
    `Jenis pendampingan: ${jenis}`,
    `Deadline: ${formatDeadline(deadline)}`,
    `Kebutuhan: ${pesan}`,
    "",
    "Mohon info ketersediaan dan estimasi biaya. Terima kasih."
  ].join("\n");

  setStep(3);
  openWhatsApp(text);
});

selectService("");
