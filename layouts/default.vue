<template>
  <div>
    <slot></slot>

    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
  </div>
</template>

<script setup>

</script>