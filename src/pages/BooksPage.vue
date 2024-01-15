<template>
  <q-layout>
    <MainNavigation />
    <q-page-container> BooksPage </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import "animate.css";

import MainNavigation from "components/home/MainNavigation.vue";
import MainFooter from "components/home/MainFooter.vue";

export default defineComponent({
  components: {
    MainNavigation,
    MainFooter,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped></style>
