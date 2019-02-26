const path = require('path')

function resolve (...args) {
  return path.resolve(__dirname, '..', ...args)
}

const guideSidebar = () => [
  '',
  'config.html',
  'changelog.html',
]

module.exports = {
  base: '/vuepress-plugin-mathjax/',
  dest: 'docs',

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    ['@vuepress/nprogress', false],
    ['redirect', {
      locales: {
        storage: true,
      },
    }],
    ['mathjax', {
      macros: {
        '\\Z': '\\mathbb{Z}'
      }
    }],
  ],

  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'vuepress-plugin-mathjax',
      description: 'A VuePress plugin which supports TeX syntax',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vuepress-plugin-mathjax',
      description: '一个提供 TeX 语法支持的 VuePress 插件',
    },
  },
  
  themeConfig: {
    repo: 'Shigma/vuepress-plugin-mathjax',
    editLinks: true,
    docsDir: 'src/docs',
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
        ],
        sidebar: {
          '/en/guide/': guideSidebar(),
        },
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
        ],
        sidebar: {
          '/zh/guide/': guideSidebar(),
        },
      },
    },
  },
}
