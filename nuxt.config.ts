// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/theme.css",
    "@/assets/css/bottomsheet.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    '~/assets/css/main.scss',
  ],
  app: {
    head: {
      title: "Sugary Gift",
      link: [
        // { rel: 'icon', hid: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'icon', type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
        // { rel: 'icon', type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel:"manifest", href:"/site.webmanifest" },
        // { rel: 'apple-touch-icon', sizes:"180x180", href: '/apple-touch-icon.png' },
        { rel: "preconnect", href: "https://fonts.gstatic.com"},
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap'
        }
      ],
      script: [],
    },
  },
  build: {
		transpile: ["primevue"],
    postcss: {
      postcssOptions: require('./postcss.options'),
    },
	},
  modules:['@nuxtjs/tailwindcss','@vueuse/motion/nuxt'],
  plugins:['~/plugins/token.js'],
  runtimeConfig: {
    public: {
      // baseUrl: 'http://localhost:5000/',
      baseUrl: 'https://sugarytestapi.azurewebsites.net/',
      // baseUrl: 'https://sugarynet.com/',
      cloudfrontUrl: 'https://d1wh1xji6f82aw.cloudfront.net/',
      azureUrl: 'https://sugary.blob.core.windows.net/sugary-app-images/',
      imageKitUrl: 'https://ik.imagekit.io/sugary/',
      token: null,
      user: null,
      initialData: null,
      previewMode: false,
    }
  },
})
