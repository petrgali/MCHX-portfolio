<template>
  <section class="flex justify-center mt-60">
    <div class="box-section">
      <img
        v-for="img in imgs"
        :key="img.path"
        :src="img.source"
        class="mt-5 mb-5"
      />
    </div>
  </section>
  <div></div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
    imgs:{
      type: Object
    }
  },
};
</script>

<style>
.box-section {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  background-color: white;
  width: 100%;
  height: 100vh;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>