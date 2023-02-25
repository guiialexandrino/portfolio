<template>
  <header>
    <div class="nav">
      <div class="logo-header"></div>
      <div class="nav-menu">
        <router-link class="showLinks" to="/projects"> Projetos </router-link>
        <router-link class="showLinks" to="/about">Sobre Mim</router-link>
        <router-link class="showLinks" to="/contact">Contato</router-link>
      </div>
      <span class="showBtnMenu">
        <div ref="menuEffectRef" class="handleMenuEffect"></div>
        <Button
          :circle="true"
          :disabled="menuIsChanging"
          @click="handleMenuSmallDevices"
        >
          <ph-list :size="20" weight="bold" />
        </Button>
      </span>
    </div>
  </header>
  <div class="logo-container">
    <div class="logo-info">
      <div class="avatar">
        <div class="avatar-btn-change">
          <Button
            :disabled="avatarIsChanging"
            :circle="true"
            @click="handleChangeAvatar"
          >
            <ph-arrows-clockwise :size="20" weight="bold" />
          </Button>
        </div>
        <div class="animateFloating">
          <img
            ref="avatarRef"
            class="avatar-img rotation"
            :src="getImage(avatar)"
          />
        </div>
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
import { ref } from 'vue';

const avatar = ref('avatar2.png');
const avatarIsChanging = ref(false);
const avatarRef = ref(null);
const menuEffectRef = ref(null);
const menuIsChanging = ref(false);

function handleChangeAvatar() {
  avatarIsChanging.value = true;
  avatarRef.value.classList.remove('rotation');
  avatarRef.value.classList.add('animateHorizontalRotation');
  setTimeout(() => {
    if (avatar.value.includes('2')) {
      avatar.value = 'avatar.png';
    } else {
      avatar.value = 'avatar2.png';
    }
  }, 300);
  setTimeout(() => {
    avatarRef.value.classList.remove('animateHorizontalRotation');
    avatarIsChanging.value = false;
  }, 1500);
}

function handleMenuSmallDevices() {
  menuIsChanging.value = true;
  menuEffectRef.value.classList.add('animateMenuClick');
  setTimeout(() => {
    menuEffectRef.value.classList.remove('animateMenuClick');
    menuIsChanging.value = false;
  }, 2000);
}

function getImage(img) {
  return new URL(`../../../assets/images/${img}`, import.meta.url);
}
</script>

<style scoped lang="less" src="./Header.less" />
