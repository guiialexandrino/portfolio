<template>
  <div>
    <h1>{{ project.project }}</h1>
    {{ project }}
  </div>
</template>

<script setup>
import projects from './Projects.json';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated } from 'vue';

const route = useRoute();

const project = projects.find((item) => item.project === route.params.name);
</script>

<style lang="less" src="./ProjectTemplate.less" />
