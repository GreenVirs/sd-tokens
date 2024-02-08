import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru',
  base: '/sd-tokens/',
  title: "Токены Stable Diffusion",
  head: [
    [
        'script',
      { type:"text/javascript" },
        `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(96356461, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`
    ]
  ],
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
          { text: 'Женская одежда', link: '/cloth/womens-clothing' },
          { text: 'Платья', link: '/cloth/dresses' },
        ]
      },
      {
        text: 'Прически',
        collapsed: true,
        items: [
          { text: 'Общий стиль', link: '/hairstyles/common' },
          { text: 'Мужские прически', link: '/hairstyles/male' },
          { text: 'Женские прически', link: '/hairstyles/female' },
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
