import Link from 'next/link'

const WA = '212619213238'

export const metadata = {
  title: 'Location 4x4 Merzouga & Errachidia | Désert Sahara',
  description: 'Location de 4x4 à Errachidia et Merzouga pour le désert. Ford Ranger Raptor et SUV tout-terrain. Idéal pistes, dunes et road-trips Sahara.',
  openGraph: {
    title: 'Location 4x4 Merzouga & Errachidia | Mamou Sahara',
    description: 'Louez un 4x4 pour le désert marocain. Merzouga, pistes et Sahara depuis Errachidia.',
  },
}

export default function QuatreX4Page() {
  return (
    <>
      <section className="hero" style={{minHeight: '420px'}}>
        <div className="wrap">
          <div className="eyebrow">4x4 & Désert</div>
          <h1 className="serif">Location 4x4 à Errachidia et Merzouga</h1>
          <p className="sub">
            Des véhicules tout-terrain prêts pour le Sahara. Pistes, dunes et routes du sud-est marocain.
          </p>
          <div className="cta">
            <a className="btn-wa" href={`https://wa.me/${WA}?text=Location%204x4%20Merzouga`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Réserver un 4x4
            </a>
            <Link className="round" href="/vehicule" aria-label="Voir le Ranger Raptor">
              <svg className="i"><use href="#arrow"/></svg>
            </Link>
          </div>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '60px 0'}}>
        <div className="wrap" style={{maxWidth: 860}}>
          <h2 className="serif" style={{marginBottom: 20}}>Quand faut-il un 4x4 ?</h2>
          <p style={{marginBottom: 16, lineHeight: 1.75}}>
            La route principale entre Errachidia et Merzouga est goudronnée. Une voiture classique suffit pour rejoindre le village.
            En revanche, dès que vous quittez l&apos;asphalte — pistes vers les bivouacs, abords des dunes, tracks dans la région —
            un <strong>4x4 ou un SUV à garde au sol élevée</strong> devient clairement plus sûr et plus confortable.
          </p>
          <p style={{marginBottom: 28, lineHeight: 1.75}}>
            Mamou Sahara propose notamment le <strong>Ford Ranger Raptor</strong>, conçu pour l&apos;off-road, ainsi que des SUV adaptés
            aux conditions du sud-est marocain.
          </p>

          <h2 className="serif" style={{marginBottom: 16}}>Nos 4x4 et SUV recommandés</h2>
          <ul style={{lineHeight: 1.9, marginBottom: 28}}>
            <li><strong>Ford Ranger Raptor</strong> — le choix premium pour le désert et les pistes</li>
            <li><strong>SUV (RAV4, T-Roc…)</strong> — polyvalents route + légères pistes</li>
            <li>Autres 4x4 selon disponibilité — demandez-nous sur WhatsApp</li>
          </ul>

          <h2 className="serif" style={{marginBottom: 16}}>Points de prise en charge</h2>
          <p style={{marginBottom: 20, lineHeight: 1.75}}>
            Aéroport d&apos;Errachidia, centre-ville d&apos;Errachidia, ou livraison vers Merzouga / Erfoud selon les disponibilités.
            Indiquez votre itinéraire, nous organisons la remise des clés.
          </p>
          <a className="btn-wa" href={`https://wa.me/${WA}?text=Je%20souhaite%20louer%20un%204x4`} target="_blank" rel="noopener">
            <svg><use href="#wa"/></svg>Demander un 4x4
          </a>
        </div>
      </section>
    </>
  )
}
