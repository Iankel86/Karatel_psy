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
    path: "/hi--my-name-is",
    component: () => import("pages/ProfilePage.vue"),
    // redirect: "/profile",
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
