<template>
  <div class="container text-center">
    <div>{{ count }}</div>
    <b-btn variant="primary" @click="count += 1">
      Click me
    </b-btn>
    <b-modal :visible="true" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <div>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
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
