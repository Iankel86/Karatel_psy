<template>
  <footer class="footer-menu">
    <q-tabs inline-label>
      <q-tab name="consultation" label="Сессии" />
      <q-tab name="articles" label="Статьи" />
      <q-tab name="about" label="Кто я?" />
      <q-tab name="course" label="Курс" />
      <q-tab name="books" label="Книги" />
    </q-tabs>

    <div class="footer-information">
      <p class="year">© 2024</p>

      <q-tabs class="field-footer-icons" inline-label>
        <a
          href="https://www.instagram.com/shadrina_psy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon class="footer-icons" :name="fabInstagram" />
        </a>

        <a
          href="https://telegram.me/lena2065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon class="footer-icons" name="fab fa-telegram" />
        </a>

        <a
          href="mailto:jesss86@mail.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon class="footer-icons" name="fas fa-envelope" />
        </a>

        <a
          href="https://www.youtube.com/@shadrinapsy/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon class="footer-icons" name="fab fa-youtube" />
        </a>

        <a
          href="https://vk.com/behaviour4535"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon class="footer-icons" name="fab fa-vk" />
        </a>

        <a
          href="https://vk.com/behaviour4535"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon class="footer-icons" :name="fabVk" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100086521359636"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon class="footer-icons" name="fab fa-facebook" />
        </a>
      </q-tabs>

      <div>
        <a
          href="https://www.linkedin.com/in/ian-s-387ba4204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Автор
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { fabVk, fabInstagram } from "@quasar/extras/fontawesome-v6";

export default {
  created() {
    this.fabVk = fabVk;
    this.fabInstagram = fabInstagram;
  },
};
</script>

<style scoped>
.footer-information {
  display: flex;
  /* justify-content: space-around; */
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  align-items: center;
}

.year {
  margin: 0;
}

.footer-menu {
  color: black;
}

.field-footer-icons {
  height: 45px;
  min-width: 20%;
}

/* .q-tabs.q-tabs__content {
  justify-content: space-between;
  padding: 0 10px;
} */

.footer-icons {
  color: #333333;
  transition: transform 0.3s ease-in-out; /* Плавное изменение размера иконки */
  font-size: 2em; /* Увеличиваем размер иконки в 2 раза */
  padding: 0 10px;
}

.footer-icons:hover {
  transform: scale(1.3); /* Увеличиваем иконку на 30% при наведении */
}
</style>
