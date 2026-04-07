'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar({ padding }: { padding: string }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // close drawer when route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between border-b border-amber/15 bg-white md:bg-[color-mix(in_srgb,var(--off-white)_92%,transparent)] backdrop-blur-md ${padding}`}
    >
      <Link href="/" className="flex items-center gap-2 font-heading text-xl text-charcoal">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber text-base text-white">
          🏥
        </span>
        Pet <span className="text-amber">Huis</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden items-center gap-8 text-sm font-semibold text-body md:flex">
        <Link href="/#layanan" className={`hover:text-amber transition-colors ${pathname.startsWith('/#layanan') ? 'text-amber' : ''}`}>
          Layanan
        </Link>
        <Link href="/dokter" className={`hover:text-amber transition-colors ${pathname.startsWith('/dokter') ? 'text-amber' : ''}`}>
          Tim Dokter
        </Link>
        <Link href="/artikel" className={`hover:text-amber transition-colors ${pathname.startsWith('/artikel') ? 'text-amber' : ''}`}>
          Artikel
        </Link>
        <Link href="/#galeri" className={`hover:text-amber transition-colors ${pathname.startsWith('/#galeri') ? 'text-amber' : ''}`}>
          Galeri
        </Link>
        <Link href="/#testimoni" className={`hover:text-amber transition-colors ${pathname.startsWith('/#testimoni') ? 'text-amber' : ''}`}>
          Testimoni
        </Link>
        <Link
          href="/#kontak"
          className="rounded-full bg-amber px-4 py-2 text-white shadow-[0_4px_16px_rgba(245,166,35,0.35)] transition hover:bg-amber-dark"
        >
          Hubungi Kami
        </Link>
      </div>

      {/* Hamburger Button Mobile */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-amber/10 transition"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-charcoal rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-charcoal rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-charcoal rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-40 flex h-[calc(100vh-72px)] flex-col gap-6 overflow-y-auto bg-white px-6 pt-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <Link href="/#layanan" className={`text-lg font-semibold py-3 border-b border-amber/10 transition-colors ${pathname.startsWith('/#layanan') ? 'text-amber' : 'text-charcoal'}`}>
          Layanan
        </Link>
        <Link href="/dokter" className={`text-lg font-semibold py-3 border-b border-amber/10 transition-colors ${pathname.startsWith('/dokter') ? 'text-amber' : 'text-charcoal'}`}>
          Tim Dokter
        </Link>
        <Link href="/artikel" className={`text-lg font-semibold py-3 border-b border-amber/10 transition-colors ${pathname.startsWith('/artikel') ? 'text-amber' : 'text-charcoal'}`}>
          Artikel
        </Link>
        <Link href="/#galeri" className={`text-lg font-semibold py-3 border-b border-amber/10 transition-colors ${pathname.startsWith('/#galeri') ? 'text-amber' : 'text-charcoal'}`}>
          Galeri
        </Link>
        <Link href="/#testimoni" className={`text-lg font-semibold py-3 border-b border-amber/10 transition-colors ${pathname.startsWith('/#testimoni') ? 'text-amber' : 'text-charcoal'}`}>
          Testimoni
        </Link>
        <Link
          href="/#kontak"
          className="rounded-full bg-amber px-6 py-3 text-white text-center font-semibold shadow-[0_4px_16px_rgba(245,166,35,0.35)] mt-4"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
}
