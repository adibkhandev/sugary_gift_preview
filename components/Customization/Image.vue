<template>
  <div>
    <div class="flex flex-row">
      <div
        class="ml-2 py-4 opacity-60"
        v-if="(customizationItem.ImagePaths?.length ?? 0) == 0"
      >
        No Images Uploaded
      </div>
      <div
        v-for="imagePath in customizationItem.ImagePaths"
        class="rounded-lg overflow-hidden cursor-pointer mr-2"
        :key="imagePath"
      >
        <img :src="$convertedImageUrl(imagePath, 500)" class="w-24 h-24" />
      </div>
    </div>
  </div>
</template>

<!-- @click="openUrl($convertedImageUrl(imagePath), '_blank')" -->

<script setup>
const props = defineProps(["customizationItem"]);
const customizationItem = computed(() => props.customizationItem);
</script>

<style>
</style>