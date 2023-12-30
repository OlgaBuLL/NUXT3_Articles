export default defineNuxtConfig({
  // app: {
  //   baseURL: "/NUXT3_Articles/",
  // },

  devtools: { enabled: true },

  css: ["~/assets/styles/main.scss"],
  modules: ["@pinia/nuxt"],
});

// import { NuxtConfig } from "@nuxt/types";

// export const config: NuxtConfig = {
//   modules: [
//     // "@nuxtjs/axios",
//     "@nuxtjs/proxy",
//   ],
//   // axios: {
//   //   proxy: true,
//   // },
//   proxy: {
//     "/api/": {
//       // target: "https://devtwit8.ru/api/v1/",
//       // target: "https://devtwit8.ru/api/v1/page/?path=/",
//       // pathRewrite: { "^/api/": "/" },
//       // changeOrigin: true,
//       target: "https://devtwit8.ru",
//       pathRewrite: { "^/api/": "/api/v1/" },
//       changeOrigin: true,
//     },
//   },
// };
// ("https://devtwit8.ru/api/v1/page/?path=/");
// https://devtwit8.ru/api/v1/page/?path=/article-1
