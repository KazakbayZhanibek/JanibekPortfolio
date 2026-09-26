import { useEffect, useRef, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

// Adapted from Aceternity UI 3D Card by Manu Arora:
// https://ui.aceternity.com/registry/3d-card.json
// One semantic article, bounded tilt, no React updates on pointer movement.
export function CardContainer({ children, className, enabled = true, ...props }: ComponentProps<'article'> & { enabled?: boolean }) {
  const card = useRef<HTMLElement>(null)
  const frame = useRef(0)
  const bounds = useRef<DOMRect | null>(null)
  const allowMotion = useRef(false)

  useEffect(() => {
    const preference = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    const update = () => {
      allowMotion.current = enabled && preference.matches
      if (!allowMotion.current) {
        cancelAnimationFrame(frame.current)
        if (card.current) card.current.style.transform = ''
      }
    }
    update()
    preference.addEventListener('change', update)
    return () => {
      preference.removeEventListener('change', update)
      cancelAnimationFrame(frame.current)
    }
  }, [enabled])

  return <article
    {...props}
    ref={card}
    data-tilt-card=""
    className={cn('motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out', className)}
    onPointerEnter={event => {
      if (event.pointerType !== 'mouse' || !allowMotion.current) return
      bounds.current = event.currentTarget.getBoundingClientRect()
    }}
    onPointerMove={event => {
      if (event.pointerType !== 'mouse' || !allowMotion.current || !bounds.current) return
      const box = bounds.current
      const x = Math.max(-1, Math.min(1, ((event.clientX - box.left) / box.width - 0.5) * 2))
      const y = Math.max(-1, Math.min(1, ((event.clientY - box.top) / box.height - 0.5) * 2))
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        if (card.current) card.current.style.transform = `perspective(1400px) rotateX(${-y * 1.8}deg) rotateY(${x * 1.8}deg)`
      })
    }}
    onPointerLeave={() => {
      cancelAnimationFrame(frame.current)
      bounds.current = null
      if (card.current) card.current.style.transform = ''
    }}
    onPointerCancel={() => {
      cancelAnimationFrame(frame.current)
      bounds.current = null
      if (card.current) card.current.style.transform = ''
    }}
  >{children}</article>
}
