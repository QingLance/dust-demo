<template>
  <div>
    app1
    <input /> <button @click="onClick">click me</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      window.location.hash = "#/app1/test";
    },
  },
};
</script>