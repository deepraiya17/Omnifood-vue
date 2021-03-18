import { createApp } from "vue";

import App from "./App.vue";
import HeaderComp from "./components/HeaderComp.vue";
import SectionFeatures from "./components/SectionFeatures.vue";

const app = createApp(App);

app.component("header-comp", HeaderComp);
app.component("section-features", SectionFeatures);

app.mount("#app");
