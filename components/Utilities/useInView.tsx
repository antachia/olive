"use client"
import { useEffect, useState } from "react"

export function useInView(
  selector: string,
  rootMargin = "0px"
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = document.querySelector(selector)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [selector, rootMargin])

  return isVisible
}
