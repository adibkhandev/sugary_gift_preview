<template>
  <div
    class="letter-container"
    :class="{ blurOn: props.authStarted }"
    @click="opener"
    :style="{
      background:
        'url(' +
        $convertedImageUrl(props.data.DigitalCard.BackgroundImagePath) +
        ')',
    }"
    v-motion
    :initial="{
      opacity: 0,
      y: 30,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
        y: {
          duration: 1000,
        },
        opacity: {
          delay: 200,
          duration: 1000,
        },
      },
    }"
    :delay="200"
  >
    <div :class="{ leaves: opened }" class="guide">
      <h1
        :class="{ leaves: opened }"
        v-motion
        :initial="{
          y: 0,
        }"
        :enter="{
          y: 30,
          transition: {
            type: 'string',
            repeat: Infinity,
            repeatType: 'mirror',
            stiffness: 3000,
            damping: 0,
            mass: 1,
            duration: 1200,
          },
        }"
      >
        Tap to open card
      </h1>
    </div>
    <div class="letter">
      <div class="envelope">
        <EnvelopBack
          :class="{ visibleLeaves: envelopeOpened }"
          :data="props.data"
        />
        <Card
          :authenticate="authenticate"
          :data="props.data"
          :opened="opened"
          :envelopeOpened="envelopeOpened"
          :startAuth="props.startAuth"
          :envelope="true"
        />
        <EnvelopFront
          :class="{ visibleLeaves: envelopeOpened }"
          :data="props.data"
        />
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
const opened = ref(false);
const envelopeOpened = ref(false);
const props = defineProps([
  "animationState",
  "startAuth",
  "authStarted",
  "authenticate",
  "data",
]);
const animationStateProp = ref(props.animationState);
const opener = () => {
  console.log("clicking");
  if (envelopeOpened.value) {
    if (opened.value) {
      opened.value = false;
      console.log("working to condition");
    } else {
      opened.value = true;
    }
  } else {
    envelopeOpened.value = true;
  }
};
onMounted(() => {
  console.log(props.data.DigitalCard);
});
</script>
<style lang="scss" scoped >
$cardHeight: 12.4em;
$cardWidth: 9em;
$theme: #1e2625;
.leaves {
  animation-name: card-leave;
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}
.visibleLeaves {
  animation-name: visible-leave;
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}
.cardPops {
  animation-name: card-pops;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-delay: 1s;
}
.blurOn {
  filter: blur(1px) brightness(0.4);
}
.letter-container {
  transition: filter 0.2s ease-in;
  background-color: $theme;
  position: absolute;
  top: 0;
  z-index: -3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  contain: paint;
  .letter {
    position: relative;
    .envelope {
      font-size: clamp(1.5rem, 4vw, 1.74rem);
      @media (width<580px) {
        font-size: clamp(1.1rem, 3.8vw, 2rem);
      }
      margin-top: 4em;
      height: $cardWidth;
      width: $cardHeight;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .front-container {
      position: absolute;
      bottom: 0;
      z-index: 4;
      width: 108%;
      img {
        width: 100%;
      }
      .top,
      .bottom,
      .shadow {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          position: absolute;
          bottom: 0;
        }
      }
      .shadow {
        img {
          bottom: 2px;
        }
      }
      .top {
        img {
          bottom: 2px;
        }
      }
      .bottom {
        img {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        }
      }
    }
  }

  .guide {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    margin-top: 8vh;
    font-family: "Shadows Into Light", cursive;
    color: rgba(146, 149, 248, 0.7);
    font-size: 1.4em;
    font-weight: 400;
  }
}
</style>
