'use client'

import { useEffect, useState } from 'react'

export default function CursorGlow() {
    const [pos, setPos]         = useState({ x: -9999, y: -9999 })
    const [visible, setVisible] = useState(false)
    const [touch, setTouch]     = useState(true)

    useEffect(() => {
        if (window.matchMedia('(hover: none)').matches) return
        setTouch(false)

        const onMove  = (e) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true) }
        const onLeave = () => setVisible(false)
        const onEnter = () => setVisible(true)

        window.addEventListener('mousemove', onMove,  { passive: true })
        document.addEventListener('mouseleave', onLeave)
        document.addEventListener('mouseenter', onEnter)
        return () => {
            window.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseleave', onLeave)
            document.removeEventListener('mouseenter', onEnter)
        }
    }, [])

    if (touch) return null

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-500"
            style={{
                opacity: visible ? 1 : 0,
                background: `radial-gradient(700px at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.055), transparent 80%)`,
            }}
        />
    )
}
