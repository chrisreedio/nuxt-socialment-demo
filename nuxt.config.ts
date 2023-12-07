// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', 'nuxt-auth-sanctum'],
  css: ['~/assets/css/app.css'],
  runtimeConfig: {
    public: {
      sanctum: {
        baseUrl: process.env.NUXT_API_BASE_URL, // Laravel API
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false },
  sanctum: {
    baseUrl: process.env.NUXT_API_BASE_URL, // Laravel API
    origin: process.env.NUXT_APP_URL, // Nuxt app (required for CSRF cookie)
    endpoints: {
      csrf: '/sanctum/csrf-cookie', // CSRF cookie endpoint
      login: '/login', // Endpoint that accepts user credentials
      logout: '/logout', // Endpoint to destroy the current session
      user: '/me', // Endpoint that return current user information
    },
    userStateKey: 'sanctum.user.identity', // user state key for Vue `useState` composable
    csrf: {
      cookie: 'XSRF-TOKEN', // CSRF cookie name
      header: 'X-XSRF-TOKEN', // CSRF header name
    },
    client: {
      retry: false, // ofetch retry option (number | false)
    },
    redirect: {
      keepRequestedRoute: false, // Keep requested route in the URL for later redirect
      onLogin: '/', // Redirect to this page after successful login
      onLogout: '/login', // Redirect to this page after successful logout
      onAuthOnly: '/login', // Redirect to this page if user is not authenticated
      onGuestOnly: '/', // Redirect to this page if user is authenticated
    },
  },
})
