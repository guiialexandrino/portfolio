<template>
  <div>
    <h1>{{ route.params.name }}</h1>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
</script>

<style lang="less" src="./ProjectTemplate.less" />
