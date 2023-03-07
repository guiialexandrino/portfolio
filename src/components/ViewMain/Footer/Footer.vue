<template>
  <footer>
    <div class="footer-content">
      <img src="../../../assets/images/logo-header.png" />
      <span>
        Esse portfólio foi desenvolvido inteiramente por Guilherme Alexandrino,
        utilizando:
      </span>
      <br />
      <div class="stack">
        <div
          v-for="(icon, index) in icons"
          :key="index"
          :style="`background-image: url(${getImage(icon)})`"
        ></div>
      </div>
      <span>Última atualização: 07/03/2023.</span>
    </div>
  </footer>
</template>

<script setup>
const icons = ['vuejs', 'language-javascript', 'html', 'css'];
function getImage(file) {
  return new URL(`../../../assets/icons/${file}.svg`, import.meta.url);
}
</script>

<style lang="less" src="./Footer.less" />
