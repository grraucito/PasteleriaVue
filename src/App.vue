<template>
  <Menu />
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<style>
body {
  background: black;
  color: #fff;
}
</style>
<script>
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>