<template>
  <div
    :class="{
      cardPops: props.envelopeOpened && props.envelope,
      tilted: props.envelope,
    }"
    class="card"
    :style="{
      aspectRatio: props.data.DigitalCard.CardRatio ?? 3 / 4,
    }"
  >
    <div
      class="cover"
      :class="[
        props.opened ? 'coverOpened' : !props.envelope ? 'coverClosed' : '',
      ]"
      @animationend="props.startAuth"
    >
      <img
        :src="$convertedImageUrl(props.data.DigitalCard.CardImagePath)"
        alt=""
      />
      <div class="overlay">
        <img src="~assets/images/paper.png" alt="" />
      </div>
    </div>
    <Teleport :disabled="!zoomed.value" to=".letter-container">
      <div 
        @click="zoom" 
        class="info-container"
       >
        <div class="info">{{ props.data.DigitalCard.CardText }}</div>
      </div>
    </Teleport>
      
  </div>
</template>
<script setup>
const props = defineProps([
  "data",
  "opened",
  "envelopeOpened",
  "startAuth",
  "envelope",
  "zoomed",
]);

const zoomed = ref(false);
</script>
<style lang="scss" scoped>
.tilted {
  transform: rotate(-90deg);
}
.cardPops {
  transform: rotate(0deg) scale(1.4);
  box-shadow: 1px 16px 24px -9px rgba(0, 0, 0, 0.3);
  height: auto !important;
  width: auto !important;
}
.card {
  font-size: 1em;
  z-index: 3;
  perspective: 1200px;
  perspective-origin: bottom;
  margin-bottom: 3em;
  transition: all 1s ease-in-out 0.3s;
  max-width: 250px;
  max-height: 340px;
  border-radius: 15px;

  .cover {
    overflow: hidden;
    height: 100%;
    overflow: hidden;
    transform-origin: left;
    transform: rotateY(0deg) skew(0deg, 0deg);
    border-radius: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      height: 28em;
      opacity: 1;
      mix-blend-mode: multiply;
    }
  }
  .coverOpened {
    animation-name: open-letter;
    animation-duration: 1.6s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
  .coverClosed {
    animation-name: close-letter;
    animation-duration: 1.6s;
    animation-timing-function: ease-out;
    animation-direction: reverse;
  }
  .info-container {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 0.2em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    border-radius: 15px;
    background-image: url("~/assets/images/card-back.png");
    background-size: cover;
    overflow: hidden;
    // transform: scale(1.1,1.2);
    // z-index: 2;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1em;
      font-family: "Nanum Pen Script", cursive;
      color: black;
      padding: 0 2em;
    }
  }
}
</style>