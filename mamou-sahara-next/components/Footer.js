import Link from 'next/link'

const WA = '212619213238'
const EMAIL = 'mamou-sahara@gmail.com'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div className="col brand">
            <Link href="/" className="logo">
              <img src="/images/logo.png" alt="Mamou Sahara" onError={(e)=>{e.target.style.display='none'}} />
              <div><b>MAMOU</b><small>— SAHARA —</small></div>
            </Link>
            <p>Location de voitures à Errachidia et Merzouga. 4x4, SUV et véhicules premium pour explorer le Sahara en toute confiance.</p>
          </div>
          <div className="col">
            <h6>Nos villes</h6>
            <ul>
              <li><svg><use href="#pin"/></svg>Errachidia</li>
              <li><svg><use href="#pin"/></svg>Merzouga</li>
              <li><svg><use href="#pin"/></svg>Erfoud</li>
              <li><svg><use href="#pin"/></svg>Rissani</li>
              <li><svg><use href="#pin"/></svg>Ouarzazate</li>
            </ul>
          </div>
          <div className="col">
            <h6>Liens</h6>
            <ul>
              <li><Link href="/vehicules">Véhicules</Link></li>
              <li><Link href="/merzouga">Merzouga</Link></li>
              <li><Link href="/4x4">Location 4x4</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/apropos">À propos</Link></li>
              <li><Link href="/conditions">Conditions</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col contact">
            <h6>Contact</h6>
            <a className="ct" href={`https://wa.me/${WA}`} target="_blank" rel="noopener">
              <svg><use href="#wa"/></svg>
              <span><b>+212 6 19 21 32 38</b><small>Réserver sur WhatsApp</small></span>
            </a>
            <a className="ct" href={`mailto:${EMAIL}`}>
              <svg className="i"><use href="#mail"/></svg>
              <b>{EMAIL}</b>
            </a>
            <div className="ct"><svg className="i"><use href="#pin"/></svg><b>Errachidia, Maroc</b></div>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Mamou Sahara. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  )
}
