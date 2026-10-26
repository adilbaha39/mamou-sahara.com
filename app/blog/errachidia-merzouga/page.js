import Link from 'next/link'

const WA = '212619213238'

export const metadata = {
  title: 'Errachidia → Merzouga : distance, durée et conseils',
  description: 'Distance Errachidia Merzouga, temps de trajet, état de la route et quel type de voiture louer. Guide pratique Mamou Sahara.',
}

export default function Article1() {
  return (
    <>
      <section className="hero hero-merzouga hero-sm">
        <div className="wrap">
          <div className="eyebrow">Guide</div>
          <h1 className="serif">Errachidia → Merzouga : distance, durée et conseils</h1>
          <p className="sub">Route, temps de trajet et véhicule adapté pour rejoindre les dunes.</p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '50px 0 70px'}}>
        <div className="wrap" style={{maxWidth: 720, lineHeight: 1.75}}>
          <p style={{marginBottom: 18}}>
            La liaison <strong>Errachidia – Merzouga</strong> est l’un des trajets les plus demandés du sud-est marocain.
            Elle permet de rejoindre les dunes de l’Erg Chebbi depuis l’aéroport ou la ville d’Errachidia.
          </p>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Distance et durée</h2>
          <p style={{marginBottom: 18}}>
            Comptez environ <strong>130 km</strong> et <strong>1h45 à 2h</strong> de route selon le trafic et les arrêts.
            La route principale (via Erfoud / Rissani) est <strong>goudronnée</strong> jusqu’aux abords de Merzouga.
          </p>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Quel véhicule choisir ?</h2>
          <p style={{marginBottom: 18}}>
            Pour le trajet principal, une voiture classique (citadine ou berline) suffit.
            Un <strong>SUV</strong> ou un <strong>4x4</strong> est plus confortable si vous prévoyez des pistes autour des dunes,
            des bivouacs ou des tracks dans la région.
          </p>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Conseils pratiques</h2>
          <ul style={{marginBottom: 24, paddingLeft: 20}}>
            <li>Partez de préférence de jour pour profiter du paysage (vallée du Ziz).</li>
            <li>Faites le plein à Errachidia ou Erfoud : les stations se raréfient ensuite.</li>
            <li>Réservez votre véhicule à l’avance en haute saison (automne, vacances).</li>
          </ul>

          <p style={{marginBottom: 24}}>
            Mamou Sahara assure la location depuis Errachidia, avec possibilité de livraison selon disponibilité.
          </p>

          <a className="btn-wa" href={`https://wa.me/${WA}?text=Location%20pour%20Merzouga`} target="_blank" rel="noopener">
            <svg><use href="#wa"/></svg>Réserver un véhicule
          </a>
          <p style={{marginTop: 32}}>
            <Link href="/blog">← Retour au blog</Link>
          </p>
        </div>
      </section>
    </>
  )
}
