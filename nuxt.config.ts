
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', 'nuxt-icon', 'nuxt-mailer'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: "",
    storageKey: 'nuxt-color-mode'
  },
  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'vue',
      ]
    },
    navigation: {
      fields: ['author', 'subject', 'position']
    }
  },
  runtimeConfig: {
    mailerUser: '',
    mailerPass: '',
    mailerLog: '',
    mailerDriver: '',
    mailerHost: '',
    mailerPort: '',
    mailerSmtpTls: '',
    mailerFromAddress: '',
    mailerToAddress: '',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    db: process.env.DATABASE_URL,
    public: {
      appDomain: process.env.APP_DOMAIN,
      gitHash: process.env.GITHUB_SHA,
      releaseVersion: process.env.RELEASE_VERSION,
    }
  },
  experimental: {
    writeEarlyHints: false,
  }
})
