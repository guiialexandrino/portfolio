<template>
  <Header />
  <div class="__routeContainer">
    <div class="__routeContent">
      <RouterView v-slot="{ Component }">
        <Transition mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup>
import Header from './components/ViewMain/Header/Header.vue';
</script>

<style lang="less" src="./assets/style/App.less" />
