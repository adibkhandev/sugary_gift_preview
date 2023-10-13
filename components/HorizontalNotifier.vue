<template>
  <Transition name="fade">
    <div class="flex flex-row">
      <div class="text animate-pulse">
        tap to
        <span class="boldText"> Open Card </span>
      </div>
      <img
        class="hand ml-5 animate-bounce"
        src="~assets/images/tap.svg"
        alt=""
      />
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