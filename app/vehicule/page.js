const WA = '212619213238'

export const metadata = {
  title: 'Location Ford Ranger Raptor Merzouga',
  description: 'Louez le Ford Ranger Raptor à Errachidia et Merzouga. Idéal pour le désert et les pistes du Sahara.',
}

export default function VehiculePage() {
  return (
    <>
      <section className="hero hero-4x4 hero-sm">
        <div className="wrap">
          <div className="eyebrow">4x4 Premium</div>
          <h1 className="serif">Ford Ranger Raptor</h1>
          <p className="sub">Puissance et confort pour explorer Merzouga et les pistes du Sahara. Location depuis Errachidia.</p>
          <div className="cta">
            <a className="btn-wa" href={`https://wa.me/${WA}?text=Ford%20Ranger%20Raptor`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Réserver sur WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '50px 0'}}>
        <div className="wrap" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start'}}>
          <div>
            <img src="/images/ford-ranger-raptor.jpg" alt="Ford Ranger Raptor" style={{borderRadius: 8, width: '100%'}} />
          </div>
          <div>
            <h2 className="serif" style={{marginBottom: 16}}>Caractéristiques</h2>
            <ul style={{listStyle: 'none', display: 'grid', gap: 12, marginBottom: 28}}>
              <li>✓ Boîte automatique</li>
              <li>✓ 5 places</li>
              <li>✓ Diesel – 4x4</li>
              <li>✓ Idéal désert & pistes</li>
              <li>✓ Climatisation</li>
            </ul>
            <div style={{fontSize: 28, fontWeight: 600, marginBottom: 20}}>
              1 500 <small style={{fontSize: 14, fontWeight: 400}}>DH / jour</small>
            </div>
            <a className="btn-wa" href={`https://wa.me/${WA}?text=Ford%20Ranger%20Raptor`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Réserver ce véhicule
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
