<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="centered-toolbar">
        <q-tabs inline-label>
          <span class="what_is">Что есть<strong> :</strong></span>
          <a
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          >
            <span>Сессии</span>
            <div class="animate__liquid"></div>
          </a>
          <a
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          >
            <span>Статьи</span>
            <div class="animate__liquid"></div>
          </a>
          <a
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          >
            <span>Кто я<strong>?</strong></span>
            <div class="animate__liquid"></div>
          </a>
          <a
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          >
            <span>Курс</span>
            <div class="animate__liquid"></div>
          </a>
          <a
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          >
            <span>Книги</span>
            <div class="animate__liquid"></div>
          </a>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import "animate.css";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>

<style scoped>
.centered-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

. {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  /* background: #0c0c0c; */
  background: #fff;
}
.what_is {
  font-weight: 150;
  padding: 10px 50px 10px 10px;
  color: black;
  text-transform: uppercase;
}
.what_is strong {
  font-weight: bold;
  font-size: 1.3em;
}

a {
  position: relative;
  margin: 10px;
  /* padding: 30px; */
  padding: 20px;
  text-align: center;
  display: block;
  /* font-weight: 700; */
  font-weight: 250;
  text-decoration: none;
  text-transform: uppercase;
  /* width: 250px; */
  width: 220px;
  overflow: hidden;
  border-radius: 40px;
}

a span {
  position: relative;
  /* color: #fff; */
  color: black;
  /* font-size: 27px; */
  font-size: 14px;
  /* font-family: Arial, Helvetica, sans-serif; */
  /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
  /* letter-spacing: 8px; */
  letter-spacing: 4px;
  z-index: 1;
}
a .animate__liquid {
  position: absolute;
  /* top: -80px; */
  top: -90px;
  left: 0;
  /* width: 250px; */
  width: 240px;
  height: 230px;
  /* background: #4973ff; */
  background: #eee2d4;
  /* background: #fff; */
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}
a .animate__liquid::after,
a .animate__liquid::before {
  content: "";
  /* width: 170%;
  height: 250%; */
  width: 210%;
  height: 245%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  /* background: #000; */
  background: #fff;
}
a .animate__liquid::before {
  border-radius: 45%;
  /* background: rgba(20, 20, 20, 1); */
  /* background: rgba(255, 255, 255, 1); */
  background: rgba(238, 236, 247, 1);
  /* background: #eeecf7; */
  /* background: #fff; */
  /* animation: animate 5s linear infinite; */
  animation: animate 6s linear infinite;
}
a .animate__liquid::after {
  border-radius: 40%;
  background: rgba(20, 20, 20, 0.1);
  animation: animate 10s linear infinite;
  /* animation-timing-function: linear;
  animation-iteration-count: infinite;
  --animate-duration: 10s; */
}
a:hover .animate__liquid {
  top: -139px;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
