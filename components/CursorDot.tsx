'use client'

import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only activate on true pointer (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top  = mouseY + 'px'
    }

    // Lerp-smooth ring follows cursor
    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.left = ringX + 'px'
      ring.style.top  = ringY + 'px'
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    dot.style.opacity  = '1'
    ring.style.opacity = '1'

    // Expand ring on interactive elements
    const addHover    = () => ring.classList.add('cursor-hovered')
    const removeHover = () => ring.classList.remove('cursor-hovered')

    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  )
}
