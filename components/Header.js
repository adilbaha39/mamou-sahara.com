'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const WA = '212619213238'

export default function Header() {
  const path = usePathname()
  const isActive = (href) => path === href ? 'on' : ''

  return (
    <header>
      <div className="wrap">
        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="Mamou Sahara" />
          <div>
            <b>MAMOU</b>
            <small>— SAHARA —</small>
          </div>
        </Link>
        <nav>
          <Link href="/" className={isActive('/')}>Accueil</Link>
          <Link href="/vehicules" className={isActive('/vehicules')}>Véhicules</Link>
          <Link href="/merzouga" className={isActive('/merzouga')}>Merzouga</Link>
          <Link href="/4x4" className={isActive('/4x4')}>4x4</Link>
          <Link href="/faq" className={isActive('/faq')}>FAQ</Link>
          <Link href="/blog" className={isActive('/blog')}>Blog</Link>
          <Link href="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
        <div className="hdr-r">
          <a className="btn-wa" href={`https://wa.me/${WA}?text=Bonjour%2C%20je%20souhaite%20réserver%20un%20véhicule`} target="_blank" rel="noopener">
            <svg><use href="#wa"/></svg>Réserver sur WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
