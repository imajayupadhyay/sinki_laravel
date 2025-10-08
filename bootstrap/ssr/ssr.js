import { createInertiaApp } from "@inertiajs/vue3";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const pageData = process.argv[2] ? JSON.parse(process.argv[2]) : { component: "Home", props: {} };
createInertiaApp({
  page: pageData,
  render: renderToString,
  title: (title) => title || "Laravel",
  resolve: (name) => {
    if (!name) {
      name = "Home";
    }
    return resolvePageComponent(
      `./Pages/${name}.vue`,
      /* @__PURE__ */ Object.assign({ "./Pages/Admin/Analytics/Index.vue": () => import("./assets/Index-Csw9XbmZ.js"), "./Pages/Admin/Dashboard.vue": () => import("./assets/Dashboard-D8oo3bkd.js"), "./Pages/Admin/Settings/Index.vue": () => import("./assets/Index-W_vyVjLK.js"), "./Pages/Admin/Submissions/Index.vue": () => import("./assets/Index-DXgTOZ2x.js"), "./Pages/Admin/Users/Index.vue": () => import("./assets/Index-f_oVy8oY.js"), "./Pages/Auth/SecureLogin.vue": () => import("./assets/SecureLogin-CnlYNNgv.js"), "./Pages/Contact.vue": () => import("./assets/Contact-BNXRL88Y.js"), "./Pages/Dashboard.vue": () => import("./assets/Dashboard-CV5-SaqM.js"), "./Pages/Errors/404.vue": () => import("./assets/404-piZzWzQS.js"), "./Pages/Home.vue": () => import("./assets/Home-_7jsNlOG.js"), "./Pages/ThankYou.vue": () => import("./assets/ThankYou-CTg1Ef0s.js"), "./Pages/Welcome.vue": () => import("./assets/Welcome-DMaBece4.js") })
    );
  },
  setup({ App, props, plugin }) {
    return createSSRApp({ render: () => h(App, props) }).use(plugin);
  }
}).then((response) => {
  console.log(JSON.stringify(response));
}).catch((error) => {
  console.error("SSR Error:", error);
  process.exit(1);
});
