import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru',
  base: '/sd-tokens/',
  title: "Токены Stable Diffusion",
  description: "Данный сайт предназначен для знакомства со стандартными токенами, которые вы можете найти в большинстве моделей для Stable Diffusion",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Камера', link: '/camera' },
      { text: 'Одежда', link: '/cloth' },
    ],

    sidebar: [
      {
        text: 'Камера',
        link: '/camera',
        collapsed: true,
        items: [
          { text: 'Жанр фотографии', link: '/camera/genres' },
          { text: 'Положение камеры', link: '/camera/position' },
          { text: 'Расстояние до объекта', link: '/camera/distance' },
          { text: 'Фокус', link: '/camera/focus' },
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
    ]
  }
})
