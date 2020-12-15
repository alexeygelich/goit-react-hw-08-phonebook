import { lazy } from "react";

export default [
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./pages/ContactsContainer")),
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./pages/RegisterPage")),
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./pages/LoginPage")),
  },
  // {
  //   path: '/tasks',
  //   label: 'Tasks',
  //   exact: true,
  //   component: lazy(() => import('./pages/TaskerPage')),
  // },
];
