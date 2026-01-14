'use client'

import { useEffect, useRef, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const progressRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isNavigatingRef = useRef(false)
  const prevPathRef = useRef(pathname)

  const resetProgress = useCallback(() => {
    if (progressRef.current) {
      progressRef.current.style.width = '100%'
      progressRef.current.style.opacity = '1'

      // Complete animation then hide
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.opacity = '0'
          setTimeout(() => {
            if (progressRef.current) {
              progressRef.current.style.width = '0%'
              progressRef.current.style.opacity = '1'
            }
          }, 200)
        }
      }, 200)
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    isNavigatingRef.current = false
  }, [])

  // Handle route change complete
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      resetProgress()
      prevPathRef.current = pathname
    }
  }, [pathname, searchParams, resetProgress])

  // Handle click on links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')

      if (anchor?.href && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href)
        if (url.pathname !== pathname && !isNavigatingRef.current) {
          isNavigatingRef.current = true

          if (progressRef.current) {
            progressRef.current.style.width = '20%'

            // Simulate progress
            let progress = 20
            intervalRef.current = setInterval(() => {
              if (progress < 90 && progressRef.current) {
                progress += Math.random() * 10
                progressRef.current.style.width = `${Math.min(progress, 90)}%`
              }
            }, 200)
          }
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [pathname])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none">
      <div
        ref={progressRef}
        className="h-full bg-fd-primary transition-all duration-300 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  )
}
