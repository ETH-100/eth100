import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Together, Let’s Witness Ethereum Scaling 100×',

  themeConfig: {
    nav: nav(),

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present AngryETH'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Books',
      items: [
        { text: 'DASBook', link: 'https://dasbook.eth100.wtf' },
      ]
    },
    {
      text: 'Donate',
      link: '/zh/donate',
    }
  ]
}