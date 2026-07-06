import { scrollToId } from '../scroll.js'

const LINKS = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '회사소개' },
  { id: 'services', label: '서비스' },
  { id: 'portfolio', label: '포트폴리오' },
  { id: 'contact', label: '문의' },
]

export default function Nav() {
  return (
    <header className="site">
      <div className="nav">
        <div className="brand">
          <div className="mark">
            <svg className="reticle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="12" y1="1" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="23" /><line x1="1" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="23" y2="12" /><circle className="core" cx="12" cy="12" r="2.2" /></svg>
          </div>
          <div className="name">포커스특공대</div>
        </div>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.id} onClick={() => scrollToId(l.id)}>{l.label}</a>
          ))}
        </nav>
        <button className="callbtn" onClick={() => scrollToId('contact')}>문의하기</button>
      </div>
    </header>
  )
}
