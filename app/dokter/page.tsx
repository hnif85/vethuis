import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Tim Dokter | Pet Huis Veterinary Practice",
  description: "Kenalan dengan tiga dokter hewan Pet Huis: berpengalaman, ramah, dan siap membantu anabul Anda setiap hari.",
};

function getSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const doctors = [
  {
    name: "Drh. Isti Handayani",
    spec: "General Practitioner",
    schedule: "Senin – Sabtu",
    bio: "Fokus pada pencegahan penyakit, vaksinasi, dan pemeriksaan menyeluruh untuk kucing & anjing.",
  },
  {
    name: "Drh. Icha",
    spec: "Dokter Layanan Minggu",
    schedule: "Minggu",
    bio: "Menangani konsultasi weekend, kasus ringan, dan edukasi perawatan dasar untuk pemilik baru.",
  },
  {
    name: "Drh. Bimo Prasetya",
    spec: "Bedah & Anestesi",
    schedule: "Selasa – Sabtu",
    bio: "Berpengalaman pada bedah minor/sterilisasi dengan standar anestesi aman dan monitoring pasca tindakan.",
  },
];


export default function DokterPage() {
  const padding = "px-6 md:px-12 lg:px-16";
  return (
    <div className="bg-cream text-body">
      <Navbar padding={padding} />
      <div className="pt-24">
      <section className={`bg-white py-20 ${padding}`}>
        <div className="max-w-4xl">
          <div className="section-tag">Tim Dokter</div>
          <h1 className="section-title">Dokter Hewan Pet Huis</h1>
          <p className="section-desc mt-3">
            Tiga dokter dengan keahlian berbeda untuk memastikan anabul Anda mendapatkan perawatan terbaik setiap hari.
          </p>
        </div>
      </section>

      <section className={`bg-cream py-16 ${padding}`}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, idx) => (
            <div key={doc.name} className="doctor-card fade-up" style={{ transitionDelay: `${idx * 80}ms` }}>
              <div className="doctor-photo">
                <div className="doctor-photo-inner">👩‍⚕️</div>
              </div>
              <div className="doctor-info space-y-2">
                <div className="doctor-name">{doc.name}</div>
                <div className="doctor-spec">{doc.spec}</div>
                <div className="doctor-avail">{doc.schedule}</div>
                <p className="text-sm leading-6 text-muted">{doc.bio}</p>
                <Link
                  href={`/dokter/${getSlug(doc.name)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-amber-dark transition"
                >
                  Lihat profil & jadwal →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
