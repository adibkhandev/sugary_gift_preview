<template>
  <button class="google" @click="() => login()">
    <img class="google-logo" src="~/assets/images/google.png" alt="" />
  </button>
</template>
<style scoped>
.google-logo {
  height: 35% !important;
}
</style>
<script setup>
import { googleSdkLoaded } from "vue3-google-login";
import axios from "axios";
const { $socialToken } = useNuxtApp();

const emit = defineEmits(["onSuccess", "onError"]);

const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id:
          "656004583891-d4or3qq4eqfimten3l1lm1e51cnnqut8.apps.googleusercontent.com",
        scope:
          "email profile https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/user.birthday.read",
        callback: (response) => {
          console.log(response, "google");
          sendCodeToBackend(response.code);
        },
      })
      .requestCode();
  });
};
const sendCodeToBackend = (code) => {
  try {
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://oath2.googleapis.com/token",
        {
          code,
          client_id:
            "656004583891-d4or3qq4eqfimten3l1lm1e51cnnqut8.apps.googleusercontent.com",
          client_secret: "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",
          redirect_uri: "https://gift.sugary.me",
          grand_type: "authorization_code",
        }
      )
      .then((response) => {
        console.log(response.data, "token");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("failed");
  }
};
</script>