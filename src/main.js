import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "axios";
import vueAxios from "vue-axios";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faImage,
  faSearch,
  faBookmark,
  faShare,
  faClock,
  faCheck,
  faUserCircle,
  faTrash,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "vue-progress-path/dist/vue-progress-path.css";
import VueProgress from "vue-progress-path";

library.add(
  faArrowRight,
  faArrowLeft,
  faImage,
  faSearch,
  faBookmark,
  faShare,
  faClock,
  faCheck,
  faUserCircle,
  faTrash,
  faBars,
  faTimes
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(vueAxios, axios);
Vue.use(VueProgress, {
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
