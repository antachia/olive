"use client"

import { useProgress, useGLTF } from "@react-three/drei"
import { PropsWithChildren, useEffect, useRef, useState } from "react"

type PreloaderGateProps = PropsWithChildren<{
  assets?: Array<{ url: string; dracoPath?: string }>
}>

function clampInt(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Math.round(value)))
}

export default function PreloaderGate({ children, assets }: PreloaderGateProps) {
  // Start the downloads as early as possible.
  useEffect(() => {
    const list =
      assets ??
      [
        { url: "/3d/CenterBottle.glb", dracoPath: "/draco/" },
        { url: "/3d/LeftBottle.glb", dracoPath: "/draco/" },
        { url: "/3d/RightBottle.glb", dracoPath: "/draco/" },
      ]

    for (const asset of list) {
      useGLTF.preload(asset.url, asset.dracoPath)
    }
  }, [assets])

  const { progress, active } = useProgress()
  const target = clampInt(progress, 1, 100)

  const [ready, setReady] = useState(false)
  const [display, setDisplay] = useState(1)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (ready) return

    const tick = () => {
      setDisplay((current) => {
        if (current >= target) return current
        // Smooth-ish counting without jumping too fast.
        const delta = Math.max(1, Math.ceil((target - current) / 8))
        return Math.min(target, current + delta)
      })
      rafRef.current = window.requestAnimationFrame(tick)
    }

    rafRef.current = window.requestAnimationFrame(tick)
    return () => {
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [target, ready])

  useEffect(() => {
    if (ready) return
    if (active) return
    if (target < 100) return

    const timeout = window.setTimeout(() => setReady(true), 150)
    return () => window.clearTimeout(timeout)
  }, [active, ready, target])

  if (ready) return <>{children}</>

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div
          className="text-primary font-[PPEditorialNew] text-6xl tabular-nums"
          aria-label={`Loading ${display} percent`}
          aria-live="polite"
        >
          {display}
        </div>
        <div className="text-secondary font-[PPEditorialNew-Ultralight] text-lg">
          Loading
        </div>
      </div>
    </div>
  )
}
