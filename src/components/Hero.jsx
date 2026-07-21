import { scrollToId } from '../scroll.js'

// 파일은 public/company-profile.pdf 에 두고, 다운로드 시 보이는 이름만 한글로 지정
const PDF = `${import.meta.env.BASE_URL}company-profile.pdf`
const PDF_NAME = '포커스특공대_회사소개서.pdf'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <svg className="bigreticle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="12" y1="1" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="23" /><line x1="1" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="23" y2="12" /></svg>
      <div className="wrap">
        <div className="eyebrow">소수정예 퍼포먼스 광고대행사</div>
        <h1>소수의 업체만,<br /><span className="hl">대형 브랜드로</span> 키우는 Win-Win 구조</h1>
        <p className="tagline">소수업체 밀착관리, 끝까지 함께하는 광고 파트너</p>

        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollToId('contact')}>문의하기</button>
          <a className="btn-outline" href={PDF} download={PDF_NAME}>회사소개서 다운로드</a>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="icon"><svg viewBox="0 0 24 24"><path d="M3 21h18" /><path d="M5 21V8l7-4 7 4v13" /><path d="M9 21v-6h6v6" /></svg></div>
            <div className="num">300개+</div><div className="cap">브랜드 업체<br />운영 경험</div>
          </div>
          <div className="stat">
            <div className="icon"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="14" height="12" rx="1" /><path d="M17 10l4-2v8l-4-2" /></svg></div>
            <div className="num">주 5개+</div><div className="cap">신규 소재 제작<br />(요청 시 영상 1편)</div>
          </div>
          <div className="stat hi">
            <div className="icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M9 8h4a2.5 2.5 0 0 1 0 5H9m0 0h6m-6 0v3m0-8v-2" /></svg></div>
            <div className="num">0원</div><div className="cap">이미지 · 영상<br />제작비</div>
          </div>
        </div>
      </div>
    </section>
  )
}
