<template>
  <div class="flex items-center space-x-6">
    <div
      class="bg-center bg-cover w-[100px] h-[100px] rounded-full border"
      :style="{
        backgroundImage: `url(${user.avatar})`
      }">
    </div>

    <div class="flex flex-col space-y-1">
      <span class="text-lg">{{ user.fullName }}</span>
      <span class="text-gray-400">{{ user.email }}</span>
    </div>
  </div>
</template>

<script setup>
import { user } from '@/stores/user'
</script>

