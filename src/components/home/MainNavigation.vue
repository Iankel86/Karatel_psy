<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="centered-toolbar">
        <q-tabs inline-label>
          <div class="header_logo">
            <a>
              <img
                class="logo_vector"
                src="../../assets/png/logo_menu-transformed.png"
                alt="logo_vector"
                width="100"
                height="100"
              />
            </a>
          </div>
          <span class="what_is">Что есть<strong> :</strong></span>
          <a rel="stylesheet" href="#/sessions">
            <span>Сессии</span>
            <div class="animate__liquid"></div>
          </a>
          <a rel="stylesheet" href="#/articles">
            <span>Статьи</span>
            <div class="animate__liquid"></div>
          </a>
          <a rel="stylesheet" href="#/hi--my-name-is">
            <span>Кто я<strong>?</strong></span>
            <div class="animate__liquid"></div>
          </a>
          <a rel="stylesheet" href="#/course">
            <span>Курс</span>
            <div class="animate__liquid"></div>
          </a>
          <a rel="stylesheet" href="#/books">
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

<style lang="scss" scoped>
// @import "../../css/app.scss";
.centered-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
  padding: 20px;
  text-align: center;
  display: block;
  font-weight: 250;
  text-decoration: none;
  text-transform: uppercase;
  width: 220px;
  overflow: hidden;
  border-radius: 40px;
}

a span {
  position: relative;
  color: black;
  font-size: 14px;
  letter-spacing: 4px;
  z-index: 1;
}

// ЗАМЕНИЛ простой css на scss
// a .animate__liquid {
//   position: absolute;
//   top: -90px;
//   left: 0;
//   width: 240px;
//   height: 230px;
//   background: #eee2d4;
//   box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
//   transition: 0.5s;
// }
// a .animate__liquid::after,
// a .animate__liquid::before {
//   content: "";
//   width: 210%;
//   height: 245%;
//   position: absolute;
//   top: 0;
//   left: 50%;
//   transform: translate(-50%, -75%);
// }
// a .animate__liquid::before {
//   border-radius: 45%;
//   background: rgba(238, 236, 247, 1);
//   animation: animate 6s linear infinite;
// }
// a .animate__liquid::after {
//   border-radius: 40%;
//   background: rgba(20, 20, 20, 0.1);
//   animation: animate 10s linear infinite;
// }
// a:hover .animate__liquid {
//   top: -139px;
// }

// @keyframes animate {
//   0% {
//     transform: translate(-50%, -75%) rotate(0deg);
//   }
//   100% {
//     transform: translate(-50%, -75%) rotate(360deg);
//   }
// }

@import "../../css/buttonAnimation.scss";

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
