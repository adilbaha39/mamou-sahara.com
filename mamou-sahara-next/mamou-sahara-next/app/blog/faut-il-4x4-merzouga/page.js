import Link from 'next/link'

const WA = '212619213238'

export const metadata = {
  title: 'Faut-il un 4x4 pour aller à Merzouga ?',
  description: 'Route goudronnée ou pistes ? Découvrez quand une voiture classique suffit et quand louer un 4x4 pour Merzouga et le désert.',
}

export default function Article2() {
  return (
    <>
      <section className="hero" style={{minHeight: '320px'}}>
        <div className="wrap">
          <div className="eyebrow">4x4 & Désert</div>
          <h1 className="serif">Faut-il un 4x4 pour aller à Merzouga ?</h1>
          <p className="sub">La réponse dépend de votre programme : village, dunes ou pistes.</p>
        </div>
        <div className="hero-edge"></div>
      </section>

      <section style={{background: 'var(--cream)', color: 'var(--text)', padding: '50px 0 70px'}}>
        <div className="wrap" style={{maxWidth: 720, lineHeight: 1.75}}>
          <p style={{marginBottom: 18}}>
            Beaucoup de voyageurs se demandent s’il faut absolument un <strong>4x4</strong> pour rejoindre Merzouga.
            La réponse est nuancée.
          </p>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Pour rejoindre le village</h2>
          <p style={{marginBottom: 18}}>
            La route depuis Errachidia jusqu’à Merzouga est <strong>entièrement goudronnée</strong>.
            Une citadine, une berline ou un SUV classique suffisent pour arriver au centre du village
            et aux hôtels situés en bordure des dunes.
          </p>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Quand le 4x4 devient utile</h2>
          <p style={{marginBottom: 18}}>
            Un 4x4 (ou un SUV à garde au sol élevée) est recommandé si vous souhaitez :
          </p>
          <ul style={{marginBottom: 24, paddingLeft: 20}}>
            <li>Accéder à certains bivouacs ou camps en piste</li>
            <li>Circuler sur des tracks autour de l’Erg Chebbi</li>
            <li>Avoir plus de confort et de sécurité hors asphalte</li>
          </ul>

          <h2 style={{margin: '28px 0 12px', fontSize: 20}}>Notre conseil</h2>
          <p style={{marginBottom: 24}}>
            Pour un séjour classique (route + village + excursion organisée dans les dunes), une voiture normale suffit.
            Pour plus d’autonomie et d’exploration, optez pour un <strong>Ford Ranger Raptor</strong> ou un SUV adapté.
          </p>

          <a className="btn-wa" href={`https://wa.me/${WA}?text=Conseil%204x4%20Merzouga`} target="_blank" rel="noopener">
            <svg><use href="#wa"/></svg>Demander conseil sur WhatsApp
          </a>
          <p style={{marginTop: 32}}>
            <Link href="/blog">← Retour au blog</Link> · <Link href="/4x4">Voir nos 4x4</Link>
          </p>
        </div>
      </section>
    </>
  )
}
