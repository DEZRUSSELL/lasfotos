<template>
  <div>
    <section>
      <div v-if="getSearchResults.length > 1">
        <div class="sm:grid sm:grid-cols-3 gap-5 w-4/5 sm:w-3/5 my-5 mx-auto">
          <div v-for="(image, i) in getSearchResults" :key="i">
            <img :src="`${image.urls.regular}`" class="w-full" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "searchResult",

  methods: {},

  computed: {
    ...mapGetters(["getSearchResults", ""]),
  },
};
</script>
<style scoped></style>
