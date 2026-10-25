import Link from 'next/link'

export const metadata = {
  title: 'Blog – Conseils location voiture Errachidia & Merzouga',
  description: 'Guides pratiques : route Errachidia–Merzouga, faut-il un 4x4, aéroport Errachidia, location voiture désert. Conseils Mamou Sahara.',
}

const posts = [
  {
    slug: 'errachidia-merzouga',
    title: 'Errachidia → Merzouga : distance, durée et conseils',
    excerpt: 'Tout savoir sur la route entre Errachidia et Merzouga : temps de trajet, état de la route, et quel véhicule choisir.',
    date: '2026-10-20',
  },
  {
    slug: 'faut-il-4x4-merzouga',
    title: 'Faut-il un 4x4 pour aller à Merzouga ?',
    excerpt: 'Route goudronnée ou pistes ? On vous explique quand une voiture classique suffit et quand un 4x4 devient utile.',
    date: '2026-10-18',
  },
  {
    slug: 'aeroport-errachidia',
    title: 'Location voiture aéroport Errachidia : guide pratique',
    excerpt: 'Récupérer votre véhicule à l’aéroport Moulay Ali Cherif : déroulement, conseils et réservation WhatsApp.',
    date: '2026-10-15',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="hero" style={{minHeight: '360px'}}>
        <div className="wrap">
          <div className="eyebrow">Blog</div>
          <h1 className="serif">Conseils & guides</h1>
          <p className="sub">
            Route Errachidia–Merzouga, 4x4, aéroport et désert : des articles pratiques pour bien préparer votre location.
          </p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '60px 0'}}>
        <div className="wrap" style={{maxWidth: 800, display: 'grid', gap: '28px'}}>
          {posts.map((p) => (
            <article key={p.slug} style={{paddingBottom: 28, borderBottom: '1px solid rgba(0,0,0,0.08)'}}>
              <div className="eyebrow" style={{marginBottom: 8, color: '#666'}}>{p.date}</div>
              <h2 style={{fontSize: 22, marginBottom: 10}}>
                <Link href={`/blog/${p.slug}`} style={{color: 'inherit'}}>{p.title}</Link>
              </h2>
              <p style={{opacity: 0.85, lineHeight: 1.6, marginBottom: 12}}>{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} style={{fontSize: 14, fontWeight: 500, borderBottom: '1px solid currentColor'}}>
                Lire l&apos;article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
