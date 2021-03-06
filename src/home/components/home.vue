<template>
  <div class="layout">
    <div class="nav">
      <ul>
        <li>
          <a @click="jumpApp1">app1</a>
        </li>
        <li>
          <a @click="jumpApp2">app2</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div id="other-app"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jumpApp1() {
      window.location.hash = "#/app1";
    },
    jumpApp2() {
      window.location.hash = "#/app2";
    },
  },
};
</script>
<style scoped>
.layout {
  height: 100%;
}

.nav {
  float: left;
  width: 200px;
  height: 100%;
}

.content {
  width: 100%;
  height: 100%;
  background: rgb(153, 150, 150);
  margin-left: 200px;
}
</style>