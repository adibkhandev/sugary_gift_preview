<template>
<div class="page-load-fade">
  <RejectConfirmed v-if="isRejected" />
  <div class="reject-page page-load-fade" v-else>
    <Header />
    <img class="hero-image" src="~assets/images/heart.png" alt="" />
    <h1 class="heading">Reject Gift !</h1>
    <h1 class="paragraph rights">
      You are confirming that you don’t want to receive the gift, this will be
      notified to Tanvir as well. If you wish to accept, kindly tap “Go Back”.
    </h1>
    <div class="input-container">
      <img src="~assets/images/input.svg" alt="" />
      <input placeholder="Reason for Rejection (Optional)" type="text" />
    </div>
    <div class="divided-btns">
      <div class="btn back" @click="goBack">
        <button>Go back</button>
        <div class="icon-cont">
          <img src="~assets/images/arrow.png" alt="" />
        </div>
      </div>
      <div class="btn reject" @click="onReject">
        <button>Confirm Reject</button>
        <div class="icon-cont">
          <img src="~assets/images/arrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
const emit = defineEmits(["back"]);
const isRejected = ref(false);

const onReject = () => {
  isRejected.value = true;
};

const goBack = () => {
  emit("back");
};
</script>

<style lang="scss" scoped>
.reject-page {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hero-image {
    margin-top: 4em;
  }
  .heading {
    color: #fff;
    text-align: center;
    font-family: Cairo;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      bottom: -0.48em;
      left: -15%;
      width: 130%;
      height: 1px;
      background-color: rgba(54, 54, 54, 1);
    }
  }
  .paragraph {
    width: 75%;
    max-width: 480px;
  }
  .input-container {
    width: 84%;
    input {
      height: 9em;
      padding-bottom: 4.7em;
      padding-left: 3.4em;
    }
    img {
      top: 18%;
      left: 1em;
    }
  }
  .rights {
    margin-top: 2.8em;
  }
  .divided-btns {
    margin-top: 2em;
    margin-bottom: 1.6em;
    width: 84.5%;
    height: 3.4em;
    display: flex;
    justify-content: center;
    .btn {
      width: 50%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
      font-family: Cairo;
      font-size: 0.7rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      .icon-cont {
        position: absolute;
        top: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .reject {
      border-radius: 0px 1000px 1000px 0px;
      background: #8c002a;
      padding-right: 2.4em;
      .icon-cont {
        right: 2.2em;
      }
    }
    .back {
      border-radius: 1000px 0 0 1000px;
      background: #6d895d;
      padding-left: 2em;
      .icon-cont {
        left: 2.4em;
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>