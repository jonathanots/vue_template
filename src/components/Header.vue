<template>
  <b-navbar id="nav-header">
    <b-navbar-brand href="#">Navbar</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item href="#">Option1</b-nav-item>
      <b-nav-item href="#">Option2</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right href="#" text="Conta">
        <b-dropdown-item href="/signin">Já tenho conta</b-dropdown-item>
        <b-dropdown-item href="/signup">Cadastrar</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppHeader",
});
</script>

<style scoped>
#nav-header {
  min-height: 3rem;
  background: #fffdfdf6;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
