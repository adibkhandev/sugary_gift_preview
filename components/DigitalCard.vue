<template>
  <div
    class="wrapper"
    @click="openCard"
    :style="{
      // backgroundImage: 'url(' + $convertedImageUrl(backgroundImage) + ')',
    }"
  >
    <div class="digitalCard">
      <div
        class="letter"
        :style="{
          aspectRatio: data.DigitalCard.CardRatio,
        }"
      >
        {{ data.DigitalCard?.CardText }}
      </div>
      <img
        :src="$convertedImageUrl(data.DigitalCard.CardImagePath)"
        :class="{ rotatedImg: isOpen }"
        :style="{
          aspectRatio: data.DigitalCard.CardRatio,
        }"
      />
      <div class="bottom-5 absolute flex flex-row space-x-5" v-if="isOpen">
        <Button v-if="!data.IsRequest" @click="handleNext">Show my Gift</Button>
        <Button v-if="data.IsRequest" @click="rejectGift">Reject Gift</Button>
        <Button v-if="data.IsRequest" @click="handleNext">Accept Gift</Button>
      </div>
    </div>
    <Dialog
      v-model:visible="showLoginDialog"
      modal
      header="Login"
      :style="{ width: '50vw', minWidth: '300px', maxWidth: '550px' }"
    >
      <LoginView @success="emit('onNext')" />
    </Dialog>
  </div>
</template>

<script setup>
const emit = defineEmits(["onNext", "onReject"]);

const isOpen = ref(false);
const showLoginDialog = ref(false);
const props = defineProps(["data"]);
const data = computed(() => props.data);
const backgroundImage = computed(() => {
  return data.value.DigitalCard.BackgroundImagePath;
});

const showLogin = () => (showLoginDialog.value = true);
const handleNext = () => {
  if (!isOpen.value) isOpen.value = true;
  else if (!localStorage.getItem("accessToken")) showLogin();
  else emit("onNext");
};
const openCard = () => {
  if (isOpen.value) return;
  isOpen.value = true;
  useNuxtApp().$get("GiftPreview/LogOpenCard?linkId=" + data.value.LinkId);
};
const rejectGift = () => {
  emit("onReject");
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  position: fixed;
  display: flex;
}

.digitalCard {
  display: flex;
  margin: auto;
  width: 70%;
  height: 100%;
  min-width: 300px;
  max-width: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
  position: relative;
}

.letter {
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: column;
  background: white;
  color: black;
  border-radius: 30px;
  padding: 30px;
  position: absolute;
}

.digitalCard img {
  position: absolute;
  border-radius: 30px;
  object-fit: cover;
  background-color: #000;
  transform-style: preserve-3d;
  transition: transform 800ms;
  /* background: url("~/public/card-texture.jpg"),
    lightgray 0% 0% / 10.000000149011612px 10.000000149011612px repeat,
    url("~/public/card-texture.jpg"), lightgray 50% / cover no-repeat; */
  background-blend-mode: multiply, normal;
}

.rotatedImg {
  transform: rotateY(-180deg) translateX(100%);
}
</style>