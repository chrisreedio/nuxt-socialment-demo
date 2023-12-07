<script setup>
const links = [
  //   {
  //     label: 'Features',
  //     to: '#features',
  //     exactHash: true,
  //   },
  //   {
  //     label: 'Documentation',
  //     to: 'https://ui.nuxt.com/pro',
  //     target: '_blank',
  //   },
]

useHead({
  title: 'Nuxt UI Pro - Starter',
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  description:
    'Nuxt UI Pro is a collection of premium components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.',
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt Santum Auth Demo
      <UBadge label="via Socialment" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/chrisreedio/nuxt-socialment-demo"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>
</template>
