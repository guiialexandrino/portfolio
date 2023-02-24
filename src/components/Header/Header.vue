<template>
  <header>
    <div class="nav">
      <div class="logo-header"></div>
      <div>NAV AQUI2</div>
    </div>
  </header>
  <div class="logo-container">
    <div class="logo-info">
      <div class="avatar">
        <img id="avatar-border" src="../../assets/images/avatar.png" />
      </div>
      <div class="color-logo"></div>
      <div class="background-logo"></div>
      <div class="span-frontend">
        <h1>FRONTEND</h1>
      </div>
      <div class="span-developer">
        <h1>DEVELOPER</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const header = ref(null);

onMounted(() => {});
</script>

<style scoped lang="less" src="./Header.less" />
