import "bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import * as mdb from "mdb-ui-kit"; // lib
// import { Input } from "mdb-ui-kit"; // module
import router from "./router";
/* add icons to the library */
createApp(App).use(router).mount("#app");
