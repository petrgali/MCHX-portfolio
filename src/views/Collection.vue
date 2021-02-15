<template>
  <div class="fixed top-0 w-full bg-white pb-16">
    <Header />
  </div>
  <CollectionGallery :path="this.$route.query.name" :imgs="imgs" />
</template>

<script>
import Header from "../components/CollectionsHeader.vue";
import CollectionGallery from "../components/CollectionGallery.vue";
import folderCrawler from "../utilities/folderCrawler.js";
export default {
  data() {
    return {
      imgs: folderCrawler.imgExist(this.$route.query.name,11),
    };
  },
  mounted(){
    this.imgs.then(resp => console.log(resp))
  },

  components: { Header, CollectionGallery },
};
</script>

<style>
</style>