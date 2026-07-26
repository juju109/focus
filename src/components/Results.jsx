import { RESULTS } from '../content.jsx'

export default function Results() {
  return (
    <section id="results">
      <div className="wrap">
        <div className="section-head result-head" data-reveal>
          <div className="eyebrow-line">RESULTS</div>
          <h2 className="section-title">다양한 업종의 <span className="accent">성과사례</span></h2>
          <p className="lead">업종을 가리지 않고 만들어 온 실제 운영 성과이며, 구매완료 광고 수익률(ROAS) 기준입니다.</p>
        </div>

        <div className="result-grid">
          {RESULTS.map((r, i) => (
            <div className="result-card" key={i} data-reveal style={{ transitionDelay: `${(i % 8) * 0.05}s` }}>
              <div className="rc-date">{r.date}</div>
              <div className="rc-row">
                <span className="rc-dot cost" />
                <span className="rc-label">총 비용</span>
                <span className="rc-val cost">₩{r.cost}</span>
              </div>
              <div className="rc-row roas-row">
                <span className="rc-dot roas" />
                <span className="rc-label">광고수익률</span>
                <span className="rc-val roas">{r.roas}%</span>
              </div>
            </div>
          ))}
        </div>

        <p className="result-note">너무 많아 다 보여드릴 수가 없습니다..</p>
      </div>
    </section>
  )
}
