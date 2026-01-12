import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="font-semibold">
        AI Engineering Projects
      </span>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/aalhommada/ai-projects',
      external: true,
    },
  ],
  githubUrl: 'https://github.com/aalhommada/ai-projects',
}
