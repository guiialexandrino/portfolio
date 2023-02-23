<template>
  <Header />
  <div class="__routeContainer">
    <div class="__routeContent">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header/Header.vue';
</script>

<style lang="less" src="./assets/style/App.less" />
