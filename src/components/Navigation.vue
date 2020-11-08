<template>
  <nav id="nav">
    <p class="logo">LOL - 峡谷</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="level in levels" :key="level.name" class="links">
        <router-link
          :to="{ name: 'LevelDetails', params: { levelId: level.id } }"
        >
          {{ level.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      levels: store.levels,
    };
  },
};
</script>

<style  scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: wheat;
  border-bottom: 1px solid gray;
  z-index: 1;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
#nav a.vue-school-active-class {
  color: #ab26ab;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
  display: flex;
  align-items: center;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  margin-left: 10px;
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>