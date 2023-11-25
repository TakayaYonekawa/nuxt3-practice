// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
   // 使用するscssファイルを指定
   css: ["@/assets/styles/main.scss"],
   // Viteのビルドの際に、SCSSのパーシャルファイルを読み込むよう指定する
   vite: {
     css: {
       preprocessorOptions: {

       },
     },
   },
})
