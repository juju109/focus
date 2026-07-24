import { useEffect } from 'react'

// 스크롤 진입 시 [data-reveal] / [data-stagger] 요소에 .in 클래스를 붙여
// CSS 트랜지션을 트리거하는 경량 IntersectionObserver 훅.
// 한 번 나타난 요소는 다시 숨기지 않는다(unobserve).
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal], [data-stagger]')

    // 모션 최소화 설정이면 즉시 노출하고 관찰하지 않는다.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
