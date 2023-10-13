<template>
  <div>
    <GiftWrap v-if="index == 0" :data="data" @onNext="handleNext" />
    <DigitalCard v-if="index == 1" :data="data" @onNext="index++" />
    <ProductView v-if="index == 2" :data="data" @onNext="index++" />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const data = computed(() => props.data);

var index = ref(0);

const handleNext = () => {
  index.value++;
};

const onClose = (event) => {
  console.log("unload");
  if (index.value != 1) {
    event.preventDefault();
    index.value--;
  }
};

onMounted(() => {
  window.addEventListener("beforeunload", onClose);
});
</script>

<style>
</style>