<!---Created By Rafid, Final Revision-->
<template>
  <transition name="fade">
    <GiftWrap v-if="showWrap" @next="showWrap = false" />
    <CardEnvelop v-else />
  </transition>
</template>

<script setup>
const showWrap = ref(true);
const showLogin = ref(false);
</script>

<style scoped>
</style>