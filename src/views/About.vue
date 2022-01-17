<template>
  <div class="about">
    <h1>This is an about page = {{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About",
  data() {
    return {
      keys: [],
    };
  },
});
</script>
