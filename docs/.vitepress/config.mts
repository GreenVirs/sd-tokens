import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru',
  base: '/sd-tokens/',
  title: "Токены Stable Diffusion",
  description: "Данный сайт предназначен для знакомства со стандартными токенами, которые вы можете найти в большинстве моделей для Stable Diffusion",
  themeConfig: {
    search: {
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          }
        }
      },
      provider: 'local'
    },
    outline: {
      label: 'На этой странице'
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    returnToTopLabel: 'Вернуться наверх',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Начало работы', link: '/getting-started/introduction' },
      { text: 'Содержание', link: '/contents' },
    ],

    sidebar: [
      {
        text: 'Камера',
        collapsed: true,
        items: [
          { text: 'Углы камеры', link: '/camera/angle' },
          { text: 'Положение камеры', link: '/camera/position' },
          { text: 'Расстояние до объекта', link: '/camera/distance' },
          { text: 'Фокус', link: '/camera/focus' },
          { text: 'Симметрия', link: '/camera/symmetry' },
          { text: 'Сцены', link: '/camera/scenes' },
          { text: 'Жанр фотографии', link: '/camera/genres' },
        ]
      },
      {
        text: 'Одежда',
        collapsed: true,
        items: [
          { text: 'Платья', link: '/cloth/dresses' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GreenVirs/sd-tokens' }
    ],
    lastUpdated: {
      text: 'Обновлено',
    },
    editLink: {
      text: 'Исправить страницу',
      pattern: 'https://github.com/GreenVirs/sd-tokens/edit/main/docs/:path'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@/': '../../'
      }
    },
    server: {
      host: '0.0.0.0'
    },
    preview: {
      port: 5173
    }
  }
})
