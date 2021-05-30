<template>
  <div class="container text-center">
    <div>{{ count }}</div>
    <b-btn variant="primary" @click="count += 1">
      Click me
    </b-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
