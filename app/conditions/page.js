export const metadata = {
  title: 'Conditions de location – Mamou Sahara Errachidia',
  description: 'Conditions de location de voitures à Errachidia et Merzouga : âge, permis, caution, carburant et annulation. Transparent et simple.',
}

export default function ConditionsPage() {
  return (
    <>
      <section className="hero" style={{minHeight: '340px'}}>
        <div className="wrap">
          <div className="eyebrow">Informations</div>
          <h1 className="serif">Conditions de location</h1>
          <p className="sub">Transparentes et simples pour votre location à Errachidia et Merzouga.</p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '60px 0'}}>
        <div className="wrap" style={{maxWidth: 800, display: 'grid', gap: '28px'}}>
          <div>
            <h3 style={{marginBottom: 8}}>Âge minimum</h3>
            <p style={{opacity: 0.85}}>21 ans révolus. Certains véhicules premium ou 4x4 peuvent nécessiter 25 ans.</p>
          </div>
          <div>
            <h3 style={{marginBottom: 8}}>Permis de conduire</h3>
            <p style={{opacity: 0.85}}>Permis valide depuis au moins 1 an. Permis international recommandé pour les conducteurs étrangers.</p>
          </div>
          <div>
            <h3 style={{marginBottom: 8}}>Caution</h3>
            <p style={{opacity: 0.85}}>Une caution est demandée selon le type de véhicule. Elle est restituée après vérification du véhicule.</p>
          </div>
          <div>
            <h3 style={{marginBottom: 8}}>Carburant</h3>
            <p style={{opacity: 0.85}}>Le véhicule est remis avec un niveau de carburant et doit être rendu au même niveau.</p>
          </div>
          <div>
            <h3 style={{marginBottom: 8}}>Annulation</h3>
            <p style={{opacity: 0.85}}>Annulation gratuite jusqu&apos;à 48h avant la prise en charge. Contactez-nous sur WhatsApp pour toute modification.</p>
          </div>
          <div>
            <h3 style={{marginBottom: 8}}>Assistance</h3>
            <p style={{opacity: 0.85}}>Assistance 24/7 pendant toute la durée de votre location à Errachidia, Merzouga et dans la région.</p>
          </div>
        </div>
      </section>
    </>
  )
}
