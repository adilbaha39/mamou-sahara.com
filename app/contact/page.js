const WA = '212619213238'
const EMAIL = 'mamou-sahara@gmail.com'

export const metadata = {
  title: 'Contact – Location voiture aéroport Errachidia',
  description: 'Contactez Mamou Sahara à Merzouga et Errachidia. WhatsApp, téléphone et réservation rapide. Livraison aéroport Errachidia. Disponible 7j/7.',
}

export default function ContactPage() {
  return (
    <>
      <section className="hero hero-sm">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1 className="serif">Une question ?<br/>Nous sommes là.</h1>
          <p className="sub">Réponse rapide sur WhatsApp. Livraison aéroport Errachidia et dans la région.</p>
          <div className="cta">
            <a className="btn-wa" href={`https://wa.me/${WA}`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Réserver sur WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '60px 0'}}>
        <div className="wrap" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
          <div>
            <h2 className="serif" style={{marginBottom: '24px'}}>Nos coordonnées</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                <svg className="i" style={{width: 24, height: 24, marginTop: 4}}><use href="#phone"/></svg>
                <div>
                  <b>Téléphone & WhatsApp</b><br/>
                  <span>+212 6 19 21 32 38</span><br/>
                  <small style={{opacity: 0.7}}>Réponse rapide sur WhatsApp</small>
                </div>
              </div>
              <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                <svg className="i" style={{width: 24, height: 24, marginTop: 4}}><use href="#mail"/></svg>
                <div>
                  <b>Email</b><br/>
                  <span>{EMAIL}</span><br/>
                  <small style={{opacity: 0.7}}>Nous répondons sous 24h</small>
                </div>
              </div>
              <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                <svg className="i" style={{width: 24, height: 24, marginTop: 4}}><use href="#pin"/></svg>
                <div>
                  <b>Notre agence</b><br/>
                  <span>Errachidia, Maroc</span><br/>
                  <small style={{opacity: 0.7}}>Livraison aéroport Errachidia</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="serif" style={{marginBottom: '16px'}}>Réservez maintenant</h2>
            <p style={{marginBottom: '24px', opacity: 0.8}}>Contactez-nous sur WhatsApp pour une réservation rapide et personnalisée.</p>
            <a className="btn-wa" href={`https://wa.me/${WA}?text=Bonjour%2C%20je%20souhaite%20réserver%20un%20véhicule`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
