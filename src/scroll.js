// HashRouter가 URL 해시를 쓰므로, 섹션 이동은 앵커(#id) 대신 JS 스크롤로 처리한다.
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
