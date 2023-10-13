<template>
  <div class="grid grid-cols-3 space-x-2 space-y-2">
    <div
      class="flex flex-col"
      v-for="m in list"
      :key="m"
      @click="chooseMaterial(m)"
    >
      <img :src="$convertedImageUrl(m.CoverPhoto, 500)" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
var data = computed(() => props.data);
var list = ref();
var remaining = ref(0);
var total = ref(0);

const emit = defineEmits(["onChoose"]);

const loadMaterial = async () => {
  var response = await useNuxtApp().$get(
    `GiftPreview/Swap/GetMaterials?linkId=${data.value.LinkId}&skip=0&limit=20`
  );
  if (response.status == 200) {
    var responseData = await response.json();
    list.value = responseData.Materials;
    remaining.value = responseData.RemainingCount;
    total.value = responseData.TotalCount;
  }
};
loadMaterial();

const chooseMaterial = (material) => {
  emit("onChoose", material);
};
</script>

<style>
</style>