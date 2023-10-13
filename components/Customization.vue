<template>
  <div class="flex flex-col px-6 py-8">
    <h1>{{ data.CustomizationTitle }}</h1>
    <div
      class="flex flex-col"
      v-for="customizations in customizationList"
      :key="customizations"
    >
      <div class="divider my-6"></div>
      <div
        v-for="customizationItem in customizations"
        :key="customizationItem"
        class="flex flex-col"
      >
        <h3 class="mb-2 ml-1">
          {{ customizationItem?.Title ?? "Customization" }}
        </h3>
        <div v-if="customizationItem?.TypeId == 1">
          <CustomizationImage :customizationItem="customizationItem" />
        </div>
        <div v-if="customizationItem?.TypeId == 2">
          <div
            class="flex flex-row bg-card px-4 py-3 rounded-xl cursor-pointer"
            @click="
              openUrl($convertedImageUrl(customizationItem.FilePath), '_blank')
            "
          >
            <div class="mr-auto">
              {{
                customizationItem.FilePath?.split("/")
                  ?.slice(-1)[0]
                  .split(".")[0] ?? "No File Uploaded"
              }}
            </div>
            <div class="uppercase">
              {{ customizationItem.FilePath?.split(".")?.slice(-1)[0] ?? "" }}
            </div>
          </div>
        </div>
        <div v-if="customizationItem?.TypeId == 3">
          <InputText
            v-model="customizationItem.Text"
            class="w-full"
            placeholder="Enter text"
          />
        </div>
        <div v-if="customizationItem?.TypeId == 4">
          <Textarea
            v-model="customizationItem.Text"
            class="w-full !h-36"
            placeholder="Enter text"
          />
        </div>
        <div class="flex flex-row">
          <div v-for="option in customizationItem?.Options" :key="option">
            <div
              v-if="!option.ImagePath"
              class="textOption"
              @click="
                customizationItem.Options.forEach((element) => {
                  element.IsSelected = false;
                });
                option.IsSelected = true;
              "
              :class="{ selectedTextOption: option.IsSelected }"
            >
              {{ option.Text }}
            </div>
            <div
              v-else
              class="imageOption"
              :class="{ selectedImageOption: option.IsSelected }"
              @click="
                customizationItem.Options.forEach((element) => {
                  element.IsSelected = false;
                });
                option.IsSelected = true;
              "
            >
              <img :src="$convertedImageUrl(option.ImagePath, 500)" />
              <div v-if="option.Text">{{ option.Text }}</div>
            </div>
          </div>
        </div>
        <div class="h-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data", "material"]);
const data = computed(() => props.data);
const material = computed(() => props.material);

const customizationList = ref();

const setupData = () => {
  if (!data.value?.CustomizationData) return;
  var parsedList = JSON.parse(data.value.CustomizationData);
  for (var i = 0; i < parsedList.length; i++) {
    for (var j = 0; j < parsedList[i].length; j++) {
      if (typeof parsedList[i][j] === "string")
        parsedList[i][j] = JSON.parse(parsedList[i][j]);
    }
  }
  customizationList.value = parsedList;
};
setupData();
</script>

<style scoped>
.textOption {
  padding: 5px 10px;
  border-radius: 100px;
  border: 1px solid var(--border);
  margin: 10px 6px 0 0;
  cursor: pointer;
  background: var(--card);
  font-size: 12px;
}
.selectedTextOption {
  border: 2px solid var(--success);
  color: var(--text);
}
.imageOption {
  margin: 10px 8px 0 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
}
.imageOption img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 2px;
  border: 1px solid var(--border);
}
.selectedImageOption img {
  border: 2px solid var(--success);
}
.selectedImageOption {
  color: var(--text);
  opacity: 1;
}
</style>