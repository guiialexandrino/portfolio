<template>
  <div class="project-content">
    <div class="project-info">
      <div class="info">
        <h1>info_</h1>
        <p id="description" v-html="project.fullDesc" />
        <strong>Preview:</strong>
        <span v-if="project.preview.link">
          <a :href="project.preview.link" target="_blank">
            {{ project.preview.link }}
          </a>
        </span>
        <span v-else>{{ project.preview.notAvailable }}</span>
        <br />

        <strong>Github:</strong>
        <span v-if="project.github.link">
          <a :href="project.github.link" target="_blank">
            {{ project.github.link }}
          </a>
        </span>
        <span v-else>{{ project.github.notAvailable }}</span>
        <br />

        <strong>Stack utilizada:</strong>
        <span v-for="(stack, index) in project.stack" :key="index">
          {{ stack }}
          <span v-if="index + 1 !== project.stack.length"> + </span>
        </span>
        <br />
      </div>
    </div>
    <div class="project-photos">
      <h1>fotos_</h1>
      <div
        class="show-photo"
        v-for="(photo, index) in project.images"
        :key="index"
      >
        <img :src="getImage(photo.src)" />
        <br />
        <div v-if="photo.desc" class="img-desc">
          <ph-chat-centered :size="24" />
          <i v-html="photo.desc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from './Projects.json';
import { useRoute } from 'vue-router';

const route = useRoute();

const project = projects.find((item) => item.project === route.params.name);

function getImage(img) {
  return new URL(`../../assets/images/projects/${img}`, import.meta.url);
}
</script>

<style scoped lang="less" src="./ProjectTemplate.less" />
