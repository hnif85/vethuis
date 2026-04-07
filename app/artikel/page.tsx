import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Artikel & Tips | Pet Huis Veterinary Practice",
  description: "Kumpulan artikel tips perawatan hewan, informasi kesehatan anabul, dan edukasi untuk pemilik hewan peliharaan.",
};

function getSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const articles = [
  {
    title: "5 Tanda Kucing Anda Stress dan Cara Menanganinya",
    date: "12 April 2026",
    category: "Kesehatan Kucing",
    excerpt: "Mengenali gejala stress pada kucing penting agar bisa ditangani sebelum menjadi masalah kesehatan yang serius.",
    readTime: "5 menit",
    image: "😺"
  },
  {
    title: "Jadwal Vaksinasi Anjing yang Benar Sesuai Usia",
    date: "8 April 2026",
    category: "Vaksinasi",
    excerpt: "Pahami jenis vaksin apa saja yang dibutuhkan anjing Anda dan kapan waktu yang tepat untuk memberikannya.",
    readTime: "7 menit",
    image: "🐕"
  },
  {
    title: "Cara Merawat Kelinci di Musim Hujan",
    date: "3 April 2026",
    category: "Perawatan Hewan",
    excerpt: "Kelembaban tinggi saat musim hujan dapat membuat kelinci mudah sakit. Ikuti tips ini untuk menjaga kesehatannya.",
    readTime: "4 menit",
    image: "🐰"
  },
  {
    title: "Mengenali Gejala Alergi Makanan pada Anabul",
    date: "29 Maret 2026",
    category: "Kesehatan",
    excerpt: "Alergi makanan sering terjadi pada hewan peliharaan. Ketahui gejala dan cara mengidentifikasi penyebabnya.",
    readTime: "6 menit",
    image: "🦴"
  },
  {
    title: "Pentingnya Grooming Rutin untuk Kesehatan Bulu",
    date: "24 Maret 2026",
    category: "Grooming",
    excerpt: "Grooming bukan cuma buat penampilan, tapi juga menjaga kesehatan kulit dan bulu hewan peliharaan Anda.",
    readTime: "4 menit",
    image: "🛁"
  },
  {
    title: "Tips Melatih Anjing Buat Air di Toilet",
    date: "18 Maret 2026",
    category: "Training",
    excerpt: "Latihan toilet training bisa dilakukan dengan sabar dan metode yang benar. Simak panduan lengkapnya disini.",
    readTime: "8 menit",
    image: "💡"
  },
];


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

export default function ArtikelPage() {
  const padding = "px-6 md:px-12 lg:px-16";
  return (
    <div className="bg-cream text-body">
      <Navbar padding={padding} />
      <div className="pt-24">
      
      <section className={`bg-white py-20 ${padding}`}>
        <div className="max-w-4xl">
          <SectionHeader tag="Edukasi & Tips" title="Artikel Perawatan Hewan" />
          <p className="section-desc mt-3">
            Kumpulan artikel dan tips seputar kesehatan, perawatan, dan edukasi untuk pemilik hewan peliharaan dari dokter hewan kami.
          </p>
        </div>
      </section>

      <section className={`bg-cream py-16 ${padding}`}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <div key={article.title} className="doctor-card fade-up" style={{ transitionDelay: `${idx * 70}ms` }}>
              <div className="bg-gradient-to-br from-amber-pale to-cream-warm aspect-video rounded-t-2xl flex items-center justify-center text-5xl">
                {article.image}
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex rounded-full bg-amber/10 px-2 py-0.5 font-semibold text-amber">
                    {article.category}
                  </span>
                  <span className="text-muted">{article.date}</span>
                </div>
                <h3 className="font-heading text-xl text-charcoal leading-tight">{article.title}</h3>
                <p className="text-sm leading-6 text-muted">{article.excerpt}</p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted">{article.readTime} baca</span>
                  <Link href={`/artikel/${getSlug(article.title)}`} className="inline-flex items-center gap-1 text-sm font-semibold text-amber hover:text-amber-dark transition">
                    Baca selengkapnya →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>
    </div>
  );
}