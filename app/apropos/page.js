export const metadata = {
  title: 'À propos – Mamou Sahara Location voiture Errachidia',
  description: 'Mamou Sahara, agence de location de voitures à Errachidia et Merzouga. Découvrez notre histoire et notre engagement au service de vos voyages dans le Sahara.',
}

export default function AproposPage() {
  return (
    <>
      <section className="hero hero-sm">
        <div className="wrap">
          <div className="eyebrow">À propos</div>
          <h1 className="serif">Plus qu&apos;une location, une expérience.</h1>
          <p className="sub">Mamou Sahara vous accompagne à Errachidia, Merzouga et dans tout le sud-est marocain.</p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '60px 0'}}>
        <div className="wrap" style={{maxWidth: 800}}>
          <h2 className="serif" style={{marginBottom: '20px'}}>Notre mission</h2>
          <p style={{marginBottom: '16px', lineHeight: 1.7}}>
            Mamou Sahara est une agence de location de voitures basée à Errachidia, spécialisée dans les véhicules adaptés au désert et aux routes du sud-est marocain.
          </p>
          <p style={{marginBottom: '16px', lineHeight: 1.7}}>
            Que vous arriviez à l&apos;aéroport d&apos;Errachidia ou que vous partiez explorer les dunes de Merzouga, nous mettons à votre disposition une flotte récente : 4x4, SUV, véhicules premium et citadines.
          </p>
          <p style={{lineHeight: 1.7}}>
            Notre engagement : un service simple, transparent et réactif, avec réservation rapide via WhatsApp et assistance 24/7.
          </p>
        </div>
      </section>
    </>
  )
}
