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
            LOGIN
          </h1>
          <p v-show="error" class="text-sm text-red-500 pb-3">{{ errorMsg }}</p>
          <form @submit="login">
            <div class="my-4 snazzy">
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
                minlength="6"
                maxlength="300"
                required
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
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMsg:
        "SORRY! INCORRECT LOGIN CREDENTIALS WERE ENTERED. PLEASE TRY AGAIN...",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await this.axios.post(
          `http://localhost:1337/api/auth/local`,
          {
            identifier: this.email,
            password: this.password,
          }
        );

        const { jwt, user } = res.data;
        window.localStorage.setItem("jwt", jwt);
        window.localStorage.setItem("userData", JSON.stringify(user));
        window.localStorage.setItem(
          "bookmarks",
          JSON.stringify(user.bookmarks)
        );
        this.$router.push("/");
      } catch (error) {
        this.error = true;
        this.password = "";
      }
    },
  },
};
</script>
<style scoped></style>
