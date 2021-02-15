<template>
  <div class="preview">
    <img
      v-for="collection of collections"
      :key="collection.source"
      :src="collection.previewURL"
      :alt="collection.name"
    />
  </div>
</template>

<script>
import folderCrawler from "../utilities/folderCrawler";
export default {
  data() {
    return {
      //API call here//
      collections: folderCrawler.getCollectionsName(),
    };
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