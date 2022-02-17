<template>
  <div>
    <Nav class="z-20" />
    <section>
      <div class="h-screen w-full">
        <div class="w-full">
          <div class="mx-auto flex h-screen w-full justify-center items-center">
            <div class="font-montserrat w-full text-white ml-20 pl-10 z-10">
              <h1
                class="font-pacifico hidden sm:block text-6xl text-black mb-10"
              >
                Images
              </h1>
              <form @submit="getImages">
                <input
                  type="text"
                  name="search"
                  v-model="search"
                  placeholder="Search images"
                  class="p-10 focus:outline-none border w-4/5 sm:w-3/5 text-black"
                />
                <button class="p-10 cursor-pointer bg-green-500">
                  <font-awesome-icon
                    class="text-xl"
                    :icon="['fas', 'search']"
                  />
                </button>
              </form>
            </div>
            <loading-progress
              class="absolute bottom-20"
              v-if="loading"
              :progress="50"
              :indeterminate="true"
              :counter-clockwise="true"
              :hide-background="false"
              size="50"
              rotate
              fillDuration="2"
              rotationDuration="1"
            />
          </div>
        </div>
      </div>
    </section>
    <SearchResults />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import SearchResults from "@/components/SearchResults.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Nav,
    SearchResults,
  },

  data() {
    return {
      data: [],
      search: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions(["fetchSearchResult"]),
    async getImages(e) {
      this.loading = true;
      e.preventDefault();
      this.fetchSearchResult(this.search).then((result) => {
        result;
        this.loading = false;
      });
    },
  },
  filters: {
    capitalize(word) {
      return word.toUpperCase();
    },
  },
  async mounted() {},
};
</script>
<style scoped></style>
