import { SERVICES, FLOW } from '../content.jsx'

export default function Services() {
  return (
    <section className="alt" id="services">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div className="eyebrow-line">SERVICES</div>
          <h2 className="section-title">제공하는 서비스</h2>
          <p className="lead">기획 · 제작 · 운영, 세 영역을 나누지 않고 한 흐름으로 진행합니다.</p>
        </div>

        <div className="service-cards" data-stagger>
          {SERVICES.map((s) => (
            <div className="service-card" key={s.h}>
              <div className="sicon">{s.icon}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        <div className="flow" data-stagger>
          {FLOW.map((f) => (
            <div className="flow-step" key={f.n}>
              <span className="fnum">{f.n}</span>
              <span className="ficon">{f.icon}</span>
              <div>
                <div className="ftext">{f.text}</div>
                <div className="fdesc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
