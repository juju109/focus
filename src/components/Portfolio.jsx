import { INDUSTRIES, CASES } from '../content.jsx'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div className="eyebrow-line">PORTFOLIO</div>
          <h2 className="section-title">숫자로 증명한 성장입니다.</h2>
          <p className="lead">카피 한 줄 바꾸고 매출이 폭발하는 이유, 저희는 알고 있습니다.</p>
        </div>

        <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '.04em', marginBottom: '10px' }}>특화 업종</div>
        <div className="client-wall" data-stagger>
          {INDUSTRIES.map((i) => (
            <span className="client-pill" key={i}>{i}</span>
          ))}
          <span className="client-pill more">그 외 다수 업종</span>
        </div>

        <div className="cases">
          {CASES.map((c) => (
            <div className="case" data-reveal key={c.tag}>
              <div className="tag">
                {c.tag}{c.strategy && <span className="strategy">{c.strategy}</span>}
              </div>
              <div className="steps">
                {c.steps.map(([k, v]) => (
                  <div className="s" key={k}><span className="k">{k}</span>{v}</div>
                ))}
              </div>
              <div className="figure">
                {c.from} <span className="arrow">→</span> <span className="to">{c.to}</span>
                <span className="period">{c.period}</span>
              </div>
              <div className="barchart">
                <div className="bar-row">
                  <span className="bar-label">이전</span>
                  <div className="bar-track"><div className="bar-fill before" style={{ width: c.before }} /></div>
                </div>
                <div className="bar-row">
                  <span className="bar-label">이후</span>
                  <div className="bar-track"><div className="bar-fill after" style={{ width: '100%' }} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
