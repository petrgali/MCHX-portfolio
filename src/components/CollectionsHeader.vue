<template>
  <div class="flex h-full justify-center mt-20">
    <div class="logoIt">
      <div class="button hover:bg-blue-700" @click="back()"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style>
.logoIt {
  width: 141px;
  height: 141px;
  border: black 1px solid;
}
.button {
  width: 50%;
  height: 50%;
  border-bottom: black 1px solid;
  border-right: black 1px solid;
  cursor: pointer;
}
</style>