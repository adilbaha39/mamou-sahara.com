import Link from 'next/link'

const WA = '212619213238'

export const metadata = {
  title: 'Location voiture Errachidia – Notre flotte',
  description: 'Flotte Mamou Sahara : 4x4, SUV, premium et citadines pour Merzouga, Errachidia et tout le Maroc. Ford Ranger Raptor, Toyota, Mercedes et plus.',
}

const fleet = [
  { name: 'Mercedes Classe E', badge: 'Luxe', year: '2023', price: '1 200', img: '/images/mercedes-classe-e.jpg', specs: ['Auto', '5 places', 'Diesel'] },
  { name: 'Volkswagen T-Roc', badge: 'SUV', year: '2023', price: '600', img: '/images/vw-t-roc.jpg', specs: ['Auto', '5 places', 'Essence'] },
  { name: 'Renault Clio', badge: 'Économique', year: '2023', price: '300', img: '/images/renault-clio.jpg', specs: ['Manuelle', '5 places', 'Essence'] },
  { name: 'Ford Ranger Raptor', badge: '4x4', year: '2023', price: '1 500', img: '/images/ford-ranger-raptor.jpg', specs: ['Auto', '5 places', 'Diesel'], href: '/vehicule' },
  { name: 'Toyota RAV4', badge: 'SUV', year: '2023', price: '700', img: '/images/toyota-rav4.jpg', specs: ['Auto', '5 places', 'Hybride'] },
  { name: 'Audi Q8', badge: 'Luxe', year: '2023', price: '1 800', img: '/images/audi-q8.jpg', specs: ['Auto', '5 places', 'Diesel'] },
]

export default function VehiculesPage() {
  return (
    <>
      <section className="hero hero-vehicules hero-sm">
        <div className="wrap">
          <div className="eyebrow">Notre flotte</div>
          <h1 className="serif">Des véhicules pour chaque aventure</h1>
          <p className="sub">4x4, SUV, premium et citadines pour Errachidia, Merzouga et le désert marocain.</p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section className="fleet" style={{paddingTop: '60px'}}>
        <div className="wrap">
          <div className="grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {fleet.map((car) => (
              <article className="card" key={car.name}>
                <img src={car.img} alt={car.name} />
                <span className="badge">{car.badge}</span>
                <div className="info">
                  <h3>{car.name}</h3>
                  <div className="yr">{car.year}</div>
                  <div className="spec">{car.specs.map((s,i)=><span key={i}>{s}</span>)}</div>
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

      <section className="band">
        <div className="wrap">
          <div className="feat"><div className="ic"><svg className="i"><use href="#plane"/></svg></div><div><b>Livraison aéroport</b><small>Aéroport Errachidia</small></div></div>
          <div className="feat"><div className="ic"><svg className="i"><use href="#shield"/></svg></div><div><b>Assurance incluse</b><small>Couverture de base</small></div></div>
          <div className="feat"><div className="ic"><svg className="i"><use href="#clock"/></svg></div><div><b>Assistance 24/7</b><small>Toujours disponibles</small></div></div>
          <div className="feat"><div className="ic"><svg className="i"><use href="#bolt"/></svg></div><div><b>Réservation rapide</b><small>Via WhatsApp</small></div></div>
        </div>
      </section>
    </>
  )
}
