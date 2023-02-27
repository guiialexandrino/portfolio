<template>
  <div>
    <div class="title">
      <h2>contato_</h2>
    </div>
    <div class="contact-content">
      <div>
        <p>Você pode entrar em contato comigo pelo email:</p>
        <h2>guilhermealexandrino.dev@gmail.com</h2>
        <br />
        <p>Ou pode me encontrar em:</p>
        <div class="socialMedia">
          <div
            v-for="(item, index) in socialMedia"
            :key="index"
            :style="`background-image: url('${getImages(item.img)}')`"
            @click="openLink(item.href)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const socialMedia = [
  {
    name: 'Linkedin',
    img: 'linkedin.svg',
    href: 'https://www.linkedin.com/in/guilherme-alexandrino-149119247',
  },
  {
    name: 'Github',
    img: 'github.svg',
    href: 'https://github.com/guiialexandrino',
  },
  {
    name: 'Instagram',
    img: 'instagram.svg',
    href: 'https://www.instagram.com/guii.alexandrino',
  },
];

function getImages(image) {
  return new URL(`../../assets/icons/${image}`, import.meta.url);
}

function openLink(href) {
  window.open(href, '_blank');
}
</script>

<style scoped lang="less" src="./Contacts.less"></style>
