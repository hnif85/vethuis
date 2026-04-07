import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";

function normalizeSlug(input: string) {
  return decodeURIComponent(input || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

const articles = {
  "5-tanda-kucing-anda-stress-dan-cara-menanganinya": {
    title: "5 Tanda Kucing Anda Stress dan Cara Menanganinya",
    date: "12 April 2026",
    category: "Kesehatan Kucing",
    readTime: "5 menit",
    image: "😺",
    author: "Drh. Isti Handayani",
    content: `
Stress pada kucing sering kali tidak disadari oleh pemilik. Berbeda dengan anjing yang lebih ekspresif, kucing cenderung menyembunyikan gejala stress hingga menjadi parah.

## Tanda-tanda kucing sedang stress:

1. **Perubahan kebiasaan makan**
Kucing yang stress bisa berhenti makan sama sekali atau justru makan jauh lebih banyak dari biasanya.

2. **Buang air diluar litter box**
Ini adalah tanda paling umum yang sering salah diartikan sebagai kenakalan. Sebenarnya ini adalah cara kucing menunjukkan bahwa ia sedang tidak nyaman.

3. **Grooming berlebihan hingga botak**
Kucing akan menjilati dirinya sendiri secara berlebihan sebagai mekanisme coping stress.

4. **Menghindari interaksi**
Kucing yang biasanya ramah tiba-tiba ingin menyendiri dan bersembunyi.

5. **Perilaku agresif**
Menggigit atau mencakar tanpa alasan yang jelas adalah tanda stress yang sudah akut.

## Cara menanganinya:

Hal pertama yang harus dilakukan adalah mencari pemicu stress. Apakah ada hewan baru di rumah? Perubahan rutinitas? Atau suara bising dari luar?

Berikan tempat persembunyian yang aman, biarkan kucing datang kepada Anda jangan dipaksa, dan jaga rutinitas harian tetap konsisten.

Jika gejala berlanjut lebih dari 3 hari, segera konsultasikan dengan dokter hewan untuk mendapatkan penanganan yang tepat.
    `
  },
  "jadwal-vaksinasi-anjing-yang-benar-sesuai-usia": {
    title: "Jadwal Vaksinasi Anjing yang Benar Sesuai Usia",
    date: "8 April 2026",
    category: "Vaksinasi",
    readTime: "7 menit",
    image: "🐕",
    author: "Drh. Bimo Prasetya",
    content: `
Vaksinasi adalah perlindungan paling penting yang bisa Anda berikan untuk anjing kesayangan. Berikut adalah jadwal standar vaksinasi yang direkomendasikan oleh dokter hewan:

## Usia 6 - 8 minggu
Vaksin Distemper, Parvovirus, Parainfluenza

## Usia 10 - 12 minggu
Vaksin DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus) + Rabies

## Usia 14 - 16 minggu
Vaksin DHPP ulangan, Rabies ulangan, Bordetella

## Usia 1 tahun
Booster semua vaksin

## Setelah 1 tahun
Setiap 1 - 3 tahun sekali tergantung jenis vaksin dan kondisi kesehatan anjing.

Pastikan Anda selalu menyimpan kartu vaksinasi dengan baik. Jangan terlambat melakukan booster karena kekebalan tubuh bisa menurun.
    `
  },
  "cara-merawat-kelinci-di-musim-hujan": {
    title: "Cara Merawat Kelinci di Musim Hujan",
    date: "3 April 2026",
    category: "Perawatan Hewan",
    readTime: "4 menit",
    image: "🐰",
    author: "Drh. Icha",
    content: `
Musim hujan dengan kelembaban tinggi merupakan masa yang rentan untuk kelinci. Berikut tips menjaga kelinci tetap sehat:

1. **Jaga kandang tetap kering**
Kelembaban adalah musuh nomor 1 kelinci. Ganti alas kandang minimal 2 hari sekali.

2. **Sediakan pemanas ruangan**
Suhu dibawah 22 derajat celcius dapat membuat kelinci masuk kondisi hipotermia.

3. **Kurangi mandi**
Jika terpaksa harus memandikan, keringkan dengan handuk dan hair dryer dengan suhu hangat secepat mungkin.

4. **Tambahkan vitamin C**
Kelinci membutuhkan asupan vitamin C lebih banyak saat musim penghujan untuk menjaga daya tahan tubuh.

5. **Perhatikan gejala pilek**
Hidung berair, bersin terus menerus, dan nafsu makan menurun adalah tanda kelinci terkena flu. Segera bawa ke dokter.
    `
  },
} satisfies Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    author: string;
    content: string;
  }
>;

type ArticleKey = keyof typeof articles;

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const key = normalizeSlug(slug) as ArticleKey;
  const data = articles[key];
  if (!data) {
    return { title: "Artikel | Pet Huis" };
  }
  return {
    title: `${data.title} | Pet Huis`,
    description: data.content.trim().substring(0, 150) + "...",
  };
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = normalizeSlug(slug) as ArticleKey;
  const data = articles[key];
  const padding = "px-6 md:px-12 lg:px-16";

  if (!data) {
    return (
      <div className={`bg-cream min-h-screen`}>
        <Navbar padding={padding} />
        <div className={`${padding} py-24 pt-32`}>
          <h1 className="section-title">Artikel tidak ditemukan</h1>
          <p className="section-desc mt-2">Silakan kembali ke daftar artikel.</p>
          <Link href="/artikel" className="mt-6 inline-flex text-amber font-semibold">
            ← Kembali ke daftar artikel
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
        <div className="max-w-3xl mx-auto">
          <Link href="/artikel" className="text-sm font-semibold text-amber hover:text-amber-dark transition">
            ← Kembali ke daftar artikel
          </Link>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex rounded-full bg-amber/10 px-2 py-0.5 font-semibold text-amber">
                {data.category}
              </span>
              <span className="text-muted">{data.date}</span>
              <span className="text-muted">· {data.readTime} baca</span>
            </div>
            
            <h1 className="section-title">{data.title}</h1>
            
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-pale text-sm">👩‍⚕️</div>
              <div>
                <div className="text-sm font-semibold text-charcoal">{data.author}</div>
                <div className="text-xs text-muted">Dokter Hewan Pet Huis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-cream py-16 ${padding}`}>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-amber-pale to-cream-warm aspect-video rounded-2xl flex items-center justify-center text-7xl mb-10">
            {data.image}
          </div>
          
          <div className="prose prose-lg max-w-none">
            {data.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.trim().startsWith("## ")) {
                return <h2 key={idx} className="font-heading text-2xl text-charcoal mt-8 mb-4">{paragraph.trim().replace("## ", "")}</h2>
              }
              return <p key={idx} className="text-base leading-7 text-muted mb-4">{paragraph.trim()}</p>
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-amber/10">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`https://wa.me/6287789788818?text=Halo%20Pet%20Huis,%20saya%20ingin%20bertanya%20mengenai%20artikel%20${encodeURIComponent(data.title)}`}
                className="inline-flex items-center gap-3 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(245,166,35,0.35)] transition hover:-translate-y-0.5 hover:bg-amber-dark"
              >
                🧡 Konsultasikan dengan dokter
              </Link>
              <Link href="/artikel" className="inline-flex items-center gap-2 text-base font-semibold text-charcoal hover:text-amber transition">
                ← Lihat artikel lainnya
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
}