import Link from 'next/link'

const WA = '212619213238'

export const metadata = {
  title: 'Location voiture aéroport Errachidia – Guide pratique',
  description: 'Récupérer votre voiture à l’aéroport d’Errachidia (Moulay Ali Cherif). Déroulement, conseils et réservation avec Mamou Sahara.',
}

export default function Article3() {
  return (
    <>
      <section className="hero hero-sm">
        <div className="wrap">
          <div className="eyebrow">Aéroport</div>
          <h1 className="serif">Location voiture aéroport Errachidia</h1>
          <p className="sub">Prise en charge simple à l’aéroport Moulay Ali Cherif (ERH).</p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '50px 0 70px'}}>
        <div className="wrap" style={{maxWidth: 720, lineHeight: 1.75}}>
          <p style={{marginBottom: 18}}>
            L’<strong>aéroport d’Errachidia</strong> (Moulay Ali Cherif, code ERH) est le point d’entrée idéal
            pour rejoindre Merzouga et le sud-est marocain en voiture de location.
          </p>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Comment se passe la prise en charge ?</h2>
          <p style={{marginBottom: 18}}>
            Après réservation sur WhatsApp, nous organisons la remise des clés à l’aéroport.
            Indiquez votre <strong>numéro de vol</strong> et l’heure d’arrivée prévue : nous adaptons le rendez-vous
            en cas de retard.
          </p>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Documents à prévoir</h2>
          <ul style={{marginBottom: 24, paddingLeft: 20}}>
            <li>Permis de conduire valide (permis international recommandé pour les non-résidents)</li>
            <li>Pièce d’identité ou passeport</li>
            <li>Caution selon le type de véhicule</li>
          </ul>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Vers Merzouga ensuite</h2>
          <p style={{marginBottom: 24}}>
            Une fois le véhicule récupéré, comptez environ 1h45–2h de route jusqu’à Merzouga.
            Route goudronnée, paysages de la vallée du Ziz, puis approche des dunes.
          </p>

          <a className="btn-wa" href={`https://wa.me/${WA}?text=Location%20aéroport%20Errachidia`} target="_blank" rel="noopener">
            <svg><use href="#wa"/></svg>Réserver avec prise en charge aéroport
          </a>
          <p style={{marginTop: 32}}>
            <Link href="/blog">← Retour au blog</Link> · <Link href="/contact">Contact</Link>
          </p>
        </div>
      </section>
    </>
  )
}
