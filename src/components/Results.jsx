// 이미지(다양한업종의성과사례.png)에서 읽은 실제 성과 데이터
// cost: 총 광고 비용, roas: 구매완료 광고 수익률(%)
const RESULTS = [
  { date: '2025.11.10', cost: '518,801', roas: '417.79' },
  { date: '2025.12.13', cost: '872,225', roas: '485.68' },
  { date: '2025.12.26', cost: '237,496', roas: '492.37' },
  { date: '2025.09.06', cost: '940,693', roas: '312.54' },
  { date: '2026.01.31', cost: '124,946', roas: '475.41' },
  { date: '2025.08.30', cost: '556,482', roas: '305.31' },
  { date: '2026.02.07', cost: '102,378', roas: '767.16' },
  { date: '2026.01.24', cost: '148,575', roas: '420.09' },
  { date: '2025.12.20', cost: '365,453', roas: '628.74' },
  { date: '2025.12.19', cost: '758,258', roas: '259.94' },
  { date: '2025.11.10', cost: '121,465', roas: '944.30' },
  { date: '2025.12.19', cost: '283,996', roas: '514.73' },
  { date: '2026.02.20', cost: '270,099', roas: '481.53' },
  { date: '2025.12.19', cost: '400,576', roas: '422.31' },
  { date: '2026.01.09', cost: '279,114', roas: '370.64' },
  { date: '2025.08.30', cost: '240,743', roas: '445.29' },
]

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
