const INDUSTRIES = ['뷰티', '소형가전', '다이어트 식품', '잡화', '식품 · 외식']

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-line">PORTFOLIO</div>
          <h2 className="section-title">숫자로 증명한<br />성장입니다.</h2>
          <p className="lead">"잘한다"는 말 대신, 문제 정의부터 성과까지의 과정을 그대로 보여드립니다.</p>
        </div>

        <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '.04em', marginBottom: '10px' }}>운영 경험 업종</div>
        <div className="client-wall">
          {INDUSTRIES.map((i) => (
            <span className="client-pill" key={i}>{i}</span>
          ))}
          <span className="client-pill more">그 외 다수 업종</span>
        </div>

        <div className="cases">
          <div className="case">
            <div className="tag">뷰티 · 스마트스토어</div>
            <div className="steps">
              <div className="s"><span className="k">문제</span>타 대행사 운영에도 ROAS 미달 지속</div>
              <div className="s"><span className="k">전략</span>소구점 재설계로 핵심 타겟 재정의</div>
              <div className="s"><span className="k">성과</span>1주일 만에 ROAS 정상화</div>
            </div>
            <div className="figure">3만원 <span className="arrow">→</span> <span className="to">600만원</span> <span className="period">× 200</span></div>
            <div className="barchart">
              <div className="bar-row"><span className="bar-label">이전</span><div className="bar-track"><div className="bar-fill before" style={{ width: '3%' }}></div></div></div>
              <div className="bar-row"><span className="bar-label">이후</span><div className="bar-track"><div className="bar-fill after" style={{ width: '100%' }}></div></div></div>
            </div>
          </div>
          <div className="case dark">
            <div className="tag">소형 가전 · 스마트스토어 · <span className="strategy">영상 확장 전략</span></div>
            <div className="steps">
              <div className="s"><span className="k">문제</span>이미지 소재만으로는 확장 한계</div>
              <div className="s"><span className="k">전략</span>성과 이미지를 영상화, 네이버 클립 지면 확장</div>
              <div className="s"><span className="k">성과</span>1달 만에 매출 80배 폭발 성장</div>
            </div>
            <div className="figure">30만원 <span className="arrow">→</span> <span className="to">2,400만원</span> <span className="period">× 80 · 1달</span></div>
            <div className="barchart">
              <div className="bar-row"><span className="bar-label">이전</span><div className="bar-track"><div className="bar-fill before" style={{ width: '5%' }}></div></div></div>
              <div className="bar-row"><span className="bar-label">이후</span><div className="bar-track"><div className="bar-fill after" style={{ width: '100%' }}></div></div></div>
            </div>
          </div>
          <div className="case">
            <div className="tag">다이어트 식품 · 자사몰</div>
            <div className="steps">
              <div className="s"><span className="k">문제</span>까다로운 검수 카테고리로 매출 0원</div>
              <div className="s"><span className="k">전략</span>검수 기준 내 고효율 소재 즉시 발굴</div>
              <div className="s"><span className="k">성과</span>1주일 만에 일 매출 2,400만원</div>
            </div>
            <div className="figure">무매출 <span className="arrow">→</span> <span className="to">일 매출 2,400만원</span> <span className="period">1주일</span></div>
            <div className="barchart">
              <div className="bar-row"><span className="bar-label">이전</span><div className="bar-track"><div className="bar-fill before" style={{ width: '2%' }}></div></div></div>
              <div className="bar-row"><span className="bar-label">이후</span><div className="bar-track"><div className="bar-fill after" style={{ width: '100%' }}></div></div></div>
            </div>
          </div>
          <div className="case">
            <div className="tag">잡화 · 스마트스토어</div>
            <div className="steps">
              <div className="s"><span className="k">문제</span>낮은 소구력으로 정체된 실매출</div>
              <div className="s"><span className="k">전략</span>소구점 전환과 타겟 정밀화</div>
              <div className="s"><span className="k">성과</span>1주일 만에 매출 6배 증대</div>
            </div>
            <div className="figure">20만원 <span className="arrow">→</span> <span className="to">120만원</span> <span className="period">× 6 · 1주일</span></div>
            <div className="barchart">
              <div className="bar-row"><span className="bar-label">이전</span><div className="bar-track"><div className="bar-fill before" style={{ width: '18%' }}></div></div></div>
              <div className="bar-row"><span className="bar-label">이후</span><div className="bar-track"><div className="bar-fill after" style={{ width: '100%' }}></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
