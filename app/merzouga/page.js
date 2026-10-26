import Link from 'next/link'

const WA = '212619213238'

export const metadata = {
  title: 'Location voiture Merzouga | 4x4 et SUV pour le désert',
  description: 'Location de voiture à Merzouga et depuis Errachidia. 4x4, SUV et véhicules adaptés aux dunes et pistes du Sahara. Livraison possible, réservation WhatsApp.',
  openGraph: {
    title: 'Location voiture Merzouga | Mamou Sahara',
    description: 'Louez votre véhicule pour Merzouga et le désert. 4x4 et SUV depuis Errachidia.',
  },
}

export default function MerzougaPage() {
  return (
    <>
      <section className="hero hero-merzouga hero-sm">
        <div className="wrap">
          <div className="eyebrow">Merzouga & Sahara</div>
          <h1 className="serif">Location de voiture à Merzouga</h1>
          <p className="sub">
            Partez explorer les dunes de l&apos;Erg Chebbi avec un véhicule fiable.
            4x4 et SUV disponibles depuis Errachidia, avec livraison possible à Merzouga.
          </p>
          <div className="cta">
            <a className="btn-wa" href={`https://wa.me/${WA}?text=Location%20voiture%20Merzouga`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Réserver pour Merzouga
            </a>
            <Link className="round" href="/vehicules" aria-label="Voir les véhicules">
              <svg className="i"><use href="#arrow"/></svg>
            </Link>
          </div>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '60px 0'}}>
        <div className="wrap" style={{maxWidth: 860}}>
          <h2 className="serif" style={{marginBottom: 20}}>Pourquoi louer une voiture pour Merzouga ?</h2>
          <p style={{marginBottom: 16, lineHeight: 1.75}}>
            Merzouga est la porte d&apos;entrée des grandes dunes de l&apos;Erg Chebbi. Que vous veniez pour un bivouac,
            une excursion ou un road-trip dans le sud-est, disposer de votre propre véhicule vous donne une liberté totale.
          </p>
          <p style={{marginBottom: 16, lineHeight: 1.75}}>
            Depuis <strong>Errachidia</strong>, la route jusqu&apos;à Merzouga est goudronnée (environ 1h45–2h).
            Un SUV ou un 4x4 est recommandé si vous souhaitez accéder aux pistes autour des dunes ou circuler plus confortablement.
          </p>
          <p style={{marginBottom: 28, lineHeight: 1.75}}>
            Mamou Sahara vous propose des véhicules récents, adaptés au désert, avec prise en charge à l&apos;aéroport d&apos;Errachidia
            ou livraison selon disponibilité.
          </p>

          <h2 className="serif" style={{marginBottom: 16, marginTop: 40}}>Véhicules recommandés pour Merzouga</h2>
          <ul style={{lineHeight: 1.9, marginBottom: 28}}>
            <li><strong>Ford Ranger Raptor</strong> — idéal pour les pistes et le confort en 4x4</li>
            <li><strong>SUV (T-Roc, RAV4…)</strong> — polyvalents pour route et abords des dunes</li>
            <li><strong>Véhicules premium</strong> — pour un trajet confortable Errachidia → Merzouga</li>
          </ul>

          <h2 className="serif" style={{marginBottom: 16}}>Comment réserver ?</h2>
          <p style={{marginBottom: 20, lineHeight: 1.75}}>
            Indiquez-nous vos dates, le nombre de passagers et si vous arrivez à l&apos;aéroport d&apos;Errachidia.
            Nous vous confirmons le véhicule et les conditions directement sur WhatsApp.
          </p>
          <a className="btn-wa" href={`https://wa.me/${WA}?text=Bonjour%2C%20je%20souhaite%20une%20voiture%20pour%20Merzouga`} target="_blank" rel="noopener">
            <svg><use href="#wa"/></svg>Demander un véhicule pour Merzouga
          </a>
        </div>
      </section>
    </>
  )
}
