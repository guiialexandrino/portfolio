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
      <Transition mode="out-in">
        <div v-if="showMessage" ref="hello" data-after="|" class="span-hello">
          <div>
            <ph-messenger-logo :size="14" weight="bold" /> Guilherme
            {{ isTyping }}:
          </div>
          {{ message }}
          <div class="btnOk">
            <Button
              :disabled="isTyping !== 'enviou'"
              @click="showMessage = false"
            >
              Ok, Entendi!
            </Button>
          </div>
        </div>
      </Transition>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { animation } from '../../../utils/Utils';

const router = useRouter();

const avatar = ref('avatar2.png');
const avatarIsChanging = ref(false);
const avatarRef = ref(null);

const menu = ref(null);
const menuEffectRef = ref(null);
const menuAppears = ref(false);
const menuIsChanging = ref(false);

const hello = ref(null);
const message = ref('');
const isTyping = ref('Está digitando');
const messageToShow =
  'Olá! Aqui você vai encontrar alguns projetos que realizei e conhecer um pouco sobre minha trajetória como desenvolvedor! :)';
const showMessage = ref(false);

onMounted(() => {
  setTimeout(() => {
    showMessage.value = true;
    const text = messageToShow.split('');
    text.forEach((letter, i) => {
      setTimeout(() => {
        message.value += letter;
        if (i === text.length - 1) {
          isTyping.value = 'enviou';
          hello.value.setAttribute('data-after', '');
        }
      }, 125 * i);
    });
  }, 2000);
});

function getImage(img) {
  return new URL(`../../../assets/images/${img}`, import.meta.url);
}

function handleChangeAvatar() {
  avatarIsChanging.value = true;
  avatarRef.value.classList.remove('rotation');
  setTimeout(() => {
    if (avatar.value.includes('2')) {
      avatar.value = 'avatar.png';
    } else {
      avatar.value = 'avatar2.png';
    }
  }, 300);

  animation(avatarRef.value, 'animateHorizontalRotation', 1500, () => {
    avatarIsChanging.value = false;
  });
}

function handleMenuSmallDevices() {
  menuEffectRef.value.style.display = 'block';
  menuIsChanging.value = true;

  animation(menuEffectRef.value, 'animateMenuClick', 400, () => {
    menuEffectRef.value.style.display = 'none';
    menuIsChanging.value = false;
    menuAppears.value = true;
  });
}

function handleChangeRouteSmallDevices(route) {
  router.push({ name: route });
  closeMenuSmallDevices();
}

function closeMenuSmallDevices() {
  animation(menu.value, 'animateFadeOut', 700, () => {
    menuAppears.value = false;
  });
}
</script>

<style scoped lang="less" src="./Header.less" />
