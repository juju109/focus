export default function Services() {
  return (
    <section className="alt" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-line">SERVICES</div>
          <h2 className="section-title">제공하는 서비스</h2>
          <p className="lead">기획 · 제작 · 운영, 세 영역을 나누지 않고 한 흐름으로 진행합니다.</p>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <div className="sicon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /></svg></div>
            <h3>브랜딩 · 전략 기획</h3>
            <p>시장과 경쟁 상황을 분석해 브랜드 단계와 시즌성에 맞는 캠페인 방향을 처음부터 함께 설계합니다.</p>
          </div>
          <div className="service-card">
            <div className="sicon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg></div>
            <h3>퍼포먼스 마케팅</h3>
            <p>네이버 SA · Meta · GFA · Google Ads · Kakao까지, 브랜드에 맞는 매체를 상담 후 직접 집행하고 운영합니다.</p>
          </div>
          <div className="service-card">
            <div className="sicon"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M10 9l5 3-5 3V9z" /></svg></div>
            <h3>영상 · 이미지 소재 제작</h3>
            <p>카피, 이미지, 영상까지 대표가 직접 만듭니다. 성과 난 이미지는 곧바로 영상으로 확장합니다.</p>
          </div>
        </div>

        <div className="flow">
          <div className="flow-step">
            <span className="fnum">01</span>
            <span className="ficon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
            <div><div className="ftext">상담 · 의뢰</div><div className="fdesc">브랜드 현황과 목표를 먼저 듣습니다</div></div>
          </div>
          <div className="flow-step">
            <span className="fnum">02</span>
            <span className="ficon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg></span>
            <div><div className="ftext">전략 기획</div><div className="fdesc">매체 믹스와 소구점, 예산 구조를 설계합니다</div></div>
          </div>
          <div className="flow-step">
            <span className="fnum">03</span>
            <span className="ficon"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg></span>
            <div><div className="ftext">소재 제작 · 매체 운영</div><div className="fdesc">1~2일 내 새 소재 투입, 실시간 계정 관리</div></div>
          </div>
          <div className="flow-step">
            <span className="fnum">04</span>
            <span className="ficon"><svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg></span>
            <div><div className="ftext">성과 리포팅</div><div className="fdesc">주간 대시보드로 성과와 다음 방향을 공유합니다</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
