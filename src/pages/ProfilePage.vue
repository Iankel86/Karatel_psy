<template>
  <q-layout>
    <MainNavigation />
    <q-page-container>
      Меня зовут Елена Шадрина. Помогать людям это моя профессия, хоть я и
      любила это делать с детства, но когда получила диплом, помощь стала
      намного эффективнее и менее эмоционально затратная для меня. Ведь если
      психолог не может помочь себе или организовать такую помощь, то, у него не
      будет ресурсов на качественную помощь другим. Мой жизненный принцип – не
      навреди. Я верю в то, что внутренний мир каждого человека уникален, но
      чаще всего мы живем в двух реальностях одновременно – одна реальность
      вокруг нас, а другая – в голове. Моя задача научить вас как можно изменить
      реальность вокруг или научиться её принимать, изменить отношение к тому,
      что происходит через работу с мышлением, тем самым обрести внутренний
      баланс для того, чтобы начать жить ту жизнь, которую вы хотите. Спасибо,
      что дочитали и добро пожаловать!
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import "animate.css";

import MainNavigation from "components/home/MainNavigation.vue";
import MainFooter from "components/home/MainFooter.vue";

export default defineComponent({
  // name: "MainLayout",

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
