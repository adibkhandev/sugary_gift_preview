<!---Created By Rafid, Final Revision-->
<template>
  <transition name="fade">
    <Loader v-if="isLoading && !startUpLoad"></Loader>
    <div v-else-if="isInvalidLink">Link is Invalid</div>
    <div v-else-if="shouldLogin">Need to Login First</div>
    <div v-else-if="isInvalidUser">This user can't open this gift</div>
    <div v-else-if="isGiftClaimed">
      Show card directly, no animation, no wrap, in the navigation panel
    </div>
    <Opening v-else />
  </transition>
</template>

<script setup>
let giftLinkSlug = useRoute().params.giftLinkSlug;
let isLoading = ref(true);
let startUpLoad = ref(false);
let isInvalidLink = ref(false);

const initialData = ref(null);
const isGiftClaimed = initialData.value?.ReceiverId != null;
const user = ref(null);
const isLoggedIn = user.value != null;
const shouldLogin = !isLoggedIn && isGiftClaimed;
const isInvalidUser =
  isLoggedIn &&
  isGiftClaimed &&
  initialData.value?.ReceiverId != user.value?.Id;

const doInitialAuth = async () => {
  try {
    if (!isLoggedIn) {
      var response = await useNuxtApp().$checkRefreshToken();
      if (response?.User) user.value = response.User;
    }
  } catch (e) {
    //ignore
  }
};
const loadInitialData = async () => {
  try {
    const response = await useNuxtApp().$get(
      `GiftPreview/GetInitialData?linkId=${giftLinkSlug}`
    );
    if (response?.status == 200) {
      let data = await response.json();
      useRuntimeConfig().public.initialData = data;
      initialData.value = data;
    } else {
      throw new Error(response?.message);
    }
  } catch (e) {
    isInvalidLink.value = true;
  }
};

const consoleAllData = () => {
  var data = {
    isLoading: isLoading.value,
    isInvalidLink: isInvalidLink.value,
    hasInitialData: initialData != null,
    isGiftClaimed: isGiftClaimed,
    isLoggedIn: isLoggedIn,
    shouldLogin: shouldLogin,
    isInvalidUser: isInvalidUser,
    userId: user.value?.Id,
  };
  console.table(data);
};

const loadInitially = async () => {
  try {
    await doInitialAuth();
    await loadInitialData();
    consoleAllData();
  } catch (e) {
    // ignore
  } finally {
    isLoading.value = false;
  }
};

onBeforeMount(() => {
  setTimeout(() => {
    startUpLoad.value = true;
  }, 100000);
  loadInitially();
});
</script>

<style>
</style>