<template>
  <div
    class="flex flex-col items-center justify-center space-y-4"
    v-if="material"
  >
    <div class="bg-white rounded-3xl overflow-hidden flex flex-row space-x-6">
      <img
        class="max-h-80"
        :src="$convertedImageUrl(materialVariant?.CoverPhoto, 800)"
      />
      <div class="flex flex-col space-y-4 pr-10">
        <div class="text-black text-2xl font-bold">{{ material.Title }}</div>
        <div class="text-black text-md font-semibold">
          {{ materialVariant?.Title }} x {{ data.Quantity }}
        </div>
      </div>
    </div>
    <Customization :data="data" :material="material" />
    <Button v-if="!data.CanSwap">Confirm My Gift</Button>
    <div v-else class="flex flex-row space-x-3">
      <Button @click="showMaterialsList = true">Swap</Button>
      <Button>Confirm</Button>
    </div>
    <Dialog
      v-model:visible="showMaterialsList"
      modal
      header="Materials"
      :style="{
        width: '70vw',
        minWidth: '300px',
        maxWidth: '600px',
        maxHeight: '80vh',
      }"
    >
      <MaterialsList :data="data" @onChoose="changeMaterial" />
    </Dialog>
  </div>
  <div v-else>Loading</div>
</template>

<script setup>
const props = defineProps(["data"]);
var data = computed(() => props.data);
const material = ref();
const showMaterialsList = ref(false);
const materialVariant = computed(() =>
  material?.value?.Variants?.find((x) => x.Id == data.value.MaterialVariantId)
);

const updateCustomization = (newMaterial) => {
  if (!newMaterial?.Customizations || newMaterial?.Customizations?.length == 0)
    return;
  data.value.CustomizationTitle = newMaterial.CustomizationTitle;
  var customizations = [];
  newMaterial.Customizations.forEach((x) => {
    var options = [];
    x.Options.forEach((o) => {
      options.push({
        Id: o.Id,
        Text: o.Text,
        ImagePath: o.ImagePath,
        IsSelected: false,
      });
    });
    customizations.push({
      Id: x.Id,
      Title: x.Title,
      TypeId: x.TypeId,
      MaxLength: x.MaxLength,
      MaxCount: x.MaxCount,
      SelectedOption: options,
    });
  });
  var finalList = [];
  for (var i = 0; i < data.value.Quantity; i++) {
    finalList.push(customizations);
  }
  data.value.CustomizationData = JSON.stringify(finalList);
};

const loadMaterial = async (update = false) => {
  var response = await useNuxtApp().$get(
    "Materials/GetById?id=" + data.value.MaterialId
  );
  if (response) {
    var newMaterial = await response.json();
    if (update) updateCustomization(newMaterial);
    material.value = newMaterial;
  }
};
loadMaterial();

const changeMaterial = async (m, quantity) => {
  material.value = null;
  data.value.MaterialId = m.Id;
  data.value.MaterialVariantId = m.VariantId;
  data.value.Quantity = quantity ?? 1;
  showMaterialsList.value = false;
  await loadMaterial(true);
};
</script>

<style>
</style>