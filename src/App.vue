<template>
  <div id="app">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import AppMain from "@/components/Main.vue";

export default Vue.extend({
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content-body {
  height: 80%;
}
</style>
