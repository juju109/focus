import { scrollToId } from '../scroll.js'

const Check = () => (
  <span className="mk"><svg viewBox="0 0 24 24"><polyline points="4,13 9,18 20,6" /></svg></span>
)
const Cross = () => (
  <span className="mk no"><svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg></span>
)

const DIFF_ROWS = [
  { label: '소재 제작', normal: '이미지 · 영상 건당 추가비', ours: '영상 포함 무제한 무료' },
  { label: '제작 속도', normal: '기획 · 디자인 · 운영 간 지연', ours: '1~2일 내 투입' },
  { label: '운영', normal: '다수 업체 기계적 관리', ours: '소수 브랜드 밀착 케어' },
  { label: '모니터링', normal: '업무 시간 외 대응 부재', ours: '365일 대표 직접 모니터링' },
  { label: '리포트', normal: '월간 PPT 요약, 사후 확인만 가능', ours: '주간 실시간 대시보드로 투명 공유' },
]

const VALUES = [
  { n: '01', h: '근거', p: '소재를 기획하고 세팅하는 전 과정에는 데이터가 있습니다. 이유 없는 세팅과 운영은 저희와 맞지 않습니다.' },
  { n: '02', h: '속도', p: '이슈를 발견하면 1~2일 내 새 소재를 투입합니다.' },
  { n: '03', h: '투명성', p: '주간 보고로 소통하고, 평일에는 데일리로 성과를 공유합니다. 현재 상황을 솔직하게 전달하고 다음 방향성을 지속적으로 제안드립니다.' },
  { n: '04', h: '책임', p: '마케터가 자주 바뀌는 공장형 대행사의 방식이 아닙니다. 모든 업체는 대표 마케터가 처음부터 끝까지 주도하여 관리합니다.' },
]

const DUTIES = ['시장 분석', '광고 소재 기획', '광고주 소통', '소재 컨펌', '영상 기획', '광고 계정 세팅 · 핸들링', '성과 분석 · 방향성 제시']

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-line">ABOUT US</div>
          <h2 className="section-title">포커스특공대를 소개합니다.</h2>
          <p className="lead">현장에서 쌓은 실무 경험을 바탕으로, 대표 1인이 소수의 브랜드에만 집중하는 밀착형 구조를 만들었습니다. 광고비를 늘리는 대행사가 아니라, 같은 광고비로 더 큰 성과를 만드는 대행사입니다.</p>
        </div>

        <div className="about-layout">
          <aside className="about-nav">
            <a onClick={() => scrollToId('philosophy')}>01. 철학</a>
            <a onClick={() => scrollToId('values')}>02. 핵심가치</a>
            <a onClick={() => scrollToId('organization')}>03. 조직구성</a>
          </aside>

          <div className="about-content">

            <div className="about-block" id="philosophy">
              <div className="block-eyebrow">PHILOSOPHY</div>
              <h3 className="block-title">공장형 대행사와는 구조가 다릅니다.</h3>
              <p className="philosophy-quote">“진짜 성장을 위해, 마케터 1인당 소수의 브랜드만 맡습니다.”</p>
              <p className="block-p">마케터 1명이 수십 개 계정을 돌리는 구조에서는 단순히 광고를 대행하는 역할밖에 할 수 없습니다.</p>
              <p className="block-p">저희는 1개의 브랜드라도 제대로 '성장'시킵니다. 시장조사부터 USP 발굴, 카피라이팅까지 최적의 효율을 만드는 데만 집중합니다.</p>
              <ul className="philosophy-list">
                <li><b>소재 제작 비용 0원:</b> 저희는 자신 있는 업체만 운영해드리고 있으며, 소재 무료 제작은 그 선택에 대한 자신 있는 투자입니다.</li>
                <li><b>압도적 소수 정예:</b> 소수의 업체만 핸들링하기 때문에, 계정 관리에서도 즉각적인 대응과 빠른 실행이 가능합니다.</li>
              </ul>
              <p className="block-p">확실하게 성과를 낼 수 있는 소수 브랜드와만 윈-윈합니다.</p>

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

            <div className="about-block" id="values">
              <div className="block-eyebrow">VALUES</div>
              <h3 className="block-title">일하는 4가지 기준</h3>
              <p className="block-p">규모를 키우기 위한 원칙이 아니라, 소수의 브랜드를 제대로 키우기 위한 기준입니다.</p>
              <div className="value-grid">
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
              <p className="block-p">기획 따로, 디자인 따로, 운영 따로인 공장형 구조가 아닙니다. 시장 분석부터 성과 리포팅까지 한 사람이 맥락을 놓치지 않고 이어가기 때문에, 소재를 바꾸는 데 여러 팀을 거치며 며칠을 허비하는 일이 없습니다. 아래 7가지 업무를 모두 대표 1인이 직접 수행합니다.</p>
              <div className="duties-wrap">
                {DUTIES.map((d) => (
                  <div className="duty-circle" key={d}>{d}</div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
