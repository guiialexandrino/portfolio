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
          :outlined="true"
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

  <!-- SmallDevices Menu  -->
  <div v-if="menuAppears" class="menuSmallDevices" ref="menu">
    <div class="optMenu">
      <div class="opt-body">
        <div class="opt-body-content">
          <Button
            class="closeBtn"
            :circle="true"
            :outlined="true"
            @click="closeMenuSmallDevices"
          >
            <ph-x :size="20" weight="bold" />
          </Button>
          <img src="../../../assets/images/logo-header.png" />
          <a @click="handleChangeRouteSmallDevices('Projects')">Projetos</a>
          <a @click="handleChangeRouteSmallDevices('About')">Sobre Mim</a>
          <a @click="handleChangeRouteSmallDevices('Contact')">Contato</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const avatar = ref('avatar2.png');
const avatarIsChanging = ref(false);
const avatarRef = ref(null);

const menu = ref(null);
const menuEffectRef = ref(null);
const menuAppears = ref(false);
const menuIsChanging = ref(false);

function getImage(img) {
  return new URL(`../../../assets/images/${img}`, import.meta.url);
}

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
  menuEffectRef.value.style.display = 'block';
  menuIsChanging.value = true;
  menuEffectRef.value.classList.add('animateMenuClick');
  setTimeout(() => {
    menuEffectRef.value.classList.remove('animateMenuClick');
    menuEffectRef.value.style.display = 'none';
    menuIsChanging.value = false;
    menuAppears.value = true;
  }, 400);
}

function handleChangeRouteSmallDevices(route) {
  router.push({ name: route });
  closeMenuSmallDevices();
}

function closeMenuSmallDevices() {
  menu.value.classList.add('animateFadeOut');
  setTimeout(() => {
    menuAppears.value = false;
    menuEffectRef.value.classList.remove('animateFadeOut');
  }, 700);
}
</script>

<style scoped lang="less" src="./Header.less" />
