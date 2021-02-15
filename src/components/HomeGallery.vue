<template>
  <div class="preview">
    <img
      v-for="element of preview"
      :key="element.source"
      :src="element.previewURL"
      :meta_collection="element.collection"
      :meta_name="element.previewName"
    />
  </div>
</template>

<script>
import folderCrawler from "../utilities/folderCrawler";
export default {
  data() {
    return {
      //API call here//
      preview: folderCrawler.getCollections(),
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