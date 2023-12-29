export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  langDir: 'assets/',
  strategy: 'prefix_except_default',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name:'english',
      file: 'en.json'
    },
    {
      code: 'pt',
      iso: 'pt-BR',
      name: 'português',
      file: 'pt.json'
    }
  ],
  defaultLocale: 'en-US',
}))
