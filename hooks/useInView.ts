"use client"

import { RefObject, useEffect, useState } from "react"

export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: IntersectionObserverInit = { rootMargin: "200px" }
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return inView
}
