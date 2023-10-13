<!---Created By Rafid, Final Revision-->
<template>
  <div>
    <transition name="fade">
      <RejectConfirmation v-if="showRejectPage" @back="closeReject" />
      <div v-else class="letter-container" @click="openEnvelope">
        <transition name="fade" mode="out-in">
          <HorizontalNotifier
            class="absolute z-10 top-2/3"
            v-if="!envelopeOpened"
          />
          <TapToFlip v-else-if="!cardOpened" class="absolute z-10 top-3/4" />
        </transition>
        <Header />
        <div
          class="backgound-img"
          :style="{
            background:
              'url(' +
              $convertedImageUrl(initialData.DigitalCard.BackgroundImagePath) +
              ')',
          }"
        ></div>
        <div
          class="letter"
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
          <div class="envelope" :class="{ noShadow: envelopeOpened }">
            <EnvelopBack
              :class="{ visibleLeaves: envelopeOpened }"
              :data="initialData"
            />
            <Card
              :authenticate="false"
              :data="initialData"
              :opened="cardOpened"
              :envelopeOpened="envelopeOpened"
              :startAuth="false"
              :envelope="true"
            />
            <EnvelopFront
              :class="{ visibleLeaves: envelopeOpened }"
              :data="initialData"
            />
          </div>
        </div>
        <transition name="fade">
          <div
            class="accept-button-container h-auto fixed bottom-6 justify-center items-end"
            v-if="isFlipDone"
          >
            <div v-if="initialData.IsRequest" class="decide-btns mb-2">
              <button class="swap-reject" @click="onReject">
                <div class="image">
                  <img src="~assets/images/cross.png" alt="" />
                </div>
                Reject Gift
              </button>
              <button
                class="swap-accept swap-accept-gradient"
                @click="onAccept"
              >
                Accept your Gift
                <div class="image">
                  <img src="~assets/images/arrow.png" alt="" />
                </div>
              </button>
            </div>
            <button
              class="unswap-button rounded-full mb-2 w-5/6"
              @click="onAccept"
              v-else
            >
              Accept your Gift
              <div class="image">
                <img src="~assets/images/arrow.png" alt="" />
              </div>
            </button>
          </div>
        </transition>
      </div>
    </transition>
    <vue-bottom-sheet ref="loginSheet">
      <AuthContent />
    </vue-bottom-sheet>
  </div>
</template>

<script setup>
const initialData = useRuntimeConfig().public.initialData;
const user = useRuntimeConfig().public.user;
const envelopeOpened = ref(false);
const canFlipCard = ref(false);
const cardOpened = ref(false);
const isFlipDone = ref(false);
const showRejectPage = ref(false);

const loginSheet = ref(null);

const emit = defineEmits(["next"]);

const openEnvelope = () => {
  if (!envelopeOpened.value) {
    envelopeOpened.value = true;
    setTimeout(() => {
      canFlipCard.value = true;
    }, 1000);
  }
  if (canFlipCard.value) {
    cardOpened.value = true;
    setTimeout(() => {
      isFlipDone.value = true;
    }, 1000);
  }
};

const onAccept = () => {
  if (!user) {
    loginSheet.value.open();
    return;
  }
};

const onReject = () => {
  showRejectPage.value = true;
};

const closeReject = () => {
  showRejectPage.value = false;
};
watch(zoomed,()=>{
 console.log(zoomed,'zz')
})
</script>

<style lang="scss">
  .info-container {
    position: absolute;
    top: 0;
    z-index: 12;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 0.2em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    background-image: url("~/assets/images/card-back.png");
    background-size: cover;
    overflow: hidden;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 2.4em;
      font-family: "Nanum Pen Script", cursive;
      color: black;
      padding: 0 2em;
    }
  }
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
.noShadow {
  box-shadow: none !important;
}
$envelopeWidth: 12.4em;
$envelopeHeight: 9em;
$theme: #1e2625;
.letter-container {
  transition: filter 0.2s ease-in;
  background-color: $theme;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  .header {
    position: absolute;
    top: 0;
    z-index: 2;
    border: none;
    padding: 0 2em;
    margin: 0;
    width: 100%;
    height: 4.2em;
  }
  .backgound-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 0;
    filter: brightness(0.5);
  }
  .letter {
    position: relative;
    margin-bottom: 9em;
    .envelope {
      font-size: clamp(1.5rem, 4vw, 1.74rem);
      @media (width<580px) {
        font-size: clamp(1.1rem, 3.8vw, 2rem);
      }
      margin-top: 12vh;
      height: $envelopeHeight;
      width: $envelopeWidth;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 3px 31px 29px -6px rgba(0, 0, 0, 0.61);
      transition: all 0.3s ease-in-out;
    }

    .card {
      height: $envelopeWidth;
      width: $envelopeHeight;
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
.accept-button-container {
  z-index: 1;
  width: 100%;
  padding: 0 35px;
  max-width: 400px;
  .unswap-button {
    background: linear-gradient(
      91deg,
      #168c55,
      #4c25a8,
      #d7b734,
      #e17d4f,
      #af1f56
    );
    background-size: 1000% 1000%;
    animation: gradient-changer 10s ease infinite;

    height: 4.4em;
    width: 100%;
    position: relative;
    font-family: Cairo;
    font-weight: 800;
    color: white;
    font-size: 0.8rem;
    @media (width<1000px) {
      font-size: 0.7rem;
    }
    .image {
      position: absolute;
      top: 0;
      right: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        height: 12px;
      }
    }
  }
  .decide-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.4em;
    width: 100%;
    font-family: Cairo;
    font-weight: 800;
    color: white;
    font-size: 0.8rem;
    position: relative;
    opacity: 0.95;
    .swap-accept {
      background-color: #6d895d;
      width: 60%;
      height: 100%;
      border-radius: 0 10em 10em 0;
      .image {
        position: absolute;
        top: 0;
        right: 38px;
        height: 100%;
        display: flex;
        align-items: center;
        img {
          height: 10px;
        }
      }
    }
    .swap-accept,
    .swap-reject {
      padding-bottom: 1px;
    }
    .swap-accept-gradient {
      background: linear-gradient(
        91deg,
        #168c55,
        #4c25a8,
        #d7b734,
        #e17d4f,
        #af1f56
      );
      background-size: 1000% 1000%;
      animation: gradient-changer 10s ease infinite;
    }
    .swap-reject {
      width: 38%;
      height: 100%;
      background-color: rgba(64, 64, 64, 0.5);
      border-radius: 10em 0 0 10em;
      backdrop-filter: blur(10px);
      position: relative;
      padding-left: 10px;
      .image {
        position: absolute;
        height: 100%;
        top: 0;
        left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .swap-reject,
    .swap-accept {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@-webkit-keyframes gradient-changer {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
@-moz-keyframes gradient-changer {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
@keyframes gradient-changer {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
</style>