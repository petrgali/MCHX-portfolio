<template>
  <HomeHeader :img="img" />
  <HomeGallery />
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeGallery from "../components/HomeGallery.vue";
export default {
  components: { HomeHeader, HomeGallery },
  data() {
    return {
      observer: null,
      userRatio: 0.65,
      img: {
        category: "",
        name: "",
      },
    };
  },
  methods: {
    intersectHandler(changes) {
      changes.forEach((change) => {
        if (change.intersectionRatio > this.userRatio) {
          this.img.category = change.target.attributes.meta_collection.value;
          this.img.name = change.target.attributes.meta_name.value;
        }
      });
    },
  },
  mounted() {
    let images = document.querySelectorAll("img");
    this.observer = new IntersectionObserver(this.intersectHandler, {
      root: null,
      rootMargin: "0px",
      threshold: this.userRatio,
    });
    images.forEach((img) => this.observer.observe(img));
  },
  unmounted() {
    this.observer.disconnect();
  },
};
</script>

<style>
</style>  