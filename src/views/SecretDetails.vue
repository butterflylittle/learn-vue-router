<template>
  <div>
    <h1>secret</h1>
    <div>{{ secret }}</div>
  </div>
</template>

<script>
export default {
  props: {
    secret: {
      type: String,
    },
  },
};
</script>

<style scoped>
</style>