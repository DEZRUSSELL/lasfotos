<template>
  <div>
    <div class="flex items-start pt-20 justify-center h-screen">
      <div class="w-1/4">
        <div class="p-5 text-left font-raleway">
          <div class="text-left underline mb-7">
            <router-link to="/">HOME</router-link>
          </div>
          <h1
            class="font-bold text-left font-montserrat text-4xl sm:text-5xl mb-12"
          >
            REGISTER
          </h1>
          <p v-show="error" class="text-sm text-red-500 pb-3">{{ errorMsg }}</p>
          <form @submit="register">
            <div class="my-4 snazzy">
              <h1 class="text-left mb-2 font-montserrat">Username:</h1>
              <input
                type="text"
                minlength="3"
                maxlength="300"
                required
                v-model="username"
                class="text-sm outline-none pb-2 w-full bg-transparent border-b focus:border-black"
              />
            </div>

            <div class="my-4">
              <h1 class="text-left mb-2 font-montserrat">Email:</h1>
              <input
                type="email"
                maxlength="300"
                required
                v-model="email"
                class="text-sm outline-none pb-2 w-full bg-transparent border-b focus:border-black"
              />
            </div>
            <div class="mt-4 pb-6">
              <h1 class="text-left mb-2 font-montserrat">Password:</h1>
              <input
                type="password"
                required
                minlength="6"
                maxlength="300"
                v-model="password"
                class="text-sm outline-none pb-2 w-full bg-transparent border-b focus:border-black"
              />
            </div>

            <button type="submit" class="bg-black py-5 px-10 text-white">
              SUBMIT!
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      error: false,
      errorMsg:
        "SORRY! DUPLICATE LOGIN CREDENTIALS WERE ENTERED. PLEASE TRY AGAIN...",
    };
  },
  methods: {
    async register(e) {
      try {
        e.preventDefault();
        await this.axios.post(`http://localhost:1337/api/auth/local/register`, {
          password: this.password,
          email: this.email,
          username: this.username,
        });
        this.$router.push("login");
      } catch (e) {
        this.error = true;
        this.email = "";
      }
    },
  },
};
</script>
<style scoped></style>
