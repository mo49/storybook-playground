<template>
  <div>
    <div v-for="number in numbers">{{ number }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card',
  props: {
    numbers: {
      type: Array,
      default: [1]
    },
  },
  methods: {
  },
}
</script>

<style>
</style>
