'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { useTheme } from 'next-themes'

interface MermaidProps {
  chart: string
}

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current) return

      mermaid.initialize({
        startOnLoad: false,
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'inherit',
      })

      try {
        const { svg } = await mermaid.render(
          `mermaid-${Math.random().toString(36).slice(2)}`,
          chart.trim()
        )
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
