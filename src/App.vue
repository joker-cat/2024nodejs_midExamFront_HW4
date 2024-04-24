<script>
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent
  }
}
</script>

<template>
  <div class="container p-0 mx-auto">
    <NavbarComponent></NavbarComponent>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1440px;
  height: 100vh;
  max-height: 1080px;
  background: url('/images/bg.jpg');
}
</style>
