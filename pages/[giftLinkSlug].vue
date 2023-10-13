<template>
      <Loader v-if="!data || !upToDate"></Loader>
      <Home v-else :data="data" />
</template>

<script setup>
var giftLinkSlug = useRoute().params.giftLinkSlug;
const data = ref(null);
const hasError = ref(false);
const upToDate = ref(false)
const key = computed(() => hasError.value?.toString() + data.value?.toString());
const loadData = async () => {
  try {
    const response = await useNuxtApp().$get(
      `GiftPreview/GetInitialData?linkId=${giftLinkSlug}`
    );
    if (response?.status == 200) {
      data.value = await response.json();
      upToDate.value = true
    } else {
      throw new Error(response?.message);
    }
  } catch (e) {
    hasError.value = true;
    upToDate.value = true
  }
  
};
onMounted(()=>{
  loadData()
  setTimeout(()=>{
    upToDate.value = true;
  },4000)
})
watch(upToDate,()=>{
  console.log(upToDate.value)
})
// loadData();
</script>

<style>
</style>