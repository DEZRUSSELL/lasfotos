<template>
  <div class="row" v-if="LatestImages">
    <div class="col" v-if="errors">
      <div class="alert alert-danger">{{ errors }}</div>
    </div>
    <div id="others-images" class="card-columns">
      <div class="card other" v-for="(image, i) in LatestImages" :key="i">
        <img
          v-bind:src="image.image.path"
          v-bind:alt="image.description"
          div
          v-bind:style="{ width: 100 + '%' }"
        />
        <h5>{{ image.name }}</h5>
        <p>{{ image.description }}</p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestImages",
  created() {
    this.fetchImages();
  },
  data() {
    return {
      apiRequest: new this.$request(),
      LatestImages: [],
      errors: "",
    };
  },
  methods: {
    fetchImages() {
      const endpoint = "images";
      this.apiRequest
        .get(endpoint)
        .then((response) => {
          this.LatestImages = response;
          this.errors = "";
        })
        .catch((errors) => {
          this.errors = errors;
        });
    },
  },
};
</script>
