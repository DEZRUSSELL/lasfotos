<template>
  <div class="overflow-x-hidden">
    <Nav class="z-20" />
    <!-- Hero section -->
    <HeroSection />
    <!-- featured section 
    <FeaturedSection /> Using Winter CMS to deliver this content instead as it's already done
    -->
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import HeroSection from "@/components/HeroSection.vue";
// import FeaturedSection from "@/components/FeaturedSection.vue";
export default {
  name: "Home",
  components: {
    Nav,
    HeroSection,
//  FeaturedSection,
  },
};
</script>
