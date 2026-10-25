import Link from 'next/link'

const WA = '212619213238'

export const metadata = {
  title: 'Location voiture Errachidia & Merzouga | Mamou Sahara',
  description: 'Location de voiture à Merzouga et Errachidia. 4x4, SUV et véhicules premium pour le Sahara et tout le Maroc. Livraison aéroport Errachidia, assistance 24/7, réservation WhatsApp.',
}

const fleet = [
  { name: 'Mercedes Classe E', badge: 'Luxe', year: '2023', price: '1 200', img: '/images/mercedes-classe-e.jpg', specs: ['Auto', '5 places', 'Diesel'] },
  { name: 'Volkswagen T-Roc', badge: 'SUV', year: '2023', price: '600', img: '/images/vw-t-roc.jpg', specs: ['Auto', '5 places', 'Essence'] },
  { name: 'Renault Clio', badge: 'Économique', year: '2023', price: '300', img: '/images/renault-clio.jpg', specs: ['Manuelle', '5 places', 'Essence'] },
  { name: 'Ford Ranger Raptor', badge: '4x4', year: '2023', price: '1 500', img: '/images/ford-ranger-raptor.jpg', specs: ['Auto', '5 places', 'Diesel'] },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CarRental",
        "name": "Mamou Sahara",
        "description": "Location de voitures à Errachidia et Merzouga. 4x4, SUV et véhicules premium pour le Sahara.",
        "url": "https://mamou-sahara.com",
        "telephone": "+212619213238",
        "email": "mamou-sahara@gmail.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Errachidia", "addressCountry": "MA" },
        "geo": { "@type": "GeoCoordinates", "latitude": "31.9314", "longitude": "-4.4269" },
        "areaServed": ["Errachidia", "Merzouga", "Erfoud", "Rissani", "Ouarzazate"],
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "08:00", "closes": "22:00"
        }
      })}} />

      {/* HERO */}
      <section className="hero" id="accueil">
        <div className="wrap">
          <div className="eyebrow">Location de voitures premium</div>
          <h1 className="serif">Location de voitures à Errachidia et Merzouga</h1>
          <p className="sub">Location de voitures à Errachidia et Merzouga. 4x4, SUV et véhicules premium pour le désert et tout le sud-est marocain.</p>
          <div className="cta">
            <a className="btn-wa" href={`https://wa.me/${WA}`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Réserver sur WhatsApp
            </a>
            <Link className="round" href="/vehicules" aria-label="Voir les véhicules">
              <svg className="i"><use href="#arrow"/></svg>
            </Link>
          </div>
          <div className="perks">
            <div><svg className="i"><use href="#plane"/></svg><span>Livraison aéroport<br/>Errachidia</span></div>
            <div><svg className="i"><use href="#clock"/></svg><span>Assistance 24/7</span></div>
            <div><svg className="i"><use href="#bolt"/></svg><span>Réservation rapide</span></div>
          </div>
        </div>
        <div className="tag-r">Explorez le Maroc en toute liberté</div>
        <div className="hero-edge"></div>
      </section>

      {/* FLEET */}
      <section className="fleet" id="vehicules">
        <div className="wrap">
          <div className="fleet-head">
            <div>
              <div className="eyebrow">Notre flotte</div>
              <h2 className="serif">Une voiture pour chaque aventure</h2>
            </div>
            <p>Du véhicule économique au 4x4 premium, trouvez la voiture idéale pour Errachidia, Merzouga et le désert.</p>
            <Link href="/vehicules" className="all">Voir tous les véhicules <svg className="i"><use href="#arrow"/></svg></Link>
          </div>
          <div className="grid">
            {fleet.map((car) => (
              <article className="card" key={car.name}>
                <img src={car.img} alt={car.name} />
                <span className="badge">{car.badge}</span>
                <div className="info">
                  <h3>{car.name}</h3>
                  <div className="yr">{car.year}</div>
                  <div className="spec">
                    {car.specs.map((s,i) => <span key={i}>{s}</span>)}
                  </div>
                  <div className="price">
                    <div><b>{car.price}</b> <small>DH / jour</small></div>
                    <a className="round" href={`https://wa.me/${WA}?text=${encodeURIComponent(car.name)}`} target="_blank" rel="noopener">
                      <svg className="i"><use href="#arrow"/></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="band">
        <div className="wrap">
          <div className="feat"><div className="ic"><svg className="i"><use href="#plane"/></svg></div><div><b>Livraison aéroport</b><small>Aéroport Errachidia</small></div></div>
          <div className="feat"><div className="ic"><svg className="i"><use href="#shield"/></svg></div><div><b>Assurance incluse</b><small>Couverture de base</small></div></div>
          <div className="feat"><div className="ic"><svg className="i"><use href="#clock"/></svg></div><div><b>Assistance 24/7</b><small>Toujours disponibles</small></div></div>
          <div className="feat"><div className="ic"><svg className="i"><use href="#bolt"/></svg></div><div><b>Réservation rapide</b><small>Via WhatsApp</small></div></div>
        </div>
      </section>

      {/* STEPS */}
      <section className="steps">
        <div className="wrap">
          <div className="eyebrow">Simple & rapide</div>
          <h2 className="serif">Réservez en 3 étapes simples</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="top"><span className="n">01</span><span className="ic"><svg><use href="#car"/></svg></span></div>
              <h4>Choisissez votre véhicule</h4>
              <p>Parcourez notre flotte et sélectionnez le véhicule adapté à votre trajet.</p>
            </div>
            <div className="step">
              <div className="top"><span className="n">02</span><span className="ic"><svg><use href="#cal"/></svg></span></div>
              <h4>Indiquez vos dates</h4>
              <p>Précisez vos dates de prise en charge et de retour.</p>
            </div>
            <div className="step">
              <div className="top"><span className="n">03</span><span className="ic"><svg><use href="#wa"/></svg></span></div>
              <h4>Contactez-nous</h4>
              <p>Finalisez votre réservation via WhatsApp en quelques minutes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
