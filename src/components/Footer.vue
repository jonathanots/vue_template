<template>
  <div id="footer" class="container h-100">
    <span
      >Direitos reservados. Otsoluções. ©{{ new Date().getFullYear() }}</span
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppFooter",
});
</script>

<style scoped>
#footer {
  min-height: 10.1vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
