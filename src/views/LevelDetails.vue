/* 英雄详情页 */
<template>
  <div>
    <div>
      <button @click="handleGoBack">go back</button>
      <el-container>
        <el-header>{{ levelInfo.name }}</el-header>
        <el-main>
          <img
            :src="require(`@/assets/${levelInfo.image}`)"
            :alt="levelInfo.name"
          />
          <p>{{ levelInfo.description }}</p>
        </el-main>
        <el-footer>
          <router-link
            :to="{
              name: 'SecretDetails',
              params: { secret: levelInfo.secret },
            }"
            >彩蛋</router-link
          >
          <router-view></router-view>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    levelId: String,
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
  },

  computed: {
    levelInfo() {
      return store.levels.find((info) => {
        return info.id === this.levelId;
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 500px;
  height: 300px;
}
</style>