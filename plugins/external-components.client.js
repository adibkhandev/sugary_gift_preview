import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueBottomSheet', VueBottomSheet);
  nuxtApp.vueApp.component('Carousel', Carousel);
  nuxtApp.vueApp.component('Slide', Slide);
  nuxtApp.vueApp.component('Pagination', Pagination);
});