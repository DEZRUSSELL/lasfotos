<template>
  <div>
    <section>
      <div class="w-full h-screen bg-lasfotosbackground bg-cover bg-center">
        <div class="mx-auto h-screen flex justify-left sm:w-4/5 items-center">
          <div class="text-left font-montserrat mx-5 z-10">
            <h1 class="text-6xl font-extrabold text-white my-8 z-10">
              FIND THE <br />
              PERFECT <br />
              FOTO!
            </h1>
            <router-link
              to="/explore"
              class="py-5 px-10 text-xl text-white bg-green-500 z-10"
            >
              GO!
              <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" />
            </router-link>
          </div>
          <div
            class="text-8xl absolute right-0 font-lato hidden sm:block font-bold overflow-y-hidden w-1/2"
          >
            <img src="" alt="" class="w-full" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>
<style scoped></style>
