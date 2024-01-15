const routes = [
  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
  },
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("pages/IndexPage.vue"),
  //     },
  //   ],
  // },
  {
    path: "/profile",
    component: () => import("pages/ProfilePage.vue"),
    // redirect: "/profile", MyNames
  },
  {
    path: "/sessions",
    component: () => import("pages/SessionsPage.vue"),
  },
  {
    path: "/articles",
    component: () => import("pages/ArticlesPage.vue"),
  },
  {
    path: "/hi--my-name-is",
    component: () => import("pages/MyName.vue"),
  },
  {
    path: "/course",
    component: () => import("pages/CoursePage.vue"),
  },
  {
    path: "/books",
    component: () => import("pages/BooksPage.vue"),
  },
  // {
  //   path: "/profile",
  //   component: () => import("pages/ProfilePage.vue"),
  // },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
