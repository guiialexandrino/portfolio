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
        @click="viewProject(project.goTo)"
      >
        <img :src="getImage(project.img)" />
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

const projects = [
  {
    img: 'AgendaThumb.png',
    name: 'Agenda App',
    desc: 'Frontend + Backend para uma agenda de contatos.',
    goTo: 'agenda',
  },
  {
    img: 'PokedexThumb.png',
    name: 'Pokédex',
    desc: 'Pokédex dos 151 pokémons + VsMode - compare os pokémons!',
    goTo: 'pokedex',
  },
  {
    img: 'FceeThumb.png',
    name: 'FCEE',
    desc: 'Frontend para um sistema de solicitações dos funcionários.',
    goTo: 'fcee',
  },
  {
    img: 'PietaTech.png',
    name: 'Pieta.tech',
    desc: 'Frontend para um sistema de venda de painéis de energia solar.',
    goTo: 'pieta',
  },
  {
    img: '8puzzleThumb.png',
    name: '8-Puzzle',
    desc: 'Um estudo sobre IA com o uso de heurísticas.',
    goTo: '8puzzle',
  },
  {
    img: 'PolvoThumb.png',
    name: 'Polvo',
    desc: 'Frontend para um sistema de alunos e professores da ESAG.',
    goTo: 'polvo',
  },
];

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
