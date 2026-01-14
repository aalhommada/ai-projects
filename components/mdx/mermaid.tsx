'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { useTheme } from 'next-themes'

interface MermaidProps {
  chart: string
}

let initialized = false

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current) return

      // Initialize only once
      if (!initialized) {
        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedTheme === 'dark' ? 'dark' : 'default',
          securityLevel: 'loose',
          fontFamily: 'inherit',
        })
        initialized = true
      }

      try {
        const id = `mermaid-${Math.random().toString(36).slice(2)}`
        const { svg } = await mermaid.render(id, chart.trim())
        setSvg(svg)
      } catch (error) {
        console.error('Mermaid rendering error:', error)
        setSvg(`<pre class="text-red-500">Error rendering diagram</pre>`)
      }
    }

    renderChart()
  }, [chart, resolvedTheme])

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto rounded-lg border bg-fd-card p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
