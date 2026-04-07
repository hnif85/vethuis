import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";

function normalizeSlug(input: string) {
  return decodeURIComponent(input || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

const doctors = {
  "drh-isti-handayani": {
    name: "Drh. Isti Handayani",
    spec: "General Practitioner",
    schedule: [
      { hari: "Senin", jam: "09.00 – 18.00" },
      { hari: "Selasa", jam: "09.00 – 18.00" },
      { hari: "Rabu", jam: "09.00 – 18.00" },
      { hari: "Kamis", jam: "09.00 – 18.00" },
      { hari: "Jumat", jam: "09.00 – 18.00" },
      { hari: "Sabtu", jam: "09.00 – 16.00" },
    ],
    bio: `Berpengalaman menangani kasus preventif, vaksinasi, dan konsultasi umum untuk kucing dan anjing. Fokus pada edukasi pemilik
    agar anabul tetap sehat lewat jadwal vaksin dan pemeriksaan rutin.`,
    photo: "/images/dokter/drh-isti.jpg",
  },
  "drh-icha": {
    name: "Drh. Icha",
    spec: "Dokter Layanan Minggu",
    schedule: [
      { hari: "Minggu", jam: "09.00 – 16.00" },
    ],
    bio: `Dokter jaga akhir pekan yang siap membantu konsultasi ringan, pemeriksaan awal, dan follow-up tindakan hari kerja.`,
    photo: "/images/dokter/drh-icha.jpg",
  },
  "drh-bimo-prasetya": {
    name: "Drh. Bimo Prasetya",
    spec: "Bedah & Anestesi",
    schedule: [
      { hari: "Selasa", jam: "10.00 – 18.00" },
      { hari: "Rabu", jam: "10.00 – 18.00" },
      { hari: "Kamis", jam: "10.00 – 18.00" },
      { hari: "Jumat", jam: "10.00 – 18.00" },
      { hari: "Sabtu", jam: "09.00 – 15.00" },
    ],
    bio: `Fokus pada bedah elektif (sterilisasi) dan penanganan anestesi aman. Mengedepankan monitoring pasca tindakan dan briefing
    pemilik untuk perawatan di rumah.`,
    photo: "/images/dokter/drh-bimo.jpg",
  },
} satisfies Record<
  string,
  {
    name: string;
    spec: string;
    schedule: { hari: string; jam: string }[];
    bio: string;
    photo: string;
  }
>;

type DoctorKey = keyof typeof doctors;

export function generateStaticParams() {
  return Object.keys(doctors).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const key = normalizeSlug(slug) as DoctorKey;
  const data = doctors[key];
  if (!data) {
    return { title: "Dokter Pet Huis" };
  }
  return {
    title: `${data.name} | Pet Huis`,
    description: `Profil ${data.name} – ${data.spec} di Pet Huis Veterinary Practice Fatmawati.`,
  };
}


export default async function DoctorDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = normalizeSlug(slug) as DoctorKey;
  const data = doctors[key];
  const padding = "px-6 md:px-12 lg:px-16";

  if (!data) {
    return (
      <div className={`bg-cream min-h-screen`}>
        <Navbar padding={padding} />
        <div className={`${padding} py-24 pt-32`}>
          <h1 className="section-title">Dokter tidak ditemukan</h1>
          <p className="section-desc mt-2">Silakan kembali ke daftar dokter.</p>
          <Link href="/dokter" className="mt-6 inline-flex text-amber font-semibold">
            ← Kembali ke daftar dokter
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream text-body">
      <Navbar padding={padding} />
      <div className="pt-24">
      <section className={`bg-white py-20 ${padding}`}>
        <Link href="/dokter" className="text-sm font-semibold text-amber hover:text-amber-dark transition">
          ← Kembali ke daftar dokter
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="w-full max-w-[420px] overflow-hidden rounded-[28px] border-2 border-amber/40 bg-[#d9d9d9] shadow-[0_16px_42px_rgba(0,0,0,0.08)]">
            <div className="aspect-[3/4] w-full bg-gradient-to-br from-amber-pale to-cream-warm flex items-center justify-center text-6xl">
              👩‍⚕️
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="section-tag">Profil dokter hewan</div>
              <h1 className="section-title">{data.name}</h1>
              <p className="text-lg font-semibold text-amber">{data.spec}</p>
              <p className="text-base leading-7 text-muted max-w-3xl">
                {data.bio}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-2xl text-charcoal">Jadwal</h2>
              <div className="rounded-2xl border border-amber-pale bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="text-sm font-semibold text-muted mb-3">Jadwal Praktik</div>
                <div className="grid gap-3 md:grid-cols-2">
                  {data.schedule.map((item) => (
                    <div
                      key={item.hari}
                      className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
                    >
                      <span className="font-semibold text-charcoal">{item.hari}</span>
                      <span className="text-muted">{item.jam}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`https://wa.me/6287789788818?text=Halo%20Pet%20Huis,%20saya%20ingin%20buat%20janji%20dengan%20${encodeURIComponent(
                    data.name
                  )}`}
                  className="inline-flex items-center gap-3 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(245,166,35,0.35)] transition hover:-translate-y-0.5 hover:bg-amber-dark"
                >
                  🧡 Buat janji via WhatsApp
                </Link>
                <Link
                  href="tel:+6287789788818"
                  className="inline-flex items-center gap-2 text-base font-semibold text-charcoal hover:text-amber transition"
                >
                  📞 0877-8978-8818
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}