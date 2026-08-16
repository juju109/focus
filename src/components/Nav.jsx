import { useState } from 'react'
import { scrollToId } from '../scroll.js'

const LINKS = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '회사소개' },
  { id: 'services', label: '서비스' },
  { id: 'portfolio', label: '포트폴리오' },
  { id: 'contact', label: '문의' },
]

const SOCIAL_LINKS = [
  {
    id: 'youtube',
    label: '유튜브',
    href: 'https://www.youtube.com/channel/UCLLYnyMbOATla9WD1WgFHOw',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M9.8 15.3V8.7L15.8 12l-6 3.3z" />
      </svg>
    ),
  },
  {
    id: 'blog',
    label: '네이버 블로그',
    href: 'https://blog.naver.com/mbx109',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="-0.5">blog</text>
      </svg>
    ),
  },
  {
    id: 'kakao',
    label: '카카오톡 상담',
    href: 'http://pf.kakao.com/_jeBGX/chat',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 3.5C6.75 3.5 2.5 6.86 2.5 11c0 2.62 1.72 4.93 4.32 6.26-.19.71-.68 2.55-.78 2.95-.12.49.18.48.38.35.16-.1 2.53-1.72 3.56-2.42.66.1 1.34.15 2.02.15 5.25 0 9.5-3.36 9.5-7.29S17.25 3.5 12 3.5z" />
      </svg>
    ),
  },
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
            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="포커스특공대 로고" />
          </div>
          <div className="name">포커스특공대</div>
        </div>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.id} onClick={() => go(l.id)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-right">
          <div className="social-links">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.id}
                className={`social-icon social-icon--${s.id}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
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
