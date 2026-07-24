import InquiryForm from './InquiryForm.jsx'

// 파일은 public/company-profile.pdf 에 두고, 다운로드 시 보이는 이름만 한글로 지정
const PDF = `${import.meta.env.BASE_URL}company-profile.pdf`
const PDF_NAME = '포커스특공대_회사소개서.pdf'

export default function Contact() {
  return (
    <section className="alt" id="contact">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div className="eyebrow-line">CONTACT</div>
          <h2 className="section-title">먼저, 무료 상담부터 편하게 받아보세요.</h2>
          <p className="lead">성과는 없고, 소통도 안 되고, 예산만 소진하는 광고 집행에 지치셨다면 잘 찾아오셨습니다.</p>
        </div>

        <div className="contact-stack">
          <InquiryForm />

          <div className="contact-download" data-reveal>
            <h3>바로 문의하기 부담스럽다면 회사 소개서 먼저 받아보세요.</h3>
            <div className="download-card">
              <div className="dicon"><svg viewBox="0 0 24 24"><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 20h16" /></svg></div>
              <div className="dtext">
                <div className="dt1">회사소개서 (PDF)</div>
                <div className="dt2">철학 · 조직 · 성과 · 서비스 요약</div>
              </div>
              <a className="dbtn" href={PDF} download={PDF_NAME}>다운로드</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
