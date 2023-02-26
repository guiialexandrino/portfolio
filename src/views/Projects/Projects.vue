<template>
  <div>
    <div class="title">
      <h2><span @click="backToProjects">projetos</span> / {{ navLabel }}</h2>
    </div>
    <div v-if="!viewingAProject" class="projects">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project"
        @click="viewProject(project.project)"
      >
        <img :src="getImage(project.thumb)" />
        <h2>{{ project.name }}</h2>
        <span>{{ project.desc }}</span>
      </div>
    </div>
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import projects from './Projects.json';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, computed, onUpdated } from 'vue';

const route = useRoute();
const router = useRouter();
const viewingAProject = ref(false);

onMounted(() => {
  if (route.params.name) viewingAProject.value = true;
});

onUpdated(() => {
  router.beforeResolve((to) => {
    if (to.name === 'Projects') viewingAProject.value = false;
  });
});

const navLabel = computed(() => {
  return route.params.name ? `${route.params.name}_` : 'exibindo todos_';
});

function getImage(img) {
  return new URL(`../../assets/images/projects/${img}`, import.meta.url);
}

function viewProject(goTo) {
  router.push(`/projects/${goTo}`);
  viewingAProject.value = true;
}

function backToProjects() {
  router.push({ name: 'Projects' });
}
</script>

<style scoped lang="less" src="./Projects.less" />
