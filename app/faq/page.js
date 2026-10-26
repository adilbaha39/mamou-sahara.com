const WA = '212619213238'

export const metadata = {
  title: 'FAQ – Location voiture Errachidia & Merzouga',
  description: 'Questions fréquentes sur la location de voiture à Errachidia et Merzouga : permis, caution, aéroport, 4x4, désert, annulation.',
}

const faqs = [
  {
    q: "Puis-je récupérer la voiture à l'aéroport d'Errachidia ?",
    a: "Oui. Nous proposons la livraison et la prise en charge à l'aéroport Moulay Ali Cherif d'Errachidia. Indiquez votre numéro de vol pour que nous puissions vous attendre."
  },
  {
    q: "Faut-il un 4x4 pour aller à Merzouga ?",
    a: "La route Errachidia–Merzouga est goudronnée. Une voiture normale suffit pour rejoindre le village. Un 4x4 ou un SUV est recommandé si vous souhaitez emprunter des pistes autour des dunes ou gagner en confort."
  },
  {
    q: "Quel est l'âge minimum pour louer ?",
    a: "21 ans révolus, avec un permis valide depuis au moins 1 an. Certains véhicules (premium ou 4x4) peuvent exiger 25 ans."
  },
  {
    q: "La caution est-elle obligatoire ?",
    a: "Oui, une caution est demandée selon le type de véhicule. Elle est restituée après inspection du véhicule au retour."
  },
  {
    q: "Comment se passe la réservation ?",
    a: "Très simple : contactez-nous sur WhatsApp avec vos dates, le véhicule souhaité et le lieu de prise en charge. Nous confirmons la disponibilité et les conditions rapidement."
  },
  {
    q: "Proposez-vous des véhicules pour le désert ?",
    a: "Oui. Notre flotte inclut des 4x4 (dont le Ford Ranger Raptor) et des SUV adaptés aux routes et pistes du sud-est marocain, idéaux pour Merzouga et les environs."
  },
  {
    q: "Puis-je annuler ma réservation ?",
    a: "Oui. L'annulation est gratuite jusqu'à 48h avant la prise en charge. Contactez-nous sur WhatsApp pour toute modification ou annulation."
  },
  {
    q: "L'assurance est-elle incluse ?",
    a: "Une assurance de base est généralement incluse. Les détails de couverture et options complémentaires vous sont précisés avant la confirmation de la réservation."
  },
]

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />

      <section className="hero hero-sm">
        <div className="wrap">
          <div className="eyebrow">Aide</div>
          <h1 className="serif">Questions fréquentes</h1>
          <p className="sub">Tout ce que vous devez savoir pour louer à Errachidia et Merzouga.</p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '60px 0'}}>
        <div className="wrap" style={{maxWidth: 800}}>
          {faqs.map((f, i) => (
            <div key={i} style={{marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid rgba(0,0,0,0.08)'}}>
              <h2 style={{fontSize: 18, fontWeight: 600, marginBottom: 10}}>{f.q}</h2>
              <p style={{lineHeight: 1.7, opacity: 0.9}}>{f.a}</p>
            </div>
          ))}
          <div style={{marginTop: 36}}>
            <p style={{marginBottom: 16}}>Vous ne trouvez pas la réponse ? Écrivez-nous.</p>
            <a className="btn-wa" href={`https://wa.me/${WA}`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>Contacter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
