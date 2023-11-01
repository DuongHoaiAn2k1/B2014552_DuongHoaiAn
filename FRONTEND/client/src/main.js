// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createApp } from "vue";
import App from "./App.vue";

// import * as mdb from "mdb-ui-kit"; // lib
// import { Input } from "mdb-ui-kit"; // module
import router from "./router";
/* add icons to the library */
createApp(App).use(router).mount("#app");
