<template>
  <div class="container text-center">
    <div>{{ count }}</div>
    <b-btn variant="primary" @click="count += 1">
      Click me
    </b-btn>
    <b-modal :visible="true" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
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
