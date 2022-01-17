<template>
  <article id="main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppMain",
});
</script>

<style scoped>
#main {
  margin: 20px;
  min-height: 80vh;
}
</style>
