<template>
  <div class="fixed nav">
    <div class="nav p-5">
      <p class="link">MCHX</p>
      <p class="link">{{ img.category.toUpperCase() }}</p>
      <p class="link">{{ img.name.toUpperCase() }}</p>
      <p class="link">INFO</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img"],
};
</script>

<style>
.fixed.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
.nav {
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.link {
  cursor: pointer;
}
</style>