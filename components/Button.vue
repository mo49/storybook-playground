<template>
  <button :data-type="type" @click="onClick">
    <span v-if="showIcon">icon: </span>{{ text }}
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    text: {
      type: String,
      default: 'BUTTON'
    },
    showIcon: {
      type: Boolean,
      defalut: false,
    }
  },
  methods: {
    onClick() {
      // console.log(`click ${this.text}`)
    }
  },
}
</script>

<style>
button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
}
button[data-type="primary"]{
  background-color: orange;
}
button[data-type="secondary"]{
  background-color: skyblue;
}
</style>
