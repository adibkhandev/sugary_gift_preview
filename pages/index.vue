<template>
  <Home></Home>
</template>

<script>
export default {
  created() {},
  methods: {},
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all -0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.container-enter-active,
.container-leave-active {
  transition: all 0.5s;
}
.container-enter-from,
.container-leave-to {
  opacity: 0;
}
</style>