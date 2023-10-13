<template>
  <Transition name="fade">
    <!-- <div
      :class="[
        props.dimension == 'horizontal' ? 'flex-row-reverse' : 'flex-col',
      ]"
      class="notifier"
    >
      <img class="hand" src="~assets/images/tap.svg" alt="" />
      <h1 class="text">
        tap to
        <span> Open </span>
      </h1>
    </div> -->
    <div class="flex flex-col items-end notifier">
      <img class="hand animate-bounce" src="~assets/images/tap.svg" alt="" />
      <div class="text mt-1.5 animate-pulse">
        tap to
        <span class="boldText"> Open </span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
let props = defineProps(["dimension"]);
console.log(props, "noti props");
</script>

<style lang="scss" scoped>
.horizontal {
  order: 1;
}
.notifier {
  position: absolute;
  left: calc(50% - 4em);
  top: calc(50% + 1.5em);
}

.hand {
  width: 2em;
  height: 2em;
}
.text {
  font-family: "Cairo";
  font-weight: 200;
}
.boldText {
  font-weight: 700;
}
</style>