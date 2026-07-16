import { useState, useEffect } from 'react'

// 이메일무단수집거부 모달. 개인정보처리방침/이용약관과 동일한 privacy-* 모달 스타일을 공유한다.
export default function EmailRefusal({ className = '', label = '이메일무단수집거부' }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>

      {open && (
        <div className="privacy-overlay" onClick={() => setOpen(false)}>
          <div className="privacy-modal" role="dialog" aria-modal="true" aria-label="이메일무단수집거부" onClick={(e) => e.stopPropagation()}>
            <div className="privacy-head">
              <h4 className="privacy-title">이메일무단수집거부</h4>
              <button type="button" className="privacy-close" aria-label="닫기" onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="privacy-body">
              <p>
                본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여
                무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사 처벌됨을 유념하시기 바랍니다.
              </p>

              <h5>정보통신망 이용촉진 및 정보보호 등에 관한 법률</h5>

              <p><strong>제50조의2 (전자우편주소의 무단 수집행위 등 금지)</strong></p>
              <p>
                ① 누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를
                수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.<br />
                ② 누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니된다.<br />
                ③ 누구든지 제1항 및 제2항의 규정에 의하여 수집·판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보 전송에 이용하여서는 아니된다.
              </p>

              <p><strong>제74조 (벌칙)</strong> 다음 각호의 1에 해당하는 자는 1천만원 이하의 벌금에 처한다.</p>
              <p>
                1. 제8조제4항의 규정을 위반하여 표시·판매 또는 판매할 목적으로 진열한 자<br />
                2. 제44조의7제1항제1호의 규정을 위반하여 음란한 부호·문언·음향·화상 또는 영상을 배포·판매·임대하거나 공연히 전시한 자<br />
                3. 제44조의7제1항제3호의 규정을 위반하여 공포심이나 불안감을 유발하는 부호·문언·음향·화상 또는 영상을 반복적으로 상대방에게 도달하게 한 자<br />
                4. 제50조제6항의 규정을 위반하여 기술적 조치를 한 자<br />
                5. 제50조의8의 규정을 위반하여 광고성 정보를 전송한 자<br />
                6. 제50조의2의 규정을 위반하여 전자우편 주소를 수집·판매·유통 또는 정보전송에 이용한 자<br />
                7. 제53조제4항을 위반하여 등록사항의 변경등록 또는 사업의 양도·양수 또는 합병·상속의 신고를 하지 아니한 자
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
