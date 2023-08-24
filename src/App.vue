<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
FooterBar
</script>

<template>
  <div class="">
    <NavBar></NavBar>
    <RouterView />
    <FooterBar></FooterBar>
  </div>
</template>

<style lang="scss">
@import './assets/main.scss';
</style>
