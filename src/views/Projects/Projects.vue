<template>
  <div>
    <div class="title">
      <h2>projetos / exibindo todos_</h2>
    </div>
    <div class="projects">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <img :src="getImage(project.img)" />
        <h2>{{ project.name }}</h2>
        <span>{{ project.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
function getImage(img) {
  return new URL(`../../assets/images/projects/${img}`, import.meta.url);
}

const projects = [
  {
    img: 'AgendaThumb.png',
    name: 'Agenda App',
    desc: 'Frontend + Backend para uma agenda de contatos.',
  },
  {
    img: 'PokedexThumb.png',
    name: 'Pokédex',
    desc: 'Pokédex dos 151 pokémons + VsMode - compare os pokémons!',
  },
  {
    img: 'FceeThumb.png',
    name: 'FCEE',
    desc: 'Frontend para um sistema de solicitações dos funcionários.',
  },
  {
    img: 'PietaTech.png',
    name: 'Pieta.tech',
    desc: 'Frontend para um sistema de venda de painéis de energia solar.',
  },
  {
    img: '8puzzleThumb.png',
    name: '8-Puzzle',
    desc: 'Um estudo sobre IA com o uso de heurísticas.',
  },
  {
    img: 'PolvoThumb.png',
    name: 'Polvo',
    desc: 'Frontend para um sistema de alunos e professores da ESAG.',
  },
];
</script>

<style scoped lang="less" src="./Projects.less" />
