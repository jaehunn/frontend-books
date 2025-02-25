import { useEffect, useRef, useState } from 'react'

interface Props {
  description: string
  defaultShouldMore?: boolean
}

export default function Description({ description, defaultShouldMore = false }: Props) {
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const moreTextRef = useRef<HTMLSpanElement | null>(null)

  const [shouldMore, setShouldMore] = useState(defaultShouldMore)

  const handleToggleMoreButton = () => {
    if (shouldMore === null) return

    setShouldMore((prev) => !prev)
  }

  useEffect(() => {
    if (!textRef?.current) return

    if (textRef.current.scrollHeight > textRef.current.clientHeight) {
      setShouldMore(false)
    }
  }, [description])

  useEffect(() => {
    // 더보기 노출 상황에서
    if (shouldMore === false) {
      if (!textRef?.current || !moreTextRef?.current) return

      const descFontSize = parseFloat(getComputedStyle(textRef?.current).fontSize)

      // 기본 스타일 적용
      if (descFontSize === 16) return

      const textHeight = descFontSize * 1.5

      // AOS 디바이스 폰트 수정 시, 동적으로 높이값 더보기 노출 위치 수정
      textRef.current.style.maxHeight = `${textHeight * 20}px`
      moreTextRef.current.style.bottom = `${(textHeight - descFontSize) / 2 - 1}px`
    }
  }, [shouldMore])

  return (
    <p
      style={{
        maxHeight: shouldMore ? '100%' : '480px',
        overflowY: shouldMore ? 'visible' : 'hidden',

        position: 'relative',
        whiteSpace: 'pre-wrap' /* 공백과 줄바꿈 유지 */,
        wordBreak: 'break-all' /* 한글에서 단어 중간 줄바꿈 방지 */,
        overflowWrap: 'break-word' /* 긴 단어가 컨테이너를 넘어갈 때 자동 줄바꿈 */,
        overflowX: 'hidden' /** 가로 스크롤 제거 */,
      }}
      ref={textRef}
    >
      {description}

      {shouldMore === false && (
        <span
          ref={moreTextRef}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 3,
            backgroundColor: 'tomato',
            paddingLeft: '16px',
            background: 'linear-gradient(to right, transparent 0px, tomato 16px)',
          }}
        >
          ...
          <span onClick={handleToggleMoreButton}>더보기</span>
        </span>
      )}
    </p>
  )
}
