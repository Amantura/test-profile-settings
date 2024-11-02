<template>
  <label
    class="flex flex-col space-y-3"
    :for="id">
    <span>{{ props.title }}</span>

    <slot :id="id"></slot>
  </label>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const id = useId()
</script>