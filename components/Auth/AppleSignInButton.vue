<template>
  <button class="apple" @click="login">
    <img class="apple-logo" src="~/assets/images/apple.png" alt="" />
  </button>
</template>

<script setup>
function generateRandomString(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = charset.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += charset.charAt(randomIndex);
  }

  return result;
}

const state = generateRandomString(32); // Generate a random string for state
const nonce = generateRandomString(32);

useHead({
  meta: [
    { name: "appleid-signin-client-id", content: "app.sugary.service" },
    { name: "appleid-signin-scope", content: "email name" },
    {
      name: "appleid-signin-redirect-uri",
      content: "https://sugary.me/callbacks/authentication/apple",
    },
    { name: "appleid-signin-state", content: state },
    { name: "appleid-signin-nonce", content: nonce },
    { name: "appleid-signin-use-popup", content: "true" },
  ],
  script: [
    {
      src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
      tagPosition: "bodyOpen",
    },
  ],
});

const login = async () => {
  try {
    const data = await AppleID.auth.signIn();
    // Handle successful response.
  } catch (error) {
    // Handle error.
  }
};

onMounted(() => {
  if (process.client) {
    document.addEventListener("AppleIDSignInOnSuccess", (event) => {
      // Handle successful response.
      console.log(event.detail.data);
    });

    document.addEventListener("AppleIDSignInOnFailure", (event) => {
      // Handle error.
      console.log(event.detail.error);
    });
  }
});
</script>

<style scoped>
.apple-logo {
  height: 38%;
  transform: translateY(-6%);
}
</style>