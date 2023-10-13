<template>
  <div class="flex flex-row mb-10">
    <div
      class="flex-1 text-center cursor-pointer"
      @click="isEmailLogin = false"
    >
      Authentication
    </div>
    <div class="flex-1 text-center cursor-pointer" @click="isEmailLogin = true">
      Email Login
    </div>
  </div>
  <div class="flex flex-row space-x-3" v-if="!isEmailLogin">
    <GoogleSignInButton @success="onGoogleSuccess" @error="onGoogleError" />
    <ClientOnly>
      <FacebookLoginButton />
    </ClientOnly>
    <Button>Apple</Button>
  </div>
  <div class="flex flex-col space-y-6" v-else>
    <span class="p-float-label">
      <InputText id="email" v-model="email" />
      <label for="email">Email</label>
    </span>
    <span class="p-float-label">
      <Password id="password" v-model="password" toggleMask />
      <label for="password">Password</label>
    </span>
    <Button @click="emailLogin">Login</Button>
  </div>
</template>

<script setup>
const isEmailLogin = ref(false);
const email = ref("");
const password = ref("");

const onGoogleSuccess = (resp) => console.log(resp);
const onGoogleError = (resp) => console.error(resp);

const emit = defineEmits(["success", "error"]);

const emailLogin = async () => {
  try {
    var response = await useNuxtApp().$post("Account/Login", {
      UserName: email.value,
      Password: password.value,
    });
    if (response.status == 200) {
      var data = await response.json();
      useRuntimeConfig().public.token = data.Token;
      localStorage.setItem("accessToken", data.Token);
      emit("success");
    } else {
      console.log(response.data);
    }
  } catch (e) {
    console.log(e);
  }
};
</script>

<style>
</style>