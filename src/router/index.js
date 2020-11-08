import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import LevelDetails from "@/views/LevelDetails.vue";
import SecretDetails from "@/views/SecretDetails.vue";

//插件使用
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/levels/:levelId",
    name: "LevelDetails",
    component: LevelDetails,
    props: true, //传递数据
    children: [
      {
        path: ":secret",
        name: "SecretDetails",
        component: SecretDetails,
        props: true,
        meta: {
          details: "这是我们的小秘密",
        },
      },
    ],
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

//路由导航
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  //彩蛋弹窗
  if (to.name === "SecretDetails") {
    alert(to.meta.details);
  }
  next();
});

export default router;
