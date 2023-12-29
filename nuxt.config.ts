// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/i18n"],
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  i18n: {
    legacy: false,
    fallbackLocale: "en",
    lazy: false,
    langDir: "assets/",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "pt",
        iso: "pt-BR",
        name: "Português",
        file: "pt.json",
      },
    ],
  },
  colorMode: {
    preference: "system",
    classSuffix: "",
    fallback: "dark",
  },
  devtools: { enabled: true },
  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      prefix: "Ui",
    },
    {
      path: "~/components",
    },
  ],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
