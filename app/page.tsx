import Link from "next/link";
import Navbar from "./components/Navbar";

const services = [
  {
    title: "Pemeriksaan Umum",
    desc: "Konsultasi kesehatan menyeluruh dengan dokter hewan berpengalaman untuk memastikan anabul selalu prima.",
    tag: "Tersedia Setiap Hari",
    icon: "🩺",
    featured: true,
  },
  {
    title: "Vaksinasi",
    desc: "Program vaksinasi lengkap (core & non-core) sesuai usia dan risiko lingkungan hewan peliharaan Anda.",
    tag: "Rabies & Core Vaccines",
    icon: "💉",
  },
  {
    title: "Grooming & Spa",
    desc: "Mandi, trim bulu, potong kuku, pembersihan telinga — bikin anabul bersih dan nyaman.",
    tag: "By Appointment",
    icon: "🛁",
  },
  {
    title: "Rawat Inap",
    desc: "Monitoring 24 jam dengan tim medis untuk kasus yang memerlukan perawatan intensif.",
    tag: "Monitoring 24 Jam",
    icon: "🏥",
  },
  {
    title: "Laboratorium",
    desc: "Cek darah, urin, dan feses untuk diagnosis cepat dan akurat sebelum penanganan lanjutan.",
    tag: "Hasil Cepat",
    icon: "🧪",
  },
  {
    title: "Bedah & Sterilisasi",
    desc: "Prosedur bedah terencana dengan standar sterilitas tinggi dan anestesi aman.",
    tag: "Fasilitas Lengkap",
    icon: "🔪",
  },
];

const doctors = [
  { name: "Drh. Isti Handayani", spec: "General Practitioner", schedule: "Senin – Sabtu" },
  { name: "Drh. Icha", spec: "Dokter Minggu", schedule: "Setiap Minggu" },
  { name: "Drh. Dokter 3", spec: "Spesialis Bedah", schedule: "Senin – Jumat" },
  { name: "Drh. Dokter 4", spec: "Dermatologi Hewan", schedule: "Selasa – Sabtu" },
];

const gallery = [
  { label: "🐾", accent: "bg-gradient-to-br from-amber-pale to-mint-pale" },
  { label: "🐱", accent: "bg-gradient-to-br from-amber-pale to-amber-light/60" },
  { label: "🐕", accent: "bg-gradient-to-br from-mint-pale to-teal-pale" },
  { label: "🐇", accent: "bg-gradient-to-br from-cream-warm to-amber-pale" },
  { label: "🐈‍⬛", accent: "bg-gradient-to-br from-teal-pale to-amber-light/50" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Pemilik Kucing Persia",
    text: "Dokternya sangat sabar dan teliti. Kucing saya yang biasanya takut ke klinik jadi lebih tenang di sini.",
    featured: false,
  },
  {
    name: "Budi R.",
    role: "Pemilik 2 Anjing Golden",
    text: "Pet Huis sudah jadi klinik langganan saya 2 tahun. Pelayanan konsisten, harga transparan, dokter selalu update.",
    featured: true,
  },
  {
    name: "Dita A.",
    role: "Pemilik Kelinci & Hamster",
    text: "Lokasi strategis di Fatmawati, staf ramah dan responsif di WhatsApp. Highly recommended!",
    featured: false,
  },
];

const stats = [
  { value: "5+", label: "Dokter Hewan" },
  { value: "7 Hari", label: "Buka Setiap Hari" },
  { value: "1000+", label: "Pasien Tertangani" },
];

export default function Home() {
  const pageX = "px-6 md:px-12 lg:px-16";

  return (
    <div className="bg-cream text-body">
      <Navbar padding={pageX} />
      <main className="flex flex-col gap-0">
        <Hero padding={pageX} />
        <Ticker />
        <Services padding={pageX} />
        <Doctors padding={pageX} />
        <Gallery padding={pageX} />
        <Testimonials padding={pageX} />
        <ContactCTA padding={pageX} />
        <Footer padding={pageX} />
      </main>
    </div>
  );
}


function Hero({ padding }: { padding: string }) {
  return (
    <section id="hero" className={`relative grid min-h-screen grid-cols-1 gap-12 overflow-hidden pb-16 pt-28 md:grid-cols-2 md:pt-36 ${padding}`}>
      <div
        aria-hidden
        className="absolute -right-10 -top-16 h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] rounded-[62%_38%_55%_45%/48%_52%_48%_52%] bg-amber-pale"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 -left-10 h-[35vw] w-[35vw] max-h-[450px] max-w-[450px] rounded-[42%_58%_35%_65%/55%_45%_55%_45%] bg-teal-pale/60"
      />

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber-pale px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-amber-dark">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
          Klinik Hewan Fatmawati, Jakarta Selatan
        </div>
        <h1 className="font-heading text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.15] text-charcoal">
          Tempat Terpercaya
          <br />
          untuk <em className="text-amber not-italic italic">Anabul</em>
          <br />
          Kesayangan Anda
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted">
          Pet Huis Veterinary Practice hadir dengan tim dokter hewan berpengalaman, fasilitas modern, dan pelayanan penuh kasih
          untuk menjaga kesehatan hewan peliharaan Anda.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/6287789788818"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(245,166,35,0.4)] transition hover:-translate-y-0.5 hover:bg-amber-dark"
          >
            💬 Buat janji via WhatsApp
          </a>
          <Link
            href="#layanan"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-charcoal transition hover:border-amber hover:text-amber"
          >
            Lihat Layanan →
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-8 border-t border-black/10 pt-6 text-sm text-muted">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-3xl text-amber">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center px-4 md:px-6">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-visible rounded-[48px] bg-gradient-to-br from-amber-light to-amber-pale shadow-[0_20px_60px_rgba(0,0,0,0.13)]">
          <div className="flex h-full w-full items-center justify-center text-6xl">🐶🐱</div>
          <div className="absolute left-4 bottom-4 flex min-w-[220px] items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-pale text-xl">★</div>
            <div>
              <div className="font-heading text-lg text-charcoal">4.9 ★</div>
              <div className="text-xs text-muted">Rating Google</div>
            </div>
          </div>
          <div className="absolute right-4 top-4 rounded-2xl bg-teal text-sm font-semibold text-white px-3 py-2 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            ✅ Buka Hari Ini
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["Vaksinasi", "Pemeriksaan Umum", "Grooming", "Rawat Inap", "Perawatan Gigi", "Laboratorium", "Sterilisasi", "Konsultasi Online"];
  return (
    <div className="ticker-wrap bg-amber py-3 text-sm font-semibold text-white">
      <div className="ticker-track">
        {[...items, ...items].map((item, idx) => (
          <span key={`${item}-${idx}`} className="ticker-item">
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({
  tag,
  title,
  desc,
  center,
}: {
  tag: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-header ${center ? "text-center" : ""}`}>
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">{title}</h2>
      {desc ? <p className="section-desc">{desc}</p> : null}
    </div>
  );
}

function Services({ padding }: { padding: string }) {
  return (
    <section id="layanan" className={`bg-white py-24 ${padding}`}>
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionHeader tag="Layanan Kami" title="Perawatan Lengkap untuk Semua Anabul" />
        </div>
        <Link
          href="#kontak"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-amber hover:text-amber"
        >
          Tanya Lebih Lanjut →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`service-card fade-up ${service.featured ? "featured" : ""}`}
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <span className="service-tag">{service.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Doctors({ padding }: { padding: string }) {
  return (
    <section id="dokter" className={`relative overflow-hidden bg-cream py-24 ${padding}`}>
      <div className="dokter-bg-blob" aria-hidden />
      <div className="relative z-10">
<div className="mb-14 flex flex-wrap items-end justify-between gap-6">
  <SectionHeader
    tag="Tim Kami"
    title="Dokter Hewan yang Berpengalaman & Berdedikasi"
    desc="Ditangani dokter hewan berlisensi dengan spesialisasi beragam untuk kebutuhan anabul Anda."
  />
  <Link
    href="/dokter"
    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-amber hover:text-amber"
  >
    Lihat Semua Dokter →
  </Link>
</div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doc, idx) => (
            <div key={doc.name} className="doctor-card fade-up" style={{ transitionDelay: `${idx * 80}ms` }}>
              <div className="doctor-photo">
                <div className="doctor-photo-inner">👩‍⚕️</div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">{doc.name}</div>
                <div className="doctor-spec">{doc.spec}</div>
                <div className="doctor-avail">{doc.schedule}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ padding }: { padding: string }) {
  return (
    <section id="galeri" className={`bg-white py-24 ${padding}`}>
      <SectionHeader tag="Galeri" title="Momen Berharga bersama Anabul" />
      <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3 md:grid-rows-2">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            className={`gallery-item fade-up ${item.accent}`}
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            <div className="gallery-overlay" />
            <span className="relative z-10 text-4xl md:text-5xl">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        Ikuti kami di Instagram{" "}
        <a href="https://instagram.com/pethuis" className="font-semibold text-amber" target="_blank" rel="noreferrer">
          @pethuis
        </a>{" "}
        untuk update terbaru 🐾
      </p>
    </section>
  );
}

function Testimonials({ padding }: { padding: string }) {
  return (
    <section id="testimoni" className={`relative overflow-hidden bg-cream-2 py-24 ${padding}`}>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <SectionHeader
          tag="Testimoni"
          title="Apa Kata Para Pemilik Anabul?"
          desc="Kepercayaan Anda adalah motivasi terbesar kami untuk terus memberikan pelayanan terbaik."
          center
        />
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className={`testi-card fade-up ${t.featured ? "featured" : ""}`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="stars">★★★★★</div>
            <p className="testi-text">“{t.text}”</p>
            <div className="testi-author">
              <div className="testi-avatar">🐾</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactCTA({ padding }: { padding: string }) {
  return (
    <section id="kontak" className={`relative overflow-hidden bg-charcoal py-24 text-white ${padding}`}>
      <div className="kontak-blob" aria-hidden />
      <div className="kontak-blob-2" aria-hidden />
      <div className="relative grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="section-tag text-amber-light border-amber/40 bg-white/10">Hubungi Kami</div>
          <h2 className="kontak-title">
            Anabul Anda <br />
            <em>Layak</em> yang Terbaik
          </h2>
          <p className="kontak-desc">
            Jangan tunda perawatan kesehatan hewan peliharaan Anda. Tim kami siap membantu setiap hari. Chat langsung via WhatsApp
            untuk konsultasi cepat.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/6287789788818"
              className="btn-wa"
              target="_blank"
              rel="noreferrer"
            >
              <span className="btn-wa-icon">📱</span>
              Chat WhatsApp Sekarang
            </a>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <a href="tel:+6287789788818" className="flex items-center gap-2 hover:text-amber transition">
                ☎️ 0877-8978-8818
              </a>
              <a href="https://instagram.com/pethuis" className="flex items-center gap-2 hover:text-amber transition" target="_blank" rel="noreferrer">
                📷 @pethuis
              </a>
            </div>
          </div>
        </div>
        <div className="kontak-info-cards">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <div className="info-label">Alamat</div>
              <div className="info-value">
                Jl. RS. Fatmawati Raya No.26
                <br />
                Pondok Labu, Cilandak
                <br />
                Jakarta Selatan
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">🕒</div>
            <div>
              <div className="info-label">Jam Operasional</div>
              <div className="info-value">
                Senin – Sabtu: 09.00 – 18.00
                <br />
                Minggu: 09.00 – 16.00
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">🗺️</div>
            <div>
              <div className="info-label">Lokasi</div>
              <div className="info-value">
                Seberang Mall One Belpark
                <br />
                <a
                  href="https://maps.google.com/?q=Pet+Huis+Veterinary+Fatmawati"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber font-semibold"
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ padding }: { padding: string }) {
  return (
    <footer className={`flex flex-col gap-4 bg-teal-dark py-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between ${padding}`}>
      <div className="font-heading text-white">
        Pet <span className="text-amber">Huis</span> Veterinary Practice
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="#layanan" className="hover:text-amber transition">
          Layanan
        </Link>
        <Link href="#dokter" className="hover:text-amber transition">
          Dokter
        </Link>
        <Link href="#galeri" className="hover:text-amber transition">
          Galeri
        </Link>
        <Link href="#kontak" className="hover:text-amber transition">
          Kontak
        </Link>
      </div>
      <div className="text-xs text-white/50">© 2026 Pet Huis. Built with ❤️.</div>
    </footer>
  );
}
