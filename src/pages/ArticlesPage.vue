<template>
  <q-layout>
    <MainNavigation />
    <q-page-container> Articles </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
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
