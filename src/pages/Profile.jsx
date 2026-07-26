import { useEffect } from 'react'
import {
  STATS, MEDIA, DIFF_ROWS, POINTS, VALUES, DUTIES,
  SERVICES, FLOW, INDUSTRIES, CASES, RESULTS, COMPANY,
} from '../content.jsx'
import '../profile.css'

/**
 * 회사소개서 PDF 원본 (`/#/profile`).
 *
 * 랜딩을 그대로 인쇄하면 인쇄 엔진이 297mm 마다 기계적으로 잘라내기 때문에
 * 카드가 반으로 갈리거나, 그걸 피하려 블록이 밀리면서 하단에 큰 공백이 남는다.
 * 그래서 이 페이지는 흐름 문서가 아니라 **210×297mm 낱장의 묶음**으로 만든다.
 * 페이지 나눔 위치를 사람이 정하므로 결과가 항상 같고, 남는 공간은 여백이 된다.
 *
 * PDF 만들기 — Chrome 에서 `/#/profile` 을 열고 인쇄(⌘P):
 *   대상 = PDF로 저장 · 용지 = A4 · 배율 = 100% · 여백 = 없음 · 배경 그래픽 = 체크
 * 만들어진 파일을 `public/company-profile.pdf` 로 덮어쓰면 다운로드 버튼에 반영된다.
 */

const LOGO = `${import.meta.env.BASE_URL}logo.jpg`
const TOTAL = 6

const Check = () => (
  <span className="mk"><svg viewBox="0 0 24 24"><polyline points="4,13 9,18 20,6" /></svg></span>
)
const Cross = () => (
  <span className="mk no"><svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg></span>
)

/** 페이지 한 장. 하단 러닝 풋터로 문서 느낌을 주고 여백의 아래끝을 고정한다. */
function Page({ n, label, dark, ivory, children }) {
  const cls = ['pdf-page', dark && 'dark', ivory && 'ivory'].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      <div className="pp-body">{children}</div>
      <div className="pp-foot">
        <span className="ppf-name">{COMPANY.name} 회사소개서 — {label}</span>
        <span className="ppf-num">{String(n).padStart(2, '0')} / {TOTAL}</span>
      </div>
    </div>
  )
}

function Head({ eyebrow, title, lead }) {
  return (
    <div className="pd-head">
      <div className="pd-eyebrow">{eyebrow}</div>
      <h2 className="pd-title">{title}</h2>
      {lead && <p className="pd-lead">{lead}</p>}
    </div>
  )
}

export default function Profile() {
  // 소개서는 문서이므로 스크롤 애니메이션(useScrollReveal)을 쓰지 않는다.
  // 모든 요소가 처음부터 보이는 상태라야 인쇄 결과가 항상 같다.
  useEffect(() => {
    document.title = `${COMPANY.name} 회사소개서`
  }, [])

  return (
    <div className="pdf-deck">
      <div className="pdf-deck-bar">
        <span>
          <b>회사소개서 PDF 원본</b> · A4 {TOTAL}장 · 인쇄(<kbd>⌘P</kbd>) → 용지 A4 · 배율 100% · 여백 없음 · 배경 그래픽 켜기
        </span>
        <span>210 × 297 mm</span>
      </div>

      {/* ================= p.1 표지 ================= */}
      <div className="pdf-page pdf-cover">
        <div className="cv-reticle">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
            <line x1="12" y1="1" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="23" />
            <line x1="1" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="23" y2="12" />
          </svg>
        </div>

        <div className="cv-brand">
          <span className="mark"><img src={LOGO} alt="" /></span>
          <span className="bname">{COMPANY.name}</span>
          <span className="blatin">{COMPANY.latin}</span>
        </div>

        <div className="cv-mid">
          <div className="cv-eyebrow">소수정예 퍼포먼스 광고대행사</div>
          <h1 className="cv-h1">
            소수의 업체만,<br />
            <span className="hl">대형 브랜드로</span> 키우는<br />
            Win-Win 구조
          </h1>
          <div className="cv-rule" />
          <p className="cv-tagline">소수업체 밀착관리, 끝까지 함께하는 광고 파트너</p>
        </div>

        <div className="cv-bottom">
          <div className="cv-stats">
            {STATS.map((s) => (
              <div className={s.hi ? 'cv-stat hi' : 'cv-stat'} key={s.num}>
                <div className="icon">{s.icon}</div>
                <div className="num">{s.num}</div>
                <div className="cap">{s.cap[0]}<br />{s.cap[1]}</div>
              </div>
            ))}
          </div>
          <div className="cv-meta">
            <span>COMPANY PROFILE</span>
            <span><b>{COMPANY.site}</b> · {COMPANY.email}</span>
          </div>
        </div>
      </div>

      {/* ================= p.2 철학 ================= */}
      <Page n={2} label="철학">
        <Head
          eyebrow="PHILOSOPHY"
          title={<>공장형 대행사와는 <span className="hl">구조가 다릅니다.</span></>}
        />

        <p className="pd-quote">“진짜 성장을 위해, 마케터 1인당 소수의 브랜드만 맡습니다.”</p>
        <p className="pd-p">
          마케터 1명이 수십 개 계정을 돌리는 구조에서는 단순히 광고를 대행하는 역할밖에 할 수 없습니다.
        </p>
        <p className="pd-p">
          저희는 1개의 브랜드라도 제대로 '성장'시킵니다. 시장조사부터 USP 발굴, 카피라이팅까지
          최적의 효율을 만드는 데만 집중합니다.
        </p>

        <div className="pd-points">
          {POINTS.map((p) => (
            <div className="pd-point" key={p.em}>
              <div className="ppt">{p.title}<em>{p.em}</em></div>
              <p className="ppd">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="pd-block grow">
          <div className="pd-sub">COMPARISON</div>
          <h3 className="pd-subtitle">일반 대행사와 무엇이 다른가</h3>
          {/* 래퍼가 남는 높이를 받고, 표의 행들이 그 높이를 고르게 나눠 갖는다 */}
          <div className="pd-diff-wrap">
            <table className="pd-diff">
              <thead>
                <tr><th /><th>일반 대행사</th><th className="hi">{COMPANY.name}</th></tr>
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
          <div className="pd-promise">
            네이버 수수료는 발생되지 않습니다. <b>광고비 외 어떠한 추가 비용도 청구되지 않습니다.</b>
          </div>
        </div>
      </Page>

      {/* ================= p.3 기준 · 조직 ================= */}
      <Page n={3} label="기준과 조직" ivory>
        <Head
          eyebrow="VALUES"
          title="일하는 4가지 기준"
          lead="규모를 키우기 위한 원칙이 아니라, 소수의 브랜드를 제대로 키우기 위한 기준입니다."
        />
        <div className="pd-values">
          {VALUES.map((v) => (
            <div className={v.n === '04' ? 'pd-value hl' : 'pd-value'} key={v.n}>
              <div className="vnum">{v.n}</div>
              <h4>{v.h}</h4>
              <p>{v.p}</p>
            </div>
          ))}
        </div>

        <div className="pd-block">
          <div className="pd-sub">ORGANIZATION</div>
          <h3 className="pd-subtitle">대표 1인이 A부터 Z까지 책임집니다.</h3>
          <p className="pd-p">
            기획 따로, 디자인 따로, 운영 따로인 공장형 구조가 아닙니다. 내 브랜드의 담당자 한 명이
            맥락을 놓치지 않고 이어가기 때문에, 소재를 바꾸는 데 여러 팀을 거치며 며칠을 허비하는
            일이 없습니다.
          </p>
          <div className="pd-duties">
            {DUTIES.map((d) => (
              <div className="pd-duty" key={d.n}>
                <div className="dnum">{d.n}</div>
                <div className="dtitle">{d.title[0]}<br />{d.title[1]}</div>
                <div className="ddesc">{d.desc[0]}<br />{d.desc[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* ================= p.4 서비스 · 프로세스 · 매체 ================= */}
      <Page n={4} label="서비스">
        <Head
          eyebrow="SERVICES"
          title="제공하는 서비스"
          lead="기획 · 제작 · 운영, 세 영역을 나누지 않고 한 흐름으로 진행합니다."
        />
        <div className="pd-services">
          {SERVICES.map((s) => (
            <div className="pd-service" key={s.h}>
              <div className="sicon">{s.icon}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        <div className="pd-block">
          <div className="pd-sub">PROCESS</div>
          <h3 className="pd-subtitle">진행 프로세스</h3>
          <div className="pd-flow">
            {FLOW.map((f) => (
              <div className="pd-flow-step" key={f.n}>
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

        <div className="pd-block push">
          <div className="pd-sub">MEDIA COVERAGE</div>
          <h3 className="pd-subtitle">다루는 광고 매체</h3>
          <div className="pd-media">
            {MEDIA.map((m) => (
              <div className="pd-medium" key={m.name}>
                <div className="micon">{m.icon}</div>
                <div className="mname">{m.name}</div>
                <div className="mdesc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* ================= p.5 케이스 스터디 ================= */}
      <Page n={5} label="성과사례" ivory>
        <Head
          eyebrow="PORTFOLIO"
          title="숫자로 증명한 성장입니다."
          lead="카피 한 줄 바꾸고 매출이 폭발하는 이유, 저희는 알고 있습니다."
        />

        <div className="pd-sub">특화 업종</div>
        <div className="pd-pills">
          {INDUSTRIES.map((i) => <span className="pd-pill" key={i}>{i}</span>)}
          <span className="pd-pill more">그 외 다수 업종</span>
        </div>

        <div className="pd-cases">
          {CASES.map((c) => (
            <div className="pd-case" key={c.tag}>
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
              <div className="pd-bars">
                <div className="pd-bar-row">
                  <span className="lbl">이전</span>
                  <div className="pd-bar-track"><div className="pd-bar-fill before" style={{ width: c.before }} /></div>
                </div>
                <div className="pd-bar-row">
                  <span className="lbl">이후</span>
                  <div className="pd-bar-track"><div className="pd-bar-fill after" style={{ width: '100%' }} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Page>

      {/* ================= p.6 ROAS 성과 · 문의 ================= */}
      <Page n={6} label="운영 성과와 문의" dark>
        <Head
          eyebrow="RESULTS"
          title={<>다양한 업종의 <span className="hl">성과사례</span></>}
          lead="업종을 가리지 않고 만들어 온 실제 운영 성과이며, 구매완료 광고 수익률(ROAS) 기준입니다."
        />
        <div className="pd-results">
          {RESULTS.map((r, i) => (
            <div className="pd-result" key={i}>
              <div className="rdate">{r.date}</div>
              <div className="rrow">
                <span className="rdot cost" /><span className="rlabel">총 비용</span>
                <span className="rval cost">₩{r.cost}</span>
              </div>
              <div className="rrow">
                <span className="rdot roas" /><span className="rlabel">수익률</span>
                <span className="rval roas">{r.roas}%</span>
              </div>
            </div>
          ))}
        </div>
        <p className="pd-result-note">너무 많아 다 보여드릴 수가 없습니다..</p>

        <div className="pd-closing">
          <h3 className="cl-title">먼저, <span className="hl">무료 상담</span>부터 편하게 받아보세요.</h3>
          <p className="cl-lead">
            성과는 없고, 소통도 안 되고, 예산만 소진하는 광고 집행에 지치셨다면 잘 찾아오셨습니다.
          </p>
          <div className="pd-contact">
            <div className="pd-contact-card">
              <div className="cc-k">E-MAIL</div>
              <div className="cc-v">{COMPANY.email}</div>
              <div className="cc-s">문의 주시면 영업일 기준 1일 내 회신드립니다</div>
            </div>
            <div className="pd-contact-card">
              <div className="cc-k">WEBSITE</div>
              <div className="cc-v">{COMPANY.site}</div>
              <div className="cc-s">사이트에서 상담 신청서를 바로 작성하실 수 있습니다</div>
            </div>
          </div>
          <div className="pd-biz">
            {COMPANY.name} &nbsp;|&nbsp; 대표 {COMPANY.ceo} &nbsp;|&nbsp; 사업자등록번호 {COMPANY.bizNo}
            <br />© 2026 {COMPANY.name}. All rights reserved.
          </div>
        </div>
      </Page>
    </div>
  )
}
