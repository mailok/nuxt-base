import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  alias: {
    "@base": resolve("./"),
  },
  tailwindcss: {
    exposeConfig: true,
  },
  css: ["@base/assets/css/tailwind.css"],
});
