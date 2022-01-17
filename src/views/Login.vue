<template>
  <b-row id="login-body" align-h="center" align-v="center">
    <b-col lg="2" sm="4">
      <b-form id="form-login" @submit="onSubmit">
        <b-form-group
          id="group-username"
          label-align="left"
          label="Nome de usuário"
        >
          <b-input
            id="username"
            v-model="form.username"
            placeholder="Jonathan Teodoro"
            required
          ></b-input>
        </b-form-group>
        <b-form-group id="group-password" label-align="left" label="Senha">
          <b-input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="*********"
            required
          ></b-input>
        </b-form-group>
        <b-col
          ><b-button class="w-50 mb-4" variant="primary"
            >Entrar</b-button
          ></b-col
        >
        <router-link to="/login"
          ><span class="text-secondary">Esqueci minha senha</span></router-link
        >
      </b-form>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit: function (event: Event) {
      event.preventDefault();

      if (this.form.username.length && this.form.username.length) {
        this.login();
      }
    },
    login: function () {
      localStorage.setItem("authToken", JSON.stringify(this.form));
    },
  },
});
</script>

<style scoped>
#login-body {
  min-height: inherit;
}
</style>
