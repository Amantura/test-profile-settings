<template>
  <span class="text-sm text-red-500">{{ props.message }}</span>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>