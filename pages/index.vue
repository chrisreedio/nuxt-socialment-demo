<!-- eslint-disable vue/attributes-order -->
<script setup lang="ts">
definePageMeta({
  middleware: 'sanctum:auth',
})
const { logout } = useSanctumAuth()

interface User {
  name: string
  email: string
}
const user = useSanctumUser<User>()
</script>
<template>
  <div>
    <ULandingHero
      v-if="user"
      :title="`Welcome back, ${user.name}!`"
      description="If you're seeing this, you've successfully authenticated with your Sanctum Backend!"
    >
      <template #links>
        <UButton
          target="_blank"
          size="lg"
          icon="i-heroicons-at-symbol"
          :disabled="true"
          color="green"
        >
          {{ user.email }}
        </UButton>

        <UButton
          target="_blank"
          size="lg"
          icon="i-heroicons-arrow-left-on-rectangle"
          @click="logout"
        >
          Logout
        </UButton>
      </template>
    </ULandingHero>
  </div>
</template>
