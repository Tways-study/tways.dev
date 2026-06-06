'use client'

import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const dot = dotRef.current
    if (!dot) return

    dot.style.opacity = '1'
    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={dotRef} className="cursor-dot" aria-hidden />
}
