/* ==========================================================
   AKADIVA — V2 Lite
   Layanan → Form Order → WhatsApp
   ========================================================== */

const WA_NUMBER = "6281546123472";
const WA_DEFAULT_TEXT = "Halo AKADIVA, saya ingin konsultasi.";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;


/* ==========================================================
   WHATSAPP UMUM
   ========================================================== */

$$("[data-wa]").forEach((a) => {
  a.href = waLink(WA_DEFAULT_TEXT);
  a.target = "_blank";
  a.rel = "noopener";
});


/* Tampilkan nomor WhatsApp */

const label = $("[data-wa-label]");

if (label) {
  const n = WA_NUMBER;

  label.textContent =
    `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 9)} ${n.slice(9)}`;
}


/* Tahun footer */

const year = $("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* ==========================================================
   NAVBAR
   ========================================================== */

const nav = $("#nav");
const toTop = $("#toTop");

function onScroll() {

  if (nav) {
    nav.classList.toggle(
      "is-scrolled",
      window.scrollY > 8
    );
  }

  if (toTop) {
    toTop.hidden = window.scrollY < 700;
  }
}

window.addEventListener(
  "scroll",
  onScroll,
  { passive: true }
);

onScroll();


if (toTop) {

  toTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* ==========================================================
   MENU MOBILE
   ========================================================== */

const toggle = $("#navToggle");
const menu = $("#menu");

function setMenu(open) {

  if (!menu || !toggle) return;

  menu.classList.toggle("is-open", open);

  toggle.setAttribute(
    "aria-expanded",
    String(open)
  );

  toggle.setAttribute(
    "aria-label",
    open ? "Tutup menu" : "Buka menu"
  );
}


if (toggle && menu) {

  toggle.addEventListener("click", () => {

    setMenu(
      toggle.getAttribute("aria-expanded") !== "true"
    );

  });

  $$("a", menu).forEach((a) => {

    a.addEventListener("click", () => {
      setMenu(false);
    });

  });

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
      setMenu(false);
    }

  });

  window
    .matchMedia("(min-width: 961px)")
    .addEventListener("change", () => {
      setMenu(false);
    });

}


/* ==========================================================
   NAVBAR ACTIVE SECTION
   ========================================================== */

const links = $$(
  '.nav__links a[href^="#"]:not(.btn)'
);

const sections = links
  .map((a) => $(a.getAttribute("href")))
  .filter(Boolean);


if ("IntersectionObserver" in window) {

  const io = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        links.forEach((a) => {

          a.classList.toggle(
            "is-active",
            a.getAttribute("href") ===
            `#${entry.target.id}`
          );

        });

      });

    },

    {
      rootMargin: "-45% 0px -50% 0px"
    }

  );

  sections.forEach((s) => io.observe(s));

}


/* ==========================================================
   ORDER V2 LITE
   ========================================================== */

const serviceButtons =
  $$("[data-order-service]");

const orderSection =
  $("#pesan");

const orderForm =
  $("#orderForm");

const selectedService =
  $("#selectedService");

const selectedPrice =
  $("#selectedPrice");

const orderJenis =
  $("#orderJenis");

const orderError =
  $("#orderError");

const orderReset =
  $("#orderReset");


let currentService = "";
let currentPrice = "";


/* Jenis pekerjaan berdasarkan layanan */

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


/* Pilih layanan */

function selectService(service, price) {

  currentService = service;
  currentPrice = price;

  if (selectedService) {
    selectedService.textContent = service;
  }

  if (selectedPrice) {
    selectedPrice.textContent = price;
  }


  /* Isi pilihan jenis pekerjaan */

  if (orderJenis) {

    orderJenis.innerHTML =
      '<option value="">Pilih jenis pekerjaan</option>';

    const types =
      serviceTypes[service] || ["Lainnya"];

    types.forEach((type) => {

      const option =
        document.createElement("option");

      option.value = type;
      option.textContent = type;

      orderJenis.appendChild(option);

    });

  }


  /* Aktifkan tahap order */

  if (orderSection) {

    orderSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }


  if (orderError) {
    orderError.hidden = true;
  }

}


/* Klik tombol layanan */

serviceButtons.forEach((button) => {

  button.addEventListener("click", () => {

    selectService(
      button.dataset.orderService,
      button.dataset.orderPrice
    );

  });

});


/* Reset layanan */

if (orderReset) {

  orderReset.addEventListener("click", () => {

    currentService = "";
    currentPrice = "";

    if (selectedService) {
      selectedService.textContent =
        "Belum memilih layanan";
    }

    if (selectedPrice) {
      selectedPrice.textContent = "—";
    }

    if (orderJenis) {
      orderJenis.innerHTML =
        '<option value="">Pilih jenis pekerjaan</option>';
    }

    if (orderForm) {
      orderForm.reset();
    }

    if (orderSection) {

      orderSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

}


/* ==========================================================
   SUBMIT ORDER → WHATSAPP
   ========================================================== */

if (orderForm) {

  orderForm.addEventListener("submit", (e) => {

    e.preventDefault();


    if (!currentService) {

      if (orderError) {
        orderError.textContent =
          "Pilih layanan terlebih dahulu.";
        orderError.hidden = false;
      }

      document
        .querySelector("#layanan")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      return;
    }


    const data =
      new FormData(orderForm);


    const nama =
      (data.get("nama") || "")
        .toString()
        .trim();

    const whatsapp =
      (data.get("whatsapp") || "")
        .toString()
        .trim();

    const kampus =
      (data.get("kampus") || "")
        .toString()
        .trim();

    const jenis =
      (data.get("jenis") || "")
        .toString()
        .trim();

    const deadline =
      (data.get("deadline") || "")
        .toString()
        .trim();

    const pesan =
      (data.get("pesan") || "")
        .toString()
        .trim();


    /* Validasi */

    if (
      !nama ||
      !whatsapp ||
      !kampus ||
      !jenis ||
      !pesan
    ) {

      if (orderError) {

        orderError.textContent =
          "Lengkapi semua data yang wajib diisi terlebih dahulu.";

        orderError.hidden = false;

      }

      return;
    }


    if (orderError) {
      orderError.hidden = true;
    }


    /* Format tanggal */

    let deadlineText = "Belum ditentukan";

    if (deadline) {

      const date =
        new Date(`${deadline}T00:00:00`);

      deadlineText =
        date.toLocaleDateString(
          "id-ID",
          {
            day: "2-digit",
            month: "long",
            year: "numeric"
          }
        );

    }


    /* Pesan WhatsApp */

    const text = [

      "Halo AKADIVA, saya ingin konsultasi.",

      "",

      "=== DETAIL KEBUTUHAN ===",

      `Layanan: ${currentService}`,

      `Harga mulai: ${currentPrice}`,

      "",

      `Nama: ${nama}`,

      `WhatsApp: ${whatsapp}`,

      `Kampus & jurusan: ${kampus}`,

      `Jenis pekerjaan: ${jenis}`,

      `Deadline: ${deadlineText}`,

      "",

      "Kebutuhan:",

      pesan,

      "",

      "Mohon informasi lebih lanjut mengenai layanan dan harga finalnya.",

      "Terima kasih."

    ].join("\n");


    /* Buka WhatsApp */

    window.open(
      waLink(text),
      "_blank",
      "noopener"
    );

  });

}
