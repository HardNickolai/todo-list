<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { handleInputDefault, ruleInputDefault } from "../helper";
import router from "../router";

const Input = defineAsyncComponent(() => import("../components/Input.vue"));
const Title = defineAsyncComponent(() => import("../components/Title.vue"));
const Button = defineAsyncComponent(() => import("../components/Button.vue"));

const login = ref<string>("");
const password = ref<string>("");
const isDisabledBtn = ref<boolean>(true);

const onLogin = () => {
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      name: login.value,
    })
  );
  router.push({
    path: "/",
  });
};

watch(
  () => [login.value, password.value],
  ([newLogin, newPassword]) => {
    console.log("Login (new):", newLogin);
    console.log("Password (new):", newPassword);
    isDisabledBtn.value = !(newLogin.trim() && newPassword.trim());
  }
);
</script>

<template>
  <div class="main">
    <v-card class="modal">
      <Title text="Авторизация" />
      <Input
        v-model="login"
        :handleKeydown="handleInputDefault"
        :rules="[ruleInputDefault]"
        :maxLength="'10'"
        label="Логин"
      />
      <Input
        v-model="password"
        :handleKeydown="handleInputDefault"
        :rules="[ruleInputDefault]"
        :maxLength="'15'"
        label="Пароль"
        type="password"
      />
      <Button :isDisabled="isDisabledBtn" :onClick="onLogin" text="Вход" />
    </v-card>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fafad2;
}
.modal {
  width: 50%;
  padding: 15px;
}
</style>
