<template>
  <MainNavigation />
  <q-item-label> AAAAAAAAAAAA </q-item-label>
  <MainFooter />
</template>

<script>
import { defineComponent } from "vue";

import MainNavigation from "components/home/MainNavigation.vue";
import MainFooter from "components/home/MainFooter.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    MainNavigation,
    MainFooter,
  },

  setup() {},
});
</script>
