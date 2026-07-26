import { scrollToId } from '../scroll.js'
import { STATS } from '../content.jsx'

// 파일은 public/company-profile.pdf 에 두고, 다운로드 시 보이는 이름만 한글로 지정
const PDF = `${import.meta.env.BASE_URL}company-profile.pdf`
const PDF_NAME = '포커스특공대_회사소개서.pdf'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <svg className="bigreticle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="12" y1="1" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="23" /><line x1="1" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="23" y2="12" /></svg>
      <div className="wrap">
        <div className="eyebrow" data-reveal>소수정예 퍼포먼스 광고대행사</div>
        <h1 data-reveal>소수의 업체만,<br /><span className="hl">대형 브랜드로</span> 키우는 Win-Win 구조</h1>
        <p className="tagline" data-reveal>소수업체 밀착관리, 끝까지 함께하는 광고 파트너</p>

        <div className="hero-cta" data-reveal>
          <button className="btn-primary" onClick={() => scrollToId('contact')}>문의하기</button>
          <a className="btn-outline" href={PDF} download={PDF_NAME}>회사소개서 다운로드</a>
        </div>

        <div className="stats" data-stagger>
          {STATS.map((s) => (
            <div className={s.hi ? 'stat hi' : 'stat'} key={s.num}>
              <div className="icon">{s.icon}</div>
              <div className="num">{s.num}</div>
              <div className="cap">{s.cap[0]}<br />{s.cap[1]}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="scroll-cue" onClick={() => scrollToId('media')} aria-label="아래로 스크롤">
        <span className="sc-label">Scroll</span>
        <svg viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9" /></svg>
      </button>
    </section>
  )
}
