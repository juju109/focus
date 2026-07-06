import { useState } from 'react'
import { scrollToId } from '../scroll.js'

const LINKS = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '회사소개' },
  { id: 'services', label: '서비스' },
  { id: 'portfolio', label: '포트폴리오' },
  { id: 'contact', label: '문의' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    scrollToId(id)
    setOpen(false)
  }

  return (
    <header className="site">
      <div className="nav">
        <div className="brand">
          <div className="mark">
            <svg className="reticle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="12" y1="1" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="23" /><line x1="1" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="23" y2="12" /><circle className="core" cx="12" cy="12" r="2.2" /></svg>
          </div>
          <div className="name">포커스특공대</div>
        </div>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.id} onClick={() => go(l.id)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-right">
          <button className="callbtn" onClick={() => go('contact')}>문의하기</button>
          <button
            className="nav-toggle"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
            ) : (
              <svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
