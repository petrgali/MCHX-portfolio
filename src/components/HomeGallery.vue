<template>
  <!-- <section class="scrollArea"> -->
  <div class="preview">
    <img
      v-for="collection of collections"
      :key="collection.source"
      :src="collection.previewURL"
    />
  </div>
  <!-- </section> -->
</template>

<script>
import folderCrawler from "../utilities/folderCrawler";
import detectIntersection from "../utilities/observer";
export default {
  data() {
    return {
      // API call to fetch collections//
      collections: folderCrawler.getCollectionsName(),
    };
  },

  mounted() {
    let imgs = document.querySelectorAll("img");
    detectIntersection(imgs);
  },
};
</script>

<style>
.preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}
img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  object-fit: fill;
}
</style>