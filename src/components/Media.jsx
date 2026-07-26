import { MEDIA } from '../content.jsx'

export default function Media() {
  return (
    <section className="media-section" id="media">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow-line">MEDIA COVERAGE</div>
          <h2 className="section-title" style={{ fontSize: '24px' }}>다루는 광고 매체</h2>
        </div>
        <div className="media-grid" data-stagger>
          {MEDIA.map((m) => (
            <div className="media-card" key={m.name}>
              <div className="micon">{m.icon}</div>
              <div className="mname">{m.name}</div>
              <div className="mdesc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
