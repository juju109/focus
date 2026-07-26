import { DIFF_ROWS, POINTS, VALUES, DUTIES } from '../content.jsx'

const Check = () => (
  <span className="mk"><svg viewBox="0 0 24 24"><polyline points="4,13 9,18 20,6" /></svg></span>
)
const Cross = () => (
  <span className="mk no"><svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg></span>
)

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div className="eyebrow-line">ABOUT US</div>
          <h2 className="section-title">포커스특공대를 소개합니다.</h2>
        </div>

        <div className="about-layout">
          <div className="about-content">

            <div className="about-block" id="philosophy" data-reveal>
              <div className="block-eyebrow">PHILOSOPHY</div>
              <h3 className="block-title">공장형 대행사와는 구조가 다릅니다.</h3>
              <p className="philosophy-quote">“진짜 성장을 위해, 마케터 1인당 소수의 브랜드만 맡습니다.”</p>
              <p className="block-p">마케터 1명이 수십 개 계정을 돌리는 구조에서는 단순히 광고를 대행하는 역할밖에 할 수 없습니다.</p>
              <p className="block-p">저희는 1개의 브랜드라도 제대로 '성장'시킵니다. 시장조사부터 USP 발굴, 카피라이팅까지 최적의 효율을 만드는 데만 집중합니다.</p>
              <div className="philosophy-points">
                {POINTS.map((p) => (
                  <div className="pp" key={p.em}>
                    <div className="pp-title">{p.title}<span className="pp-em">{p.em}</span></div>
                    <p className="pp-desc">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="diff-wrap">
                <table className="diff">
                  <thead>
                    <tr><th></th><th>일반 대행사</th><th className="hi">포커스특공대</th></tr>
                  </thead>
                  <tbody>
                    {DIFF_ROWS.map((r) => (
                      <tr key={r.label}>
                        <td className="row-label">{r.label}</td>
                        <td><Cross />{r.normal}</td>
                        <td className="hi"><Check />{r.ours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="promise">
                네이버 수수료는 발생되지 않습니다. <b>광고비 외 어떠한 추가 비용도 청구되지 않습니다.</b>
              </div>
            </div>

            <div className="about-block" id="values" data-reveal>
              <div className="block-eyebrow">VALUES</div>
              <h3 className="block-title">일하는 4가지 기준</h3>
              <p className="block-p">규모를 키우기 위한 원칙이 아니라, 소수의 브랜드를 제대로 키우기 위한 기준입니다.</p>
              <div className="value-grid" data-stagger>
                {VALUES.map((v) => (
                  <div className={v.n === '04' ? 'value-card hl' : 'value-card'} key={v.n}>
                    <div className="vnum">{v.n}</div>
                    <h4>{v.h}</h4>
                    <p>{v.p}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-block" id="organization">
              <div className="block-eyebrow">ORGANIZATION</div>
              <h3 className="block-title">대표 1인이 A부터 Z까지 책임집니다.</h3>
              <p className="block-p">기획 따로, 디자인 따로, 운영 따로인 공장형 구조가 아닙니다. 내 브랜드의 담당자 한 명이 맥락을 놓치지 않고 이어가기 때문에, 소재를 바꾸는 데 여러 팀을 거치며 며칠을 허비하는 일이 없습니다.</p>

              <div className="duty-cards" data-stagger>
                {DUTIES.map((d) => (
                  <div className="duty-card" key={d.n}>
                    <div className="dc-num">{d.n}</div>
                    <div className="dc-title">{d.title[0]}<br />{d.title[1]}</div>
                    <div className="dc-desc">{d.desc[0]}<br />{d.desc[1]}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
